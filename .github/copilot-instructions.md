# AI Coding Agent Instructions

## Project Overview
A modern, **bilingual shipping/logistics landing page** for Amyal Company (formerly Atheer Shipping) in Libya. Built with React + Vite + Tailwind CSS + Framer Motion. Features bilingual (Arabic/English) support with RTL/LTR layout switching and responsive design.

## Architecture & Data Flow

### Component Structure (App.jsx)
The app follows a **single-page component composition pattern** with no routing:
```
App → Header + Hero + TrackingSearch + FeaturedGrid/Services + Routes + Stats + News + Footer
```

**Key Pattern**: Each section (Services, Routes, etc.) is self-contained; layout stacking in `src/main.jsx` and `App.jsx`. Changes to any component are isolated—no cross-component state except through `LanguageContext`.

### Language System (Critical for AI Work)
- **Single source of truth**: `src/data/translations.js` contains all English (`en:`) and Arabic (`ar:`) text.
- **Context provider**: `src/context/LanguageContext.jsx` manages language state + localStorage persistence.
- **Pattern**: All components must use `useLanguage()` hook to access `t` object for text, not hardcode strings.
- **Direction handling**: Auto-switching `dir="rtl"` for Arabic, `dir="ltr"` for English via context's `toggleLang()`.

**When adding content**: Always add text to `translations.js` first, then reference via `const { t } = useLanguage()` in components.

### Styling Conventions
- **Tailwind-first**: All CSS is Tailwind utility classes; no CSS files except `index.css` (global resets).
- **Animations**: Use Framer Motion (`framer-motion`) and `lucide-react` for icons.
- **Color palette**: Custom colors defined in `tailwind.config.js`:
  - `primary-900`: Corporate navy (`#002654`) — main background.
  - `primary-300`: Light blue (`#00adef`) — accents.
  - No hardcoded hex colors in components.
- **Responsive**: Mobile-first (`md:`, `lg:` breakpoints standard).
- **Images**: Located in `public/` or external URLs.

### Component Patterns
1. **Header.jsx**: Sticky nav with scroll detection. Mobile menu toggle stored in local state.
2. **TrackingSearch.jsx**: Tab-based interface.
3. **FeaturedGrid.jsx / Services / Routes**: Grid/flex layouts with Framer Motion animations and hover effects (`group-hover:`, `transition-transform`). Lucide icons for CTAs. 
4. **Stats.jsx**: Client logo showcase—text-based data rendering.

## Build & Development

### Scripts
```bash
npm run dev      # Start Vite dev server (port 5173)
npm run build    # Production build → dist/
npm run preview  # Serve production build locally
```

## When Adding New Features

### Adding a New Component Section
1. Create file in `src/components/NewSection.jsx`.
2. Add all text keys to `src/data/translations.js` (both `ar:` and `en:` objects).
3. Import `useLanguage` hook; access text via `const { t } = useLanguage()`.
4. Use only Tailwind classes; reference colors from `primary-*` palette.
5. Use `framer-motion` for reveal and section animations.
6. Import in `src/App.jsx` and add to composition.

### Modifying Colors
- Update `tailwind.config.js` `colors.primary` object.
- Do NOT add new color names; reuse existing `primary-*` range.
- Refactor any hardcoded hex colors to theme variables.

## Common Pitfalls
1. **Hardcoded text in JSX**: Always use `translations.js` + `useLanguage()`.
2. **Custom colors**: Use `primary-*` scale from config, not hex literals.
3. **Missing language coverage**: If adding a feature, ensure BOTH `ar:` and `en:` entries exist.
4. **RTL edge cases**: Flexbox directions may need reversal for Arabic; test with `dir="rtl"` viewport.
5. **Class merging**: Use `clsx` + `tailwind-merge` when composing classes with props.

## Project Metadata
- **Region Focus**: Libya-based logistics; Libyan ports are prominently featured.
- **Business Model**: B2B shipping/logistics services landing page.
- **No Database**: This is a static marketing site; no backend integration.
