# 📱 GDP Android - Rychlá Reference

## 🚀 Nejrychlejší způsoby

### 1. GitHub Pages (Online - Doporučeno)
```
1. GitHub → Settings → Pages → Deploy main branch
2. Počkejte 2 minuty
3. Otevřete URL na telefonu
✅ Hotovo!
```

### 2. Lokální Server (Development)
```bash
# Na počítači:
cd WebGPT
./start-server.sh
# nebo na Windows:
start-server.bat

# Na Galaxy S23:
Otevřete: http://IP_POCITACE:8000
```

### 3. Termux (Přímo na telefonu)
```bash
# V Termux aplikaci:
pkg install git python
git clone https://github.com/jackyyjackyy/WebGPT.git
cd WebGPT
python -m http.server 8000

# V Chrome:
http://localhost:8000
```

---

## 🔍 Zjištění IP adresy

**Windows:**
```cmd
ipconfig
→ Hledejte "IPv4 Address"
```

**Mac:**
```bash
ipconfig getifaddr en0
```

**Linux:**
```bash
hostname -I
```

---

## ✅ Co testovat

- [ ] Načtení aplikace
- [ ] Touch ovládání
- [ ] Přepínání vývojářů
- [ ] Přidávání úkolů
- [ ] Označování úkolů (checkboxy)
- [ ] Mazání úkolů
- [ ] LocalStorage (zavřít a otevřít znovu)
- [ ] Responzivní design
- [ ] Scrollování

---

## 🐛 Nejčastější problémy

**Nenačte se:**
- Zkontroluj internet
- Vymaž cache
- Zkus jiný prohlížeč

**Server není přístupný:**
- Stejná Wi-Fi?
- Správná IP?
- Firewall vypnutý?

---

## 📚 Kompletní průvodce
→ Viz [TESTOVANI_NA_ANDROID.md](TESTOVANI_NA_ANDROID.md)
