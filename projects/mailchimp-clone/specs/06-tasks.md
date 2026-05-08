# Tasks

## Pending

- [ ] **Lock v1-lite scope guardrails (M1 outcome: no scope creep)**
  - Add a concise in-scope/out-of-scope checklist aligned with `01-problem-brief`.
  - Validate non-goals are consistently reflected across all spec files.
  - Add one-line v1-lite pitch for team alignment.

- [ ] **Finalize domain determinism (M2 outcome: unambiguous workflow model)**
  - Validate entity field requirements and state transitions in `02-domain-model`.
  - Confirm segmentation constraints (tags + simple rule filters).
  - Confirm scheduling constraints (immediate, scheduled-once, recurring daily/weekly).

- [ ] **Define data contract baseline (M3 outcome: split-ready architecture posture)**
  - Add stable ID and timestamp conventions to domain entities where missing.
  - Define baseline archive + manual hard-delete behavior for core records.
  - Ensure architecture and domain docs use consistent terminology.

- [ ] **Harden modular boundaries (M3 outcome: monolith-now, split-later clarity)**
  - Document module seams: audience/segment, campaigns, templates, analytics.
  - Clarify expected cross-module interaction rules in v1-lite.
  - Capture future split assumptions without introducing service complexity now.

- [ ] **Finalize UX workflow clarity (M4 outcome: usable and coherent operator experience)**
  - Define minimum steps for create/edit/schedule/track campaign journeys.
  - Validate hybrid design-token rules against operational screens vs builder screens.
  - Confirm analytics readability expectations for baseline metric set.

- [ ] **Prepare implementation handoff package (M5 outcome: low-ambiguity kickoff)**
  - Create acceptance checklist for v1-lite build entry.
  - Align `07-versions` and `08-poc-brief` with current non-goals and constraints.
  - Mark stubs and deferred areas explicitly for POC scope control.

## In Progress

- [ ] **Incremental BMAD clarification loop**
  - Continue decision-by-decision progression.
  - Lock deterministic decisions immediately after each clarification.

## Completed

- [x] **Project structure initialized (`metadata`, `specs`, `decisions`, `prompts`, `assets`)**
- [x] **Raw idea clarified and bounded (`00-idea.md`)**
- [x] **Problem brief drafted with v1-lite boundaries (`01-problem-brief.md`)**
- [x] **Domain model drafted with balanced segmentation and scheduling modes (`02-domain-model.md`)**
- [x] **Architecture notes locked to modular monolith with future split seams (`03-architecture-notes.md`)**
- [x] **Hybrid design token direction defined (`04-design-tokens.md`)**
- [x] **5-checkpoint milestone framework defined (`05-milestones.md`)**

## Blocked

- [ ] **Formal client boundary model**
  - Deferred intentionally until after v1-lite validation.

- [ ] **Advanced workflow capabilities**
  - Automation, A/B testing, and advanced analytics remain deferred by scope guardrails.
