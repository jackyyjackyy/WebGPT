# 🎯 START HERE - Jak začít testovat GDP na Galaxy S23

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                                                            ┃
┃   👋 Vítejte v GDP Android Testing Guide                  ┃
┃                                                            ┃
┃   Tento soubor vám ukáže, kudy začít!                     ┃
┃                                                            ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

## 🚦 Krok 1: Vyber si svůj scénář

### 🎓 Jsem začátečník, chci to nejjednodušší
→ Přejdi na: **QUICK_REFERENCE_CZ.md**  
→ Použij: **Metoda 1 - GitHub Pages**  
⏱️ Čas: 5 minut

### 👨‍💻 Jsem vývojář, potřebuji testovat často
→ Přečti: **DEPLOYMENT_GUIDE_CZ.md**  
→ Použij: **Metoda 2 - Python Server**  
→ Spusť: `./start-server.sh`  
⏱️ Čas: 30 sekund

### 📱 Chci vše na telefonu, bez počítače
→ Následuj: **TESTOVANI_NA_ANDROID.md → Metoda 3**  
→ Nainstaluj: **Termux** z Play Store  
⏱️ Čas: 10 minut (první instalace)

### 🤔 Nevím, co potřebuji
→ Otevři: **DEPLOYMENT_GUIDE_CZ.md**  
→ Podívej se na flowchart na začátku  
→ Flowchart ti poradí nejlepší metodu

---

## 🗺️ Mapa dokumentace

```
START_HERE.md (tento soubor)
    │
    ├─→ QUICK_REFERENCE_CZ.md
    │   └─→ Rychlé příkazy a reference
    │
    ├─→ DEPLOYMENT_GUIDE_CZ.md
    │   ├─→ Vizuální flowcharty
    │   ├─→ Přehled všech metod
    │   └─→ Rozhodovací pomůcka
    │
    ├─→ TESTOVANI_NA_ANDROID.md
    │   ├─→ Metoda 1: GitHub Pages
    │   ├─→ Metoda 2: Python Server
    │   ├─→ Metoda 3: Termux
    │   ├─→ Metoda 4: Cloud Services
    │   ├─→ Testovací checklist
    │   └─→ Řešení problémů
    │
    └─→ mobile-test.html
        └─→ Interaktivní testy (otevři v telefonu)
```

---

## ⚡ Super Rychlý Start (1 minuta)

### Chci to zkusit HNED!

**Na počítači:**
```bash
cd WebGPT
./start-server.sh
# Zobrazí se IP adresa, např. 192.168.1.100:8000
```

**Na Galaxy S23:**
```
1. Otevři Chrome
2. Zadej: http://192.168.1.100:8000
3. Hotovo! 🎉
```

---

## 📚 Kompletní Dokumentace

| Soubor | Co obsahuje | Pro koho |
|--------|-------------|----------|
| **START_HERE.md** | Tento soubor - průvodce | ✅ Všichni začínají zde |
| **QUICK_REFERENCE_CZ.md** | Rychlé příkazy | ⚡ Zkušení uživatelé |
| **DEPLOYMENT_GUIDE_CZ.md** | Vizuální průvodce | 🎯 Rozhodování + přehled |
| **TESTOVANI_NA_ANDROID.md** | Kompletní návod | 📖 Detailní instrukce |
| **SUMMARY_CZ.md** | Souhrn řešení | 📊 Přehled projektu |
| **README.md** | Hlavní readme | 💻 Vývojářská dokumentace |

---

## 🎯 Doporučené Workflow

### První testování:
```
1. Přečti START_HERE.md (tento soubor)        ← Jsi zde
2. Otevři QUICK_REFERENCE_CZ.md               → 1 min
3. Vyber a spusť metodu                       → 2-5 min
4. Otevři mobile-test.html na telefonu        → 1 min
5. Testuj GDP aplikaci                        → ∞
```

### Běžné testování:
```
1. Spusť server: ./start-server.sh            → 10 sec
2. Otevři na telefonu                         → 10 sec
3. Testuj aplikaci                            → ∞
```

### Produkční nasazení:
```
1. Push změny na GitHub                       → 1 min
2. Počkej na GitHub Actions                   → 2 min
3. Otevři GitHub Pages URL na telefonu        → 10 sec
4. Sdílej URL s týmem                         → ∞
```

---

## 🎬 Video Průvodce (Text)

