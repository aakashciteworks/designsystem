# Ember Finance UI

An original React design system inspired by the warm, precise visual language of Brex. It is designed as a focused source repository for **v0 Design Systems 2.0**: an installable package, a working Next.js consumer, explicit tokens, and verified component examples all live together.

> This project is an independent design exercise. It is not affiliated with, endorsed by, or a copy of Brex or its proprietary assets.

## What v0 can learn here

- `DESIGN.md` — visual rules, tokens, composition guidance, and anti-patterns.
- `src/app/globals.css` — source-of-truth CSS variables and Tailwind theme mapping.
- `src/components/design-system.tsx` — the public React component API.
- `src/app/page.tsx` — a real consumer showing recommended composition and density.
- `components.json` — shadcn-compatible aliases and CSS configuration.
- `package.json` — installable package metadata and pinned setup commands.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Validate a production build with:

```bash
npm run typecheck
npm run build
```

## Import into v0

1. Put this folder in its own GitHub repository, or keep it in a monorepo and select `brex-inspired-design-system` as the root directory.
2. In v0, open **Design Systems → Import from GitHub**.
3. Select the repository and its default branch.
4. Add this note to the import form:

   > Use `DESIGN.md` as the visual contract, `src/components/design-system.tsx` as the verified component API, `src/app/globals.css` as the token source, and `src/app/page.tsx` as the canonical consumer. Preserve the single-orange-CTA rule, weight-500 display typography, cool-blue hairlines, 10px controls, and generous editorial spacing. Do not introduce gradients, heavy shadows, or extra accent colors.

5. Let v0 build its review starter. Check fonts, the orange CTA, borders, focus states, responsive navigation, and component imports before approving the saved design system.

v0 creates and manages its own `v0.json` while saving the design-system skill. This repository deliberately does not hard-code that generated file because it contains source IDs, GitHub org/repo data, mount paths, and optional environment-provider IDs established during import.

## Public imports

```tsx
import { Button, Card, FeatureCard, Navbar } from "@ember-finance/ui"
import "@ember-finance/ui/styles.css"
```

Inside this starter, use the configured alias:

```tsx
import { Button, Card } from "@/components"
```

## Component inventory

`Button`, `Badge`, `Input`, `Textarea`, `Select`, `Card`, `Navbar`, `SectionHeader`, `FeatureCard`, `Stat`, `PricingCard`, `TestimonialCard`, `LogoCloud`, `DataTable`, `Tabs`, `Accordion`, `Footer`, and `TextLink`.

## Font note

The demo packages Inter Variable and Space Mono through Fontsource, so CI and v0 previews do not require a Google Fonts network request. The editorial serif role described in `DESIGN.md` intentionally falls back to Georgia so the starter does not depend on a proprietary Brex typeface.
