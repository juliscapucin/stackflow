# Product Requirements Document (PRD)

## StackFlow - AI-First Developer Knowledge Hub

---

## 1. Overview

StackFlow is a unified workspace where developers can store, organize, search, and reuse technical knowledge (snippets, prompts, commands, notes, files, images, links) in one place.

The product solves context fragmentation by replacing scattered notes, bookmarks, snippets, and chat histories with a structured, searchable system designed for AI-first workflows.

This PRD defines product scope, behavior, priorities, and success criteria for StackFlow.

---

## 1.1 Document Ownership

This PRD is the source of truth for:

- product goals and scope
- user outcomes
- feature requirements
- acceptance criteria
- release priorities

Implementation constraints and AI/code-generation behavior are defined in:

- `.cursor/rules/figma-design-system.mdc`
- `context/coding-standards.md`
- `context/ai-interaction.md`
- `context/current-feature.md`
- `docs/design-system-contract.md`

---

## 2. Problem Statement

Developers currently store knowledge across many disconnected places (IDE snippets, docs, gists, bookmarks, chats, local files), causing:

- context switching
- poor discoverability
- duplicated effort
- inconsistent team workflows
- loss of valuable AI prompts and implementation patterns

StackFlow addresses this with one fast, searchable, AI-enhanced hub.

---

## 3. Product Vision

Build the default personal knowledge layer for developers and AI builders: a tool where every useful artifact can be captured once, organized flexibly, and reused instantly.

---

## 4. Target Users

### 4.1 Primary Segments

- Everyday developers who need quick retrieval of practical resources
- AI-first developers who maintain reusable prompt/context libraries
- Full-stack builders who collect cross-project implementation patterns
- Educators/content creators who save teaching examples and references

### 4.2 User Outcomes

Users should be able to:

- capture useful artifacts in seconds
- find any item quickly using search/filtering
- organize content without rigid structure
- reuse content directly in real workflows
- get AI assistance to enrich and optimize stored knowledge

---

## 5. Product Scope

### 5.1 In Scope (Core Product)

- Authentication (email/password + GitHub OAuth)
- Item CRUD across system types:
  - snippet
  - prompt
  - command
  - note
  - file
  - image
  - link
- Collections and many-to-many item assignment
- Favorites and pinned items
- Search across title/content/tags/type
- Markdown editing for text-based items
- File upload and display for file/image items
- Import/export of user data (JSON/ZIP)
- Dark-mode-first dashboard UX

### 5.2 In Scope (Pro Features)

- AI auto-tag suggestions
- AI summaries
- AI “Explain This Code”
- AI prompt optimization
- Increased limits and premium capabilities

### 5.3 Out of Scope (Current Phase)

- Real-time collaboration
- Team workspaces and permissions
- Marketplace/shared public libraries
- Native mobile applications

---

## 6. Functional Requirements

### 6.1 Authentication & Accounts

- Users can register/login via credentials or GitHub OAuth.
- Sessions persist securely.
- Pro status is tied to billing state.

### 6.2 Items

- Users can create, read, update, delete items.
- Each item belongs to one item type and one user.
- Items support metadata such as tags, pinned/favorite state, and timestamps.
- File and image types support upload-backed content.

### 6.3 Collections

- Users can create/update/delete collections.
- Items can belong to multiple collections.
- Collections can be favorited.

### 6.4 Search & Discovery

- Search must support title, content, tags, and type signals.
- Filtered views by type and collection must be fast and clear.

### 6.5 AI Features (Pro)

- AI features must operate on user-owned content only.
- Users can request AI-generated tags, summaries, explanations, and prompt improvements.
- AI output must be editable before saving.

### 6.6 Billing & Limits

- Free plan includes capped usage.
- Pro plan unlocks advanced features and higher limits.
- Billing events update entitlement state reliably.

---

## 7. Non-Functional Requirements

- Performance: common dashboard interactions feel immediate.
- Reliability: no data loss on item/collection operations.
- Security: strict auth checks and user-level data isolation.
- Scalability: architecture supports growth in item volume and AI usage.
- Maintainability: modular domain-driven structure for features.

---

## 8. UX Requirements

### 8.1 Product Experience Principles

- Modern and minimal, developer-first
- Dark mode as default, light mode optional
- Clear hierarchy and fast scanning
- Frictionless create/edit flows
- Consistent interaction feedback (loading/success/error)

### 8.2 Responsive Behavior

- Desktop: persistent/collapsible sidebar
- Tablet/mobile: drawer-based navigation with full-width content focus

### 8.3 Accessibility

- Keyboard accessible interactions
- Visible focus states
- Semantic structure and labels

---

## 9. Monetization Model

### 9.1 Free Tier

- Item and collection limits
- Core text-based workflows
- Basic search and organization

### 9.2 Pro Tier

- Unlimited (or expanded) usage
- File/image capabilities
- AI feature set
- Export and premium tooling

Pricing and packaging should remain configurable without major product refactors.

---

## 10. Success Metrics

### 10.1 Activation

- % of new users creating first item and first collection
- time-to-first-useful-item

### 10.2 Engagement

- weekly active users
- items created per active user
- search usage and retrieval success indicators

