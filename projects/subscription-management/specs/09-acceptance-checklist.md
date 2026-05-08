# Acceptance Checklist

## Purpose

Use this checklist as the implementation entry gate for `v1-lite`.  
A build cycle should start only when all mandatory checks are green or explicitly waived.

## Scope Lock

- [ ] v1-lite is explicitly solo-user only.
- [ ] Household collaboration is deferred and not leaking into current scope.
- [ ] Primary promise remains: one place to see all subscriptions.

## Domain Lock

- [ ] Status enum is fixed: `active`, `trial`, `paused`, `canceled`.
- [ ] Usage signal enum is fixed: `in use`, `not in use`, `unknown`.
- [ ] Worth model is fixed: integer score `1-5` plus optional note.
- [ ] Status transitions match domain rules and include blocked transitions.

## Data Contract Lock

- [ ] Domain records include stable ID.
- [ ] Domain records include `createdAt` and `updatedAt`.
- [ ] Soft delete is represented via nullable `deletedAt`.
- [ ] Hard delete is not default behavior for v1-lite.

## UX and Workflow Lock

- [ ] List/dashboard visibility includes status, cost, billing cycle, renewal date (or unknown), usage signal, and worth score.
- [ ] Core flows are deterministic: create subscription, update status, update usage, update worth score + note.
- [ ] Canceled subscriptions remain visible for historical tracking.

## Architecture Lock

- [ ] Persistence remains local-first for v1-lite.
- [ ] `localStorage` usage is limited to lightweight preferences/session concerns.
- [ ] `SQLite WASM` is used for core subscription and review-history data model.
- [ ] Cloud sync is deferred, but schema stays migration-friendly.

## POC Readiness Lock

- [ ] Demo scope includes happy path + key edge states.
- [ ] Mock data includes mixed categories, statuses, cycles, usage signals, and worth score spread.
- [ ] Stubbed areas are explicit: sync/import, household permissions, heavy automation, provider integrations.

## Open Decisions (Must Be Resolved or Deferred Explicitly)

- [ ] Renewal reminder strictness decision is documented.
- [ ] Review cadence policy is documented.
- [ ] Category strategy depth (fixed taxonomy vs custom labels) is documented.

## Sign-off

- Product/spec owner:
- Date:
- Notes / waivers:
