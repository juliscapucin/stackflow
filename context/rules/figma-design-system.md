# Figma MCP Design System Rules

## Rule Precedence

When constraints conflict, follow this order:

1. Runtime code and generated files (`src/styles/tokens.css`, existing `components/ui/*`)
2. This file (`context/rules/figma-design-system.md`)
3. Context docs in `context/*`
4. Product intent docs in `docs/*`

Never edit generated token output directly: `src/styles/tokens.css`.

## Project Stack

- **Framework**: Next.js 16, App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (CSS-first config via `app/globals.css`)
- **UI Primitives**: `@base-ui/react`
- **Variant API**: `class-variance-authority` (CVA)
- **Class merging**: `cn()` utility — `clsx` + `tailwind-merge`, located at `src/lib/utils.ts`

---

## Required Figma-to-Code Flow

Do not skip any step.

1. Run `get_design_context` for the target node to get the structured design representation
2. If the response is too large, run `get_metadata` first to get the node map, then re-fetch only the required nodes
3. Run `get_screenshot` for a visual reference of the node being implemented
4. Download any assets needed (images, SVGs) from the Figma MCP localhost source
5. Translate the MCP output (React + Tailwind) to this project's conventions (see rules below)
6. Validate against the screenshot for 1:1 visual parity before marking complete

---

## Component Organization

```
components/
  ui/        ← primitives: Button, Card, Badge, Input, etc.
  blocks/    ← composed page sections: Hero, Services, Testimonials, etc.
```

- IMPORTANT: Always check `components/ui/` for an existing component before creating a new one
- `blocks/` components must only use `components/ui/` components — no raw HTML elements for UI
- Place new UI primitives in `components/ui/`
- Place new page sections in `components/blocks/`
- Use named exports for all components
- React 19 default: pass `ref` as a prop
- Only use `React.forwardRef` when required by a third-party primitive API

---

## Design Tokens

Tokens are auto-generated from `tokens/*.json` into `src/styles/tokens.css` and imported via `app/globals.css`.
IMPORTANT: Never hardcode colors, font sizes, or spacing values — always use the tokens below.

### Color tokens (CSS variables)

```css
/* Backgrounds */
--background          /* page background */
--background-subtle   /* subtle surface */
--muted-background    /* muted surface */

/* Foregrounds */
--foreground          /* primary text */
--foreground-subtle   /* secondary text */
--foreground-emphasis /* highest-emphasis text */
--muted-foreground    /* low-emphasis text */

/* Accents */
--accent-1  /* primary highlight */
--accent-2  /* hover / emphasis */
--accent-3  /* supporting accent (blue) */
--accent-4  /* supporting accent (teal) */

/* State */
--destructive, --destructive-subtle, --destructive-emphasis
--success, --success-subtle, --success-emphasis
--ring      /* focus ring */

/* Button tokens */
--button-primary-background
--button-primary-foreground
--button-primary-hover-background
--button-primary-active-background
--button-primary-disabled-background
--button-primary-disabled-foreground

--button-secondary-background
--button-secondary-foreground
--button-secondary-border
--button-secondary-hover-background
--button-secondary-active-background
--button-secondary-disabled-background
--button-secondary-disabled-foreground

--button-ghost-background
--button-ghost-foreground
--button-ghost-border
--button-ghost-hover-background
--button-ghost-active-background
--button-ghost-disabled-background
--button-ghost-disabled-foreground
```

### Tailwind color mapping

Map tokens to Tailwind utility classes:

```
bg-background        → var(--background)
bg-background-subtle → var(--background-subtle)
bg-muted-background  → var(--muted-background)
text-foreground      → var(--foreground)
text-foreground-subtle    → var(--foreground-subtle)
text-foreground-emphasis  → var(--foreground-emphasis)
text-muted-foreground     → var(--muted-foreground)
ring-ring            → var(--ring)
```

### Layout tokens

```
--content → max content width (1000px)
--wide    → wide content width (2000px)
```

Use as: `max-w-[--content]` or `max-w-[--wide]`

