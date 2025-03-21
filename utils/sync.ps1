# Obtener la ruta del directorio del script
$SCRIPT_DIR = Split-Path -Parent $MyInvocation.MyCommand.Definition

# Ejecutar ObsidianSync/sync.ps1
& "$SCRIPT_DIR\ObsidianSync\sync.ps1"

# Ejecutar ImagesSync/sync.py con Python
python "$SCRIPT_DIR\ImagesSync\sync.py"
