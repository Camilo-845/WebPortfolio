#!/bin/bash

# Obtener la ruta del directorio del script
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Ejecutar ObsidianSync/sync.sh
"$SCRIPT_DIR/ObsidianSync/sync.sh"

# Ejecutar ImagesSync/sync.py con Python
python3 "$SCRIPT_DIR/ImagesSync/sync.py"
