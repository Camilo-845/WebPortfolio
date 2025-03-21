# Habilitar salida en caso de errores
$ErrorActionPreference = "Stop"

# Obtener la ruta del script actual
$SCRIPT_DIR = Split-Path -Parent $MyInvocation.MyCommand.Definition

# Definir modo de sincronización (por defecto: push)
$MODE = $args[0]
if (-not $MODE) { $MODE = "push" }

# Validar el modo ingresado
if ($MODE -ne "push" -and $MODE -ne "pull") {
    Write-Host "❌ Error: Modo no válido. Usa 'push' o 'pull'." -ForegroundColor Red
    exit 1
}

Write-Host "🔄 Ejecutando sincronización en modo: $MODE" -ForegroundColor Cyan

# Ejecutar ObsidianSync/sync.ps1 con el modo seleccionado
& "$SCRIPT_DIR\ObsidianSync\sync.ps1" $MODE

# Ejecutar ImagesSync/sync.py con el modo seleccionado
python "$SCRIPT_DIR\ImagesSync\sync.py" $MODE

Write-Host "✅ Sincronización completada en modo: $MODE" -ForegroundColor Green
