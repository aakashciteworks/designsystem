# Ember Finance Design System

## Intent

Ember is a warm, high-trust visual system for finance, operations, and B2B software. It borrows broad design cues from Brex—one orange action color, medium-weight display type, cool hairlines, compact controls, and spacious editorial layouts—while using original naming, components, copy, and implementation.

The system should feel **precise, calm, warm, and fast**. Product information is dense but never cramped. Marketing moments are spacious but never ornamental.

## Non-negotiable rules

1. Use orange only for the highest-priority action, small emphasis, and focus treatment. A section should usually contain one filled orange CTA.
2. Keep display text at weight 500. Do not turn headings into bold, aggressive slabs.
3. Use near-black ink on an off-white canvas. Pure black is reserved for immersive dark sections.
4. Use cool-blue translucent hairlines for structure. Do not replace every boundary with neutral gray.
5. Prefer borders and tonal surfaces to shadows. Shadows are quiet and functional.
6. Controls use a 10px radius and compact 36px default height. Cards use 16px; large editorial regions may use 24px.
7. Avoid gradients, glassmorphism, neon colors, inflated pills, and decorative blobs.

## Color tokens

| Token | Value | Use |
|---|---:|---|
| `--brand` | `#ff5a1f` | Primary CTA, focus, compact accents |
| `--brand-hover` | `#e84b12` | Primary CTA hover |
| `--brand-soft` | `#fff0e8` | Orange badge/icon background |
| `--canvas` | `#fcfcfd` | Default page background |
| `--surface` | `#ffffff` | Cards and controls |
| `--surface-cream` | `#f7f4ee` | Editorial feature bands/cards |
| `--surface-dark` | `#080d14` | Dark contrast sections |
| `--ink` | `#15191e` | Primary text |
| `--ink-muted` | `#60646c` | Body and secondary text |
| `--ink-soft` | `#8b8d98` | Captions and placeholders |
| `--border` | `rgba(66, 87, 138, 0.15)` | Default hairline |
| `--border-strong` | `rgba(21, 25, 30, 0.30)` | High-emphasis boundary |
| `--ring` | `rgba(255, 90, 31, 0.30)` | Accessible focus ring |
| `--success` | `#18794e` | Positive status |
| `--warning` | `#ad5700` | Caution status |
| `--danger` | `#ce2c31` | Destructive/error status |

Do not invent new accents for charts. Start with ink, muted ink, border blue, cream, and brand orange; use semantic colors only when meaning requires them.

## Typography

- **Sans / product / display:** Inter. Use weights 400 and 500; reserve 600 only for exceptional small UI emphasis.
- **Mono / metrics:** Space Mono. Use for financial values, compact numerical callouts, and identifiers.
- **Serif / editorial:** Georgia fallback. Use sparingly for pull quotes or editorial storytelling, never product controls.
- Display: `clamp(48px, 7vw, 88px)`, line-height `.94`, tracking `-.045em`, weight `500`.
- Section heading: `clamp(32px, 4vw, 56px)`, line-height `1`, tracking `-.035em`, weight `500`.
- Card heading: `20px/1.3`, tracking `-.025em`, weight `500`.
- Body large: `18px/28px`, weight `400`.
- Body: `14–16px/24px`, weight `400`.
- Eyebrow: `11px/1`, weight `500`, tracking `.08em`, uppercase.
- UI label: `12px/16px`, weight `500`.

Use sentence case everywhere except eyebrows and very small badges. Headlines should be short, direct, and usually end without punctuation.

## Spacing and layout

Base spacing rhythm: `4, 8, 12, 16, 24, 32, 48, 72, 96, 112px`.

- Main container: `1200px` maximum, `16px` mobile gutters.
- Desktop grid: 12 columns, `24px` gap.
- Section padding: `80px` mobile-to-tablet, `112px` desktop for major narrative bands.
- Navbar: `60px`, sticky, translucent canvas with a subtle backdrop blur.
- Marketing cards should breathe: at least `24px` internal padding, typically `32px`.
- Product tables and forms are tighter: `12–20px` internal spacing.
- Alternate canvas, white, cream, and dark sections to establish rhythm. Never stack many isolated floating cards on the same background.

## Radius and elevation

- Small detail: `6px`.
- Controls and buttons: `10px`.
- Cards: `16px`.
- Editorial panels: `24px`.
- Small shadow: `0 1px 2px rgba(16, 24, 40, .05)`.
- Medium shadow: `0 12px 30px rgba(16, 24, 40, .09)`; only for a featured or elevated state.

## Component contract

### Button

- Variants: `primary`, `secondary`, `ghost`, `dark`, `link`.
- Sizes: `sm` (32px), `md` (36px), `lg` (44px).
- Use `primary` once per decision group. Use `secondary` alongside it, not another filled color.
- Icons sit after text for forward actions and before text for contextual actions.

### Badge

- Tones: `neutral`, `brand`, `success`.
- Badges label state or category; they are not buttons.

### Inputs, Textarea, Select

- Always provide a visible label in product forms.
- Placeholder text is an example, not a replacement for a label.
- Use the orange focus ring supplied by the tokens. Error copy appears beneath the field using `--danger`.

### Card

- Default is white with one cool hairline. Use cream for editorial feature cards.
- Avoid nesting bordered cards more than one level deep.

### Navbar

- Keep it 60px tall. Use short labels, a quiet sign-in action, and one primary CTA.
- The provided component includes a responsive menu and accessible expanded state.

### SectionHeader

- Pair an orange eyebrow with a medium-weight headline.
- Center alignment is reserved for simple, low-density sections such as pricing.

### FeatureCard

- Use a two- or three-column editorial grid.
- Pair a quiet numerical marker with one icon, one title, and a concise description.

### Stat

- Use Space Mono for the value and a hairline above each item.
- Provide context; never show an unexplained vanity number.

### PricingCard

- Feature at most one plan using the dark surface and orange CTA.
- Keep feature lists parallel and scannable.

### TestimonialCard

- Prefer a strong, brief quote and a real role. Initial avatars are acceptable when imagery is unavailable.

### LogoCloud

- Render customer names in a bordered grid when approved logo assets are unavailable. Do not fabricate brand marks.

### DataTable

- Use subtle row hover and strong alignment. Right-align numeric columns in real financial tables.
- Badges communicate status; color should never be the only signal.

### Tabs and Accordion

- Use tabs for peer views of the same data. Use accordions for optional explanatory content.
- Preserve keyboard behavior from the Radix primitives.

### Footer

- Use the dark surface, muted link groups, and a restrained legal row.

## Composition recipes

### Marketing page

`Navbar → editorial hero → logo grid → 3-up features → dark proof band → product demonstration → testimonials → pricing/CTA → Footer`

### Product dashboard

`Compact header → page title + one primary action → stat row → tabs/filters → data table → contextual side panel`

### Form flow

`Plain heading → short explanation → labeled controls in one column → one primary submit → quiet secondary/back action`

## Accessibility

- Maintain WCAG AA contrast for text and controls.
- All interactive elements must be keyboard reachable and retain a visible focus ring.
- Never encode status through color alone; pair it with text or iconography.
- Interactive targets should be at least 36px in product surfaces and 44px for prominent marketing actions.
- Use semantic heading order, form labels, table headers, and navigation landmarks.
- Respect reduced motion. Do not make animation necessary to understand state.

## Voice and content

Write with calm confidence. Prefer specific operational outcomes over hype.

- Good: “Close the books with every receipt already matched.”
- Avoid: “Revolutionize your financial journey with next-gen magic.”
- Good CTA: “Get started”, “Request a demo”, “Review expenses”.
- Avoid vague CTA text: “Learn more” when a more precise action exists.

## Source of truth

If this document and the implementation differ, use this order:

1. `src/app/globals.css` for actual token values.
2. `src/components/design-system.tsx` for verified props and behavior.
3. `src/app/page.tsx` for recommended composition.
4. This document for design intent and generation constraints.
