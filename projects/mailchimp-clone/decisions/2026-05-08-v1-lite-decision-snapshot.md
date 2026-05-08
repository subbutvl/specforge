# v1-lite Decision Snapshot

Date: 2026-05-08  
Project: `mailchimp-clone`  
Status: locked baseline for spec-defined phase

## Product Direction

- Primary user target: agencies managing multiple client audiences.
- v1-lite posture: balanced but shallow across core modules.
- 30-day outcome: team can create, manage, schedule, and track campaigns for segmented audiences with reusable templates and baseline analytics.

## Scope Decisions

- v1-lite is single-workspace only.
- No formal client/account boundary in v1-lite.
- Explicitly excluded in v1-lite:
  - advanced automation workflows
  - AI-generated campaigns
  - multichannel and SMS
  - realtime collaboration
  - enterprise deliverability tooling
  - A/B testing
  - advanced analytics/attribution
  - approvals and role-based permissions
  - external integrations

## Domain Decisions

- Segmentation model: tags + simple rule filters.
- Campaign send modes:
  - immediate
  - scheduled-once
  - recurring (daily/weekly only)
- Scheduling timezone behavior:
  - workspace timezone only (all schedules interpreted in configured workspace timezone)
- Record lifecycle behavior:
  - archive flow + manual hard delete (explicit permanent delete)
- Baseline analytics metrics:
  - send count
  - delivered
  - open rate
  - click rate
  - unsubscribe rate
  - bounce rate

## Architecture Decisions

- Architecture style: modular monolith now.
- Future-ready split seams are explicit:
  - audience/segment
  - campaigns/execution
  - templates
  - analytics
- Tech remains intentionally open; stack finalization deferred.

## UX/Design Decisions

- Hybrid visual strategy:
  - neutral utility base in workspace/ops views
  - creative accents limited to campaign builder surfaces

## Remaining Open Decision

- Define migration path from single-workspace model to formal client/account boundaries after v1-lite validation.
