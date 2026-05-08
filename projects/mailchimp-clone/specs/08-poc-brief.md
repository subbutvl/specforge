# POC Brief

## Goal

Validate that an agency team can reliably run the core email campaign lifecycle in one workspace with reusable templates, segmented audiences, and baseline performance visibility.

## Demo Scope

- Include happy-path flows:
  - create/manage contacts and audience groups
  - apply tags and simple segment rule filters
  - create campaign from template
  - send immediately, schedule one-time, and configure recurring daily/weekly send
  - track baseline campaign metrics
- Include key edge states:
  - unsubscribed/bounced contacts in target audience
  - scheduled campaign cancellation before send
  - recurring schedule pause/cancel behavior
  - segment resulting in zero recipients

## Mock Data Requirements

- 2-4 agency-style campaign contexts represented in one workspace.
- 150-500 contacts with mixed tags and subscription statuses.
- 5-10 reusable templates across different campaign intents.
- 8-15 campaigns covering all send modes and status transitions.
- Metrics snapshots including send count, delivered, open rate, click rate, unsubscribe rate, bounce rate.

## Key Screens

- Contacts/Audience management view
- Segment definition and preview view
- Template library + template editor (lightweight)
- Campaign creation/scheduling flow
- Campaign list + detail analytics view

## Core Interactions

- Build segment from tags + simple rule filters.
- Create campaign from reusable template and select target audience/segment.
- Execute immediate send and configure scheduled/recurring modes.
- Track campaign lifecycle status and review baseline metrics.
- Handle edge states without breaking operational flow.

## Fake / Stubbed Areas

- External integrations (CRM, delivery providers, 3rd-party data sources)
- Advanced automation and journey builder
- A/B testing orchestration
- Enterprise permissions, approvals, and realtime collaboration
- Advanced analytics/attribution and AI-assisted campaign generation

## POC Constraints

- Keep architecture as modular monolith assumptions, no service decomposition work.
- Keep scope aligned to v1-lite non-goals and baseline analytics only.
- Prioritize end-to-end workflow clarity over deep feature completeness.
- Maintain technology-agnostic framing where possible.
