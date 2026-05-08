# Design Tokens

## Visual Direction

- Hybrid direction:
  - neutral utility base for workspace, list views, analytics, and management flows
  - creative accents reserved for campaign builder/composer areas
- Keep UI trustworthy and operational by default, expressive only where content creation benefits.

## Color Tokens

- Base palette: neutral grays with restrained semantic colors for status/health.
- Accent palette: richer creative tones used only in campaign builder context.
- Guardrail: creative accents should not reduce information clarity in operational screens.

## Typography

- Clean sans-serif system for operational readability.
- Strong hierarchy for:
  - navigation and module labels
  - list/table data
  - campaign editor headings and content blocks
- Campaign builder can use slightly more expressive heading scale than management screens.

## Spacing

- 4px/8px rhythm foundation for consistency.
- Dense-enough spacing for management tables and audience lists.
- Slightly roomier composition spacing in campaign builder canvas.

## Radius

- Subtle radius on utility surfaces.
- Slightly increased radius allowed in creative/editor components only.

## Shadows

- Minimal depth in neutral workspace screens.
- Soft elevation for campaign builder panels where composition layering is useful.

## Motion

- Functional transitions for navigation, filtering, and status updates.
- Campaign builder can include mild expressive micro-interactions (still lightweight).
- Avoid decorative motion in analytics and operational views.

## Accessibility

- Preserve strong contrast across neutral and accent contexts.
- Do not rely on color alone for campaign status/metrics interpretation.
- Ensure editor accents remain accessible in light and dark conditions.

## Theme Strategy

- v1-lite default: neutral-light primary theme.
- Optional dark mode can follow same hybrid rule set:
  - neutral base stays dominant
  - creative accents remain limited to builder context.