### 10.3 Retention

- week-1 / month-1 retention
- returning users with repeat creation/edit behavior

### 10.4 Monetization

- free-to-pro conversion rate
- retained paid subscribers
- AI feature adoption among pro users

---

## 11. Milestones (High Level)

1. Foundation: auth, schema, core dashboard shell
2. Core CRUD: items/collections + search
3. Storage and file/image support
4. Billing and plan enforcement
5. AI feature rollout
6. UX polish, performance, and launch readiness

---

## 12. Risks & Mitigations

- Scope creep from adjacent “knowledge app” ideas -> enforce milestone gating
- AI cost growth -> usage limits, model selection controls, and caching
- Weak retrieval quality -> improve indexing, tagging, and search relevance loops
- Complexity in pricing logic -> centralize entitlement checks

---

## 13. Open Questions

- Final free/pro limits by item type?
- Annual pricing and trial strategy?
- Which AI features should be launch-critical vs post-launch?
- Should custom item types be Phase 1.5 or Phase 2?

---

_Last updated: April 2026_
# Product Requirements Document (PRD)

## Digital Agency Website — AI-Driven Design System

---

## 1. Overview

This project is a digital agency website built with:

- Next.js (version from package.json: dependencies.next)
- Tailwind CSS (devDependencies.tailwindcss)
- TypeScript (devDependencies.typescript)
- Base UI (dependencies.@base-ui/react or @base-ui-components/react)

The goal is to create a **strict, token-driven design system** that enables reliable UI generation using AI tools (Cursor, Figma MCP).

This document defines the **rules AI must follow when generating UI and code**.

---

## 1.1 Document Ownership

This PRD is the source of truth for product scope, UX intent, and acceptance criteria.

For implementation constraints and AI execution behavior, use:

- `.cursor/rules/figma-design-system.mdc` (design-system enforcement and Figma-to-code workflow)
- `context/coding-standards.md` (engineering conventions)
- `context/ai-interaction.md` and `context/current-feature.md` (delivery workflow)
- `docs/design-system-contract.md` (Figma token/component mapping contract)

When guidance conflicts, prioritize runtime code and generated artifacts first (especially `src/styles/tokens.css` and existing `components/ui/*` patterns), then apply rule/context docs.

---

## 2. Core Principles

### 2.1 Design System First

- All UI must use defined tokens
- No arbitrary values allowed

### 2.2 Deterministic AI Output

- AI must generate predictable, repeatable code
- No “creative” styling decisions

### 2.3 Semantic Over Visual

- Always use semantic tokens (e.g. `background`, `foreground`)
- Never use raw values (hex, px, etc.)

### 2.4 Composition Over Duplication

- Build UI using reusable components from `/ui`
- Avoid inline or one-off solutions

---

## 3. Design Tokens

---

### 3.1 Colors

Color tokens are defined in Figma and mapped to Tailwind.

#### Core tokens:

- `background`
- `background-subtle`
- `foreground`
- `foreground-subtle`
- `foreground-emphasis`
- `muted-background`
- `muted-foreground`
- `ring`

#### State tokens:

- `success`, `success-subtle`, `success-emphasis`
- `destructive`, `destructive-subtle`, `destructive-emphasis`

#### Accent tokens:

- `accent-1` → primary highlight
- `accent-2` → hover / emphasis
- `accent-3`, `accent-4`, `accent-5` → supporting accents

#### Component tokens:

Buttons use dedicated tokens:

- `button-primary-*`
- `button-secondary-*`

---

### 3.2 Token → Tailwind Mapping

AI must use these mappings:

```tsx
bg - background;
bg - background - subtle;
text - foreground;
text - foreground - subtle;
text - foreground - emphasis;
bg - muted - background;
text - muted - foreground;
ring - ring;
```

---

### 3.3 Typography

#### Font Family

- `PP Frama`

#### Type Scale

AI must map semantic roles to:

- `display-large` → hero headlines

- `display-medium`

- `display-small`

- `headline-large` → page titles

- `headline-medium`

- `headline-small`

- `title-large`, → component titles

- `title-medium`,

- `title-small`

- `subline-large`, →

- `subline-medium`,

- `subline-small`

- `body-large` →

- `body-medium` → default text

- `body-small` → captions

- `label-large`, `label-medium`, `label-small` → buttons, UI labels

#### Font Weights

- `regular` (400)
- `black` (900)

---

### 3.4 Spacing

Spacing uses Tailwind scale only.

---

### 3.5 Radius

Only allowed values:

- `rounded-lg`
- `rounded-3xl`

---

### 3.6 Borders

Only allowed values:

- `border`
- `border-2`

---

## 4. Layout System

---

### 4.1 Layout Widths

- `content`
- `wide`

---

### 4.2 Container

All sections must use:

```tsx
<div className="max-w-content mx-auto px-6">
```

---

### 4.3 Section Spacing

- Default → `py-24`
- Dense → `py-16`

---

### 4.4 Grid & Flex

- Use Tailwind grid or flex
- Default gap → `gap-8`
- Large sections → `gap-12` or `gap-16`

---

## 5. Component Architecture

