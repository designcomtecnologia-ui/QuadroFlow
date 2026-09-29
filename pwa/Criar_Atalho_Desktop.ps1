$target = Join-Path $PSScriptRoot 'QuadroFlow.html'
$desktop = [Environment]::GetFolderPath('Desktop')
$shortcutPath = Join-Path $desktop 'QuadroFlow.lnk'
$w = New-Object -ComObject WScript.Shell
$s = $w.CreateShortcut($shortcutPath)
$s.TargetPath = $target
$s.WorkingDirectory = $PSScriptRoot
$s.IconLocation = Join-Path $PSScriptRoot 'QuadroFlow.ico'
$s.Save()
Write-Host 'Atalho criado na Área de Trabalho.'
