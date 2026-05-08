# Problem Brief

## Vision

Provide agencies a practical, lightweight workspace to run core email marketing campaign operations for segmented audiences with reusable templates and basic performance visibility.

## Goals

- Enable teams to create, manage, schedule, and track marketing email campaigns in one workspace.
- Support segmented audience targeting without advanced automation complexity.
- Provide reusable email template workflows for repeated campaign execution.
- Provide baseline campaign analytics for quick performance feedback.

## Non Goals

- advanced automation workflows
- AI-generated campaigns
- multichannel messaging and SMS marketing
- realtime collaboration features
- enterprise deliverability tooling
- A/B testing
- advanced analytics and attribution
- approval workflows and role-based permissions
- external integrations

## Personas

- Agency campaign manager
- Marketing operations specialist
- Content marketer executing recurring campaigns

## User Journeys

- Build a segmented audience list and prepare a campaign.
- Select or reuse an email template and draft campaign content.
- Schedule campaign delivery and monitor execution status.
- Review baseline metrics: send count, delivered, open rate, click rate, unsubscribe rate, bounce rate.

## Functional Scope

- In scope (v1-lite):
  - single workspace campaign operations
  - audience/contact management for segmentation
  - campaign drafting, scheduling, and send tracking
  - workspace-timezone scheduling model (all schedules interpreted in one configured workspace timezone)
  - archive flow plus manual hard delete for core records
  - reusable template usage
  - baseline analytics metrics:
    - send count
    - delivered
    - open rate
    - click rate
    - unsubscribe rate
    - bounce rate
- Out of scope (v1-lite):
  - hard client isolation/workspace boundaries
  - all listed non-goal capability areas

## Non Functional Scope

- Lightweight, implementation-oriented specs without premature platform complexity.
- Technology-agnostic product decisions unless required in architecture notes.
- Clarity-first scope boundaries to keep v1-lite executable.

## Success Criteria

- After 30 days, the team can reliably create, manage, schedule, and track campaigns for segmented audiences using reusable templates and baseline analytics.

## Risks

- Scope creep toward enterprise marketing-suite behavior.
- Ambiguity in future client model causing rework if not planned carefully.
- Overloading v1-lite with analytics expectations beyond baseline metrics.

## Open Questions

- What future migration path should formalize client boundaries after v1-lite validation?
