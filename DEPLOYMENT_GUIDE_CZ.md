# 🎯 GDP na Android - Přehled Řešení

## 📊 Výběr Metody

```
┌─────────────────────────────────────────────────────────────┐
│                  Potřebuji testovat GDP na                  │
│                    Android Galaxy S23                        │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
              ┌───────────────┴───────────────┐
              │     Jaký je váš případ?       │
              └───────────────┬───────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
        ▼                     ▼                     ▼
   ┌─────────┐          ┌─────────┐          ┌─────────┐
   │ Chci    │          │ Vyvíjím │          │ Chci to │
   │ sdílet  │          │ aktivně │          │ offline │
   │ s týmem │          │ kód     │          │ na tel. │
   └─────────┘          └─────────┘          └─────────┘
        │                     │                     │
        ▼                     ▼                     ▼
   ┌─────────┐          ┌─────────┐          ┌─────────┐
   │ GitHub  │          │ Python  │          │ Termux  │
   │ Pages   │          │ Server  │          │ App     │
   └─────────┘          └─────────┘          └─────────┘
        │                     │                     │
        ▼                     ▼                     ▼
    https://           http://IP:8000        localhost:8000
    user.github.io     (lokální síť)        (přímo v tel.)
```

## 🚀 Rychlé Start Příkazy

### Metoda 1: GitHub Pages ⭐ DOPORUČENO
```bash
# V GitHub repozitáři:
Settings → Pages → Source: main branch → Save

# Počkejte 2 minuty, pak:
# https://jackyyjackyy.github.io/WebGPT/
```

### Metoda 2: Lokální Development
```bash
# Linux/Mac:
./start-server.sh

# Windows:
start-server.bat

# Na Galaxy S23:
http://192.168.X.X:8000  # Vaše lokální IP
```

### Metoda 3: Přímo v Telefonu
```bash
# V Termux aplikaci:
pkg install git python -y
git clone https://github.com/jackyyjackyy/WebGPT.git
cd WebGPT
python -m http.server 8000

# V Chrome:
http://localhost:8000
```

## 📱 Test Flow

```
1. Otevřít mobile-test.html
   │
   ├─► Test viewportu ✓
   ├─► Test touch ✓
   ├─► Test LocalStorage ✓
   ├─► Test klávesnice ✓
   └─► Test scrollování ✓
   
2. Otevřít index.html (GDP)
   │
   ├─► Přepnout vývojáře ✓
   ├─► Vybrat aspekt ✓
   ├─► Přidat úkol ✓
   ├─► Označit checkbox ✓
   ├─► Smazat úkol ✓
   └─► Zavřít a otevřít (persistence) ✓
```

## 📂 Struktura Souborů

```
WebGPT/
├── 📄 index.html              # Hlavní GDP aplikace
├── 📄 script.js               # Logika aplikace
├── 📄 styles.css              # Styly
├── 📄 mobile-test.html        # Mobilní test stránka
├── 📄 TESTOVANI_NA_ANDROID.md # Kompletní průvodce (ČJ)
├── 📄 QUICK_REFERENCE_CZ.md   # Rychlá reference
├── 📄 README.md               # Tento soubor
├── 🔧 start-server.sh         # Server skript (Linux/Mac)
├── 🔧 start-server.bat        # Server skript (Windows)
└── .github/
    └── workflows/
        └── deploy.yml         # Auto-deploy na GitHub Pages
```

## 🎓 Použití

### Prvně:
1. Přečti si **QUICK_REFERENCE_CZ.md** (1 minuta)
2. Vyber metodu podle své situace
3. Otevři **mobile-test.html** pro ověření funkčnosti

### Pro detaily:
- **TESTOVANI_NA_ANDROID.md** - kompletní průvodce s řešením problémů

### Pro automatizaci:
- Push na `main` větev → auto-deploy na GitHub Pages
- Workflow: `.github/workflows/deploy.yml`

## ⚙️ Konfigurace

### GitHub Pages Setup (jednorázově):
1. Repository Settings
2. Pages → Source: main branch
3. Save
4. Čekejte ~2 minuty
5. Získáte URL: `https://USERNAME.github.io/REPO/`

### Lokální Server (každý dev session):
```bash
./start-server.sh [port]    # Default: 8000
```

## 🔍 Debugging

### Aplikace se nenačte?
```bash
# 1. Ověř server běží:
ps aux | grep python

# 2. Test localhost:
curl http://localhost:8000

# 3. Zkontroluj síť:
ping 192.168.X.X

# 4. Firewall:
# Windows: Vypni firewall dočasně
# Linux: sudo ufw allow 8000
```

### LocalStorage problém?
```javascript
// V Chrome DevTools Console:
localStorage.clear()
location.reload()
```

## 📚 Dokumenty

| Dokument | Účel | Cílová skupina |
|----------|------|----------------|
| TESTOVANI_NA_ANDROID.md | Kompletní průvodce | Všichni uživatelé |
| QUICK_REFERENCE_CZ.md | Rychlá reference | Zkušení uživatelé |
| mobile-test.html | Interaktivní test | Testeři |
| README.md | Přehled projektu | Vývojáři |

## 🎯 Co bylo vytvořeno?

✅ Kompletní průvodce testování na Android (česky)  
✅ 4 různé metody testování (GitHub Pages, Python server, Termux, Cloud)  
✅ Automatizované skripty pro server (Linux/Mac/Windows)  
✅ GitHub Actions workflow pro auto-deploy  
✅ Interaktivní mobilní testovací stránka  
✅ Rychlá referenční karta  
✅ Testovací checklist  
✅ Troubleshooting guide  

## 💡 Tipy

- Pro běžné použití → **GitHub Pages**
- Pro development → **Python server**
- Pro offline → **Termux**
- Pro sdílení → **GitHub Pages** nebo **Netlify**

## 📞 Další nápověda

Pokud potřebujete pomoc:
1. Zkontrolujte **TESTOVANI_NA_ANDROID.md** → sekce "Řešení problémů"
2. Otevřete Chrome DevTools (F12) → Console tab
3. Vytvořte GitHub Issue s popisem problému

---

**Vytvořeno:** 2026-02-14  
**Pro:** Android Galaxy S23  
**Jazyk:** Čeština  
**Status:** ✅ Production Ready
