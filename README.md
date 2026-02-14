# WebGPT
vězení pro AI mecheche

## 🎮 Game Development Planner

Interaktivní webová aplikace pro plánování vývoje her v Blender 5.x & Unity 6.x.

### ✨ Funkce
- 📋 Správa úkolů pro dva vývojáře (Jack & Joker)
- 🎯 Organizace podle aspektů (Blender, Unity, Design, Workflow)
- 💾 Automatické ukládání do LocalStorage
- 📱 Plně responzivní design pro mobily
- 🇨🇿 Česká lokalizace

## 📱 Testování na Android Galaxy S23

### 📚 Dokumentace

| Dokument | Popis |
|----------|-------|
| [**DEPLOYMENT_GUIDE_CZ.md**](DEPLOYMENT_GUIDE_CZ.md) | 🎯 Přehled všech metod s flowcharty |
| [**TESTOVANI_NA_ANDROID.md**](TESTOVANI_NA_ANDROID.md) | 📖 Kompletní průvodce testování |
| [**QUICK_REFERENCE_CZ.md**](QUICK_REFERENCE_CZ.md) | ⚡ Rychlá reference |
| [**mobile-test.html**](mobile-test.html) | 🧪 Interaktivní test stránka |

### 🚀 Rychlý start

#### Metoda 1: GitHub Pages (Doporučeno)
```
1. Settings → Pages → Source: main branch
2. Čekejte 2 minuty
3. Otevřete URL na Galaxy S23
```

#### Metoda 2: Lokální server
```bash
# Linux/Mac
./start-server.sh

# Windows
start-server.bat

# Na telefonu: http://IP_POCITACE:8000
```

#### Metoda 3: Termux (přímo v telefonu)
```bash
pkg install git python
git clone https://github.com/jackyyjackyy/WebGPT.git
cd WebGPT
python -m http.server 8000
# V Chrome: http://localhost:8000
```

## 🛠️ Technologie

- Pure HTML5 + CSS3 + Vanilla JavaScript
- Žádné závislosti nebo build process
- LocalStorage pro persistenci dat
- Responzivní design s CSS Grid/Flexbox

## 📂 Struktura

```
WebGPT/
├── index.html              # Hlavní aplikace
├── script.js               # Aplikační logika
├── styles.css              # Styly
├── mobile-test.html        # Mobilní testy
├── start-server.sh         # Server (Linux/Mac)
├── start-server.bat        # Server (Windows)
└── .github/workflows/      # Auto-deploy
```

## 🔧 Development

```bash
# Spustit lokální server
python3 -m http.server 8000

# Nebo použít helper skripty
./start-server.sh [port]
```

## 🚀 Deployment

### Automatické (GitHub Actions)
Push na `main` větev automaticky deployuje na GitHub Pages.

### Manuální
1. Repository Settings
2. Pages → Source: main branch
3. Save

## 📝 Licence

Open source projekt pro vývoj her.