---

### 5.1 Folder Structure

```
/components
  /ui        → primitives (Button, Card, etc.)
  /blocks    → composed sections (Hero, Services, etc.)
```

---

### 5.2 Rules

- `/blocks` must only use `/ui` components
- No duplicated logic
- No inline styling
- No arbitrary Tailwind values

---

## 6. Component Rules

---

### 6.1 Button

#### Variants:

- `primary`
- `secondary`
- `ghost`

#### Behavior:

**Primary**

- Uses `button-primary-*` tokens
- High emphasis

**Secondary**

- Uses `button-secondary-*` tokens
- Lower emphasis or outlined

**Ghost**

- Uses `button-ghost-*` tokens
- Used for tertiary actions, inline UI controls and non-critical actions

---

## 7. Interaction Rules

All interactive elements MUST include:

- hover state
- focus-visible state
- active state
- disabled state

### Focus

Must use:

```tsx
focus-visible:outline-none focus-visible:ring-2 ring-ring
```

### Hover / Active

Must use token-based colors:

- no opacity hacks unless defined

---

## 8. Accessibility

- If a component exists in the Base UI library, use it

- All components must be keyboard accessible

- All focus states must be visible

- Use semantic HTML elements

---

## 9. Animation

- Prefer CSS transitions
- Keep motion minimal
- Avoid heavy animation unless specified

---

## 10. Code Conventions

---

### 10.1 General

- Use TypeScript
- Use functional components
- Use named exports

---

### 10.2 Styling

- Tailwind only
- No inline styles
- No CSS modules

---

### 10.3 Class Handling

- Use `cn()` utility

---

### 10.4 Props

- Always type props
- Always support `className`

---

## 11. AI Generation Rules (CRITICAL)

When generating UI, AI MUST:

1. Use components from `/ui`
2. Use semantic tokens only
3. Follow spacing rules (`tight`, `default`, etc.)
4. Use correct typography scale
5. Respect layout system (container, widths)
6. Include all interaction states
7. Never invent new tokens or values

---

## 12. Strict DO / DON'T

### DO:

- Use semantic color tokens
- Use defined typography scale
- Use Tailwind spacing scale
- Use existing components

### DO NOT:

- Use arbitrary values (e.g. `px-[18px]`)
- Use raw colors (e.g. `#000`)
- Create new tokens
- Inline styles
- Skip accessibility states

---

## 13. Example: Hero Section

```tsx
<section className="py-24">
  <div className="max-w-7xl mx-auto px-6">
    <div className="max-w-3xl flex flex-col gap-8">
      <h1 className="text-foreground headline-large">We build digital experiences</h1>

      <p className="text-foreground-subtle body-large">
        A creative agency focused on design and technology.
      </p>

      <div className="flex gap-8">
        <Button variant="primary">Start a project</Button>
        <Button variant="secondary">View work</Button>
      </div>
    </div>
  </div>
</section>
```

---

## 14. UI Implementation Patterns (CRITICAL FOR AI)

This project uses a shadcn-style architecture built on top of Base UI components and `class-variance-authority` (CVA) where appropriate.

AI must follow these implementation patterns strictly when generating components.

---

## 14.1 General Component Pattern

UI components should follow these conventions:

- use TypeScript
- use `React.forwardRef` when the primitive supports refs
- use `cn()` for class merging
- use Base UI primitives where relevant
- use `cva()` only when the component has meaningful visual variants or sizes

---

## 14.2 CVA Usage Rule

CVA is not mandatory for every component.

Use `cva()` when:

- a component has multiple variants
- a component has multiple sizes
- a component has structured state-based styling that benefits from a variant API

Do not use `cva()` when:

- a component has only one visual style
- styling is static and simple
- adding variants would create unnecessary abstraction

---

## 14.3 Variant API Rule

All components must:

- Support `className`
- Use `ref` props as in (https://react.dev/blog/2024/12/05/react-19#ref-as-a-prop)

Not all components must support:

- `variant`
- `size`

These props should only exist when they are meaningful for that component.

### Examples

A `Button` may support:

- `variant`
- `size`

A `Drawer` may support:

- `variant`
- `direction`

A `Card` may have:

- no variants initially
- optional CVA later if variants are introduced

---

## 14.4 Button Pattern

The Button component is a reference implementation for a component with:

- variants
- sizes

AI must reuse the existing Button component instead of recreating button styles inline.

---

## 14.5 AI Constraints (STRICT)

When generating UI, AI must:

- use existing `/ui` components first
- preserve each component’s existing API
- not invent `variant`, `size`, or any other props when they do not already belong to the component
- not force all components into the same abstraction pattern
- use CVA only where it improves consistency and maintainability

---

## 14.7 DO / DON'T

### DO

- use CVA for Button, Badge, Alert, or similar multi-variant components
- keep simple components simple
- match the implementation pattern already established in `/ui`

### DO NOT

- add `variant` to every component by default
- add `size` props where they are not needed
- wrap static styling in CVA without a clear reason

---

## 15. Future Extensions

- Dark / light mode switching (already supported via tokens)
- Motion system (GSAP optional)
- CMS-driven components (Sanity)

---
