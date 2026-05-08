# Domain Model

## Core Entities

- `Contact`
  - email
  - display name
  - tags (multi-value)
  - subscription status (subscribed/unsubscribed/bounced)
  - createdAt / updatedAt
- `Audience`
  - name
  - contact references
  - segment definitions
- `Segment`
  - name
  - optional tag includes/excludes
  - optional simple rule filters
  - resolved contact set
- `Email Template`
  - name
  - subject draft
  - body/content draft
  - createdAt / updatedAt
- `Campaign`
  - name
  - audience reference
  - optional segment reference
  - template reference
  - send mode (`immediate` | `scheduled-once` | `recurring`)
  - scheduled time (for `scheduled-once`)
  - recurring cadence (`daily` | `weekly`, for `recurring`)
  - recurring start time
  - workspace timezone reference (resolved from workspace settings)
  - status
  - createdAt / updatedAt
- `Campaign Metrics Snapshot`
  - campaign reference
  - send count
  - delivered
  - open rate
  - click rate
  - unsubscribe rate
  - bounce rate
  - capturedAt

## Relationships

- One `Audience` contains many `Contact` records.
- One `Audience` can define many `Segment` items.
- One `Campaign` references one `Audience`, optionally narrowed by one `Segment`.
- One `Campaign` uses one `Email Template`.
- One `Campaign` can have many `Campaign Metrics Snapshot` entries over time.

## Entity Rules

- `Contact.email` is required and unique within v1-lite workspace.
- `Contact.subscription status` is one of: `subscribed`, `unsubscribed`, `bounced`.
- `Segment` supports balanced filtering:
  - tag-based include/exclude
  - simple rule filters (e.g., status-based, tag presence)
- `Campaign` requires `name`, `audience`, `template`, and `status`.
- `Campaign.send mode` must be one of: `immediate`, `scheduled-once`, `recurring`.
- `scheduled time` is required when send mode is `scheduled-once`.
- `recurring cadence` and `recurring start time` are required when send mode is `recurring`.
- All scheduling fields are interpreted in configured workspace timezone only (no per-campaign timezone in v1-lite).
- Core records support archive state and manual permanent hard delete action in v1-lite.
- Metrics fields are required in each `Campaign Metrics Snapshot`.

## Invariants

- v1-lite remains one workspace (no hard client boundary in domain yet).
- Campaign analytics stay at baseline metrics only.
- Segmentation remains tags + simple rule filters; advanced logic is out of scope.
- Recurrence in v1-lite is intentionally limited to simple `daily` and `weekly` cadence.
- Timezone behavior in v1-lite is fixed to workspace-level timezone interpretation.
- Archive is preferred for operational cleanup; hard delete remains a manual explicit action.

## State Transitions

- `Campaign` status flow:
  - `draft -> scheduled`
  - `draft -> sent`
  - `scheduled -> sent`
  - `scheduled -> canceled`
- terminal states in v1-lite:
  - `sent`, `canceled`

## Future Expansion Areas

- Formal client/account boundary model for agencies
- Advanced segment rule builder
- A/B testing entities and experiment outcomes
- Automation workflow entities (triggers/actions/journeys)
- Collaboration, approvals, and role/permission entities
