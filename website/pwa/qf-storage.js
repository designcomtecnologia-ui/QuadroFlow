(function(){
  'use strict';
  const DB_NAME='QuadroFlowDB', DB_VERSION=2, STORE='attachments', DATA_STORE='appdata';
  let dbPromise=null;
  function openDB(){
    if(dbPromise) return dbPromise;
    dbPromise=new Promise((resolve,reject)=>{
      const r=indexedDB.open(DB_NAME,DB_VERSION);
      r.onupgradeneeded=()=>{ if(!r.result.objectStoreNames.contains(STORE)) r.result.createObjectStore(STORE); if(!r.result.objectStoreNames.contains(DATA_STORE)) r.result.createObjectStore(DATA_STORE); };
      r.onsuccess=()=>resolve(r.result);
      r.onerror=()=>reject(r.error||new Error('Falha ao abrir armazenamento de anexos'));
    });
    return dbPromise;
  }
  function reqToPromise(req){return new Promise((resolve,reject)=>{req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error)});}
  function dataUrlToBlob(dataUrl){
    const m=String(dataUrl||'').match(/^data:([^;,]+)?(?:;base64)?,(.*)$/s); if(!m) return null;
    const type=m[1]||'application/octet-stream', raw=decodeURIComponent(m[2]||'');
    if(String(dataUrl).includes(';base64,')){
      const bin=atob(raw), u8=new Uint8Array(bin.length); for(let i=0;i<bin.length;i++)u8[i]=bin.charCodeAt(i); return new Blob([u8],{type});
    }
    return new Blob([raw],{type});
  }

  async function getData(){
    const db=await openDB();
    const out={};
    for(const key of ['state','archive','trash']) out[key]=await reqToPromise(db.transaction(DATA_STORE,'readonly').objectStore(DATA_STORE).get(key));
    return out;
  }
  async function saveData(data){
    const db=await openDB(); const tx=db.transaction(DATA_STORE,'readwrite'), store=tx.objectStore(DATA_STORE);
    ['state','archive','trash'].forEach(key=>store.put(data[key]||[],key));
    return new Promise((res,rej)=>{tx.oncomplete=res;tx.onerror=()=>rej(tx.error)});
  }
  async function putFile(file, meta){
    const id=(meta&&meta.id)||('att_'+Date.now().toString(36)+'_'+Math.random().toString(36).slice(2));
    const db=await openDB(); const tx=db.transaction(STORE,'readwrite');
    tx.objectStore(STORE).put(file,id); await new Promise((res,rej)=>{tx.oncomplete=res;tx.onerror=()=>rej(tx.error)});
    const out={id,name:meta?.name||file.name||'Arquivo',type:meta?.type||file.type||'application/octet-stream',size:file.size||0,storage:'idb'}; try{Object.defineProperty(out,'previewUrl',{value:URL.createObjectURL(file),enumerable:false,configurable:true});}catch(_){ } return out;
  }
  async function putDataUrl(data, meta){const blob=dataUrlToBlob(data); if(!blob) return null; return putFile(blob,meta)}
  async function getFile(id){const db=await openDB();return reqToPromise(db.transaction(STORE,'readonly').objectStore(STORE).get(id));}
  async function deleteFile(id){const db=await openDB();const tx=db.transaction(STORE,'readwrite');tx.objectStore(STORE).delete(id);return new Promise((res,rej)=>{tx.oncomplete=res;tx.onerror=()=>rej(tx.error)})}
  async function clearAttachments(){const db=await openDB();const tx=db.transaction(STORE,'readwrite');tx.objectStore(STORE).clear();return new Promise((res,rej)=>{tx.oncomplete=res;tx.onerror=()=>rej(tx.error)})}
  async function objectUrl(att){
    if(!att) return '';
    if(att.data) return String(att.data);
    if(att.storage!=='idb'||!att.id) return '';
    const blob=await getFile(att.id); return blob?URL.createObjectURL(blob):'';
  }
  function eachNote(list,cb){(Array.isArray(list)?list:[]).forEach(c=>{(c.notes||[]).forEach(cb)});}
  async function migrateAttachments(state,archive,trash){
    const all=[]; eachNote(state,n=>all.push(n)); (archive||[]).forEach(n=>all.push(n)); (trash||[]).forEach(n=>all.push(n));
    let changed=false;
    for(const n of all){
      const at=Array.isArray(n.attachments)?n.attachments:[]; if(!at.length) continue;
      const next=[];
      for(const a of at){
        if(a&&a.storage==='idb'&&a.id){next.push(a);continue}
        if(a&&a.data){
          const migrated=await putDataUrl(a.data,{id:a.id,name:a.name||'Arquivo',type:a.type||'application/octet-stream'});
          if(migrated){next.push(migrated);changed=true;continue;}
        }
        if(a) next.push({...a,storage:a.storage||'external'});
      }
      n.attachments=next;
      delete n.images;
    }
    return changed;
  }
  window.QFStorage={openDB,getData,saveData,putFile,putDataUrl,getFile,deleteFile,clearAttachments,objectUrl,migrateAttachments};
})();
