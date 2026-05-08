# Milestones

## M1 — Problem and Scope Lock

- Freeze v1-lite boundaries for agency-focused single-workspace operation.
- Lock non-goals to prevent enterprise-suite scope creep.
- Validate core success statement and baseline analytics expectations.
- Validation checkpoint: can any stakeholder explain v1-lite scope in under 2 minutes?

## M2 — Domain and Workflow Determinism

- Finalize entities, relationships, state transitions, and segmentation model.
- Lock send modes (immediate, scheduled-once, recurring daily/weekly).
- Confirm deterministic constraints for campaign lifecycle and metrics snapshots.
- Validation checkpoint: can product and engineering derive consistent flows from domain docs?

## M3 — Architecture and Scalability Guardrails

- Finalize modular monolith boundaries and future service split seams.
- Ensure architecture notes remain tech-agnostic while implementation-oriented.
- Capture data contract assumptions to reduce future tenant/split rework.
- Validation checkpoint: can v1-lite ship as one unit while preserving split readiness?

## M4 — Experience and Usability Definition

- Lock hybrid token strategy (neutral base, creative accents in builder only).
- Finalize workflow clarity for campaign creation, scheduling, and tracking.
- Ensure analytics views prioritize operational readability.
- Validation checkpoint: does UX direction balance operational trust + creative workflow needs?

## M5 — Execution Packaging and POC Readiness

- Convert specs into implementation-ready task slices and acceptance checks.
- Finalize version boundaries (`v1-lite`, `v2-standard`, `v3-expanded`).
- Prepare POC scope with happy path + key edge conditions.
- Validation checkpoint: can a build kickoff begin with low ambiguity and controlled risk?
