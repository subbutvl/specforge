# Acceptance Checklist

## Purpose

Use this checklist as the implementation entry gate for `v1-lite`.  
A build cycle should start only when all mandatory checks are complete or explicitly waived.

## Scope Lock

- [ ] v1-lite remains single-workspace (no formal client/account boundary yet).
- [ ] Core promise remains balanced coverage across audience, campaigns, templates, scheduling, analytics.
- [ ] Non-goals remain excluded (automation, A/B testing, advanced analytics, integrations, approvals, RBAC, multichannel, AI generation).

## Domain Lock

- [ ] Segmentation model is fixed to tags + simple rule filters.
- [ ] Send modes are fixed: `immediate`, `scheduled-once`, `recurring`.
- [ ] Recurrence is fixed to simple `daily` and `weekly` only.
- [ ] Scheduling is interpreted in one configured workspace timezone.
- [ ] Archive + manual hard-delete behavior is defined for core records.

## Analytics Lock

- [ ] Baseline metrics set is fixed and implemented as-is:
  - send count
  - delivered
  - open rate
  - click rate
  - unsubscribe rate
  - bounce rate
- [ ] No advanced analytics or attribution behavior is added to v1-lite.

## Architecture Lock

- [ ] Architecture style is modular monolith.
- [ ] Module seams are explicit (audience/segment, campaigns, templates, analytics, scheduling).
- [ ] Data contracts use stable IDs + timestamps consistently.
- [ ] No premature service decomposition work is introduced.

## Experience Lock

- [ ] Hybrid visual system is applied correctly:
  - neutral utility base for workspace/ops flows
  - creative accents limited to campaign builder context
- [ ] Core workflows are clear and deterministic (create/manage/schedule/track campaigns).
- [ ] Operational views preserve readability and accessibility.

## POC Readiness Lock

- [ ] POC includes happy-path + key edge states.
- [ ] Mock data reflects realistic agency-scale usage patterns.
- [ ] Stubbed/deferred areas are explicit and aligned with non-goals.

## Open Decisions / Waivers

- [ ] Future migration path to formal client/account boundaries is documented.
- [ ] Any intentionally deferred acceptance item includes owner + planned milestone.

## Sign-off

- Product/spec owner:
- Date:
- Notes / waivers:
