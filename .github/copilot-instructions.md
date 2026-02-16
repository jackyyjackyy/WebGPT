# Copilot Instructions for WebGPT

## Project Overview

WebGPT is a **Game Development Planner** - an interactive web application for planning game development in Blender 5.x & Unity 6.x. The application allows two developers (Jack and Joker) to manage tasks organized by development aspects.

**Key characteristics:**
- Pure HTML5 + CSS3 + Vanilla JavaScript (no dependencies, no build process)
- Client-side only (no backend server)
- Czech language UI (🇨🇿)
- Mobile-responsive design
- Data persistence via LocalStorage

## Project Structure

```
WebGPT/
├── index.html              # Main application
├── script.js               # Application logic (362 lines)
├── styles.css              # Styling (576 lines)
├── mobile-test.html        # Mobile testing page (243 lines)
├── start-server.sh         # Development server (Linux/Mac)
├── start-server.bat        # Development server (Windows)
├── README.md               # Documentation
├── DEPLOYMENT_GUIDE_CZ.md  # Deployment guide (Czech)
├── TESTOVANI_NA_ANDROID.md # Android testing guide (Czech)
├── QUICK_REFERENCE_CZ.md   # Quick reference (Czech)
└── .github/
    └── workflows/
        └── deploy.yml      # Auto-deploy to GitHub Pages
```

## Technologies & Tools

- **Languages:** HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Storage:** Browser LocalStorage API
- **Styling:** CSS Grid, Flexbox, responsive design
- **Version Control:** Git, GitHub
- **Deployment:** GitHub Pages (automated via GitHub Actions)
- **Development Server:** Python HTTP server (`python3 -m http.server 8000`)

## Development Commands

### Start Development Server
```bash
# Linux/Mac
./start-server.sh [port]    # Default port: 8000

# Windows
start-server.bat [port]

# Manual (any OS)
python3 -m http.server 8000
```

### Testing
- Open `mobile-test.html` for mobile feature testing
- Test on Android Galaxy S23 via GitHub Pages or local server
- No automated test suite exists

### Deployment
- **Automatic:** Push to `main` branch triggers GitHub Actions deployment
- **Manual:** Repository Settings → Pages → Source: main branch

## Language & Localization

**All UI text MUST be in Czech language** 🇨🇿

Examples:
- ✅ "Plánovač vývoje her" (Game Development Planner)
- ✅ "Modelování postav" (Character Modeling)
- ✅ "Přidat plán" (Add Plan)
- ❌ Never use English in UI elements

## Code Conventions

### JavaScript
- Use ES6+ class-based architecture
- Current data structure: `this.data = { dev1: {...}, dev2: {...} }`
- Developer IDs: `dev1` (Jack), `dev2` (Joker)
- Store data using `localStorage.setItem()`/`localStorage.getItem()`
- No external libraries or frameworks

### HTML
- Semantic HTML5 elements
- Data attributes for dynamic elements (e.g., `data-aspect="character-modeling"`)
- Czech language in all text content
- Meta viewport tag for mobile support

### CSS
- BEM-like naming convention (e.g., `.aspect-btn`, `.user-selector`)
- Responsive design with media queries
- CSS Grid for layout, Flexbox for components
- Mobile-first approach

## Data Persistence

The application uses browser LocalStorage:
- Key: `gameDevPlanner_${this.currentUser}`
- Structure: Nested object with aspects, plans, and changes
- No backend or database
- Users: `dev1` (Jack) and `dev2` (Joker)

## Developer Names

- **dev1** → Display name: "Jack"
- **dev2** → Display name: "Joker"

These are hardcoded and should not be changed without updating the entire codebase.

## Constraints & Rules

### DO:
- Write all UI text in Czech
- Use vanilla JavaScript (no dependencies)
- Keep mobile responsiveness in mind
- Test changes by running a local HTTP server
- Preserve existing data structure when modifying storage logic
- Follow the existing code style and naming conventions

### DO NOT:
- Add npm, webpack, or any build tools
- Add JavaScript libraries or frameworks
- Change language from Czech to English
- Modify the developer IDs (dev1/dev2) or names (Jack/Joker)
- Add backend dependencies or server-side code
- Commit `node_modules`, build artifacts, or IDE config files
- Break the LocalStorage data structure

## Testing & Validation

### Manual Testing Checklist:
1. Start local server: `python3 -m http.server 8000`
2. Open `http://localhost:8000` in browser
3. Test user switching (Jack ↔ Joker)
4. Test aspect selection and task management
5. Verify LocalStorage persistence (reload page)
6. Test on mobile device (use `mobile-test.html` first)
7. Check responsive design at different viewport sizes

### Mobile Testing:
- Use `mobile-test.html` for feature validation
- Test on Android Galaxy S23 (see `TESTOVANI_NA_ANDROID.md`)
- Verify touch interactions, viewport, and orientation changes

## Security Considerations

- No user authentication (single-user/local app)
- LocalStorage only (no server communication)
- No sensitive data handling
- All code runs client-side in browser sandbox

## Deployment Process

GitHub Actions automatically deploys to GitHub Pages on push to `main`:
1. Push commits to `main` branch
2. Wait ~2 minutes for Actions workflow
3. Access at: `https://jackyyjackyy.github.io/WebGPT/`

## Common Tasks

### Adding a new aspect category:
1. Add button in `index.html` with `data-aspect` attribute
2. Update Czech label text
3. Test aspect selection and data persistence

### Modifying data structure:
1. Update `this.data` initialization in `script.js`
2. Update `loadData()` and `saveData()` methods
3. Test existing data migration

### Styling changes:
1. Edit `styles.css`
2. Check responsive behavior (mobile + desktop)
3. Verify no visual regressions

## Documentation

- **README.md**: Project overview and quick start (Czech/English mix)
- **DEPLOYMENT_GUIDE_CZ.md**: Deployment methods with flowcharts
- **TESTOVANI_NA_ANDROID.md**: Complete Android testing guide
- **QUICK_REFERENCE_CZ.md**: Quick reference for commands
- All guides are in Czech except README

## Additional Notes

- This is a personal project ("vězení pro AI mecheche" = "prison for AI mecheche")
- Designed for game development workflow planning
- Focus on Blender (modeling/assets) and Unity (implementation) integration
- Simple, dependency-free architecture for easy deployment and maintenance
