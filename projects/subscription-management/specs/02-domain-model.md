# Domain Model

## Core Entities

- `Subscription`
  - title
  - category (app/course/ott/service/software/bill/custom)
  - cost amount
  - billing cycle (monthly/quarterly/yearly/custom)
  - renewal date
  - status (`active` | `trial` | `paused` | `canceled`)
  - usage signal (in use / not in use / unknown)
  - worth score (1-5)
  - worth note (optional text)
  - `createdAt` / `updatedAt`
  - `deletedAt` (nullable soft-delete marker)
- `Review Entry` (lightweight history for worth tracking)
  - subscription reference
  - review date
  - worth score (1-5)
  - note (optional)

## Relationships

- One `Subscription` can have many `Review Entry` items over time.
- Every `Review Entry` belongs to exactly one `Subscription`.

## Entity Rules

- `Subscription.title` is required.
- `Subscription.cost amount` must be non-negative.
- `Subscription.worth score` must be an integer from 1 to 5.
- `Review Entry.worth score` must be an integer from 1 to 5.
- `status` must be one of: `active`, `trial`, `paused`, `canceled`.
- `usage signal` must be one of: `in use`, `not in use`, `unknown`.
- `createdAt` and `updatedAt` are required on every domain record.
- `renewal date` can be empty for ambiguous/unknown billing setups, but should be encouraged.

## Invariants

- A canceled subscription is retained for historical visibility unless manually archived/deleted later.
- Worth score always exists on a subscription record once first review is added.
- New subscriptions default `usage signal` to `unknown` until explicitly reviewed.
- Soft delete is represented by `deletedAt`; hard delete is not the default behavior in v1-lite.
- System remains solo-user scoped in v1-lite (no shared ownership model in domain yet).

## State Transitions

- allowed:
  - `trial -> active`
  - `trial -> canceled`
  - `active -> paused`
  - `active -> canceled`
  - `paused -> active`
  - `paused -> canceled`
- disallowed direct transition:
  - `canceled -> active` (requires creating a new active subscription record or explicit restore flow in future)

## Future Expansion Areas

- Household/shared ownership and permissions
- Multiple payment sources and payment-method-level insights
- Auto-detected subscriptions from statements or integrations
- Advanced usage/worth analytics and recommendation logic