---

## Typography

Font: `PP Right Grotesk Mono` (`var(--font-family-p-p-right-grotesk-mono)`)

Use semantic type scale classes only. Map Figma text styles to:

| Figma style     | Class             | Use case           |
| --------------- | ----------------- | ------------------ |
| Display Large   | `display-large`   | Hero headlines     |
| Display Medium  | `display-medium`  |                    |
| Display Small   | `display-small`   |                    |
| Headline Large  | `headline-large`  | Page titles        |
| Headline Medium | `headline-medium` |                    |
| Headline Small  | `headline-small`  |                    |
| Title Large     | `title-large`     | Component titles   |
| Title Medium    | `title-medium`    |                    |
| Title Small     | `title-small`     |                    |
| Subline Large   | `subline-large`   |                    |
| Subline Medium  | `subline-medium`  |                    |
| Subline Small   | `subline-small`   |                    |
| Body Large      | `body-large`      | Paragraphs         |
| Body Medium     | `body-medium`     | Default text       |
| Body Small      | `body-small`      | Captions           |
| Label Large     | `label-large`     | Buttons, UI labels |
| Label Medium    | `label-medium`    |                    |
| Label Small     | `label-small`     |                    |

Font weights: `font-regular` (400) · `font-black` (900)

IMPORTANT: Never use raw font-size values (`text-3xl`, `text-[96px]`, etc.) — use the semantic scale above.

---

## Styling Rules

- IMPORTANT: Tailwind utility classes only — no inline styles, no CSS Modules
- IMPORTANT: No arbitrary Tailwind values (e.g. `px-[18px]`, `text-[#333]`)
- Use `cn()` for all conditional/merged class names
- All components must accept a `className` prop

### Border radius (allowed values only)

```
rounded-lg    ← cards, inputs, small elements
rounded-3xl   ← large cards, containers, pill buttons
```

### Borders (allowed values only)

```
border    ← standard 1px border
border-2  ← emphasis border
```

### Layout pattern (all sections)

```tsx
<section className='py-24'>
	<div className='max-w-[--content] mx-auto px-6'>{/* content */}</div>
</section>
```

Section spacing: `py-24` (default) · `py-16` (dense)

### Grid / Flex

- Default gap: `gap-8`
- Large sections: `gap-12` or `gap-16`

---

## Interaction States

Every interactive element MUST include all four states:

```tsx
// hover, focus-visible, active, disabled
className={cn(
  "hover:bg-[--button-primary-hover-background]",
  "focus-visible:outline-none focus-visible:ring-2 ring-ring",
  "active:bg-[--button-primary-active-background]",
  "disabled:bg-[--button-primary-disabled-background] disabled:text-[--button-primary-disabled-foreground] disabled:pointer-events-none"
)}
```

- IMPORTANT: No opacity hacks for hover/active states — use dedicated token values
- Focus ring must always be: `focus-visible:outline-none focus-visible:ring-2 ring-ring`

---

## CVA Usage

Use `cva()` only when a component has multiple variants or sizes. Do not wrap static styles in CVA.

Use CVA for: `Button`, `Badge`, `Alert`, and similar multi-variant components.
Do NOT use CVA for: `Card` (no variants), `Divider`, or single-style components.

---

## Accessibility

- IMPORTANT: If `@base-ui/react` has a primitive for the component, use it
- All interactive elements must be keyboard accessible
- All focus states must be visible
- Use semantic HTML elements

---

## Asset Handling

- IMPORTANT: If the Figma MCP server returns a localhost URL for an image or SVG, use that source directly — do not create a placeholder
- IMPORTANT: Do not install new icon packages — all assets come from the Figma payload
- Store downloaded assets in `public/assets/`

---

## Token Pipeline

Tokens are exported from Figma and stored in `tokens/*.json`.
To regenerate `src/styles/tokens.css` after updating token files:

```bash
pnpm tokens:build
```

Do not edit `src/styles/tokens.css` directly — it is auto-generated.
