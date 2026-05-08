# Milestones

## M1 — Problem and Domain Lock

- Finalize problem boundaries for solo-first v1-lite.
- Lock core entities, status model, worth model, and usage signal semantics.
- Define deterministic vs flexible decisions so later specs do not drift.
- Validation checkpoint: can we clearly explain what v1-lite is and is not in under 2 minutes?

## M2 — Local-First Architecture Readiness

- Confirm local-first architecture constraints (`localStorage` + `SQLite WASM`).
- Define sync-friendly record conventions (stable IDs, timestamps, soft-delete markers).
- Capture key data-flow assumptions and non-goals for v1-lite.
- Validation checkpoint: does the architecture support current scope without backend coupling?

## M3 — Usability and Review Workflow Definition

- Finalize neutral utility design-token direction for dense subscription workflows.
- Define core review workflow: add/update subscription, status updates, worth scoring, usage updates.
- Clarify minimum reminder/review cadence expectations for v1-lite behavior.
- Validation checkpoint: can user quickly maintain a trustworthy "one place to see everything" view?

## M4 — Execution Packaging for POC and Future Build

- Convert specs into implementation-ready task slices without overcommitting stack details.
- Define v1-lite version boundary and success criteria for short-cycle validation.
- Prepare concise POC brief with demo scope, key interactions, and known stubs.
- Validation checkpoint: can an implementation pass begin immediately with low ambiguity?
