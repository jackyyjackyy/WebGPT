## Kontext repozitáře
- Jednostránkový plánovač pro workflow Blender/Unity; čisté HTML/CSS/vanilla JS s persistencí v LocalStorage a bez build nástrojů.
- UI i dokumentace jsou v češtině; zachovej jména Jack (dev1) a Joker (dev2) a strukturu/klíče LocalStorage.
- Nasazení přes GitHub Pages; nepřidávej závislosti ani nástroje, které by rozbily statické hostování (žádné bundlery/frameworky).

## Pravidla pro kódování
- Drž se češtiny, tónu a emoji; nepřidávej anglické texty do UI.
- Preferuj jednoduchý, přímočarý DOM/JS; nepřidávej nové knihovny; zachovej responzivní chování CSS.
- Zachovej současný datový model a klíče LocalStorage; neměň schéma, pokud to není nutné.
- Dodrž stávající rozložení souborů: hlavní app v `index.html`, logika v `script.js`, styly ve `styles.css`.

## Testování a ověření
- Nejsou automatické testy; po změnách spusť `python3 -m http.server 8000`, otevři `index.html` a ručně ověř vytváření úkolů, filtry aspektů a persistenci v prohlížeči.
