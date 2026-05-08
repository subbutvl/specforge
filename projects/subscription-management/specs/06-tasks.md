# Tasks

## Pending

- [ ] **Lock v1-lite scope narrative (M1 outcome: clear boundaries)**
  - Consolidate current decisions from `00-idea`, `01-problem-brief`, and `02-domain-model`.
  - Add one concise "in-scope vs out-of-scope" checklist for quick review.
  - Confirm no household collaboration behaviors leak into v1-lite scope.

- [ ] **Finalize domain rule completeness (M1 outcome: low ambiguity domain model)**
  - Confirm required fields and optional fields for `Subscription`.
  - Confirm `Review Entry` minimum payload and update triggers.
  - Validate status transitions and default usage/worth behavior.

- [ ] **Harden local-first persistence contract (M2 outcome: migration-safe local model)**
  - Define ID format expectation for local records.
  - Define timestamp semantics (`createdAt`, `updatedAt`) consistently.
  - Define soft-delete marker semantics and default deletion behavior.

- [ ] **Define review workflow semantics (M3 outcome: repeatable user workflow)**
  - Document when a user is expected to update usage signal.
  - Document when a user is expected to update worth score.
  - Decide review cadence guidance (manual, prompted, or date-driven).

- [ ] **Prepare execution handoff package (M4 outcome: implementation-ready specs)**
  - Ensure `03`, `04`, `05`, `06`, `07`, `08` align to same v1-lite boundary.
  - Validate `01-problem-brief` acceptance criteria against domain and architecture specs.
  - Add a simple acceptance checklist artifact for first implementation sprint gating.
  - Mark explicit stub/fake areas expected in POC.

## In Progress

- [ ] **BMAD incremental clarification loop**
  - Continue one-question-at-a-time decisions.
  - Lock deterministic decisions immediately into specs.

## Completed

- [x] **Raw idea refined and captured (`00-idea.md`)**
- [x] **Problem brief seeded and sharpened (`01-problem-brief.md`)**
- [x] **Domain model established (`02-domain-model.md`)**
- [x] **Architecture direction locked (`03-architecture-notes.md`)**
- [x] **Design token direction set (`04-design-tokens.md`)**
- [x] **4-checkpoint milestone plan defined (`05-milestones.md`)**

## Blocked

- [ ] **Renewal reminder strictness**
  - Pending explicit v1-lite reminder behavior decision.

- [ ] **Review cadence policy**
  - Pending explicit frequency decision for usage/worth refresh.
