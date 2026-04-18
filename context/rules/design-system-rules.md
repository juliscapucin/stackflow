# Design System Core Rules

This is the canonical shared rule file for both Cursor and Claude agents.

For full token lists, Figma workflow, state requirements, and implementation details, use:
`/context/rules/figma-design-system.md`

## Non-Negotiables

- Use existing `components/ui/*` primitives before creating new UI.
- Use token-driven styles only (`src/styles/tokens.css`), no hardcoded colors.
- No arbitrary Tailwind values.
- Keep layout and typography semantic and consistent with the Figma rule file.
