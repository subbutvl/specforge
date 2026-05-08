# Problem Brief

## Decision Snapshot

- v1-lite scope is solo-user first; household collaboration is deferred.
- Primary value proposition is a single place to see all subscriptions.
- Worth model is fixed to 1-5 score plus optional note.
- Usage model is fixed to `in use`, `not in use`, `unknown`.
- Persistence direction is local-first now, cloud migration later.

## Vision

Provide one simple, trustworthy place to see all personal subscriptions, their status, and their recurring financial impact, with household support planned as a later expansion.

## Goals

- Consolidate all recurring subscriptions into a single view
- Make subscription status and cost visible at a glance
- Help users track whether a subscription is actively used and still worth keeping

## Non Goals

- Bank-grade financial integrations in v1-lite
- Automated cancellation workflows
- Advanced forecasting or investment-style analytics

## Personas

- Individual user tracking personal subscriptions
- Future household coordinator for shared recurring subscriptions (post v1-lite)

## User Journeys

- Add a new subscription and basic metadata quickly
- Review active subscriptions in one dashboard/list
- Mark usage/worth signals over time to support keep/cancel decisions

## Functional Scope

- In scope (v1-lite):
  - subscription inventory
  - status tracking
  - cost and billing cycle tracking
  - usage/worth capture using a 1-5 worth score and optional note
- Out of scope (v1-lite):
  - deep automation
  - external account syncing
  - complex financial analysis
  - household collaboration/editing

## Non Functional Scope

- Lightweight and AI-friendly markdown-first specs
- Practical structure that can evolve without rework

## Success Criteria

- After 30 days, user can clearly list all current subscriptions and understand each one's status, cost, and perceived value.

## Acceptance Criteria (Implementation Entry)

- User can create, edit, and view subscription records with required fields and deterministic status values.
- List/dashboard view shows status, cost, billing cycle, renewal date (or unknown), usage signal, and worth score.
- Usage signal supports only: `in use`, `not in use`, `unknown`; new records default to `unknown`.
- Worth capture supports integer score from 1-5 plus optional note.
- Local data records include stable ID, `createdAt`, `updatedAt`, and optional `deletedAt` for soft-delete behavior.
- Canceled subscriptions remain visible for historical tracking unless explicitly archived/deleted by policy.

## Risks

- Scope creep into full personal-finance platform
- Inconsistent "worth" definitions between users
- Score fatigue if worth capture becomes too frequent

## Open Questions

- What renewal reminder behavior is mandatory for the first version?
- What review cadence should be encouraged for updating 1-5 worth scores?