### Scénář 1: První spuštění (GitHub Pages)
```
▶️ 00:00 - Otevři GitHub repozitář
▶️ 00:30 - Klikni na Settings
▶️ 01:00 - Vyber Pages v menu
▶️ 01:30 - Nastav Source: main branch
▶️ 02:00 - Klikni Save
▶️ 02:30 - Počkej 2 minuty (GitHub deployuje)
▶️ 04:30 - Zkopíruj vygenerovanou URL
▶️ 05:00 - Na Galaxy S23 otevři Chrome
▶️ 05:30 - Zadej URL
▶️ 06:00 - ✅ GDP běží na telefonu!
```

### Scénář 2: Vývojářský workflow
```
▶️ 00:00 - Otevři terminál
▶️ 00:10 - cd WebGPT
▶️ 00:20 - ./start-server.sh
▶️ 00:30 - Poznamenej si IP (např. 192.168.1.100)
▶️ 01:00 - Na Galaxy S23 otevři Chrome
▶️ 01:10 - Zadej http://192.168.1.100:8000
▶️ 01:20 - ✅ GDP běží lokálně!
▶️ 01:30 - Edituj soubor na počítači
▶️ 02:00 - Refresh (F5) na telefonu
▶️ 02:10 - ✅ Změny jsou vidět okamžitě!
```

---

## 🆘 Rychlá Pomoc

### Aplikace se nenačte?
```
1. Zkontroluj internet                → ping google.com
2. Zkontroluj server běží             → ps aux | grep python
3. Zkontroluj síť                     → Stejná Wi-Fi?
4. Zkontroluj firewall                → Vypni dočasně
5. Zkus jiný prohlížeč                → Firefox, Samsung Internet
```

### Server nefunguje?
```
1. Python nainstalován?               → python3 --version
2. Port obsazený?                     → Zkus jiný: ./start-server.sh 8080
3. IP adresa správná?                 → Zkontroluj ipconfig/ifconfig
```

### Stále nefunguje?
```
→ Otevři: TESTOVANI_NA_ANDROID.md
→ Sekce: "🐛 Řešení problémů"
→ Nebo: Vytvoř GitHub Issue
```

---

## ✅ Checklist první instalace

- [ ] Přečetl jsem START_HERE.md
- [ ] Rozhodl jsem se pro metodu testování
- [ ] Otevřel jsem příslušnou dokumentaci
- [ ] Nastavil jsem server/GitHub Pages
- [ ] Otevřel jsem mobile-test.html
- [ ] Všechny testy prošly ✅
- [ ] Otevřel jsem index.html (GDP)
- [ ] Aplikace funguje na Galaxy S23 ✅
- [ ] Přidal jsem záložku v telefonu
- [ ] Řekl jsem o tom týmu 🎉

---

## 🎓 Tipy od zkušených uživatelů

💡 **Pro vývojáře:**
- Používej Python server pro development
- GitHub Pages pro produkci
- Chrome DevTools pro debugging (chrome://inspect)

💡 **Pro testery:**
- Začni s mobile-test.html
- Testuj v portrait i landscape
- Zkontroluj LocalStorage persistence

💡 **Pro týmový lead:**
- Nastav GitHub Pages jednou pro všechny
- Sdílej URL s celým týmem
- Používej workflow: Dev → Test → GitHub Pages

---

## 🚀 Až budeš připraven...

### Metoda 1 - GitHub Pages:
```bash
👉 Otevři: TESTOVANI_NA_ANDROID.md → Metoda 1
```

### Metoda 2 - Python Server:
```bash
👉 Spusť: ./start-server.sh
```

### Metoda 3 - Termux:
```bash
👉 Otevři: TESTOVANI_NA_ANDROID.md → Metoda 3
```

### Potřebuji více info:
```bash
👉 Otevři: DEPLOYMENT_GUIDE_CZ.md
```

---

## 📞 Podpora

**Dokumenty:**
- TESTOVANI_NA_ANDROID.md - Kompletní návod
- DEPLOYMENT_GUIDE_CZ.md - Vizuální průvodce
- QUICK_REFERENCE_CZ.md - Rychlá reference

**Online:**
- GitHub Issues - Pro technické problémy
- GitHub Discussions - Pro dotazy

**Lokálně:**
- mobile-test.html - Pro diagnostiku
- Chrome DevTools - Pro debugging

---

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                                                            ┃
┃   🎉 Hodně štěstí s testováním GDP!                       ┃
┃                                                            ┃
┃   Máš otázku? → Vytvoř GitHub Issue                       ┃
┃   Něco nefunguje? → TESTOVANI_NA_ANDROID.md               ┃
┃                                                            ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

**Status:** ✅ Připraveno k použití  
**Datum:** 2026-02-14  
**Pro:** Android Galaxy S23  
**Jazyk:** Čeština 🇨🇿
