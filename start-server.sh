#!/bin/bash
# Jednoduchý skript pro spuštění lokálního serveru pro testování GDP
# Usage: ./start-server.sh [port]

PORT=${1:-8000}

echo "🚀 Spouštím HTTP server na portu $PORT..."
echo ""
echo "📱 Pro přístup z telefonu:"
echo "   1. Ujistěte se, že telefon a počítač jsou ve stejné Wi-Fi"
echo "   2. Zjistěte IP adresu vašeho počítače:"

# Detekce OS a zobrazení IP
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    echo "      macOS: ipconfig getifaddr en0"
    IP=$(ipconfig getifaddr en0 2>/dev/null || ipconfig getifaddr en1 2>/dev/null || echo "N/A")
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    # Linux
    IP=$(hostname -I | awk '{print $1}')
else
    # Windows (Git Bash)
    IP=$(ipconfig | grep -m 1 "IPv4" | awk '{print $NF}')
fi

if [ "$IP" != "N/A" ] && [ -n "$IP" ]; then
    echo ""
    echo "   ✅ Vaše IP adresa: $IP"
    echo "   📱 Otevřete na telefonu: http://$IP:$PORT"
else
    echo "   ℹ️  Spusťte 'ipconfig' (Windows) nebo 'hostname -I' (Linux/Mac)"
fi

echo ""
echo "   🌐 Lokálně: http://localhost:$PORT"
echo ""
echo "⏹️  Pro zastavení: Ctrl+C"
echo ""

# Spuštění serveru
if command -v python3 &> /dev/null; then
    python3 -m http.server $PORT
elif command -v python &> /dev/null; then
    python -m SimpleHTTPServer $PORT
else
    echo "❌ Python není nainstalován!"
    echo "   Nainstalujte Python a zkuste znovu."
    exit 1
fi
