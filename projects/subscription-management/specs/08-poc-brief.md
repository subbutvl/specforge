# POC Brief

## Goal

Demonstrate that a solo user can maintain one reliable place to track subscriptions, status, cost, usage, and worth signals with low friction.

## Demo Scope

- Include happy-path core flows:
  - create subscription
  - update status
  - update usage signal
  - update worth score + optional note
  - review list/dashboard
- Include key edge states for balanced realism:
  - missing/unknown renewal date
  - trial subscription conversion/cancel path
  - paused subscription reactivation
  - canceled subscription retained in history view

## Mock Data Requirements

- 12-20 sample subscriptions across mixed categories (app, OTT, courses, software, recurring bills).
- Mix of billing cycles (monthly, yearly, custom).
- Distribution across all statuses (`active`, `trial`, `paused`, `canceled`).
- Usage signals covering `in use`, `not in use`, and `unknown`.
- Worth score distribution from 1-5 with optional notes on selected records.

## Key Screens

- Subscription list/dashboard (single source of truth view)
- Subscription create/edit form
- Subscription detail/review panel with worth and usage updates
- Lightweight history view for review entries

## Core Interactions

- Add a new subscription in under a minute
- Filter/scan subscriptions by status and category
- Record worth score and optional note during review
- Change usage signal and status with deterministic state rules
- Validate retained visibility for canceled entries

## Fake / Stubbed Areas

- External sync/import paths (not in v1-lite)
- Household collaboration and multi-user permissions
- Automation-heavy reminders and recommendation engine
- Real payment provider/bank integrations

## POC Constraints

- Local-first only (`localStorage` + `SQLite WASM`)
- No backend dependency for core demo
- Scope must remain aligned to v1-lite boundaries
- Optimize for clarity and validation, not production completeness
