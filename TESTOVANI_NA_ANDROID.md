# 📱 Průvodce testováním GDP na Android Galaxy S23

Tento průvodce popisuje různé způsoby, jak spustit a testovat Game Development Planner (GDP) na telefonu Android Galaxy S23.

## 🌐 Metoda 1: GitHub Pages (Nejjednodušší - Doporučeno)

Toto je nejjednodušší způsob - aplikace bude dostupná online přes internet.

### Kroky:
1. Otevřete GitHub repozitář: https://github.com/jackyyjackyy/WebGPT
2. Klikněte na **Settings** (Nastavení)
3. V levém menu vyberte **Pages**
4. V sekci "Source" vyberte **main** branch
5. Klikněte na **Save**
6. Počkejte 1-2 minuty na deployment
7. GitHub vygeneruje URL (např. `https://jackyyjackyy.github.io/WebGPT/`)
8. Na Galaxy S23 otevřete Chrome nebo Samsung Internet
9. Zadejte vygenerovanou URL
10. GDP aplikace běží! 🎉

**Výhody:**
- ✅ Nejjednodušší nastavení
- ✅ Přístupné odkudkoliv
- ✅ Automatické HTTPS
- ✅ Žádné instalace na telefonu
- ✅ Sdílitelné s ostatními

**Nevýhody:**
- ❌ Vyžaduje internetové připojení
- ❌ Změny vyžadují git push + čekání na deployment

---

## 🔧 Metoda 2: Python HTTP Server (Pro rychlé lokální testování)

Tato metoda je ideální pro rychlé testování změn bez nahrávání na GitHub.

### Předpoklady:
- Počítač a telefon ve stejné Wi-Fi síti

### Kroky na počítači:

```bash
# Přejděte do složky s repozitářem
cd /cesta/k/WebGPT

# Spusťte Python HTTP server
python3 -m http.server 8000
```

Nebo s Python 2:
```bash
python -m SimpleHTTPServer 8000
```

### Zjistěte IP adresu vašeho počítače:

**Windows:**
```cmd
ipconfig
```
Hledejte "IPv4 Address" (např. `192.168.1.100`)

**macOS/Linux:**
```bash
ifconfig
# nebo
ip addr show
```
Hledejte IP začínající na `192.168.` nebo `10.`

### Přístup z Galaxy S23:
1. Otevřete Chrome na telefonu
2. Zadejte: `http://IP_VASEHO_POCITACE:8000`
   - Příklad: `http://192.168.1.100:8000`
3. GDP aplikace běží lokálně! 🎉

**Výhody:**
- ✅ Okamžité testování změn (F5 refresh)
- ✅ Funguje offline (pouze Wi-Fi potřeba)
- ✅ Rychlý development workflow

**Nevýhody:**
- ❌ Vyžaduje běžící počítač
- ❌ Telefon a počítač musí být ve stejné síti

---

## 📦 Metoda 3: Termux (Běh přímo na telefonu)

Spusťte web server přímo na Galaxy S23 bez počítače!

### Instalace:
1. Nainstalujte **Termux** z F-Droid nebo Google Play
   - F-Droid: https://f-droid.org/en/packages/com.termux/
   - Play Store: "Termux"

### Nastavení v Termux:

```bash
# Aktualizace balíčků
pkg update && pkg upgrade

# Instalace git a python
pkg install git python

# Klonování repozitáře
cd ~
git clone https://github.com/jackyyjackyy/WebGPT.git
cd WebGPT

# Spuštění serveru
python -m http.server 8000
```

### Přístup k aplikaci:
1. Nechte Termux běžet na pozadí
2. Otevřete Chrome
3. Zadejte: `http://localhost:8000` nebo `http://127.0.0.1:8000`
4. GDP aplikace běží přímo na telefonu! 🎉

### Pro aktualizaci kódu:
```bash
cd ~/WebGPT
git pull origin main
# Server se restartuje automaticky
```

**Výhody:**
- ✅ Žádný počítač není potřeba
- ✅ Funguje úplně offline
- ✅ Plná kontrola nad serverem
- ✅ Můžete editovat soubory přímo na telefonu

**Nevýhody:**
- ❌ Vyžaduje instalaci Termux
- ❌ Základní znalost příkazové řádky

---

## 🌍 Metoda 4: Online IDE Services (Cloud Development)

Použijte cloud služby pro hosting a testování.

### CodeSandbox:
1. Jděte na https://codesandbox.io
2. Importujte GitHub repozitář
3. Automaticky se vytvoří live preview URL
4. Otevřete URL na Galaxy S23

### Netlify Drop:
1. Jděte na https://app.netlify.com/drop
2. Přetáhněte složku s projektem
3. Získáte okamžitou URL
4. Otevřete na Galaxy S23

**Výhody:**
- ✅ Rychlý setup
- ✅ Bezplatný hosting
- ✅ Automatický HTTPS

---

## 📋 Testovací checklist pro Galaxy S23

### 🧪 Před testováním GDP
Nejdříve otevřete [mobile-test.html](mobile-test.html) - interaktivní stránka pro ověření mobilních funkcí:
- Test viewportu a rozlišení
- Test touch ovládání
- Test LocalStorage
- Test virtuální klávesnice
- Test scrollování a orientace

### ✅ Testování GDP aplikace
Po spuštění hlavní aplikace otestujte:

- [ ] ✅ Aplikace se načte a zobrazí správně
- [ ] ✅ Responzivní design funguje na mobilu
- [ ] ✅ Touch ovládání funguje (klikání na tlačítka)
- [ ] ✅ Scrollování je plynulé
- [ ] ✅ Přepínání mezi vývojáři (dev1/dev2) funguje
- [ ] ✅ Výběr aspektů funguje
- [ ] ✅ Přidávání úkolů funguje
- [ ] ✅ Checkbox označování funguje
- [ ] ✅ Mazání úkolů funguje
- [ ] ✅ LocalStorage persistuje data (zavřít a otevřít znovu)
- [ ] ✅ Progress bar se aktualizuje
- [ ] ✅ Všechny kategorie jsou přístupné
- [ ] ✅ Text je čitelný na mobilní obrazovce
- [ ] ✅ Žádné horizontální scrollování
- [ ] ✅ UI prvky nejsou příliš malé na dotyk

---

## 🐛 Řešení problémů

### Aplikace se nenačítá
- Zkontrolujte internetové připojení (pro GitHub Pages)
- Ověřte, že server běží (pro lokální metody)
- Zkuste vymazat cache prohlížeče
- Zkuste jiný prohlížeč (Chrome, Firefox, Samsung Internet)

### LocalStorage nefunguje
- Povolte cookies a storage v nastavení prohlížeče
- Nepoužívejte režim inkognito
- Zkontrolujte, zda máte dostatek místa na telefonu

### Server není přístupný
- Ověřte, že telefon a počítač jsou ve stejné Wi-Fi
- Zkontrolujte firewall na počítači
- Ověřte správnou IP adresu

### Aplikace vypadá špatně na mobilu
- Zkontrolujte viewport meta tag v index.html
- Otestujte Chrome DevTools mobile emulation
- Zkontrolujte CSS media queries

---

## 💡 Tipy pro vývoj

1. **Chrome DevTools Remote Debugging:**
   - Připojte Galaxy S23 přes USB
   - V Chrome na počítači: `chrome://inspect`
   - Můžete debuggovat přímo mobilní verzi!

2. **Rychlé testování:**
   - Použijte metodu 2 (Python server) pro development
   - Push na GitHub Pages pro produkční testování

3. **Responzivní design:**
   - Testujte na různých orientacích (portrait/landscape)
   - Zkontrolujte touch targets (min 48x48px)

4. **Performance:**
   - Otevřete DevTools na mobilu: přidejte `?debug=true` do URL
   - Sledujte Network tab pro načítání

---

## 🎯 Doporučený workflow

**Pro běžné testování:**
→ Použijte **GitHub Pages** (Metoda 1)

**Pro aktivní development:**
→ Použijte **Python HTTP Server** (Metoda 2)

**Pro testování offline:**
→ Použijte **Termux** (Metoda 3)

**Pro sdílení s ostatními:**
→ Použijte **GitHub Pages** nebo **Netlify** (Metoda 1 nebo 4)

---

## 📞 Potřebujete pomoc?

Pokud narazíte na problémy:
1. Zkontrolujte konzoli v Chrome DevTools
2. Ověřte, že všechny soubory jsou přítomné (index.html, script.js, styles.css)
3. Zkuste jinou metodu testování
4. Vytvořte issue na GitHubu s popisem problému

---

**Vytvořeno pro:** Android Galaxy S23  
**Testováno s:** Chrome 120+, Samsung Internet 24+  
**Aktualizováno:** 2026-02-14
