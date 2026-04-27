# Design System — Adikari

## 1. Design Tokens

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-sage` | `#7A9482` | Primary brand. Buttons, links, accents, trust badges. |
| `--color-sage-dark` | `#5E7566` | Hover states, active states for sage elements. |
| `--color-gold` | `#D4AF37` | CTA buttons, highlights, stat numbers, quote accents. |
| `--color-neutral` | `#F4F4F4` | Page background, cards, dividers, subtle fills. |
| `--color-dark` | `#1A1A1A` | Primary text, headings, overlay backgrounds. |
| `--color-white` | `#FFFFFF` | Card backgrounds, text on dark/colored surfaces. |

**Opacity utilities**
- Text on sage: `rgba(255,255,255,0.85)` for body, `rgba(255,255,255,0.6)` for labels
- Overlays: `rgba(26,26,26,0.35)` cart, `rgba(26,26,26,0.5)` product detail

### Typography

| Token | Stack | Usage |
|-------|-------|-------|
| `--font-heading` | `'Playfair Display', serif` | Titles, quotes, founder name, stat numbers. |
| `--font-body` | `'Montserrat', sans-serif` | Body text, UI labels, buttons, navigation. |

**Type scale**

| Token | Size | Usage |
|-------|------|-------|
| `--font-size-body` | `1rem` / 16px | Body copy, button text, tab labels |
| `--font-size-nav` | `0.875rem` / 14px | Navigation, descriptions, feature lists |
| `--font-size-ui-small` | `0.8125rem` / 13px | Card descriptions, metadata |
| `--font-size-label` | `0.75rem` / 12px | Badges, timestamps, captions |
| `--font-size-micro` | `0.625rem` / 10px | Footer legal, micro-copy |

### Spacing

| Token | Value |
|-------|-------|
| `--space-4` | 4px |
| `--space-8` | 8px |
| `--space-12` | 12px |
| `--space-16` | 16px |
| `--space-24` | 24px |
| `--space-32` | 32px |
| `--space-40` | 40px |
| `--space-48` | 48px |
| `--space-64` | 64px |
| `--space-80` | 80px |

Base unit: 4px. Use tokens consistently; avoid magic numbers.

### Shadows

| Context | Value |
|---------|-------|
| Modal / Drawer | `0 24px 80px rgba(0,0,0,0.25)` |
| Floating Help FAB | `0 4px 20px rgba(122,148,130,0.4)` |
| Floating Help hover | `0 6px 24px rgba(122,148,130,0.5)` |
| Toast / Badge | `0 4px 24px rgba(0,0,0,0.15)` |
| Menu / Chat popup | `0 8px 32px rgba(0,0,0,0.15)` |

### Transitions

| Context | Duration | Easing |
|---------|----------|--------|
| Default UI | 0.2s | `ease` |
| Modal open/close | 0.3s | `ease` |
| Floating menu | 0.25s | `ease` |

---

## 2. Z-Index Hierarchy

| Layer | Z-Index | Component |
|-------|---------|-----------|
| Floating Help | 500 | `FloatingHelp` FAB, menu, chat panel |
| Product Detail Modal | 300 | `ProductDetail` overlay + panel |
| Cart Drawer | 200 | `CartDrawer` overlay + panel |
| Navbar | 100 | `Navbar` sticky header |
| Content | 1 | Page content, sections |

---

## 3. Component Patterns

### Buttons

**Primary CTA (Gold)**
- Background: `var(--color-gold)`
- Text: `var(--color-dark)`, font-weight 700
- Padding: `16px 24px` (compact) / `24px 24px` (hero, prominent)
- Border-radius: `8px`–`10px`
- Hover: `#c9a22e`, `translateY(-1px)`

**Secondary CTA (Sage)**
- Background: `var(--color-sage)`
- Text: `var(--color-white)`
- Same sizing as Primary
- Hover: `var(--color-sage-dark)`

**Ghost / Outline**
- Border: `1px dashed var(--color-sage)`
- Background: transparent
- Hover: `rgba(122,148,130,0.08)`

### Cards

**Product Option Cards**
- Border: `2px solid #e0e0e0`
- Border-radius: `10px`
- Padding: `10px 8px` (compact desktop)
- Selected state: border-color `var(--color-sage)`

**Image Overlays**
- Bottom gradient: `linear-gradient(to top, rgba(0,0,0,0.65), transparent)` for dark text
- Or floating card: `rgba(255,255,255,0.92)` + `backdrop-filter: blur(4px)` for light text

### Badges

**Payment Badges (Footer)**
Use **brand colors** for trust recognition:

| Method | Color / Style |
|--------|---------------|
| Visa | `#1a1f71` |
| Mastercard | `linear-gradient(90deg, #eb001b, #f79e1b)` |
| Webpay | `#e31837` |
| Mercado Pago | `#00b2e3` |
| PayPal | `#003087` |

- Border-radius: `20px`
- Padding: `8px 16px`
- Font: `var(--font-size-label)`, weight 700
- Color: `var(--color-white)`

**Payment Badges (PDP — discreet)**
- Same brand colors but `opacity: 0.6` and smaller (`20px × 20px` circles) to not break minimal aesthetic.

**Cart Drawer Payment Groups**
- Grouped by type: "Tarjetas" / "Digital"
- Same brand colors as footer
- Add security seal below: lock icon + "Pago 100% encriptado y seguro"
- Trust badge: shield icon + "Sitio Seguro · SAG Chile"

---

## 4. Layout Principles

### Grid & Breakpoints

| Breakpoint | Width | Behavior |
|------------|-------|----------|
| Mobile | `< 768px` | Single column, full-width panels |
| Tablet | `768px–1023px` | 2-column grids, increased padding |
| Desktop | `≥ 1024px` | Max-width wrappers, 5:7 / 1.15:1 ratios |

**Wrapper max-widths**
- Content: `1100px`
- Product detail modal: `1200px`
- Cart drawer: `430px`

### Modal Behavior

- Overlay: `rgba(26,26,26,0.5)`, pointer-events toggled with `aria-hidden`
- Panel: centered on desktop (`translate(-50%,-50%)`), full-screen on mobile
- Desktop dimensions: `min(100%, 1200px) × min(90vh, 850px)`
- Animations: scale + opacity transitions, 0.3s ease

---

## 5. Accessibility

- All interactive elements have `cursor: pointer`
- Modals use `aria-hidden` to manage focus traps
- Payment badges have `aria-label` with brand name
- Font smoothing enabled via `-webkit-font-smoothing: antialiased`
- Minimum touch target: 44×44px (buttons, tabs, FAB)

---

## 6. File Structure

```
src/
├── components/
│   ├── FloatingHelp.jsx / .css   # Global support widget
│   ├── ProductDetail.jsx / .css  # PDP modal
│   ├── CartDrawer.jsx / .css     # Cart sidebar
│   ├── Footer.jsx / .css         # Footer with payment badges
│   ├── Hero.jsx / .css           # Split hero (image + content)
│   └── ...
├── data/
│   └── products.js               # Product & pricing data
└── index.css                     # Design tokens (:root)
```

---

## 7. Notes

- **Never** override cart drawer payment badges to monochrome theme colors — brand recognition at checkout reduces anxiety and increases conversion.
- Footer payment badges may use monochrome (`var(--color-sage)`) for brand harmony if preferred, but cart drawer must keep brand colors.
- The Floating Help FAB is mounted in `App.jsx` and appears on every page. Chat panel is a placeholder for future AI integration.
