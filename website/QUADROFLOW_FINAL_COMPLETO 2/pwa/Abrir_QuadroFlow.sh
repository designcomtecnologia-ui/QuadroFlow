#!/bin/bash
cd "$(dirname "$0")"
xdg-open "QuadroFlow.html" >/dev/null 2>&1 || gio open "QuadroFlow.html"
