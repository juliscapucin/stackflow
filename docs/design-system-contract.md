# Design System Contract

This document is the contract between Figma, generated design tokens, and implementation code.

Use this as a quick validation checklist before and after AI-generated UI work.

---

## 1) Token Mapping Contract

### Core colors

| Intent | CSS Variable | Preferred Tailwind Utility |
| --- | --- | --- |
| Page background | `--background` | `bg-background` |
| Subtle surface | `--background-subtle` | `bg-background-subtle` |
| Muted surface | `--muted-background` | `bg-muted-background` |
| Primary text | `--foreground` | `text-foreground` |
| Secondary text | `--foreground-subtle` | `text-foreground-subtle` |
| Emphasis text | `--foreground-emphasis` | `text-foreground-emphasis` |
| Muted text | `--muted-foreground` | `text-muted-foreground` |
| Focus ring | `--ring` | `ring-ring` |

### Button tokens

Use only these token families for button states:

- `--button-primary-*`
- `--button-secondary-*`
- `--button-ghost-*`

Do not use deprecated/legacy names such as `--buttons-button-*`.

---

## 2) Component Mapping Contract

| Figma Intent | Code Target |
| --- | --- |
| Button variants | `src/components/ui/Button.tsx` |
| UI primitives | `src/components/ui/*` |
| Composed sections | `src/components/blocks/*` using `ui/*` primitives |

Rules:

- Reuse existing `ui` components before creating new primitives.
- `blocks` should compose `ui` components and avoid one-off visual primitives.
- Keep component APIs stable unless explicitly updating the design system.

---

## 3) Typography Contract

### Font families

- `--font-family-brand` (`PP Right Grotesk Mono`) is used for:
  - display/headline scales
  - branded elements
- `--font-family-plain` (`Roboto Mono`) is used for:
  - titles
  - sublines
  - body/paragraph text
  - labels and inputs
  - all default/non-brand content

Use semantic type classes (display/headline/title/subline/body/label) and avoid ad-hoc font-family overrides unless required by a specific brand treatment.

---

## 4) Interaction State Contract

Every interactive element must support:

- default
- hover
- focus-visible
- active
- disabled

Focus pattern:

`focus-visible:outline-none focus-visible:ring-2 ring-ring`

No opacity hacks for hover/active if dedicated token states exist.

---

## 5) Generation/Runtime Contract

- Token source updates happen in token source files, then regenerate output (do not hand-edit `src/styles/tokens.css`).
- Runtime code and generated token output are authoritative when docs drift.
- UI implementations from Figma must be validated against screenshot parity and existing code conventions.
