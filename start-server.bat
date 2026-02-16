@echo off
REM Jednoduchý skript pro spuštění lokálního serveru pro testování GDP na Windows
REM Usage: start-server.bat [port]

SET PORT=%1
IF "%PORT%"=="" SET PORT=8000

echo 🚀 Spouštím HTTP server na portu %PORT%...
echo.
echo 📱 Pro přístup z telefonu:
echo    1. Ujistěte se, že telefon a počítač jsou ve stejné Wi-Fi
echo    2. Zjistěte IP adresu vašeho počítače:
echo.

REM Zobrazení IP adresy
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /c:"IPv4"') do (
    set IP=%%a
    goto :found
)
:found
echo    ✅ Vaše IP adresa:%IP%
echo    📱 Otevřete na telefonu: http://%IP::= %:%PORT%
echo.
echo    🌐 Lokálně: http://localhost:%PORT%
echo.
echo ⏹️  Pro zastavení: Ctrl+C
echo.

REM Kontrola Python instalace a spuštění serveru
where python >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    python -m http.server %PORT%
) else (
    echo ❌ Python není nainstalován!
    echo    Nainstalujte Python z https://python.org a zkuste znovu.
    pause
    exit /b 1
)
