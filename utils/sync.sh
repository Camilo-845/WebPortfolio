#!/bin/bash

# Habilitar manejo de errores
set -euo pipefail

# Obtener la ruta del directorio del script
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Definir modo de sincronización (por defecto: push)
MODE="${1:-push}"

# Validar el modo ingresado
if [[ "$MODE" != "push" && "$MODE" != "pull" ]]; then
    echo "❌ Error: Modo no válido. Usa 'push' o 'pull'."
    exit 1
fi

echo "🔄 Ejecutando sincronización en modo: $MODE"

# Ejecutar ObsidianSync/sync.sh con el modo seleccionado
"$SCRIPT_DIR/ObsidianSync/sync.sh" "$MODE"

# Ejecutar ImagesSync/sync.py con el modo seleccionado
python3 "$SCRIPT_DIR/ImagesSync/sync.py" "$MODE"

echo "✅ Sincronización completada en modo: $MODE"
