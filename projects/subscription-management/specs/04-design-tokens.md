# Design Tokens

## Visual Direction

- Neutral utility interface: clean, dashboard-like, minimal personality.
- Prioritize readability, status scanning, and low cognitive load over brand expression.

## Color Tokens

- Use restrained neutrals for surfaces and layout hierarchy.
- Reserve accent colors for actionable elements and selection states.
- Use semantic status colors for subscription state and review signals:
  - active = success-leaning
  - trial = info/attention-leaning
  - paused = neutral-muted
  - canceled = subdued danger/destructive tone

## Typography

- Sans-serif system stack for clarity and broad platform consistency.
- Clear hierarchy:
  - dashboard headings
  - section labels
  - dense row-level metadata
- Numeric values (costs, score) should emphasize legibility over stylistic flair.

## Spacing

- 4px baseline spacing scale.
- Compact-but-breathable defaults to support list-heavy subscription workflows.
- Keep consistent vertical rhythm between filters, list rows, and detail panels.

## Radius

- Small-to-medium corner radius only.
- Avoid highly rounded shapes to preserve utility tone.

## Shadows

- Minimal elevation system.
- Prefer border + contrast separation over heavy shadows.

## Motion

- Subtle transitions only (state change, row expansion, panel open/close).
- Motion must support orientation; no decorative animations in v1-lite.

## Accessibility

- Ensure contrast levels are sufficient for dense list views and status chips.
- Do not rely on color alone for status communication (use text/icon support).
- Keep interactive targets usable in compact layouts.

## Theme Strategy

- Start with a single neutral-light primary theme for v1-lite.
- Dark mode remains optional/future unless it becomes a usability requirement.
