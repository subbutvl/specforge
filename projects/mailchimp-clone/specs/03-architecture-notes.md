# Architecture Notes

## Stack

- Technology remains intentionally open in v1-lite (React/Angular/Blazor/ABP/MAUI/React Native are future options).
- Architecture style is fixed for v1-lite: modular monolith.
- Internal modules should map to product domains (audience, campaigns, templates, analytics, scheduling).

## System Boundaries

- In boundary (v1-lite):
  - audience/contact management with segmentation
  - campaign creation, scheduling, and status tracking
  - reusable template management
  - baseline campaign analytics
- Out of boundary (v1-lite):
  - advanced automation engine
  - multi-channel orchestration
  - enterprise workflow and permission systems
  - external integration ecosystem
- Future split boundaries should be explicit at module edges so modules can become services later without domain rewrites.

## Data Flow

- Contacts and audiences are created/updated in workspace context.
- Segments resolve recipient sets using tags + simple rule filters.
- Campaigns reference audience/segment + template, then execute by send mode (immediate, scheduled-once, recurring).
- All scheduling resolution is based on one configured workspace timezone.
- Execution writes status progression and baseline metrics snapshots.

## Persistence Strategy

- Keep persistence approach implementation-agnostic for now.
- Model data contracts around stable IDs and timestamps to reduce future migration risk.
- Support predictable scheduling state and metrics snapshots as first-class persisted records.
- Support archive behavior with explicit manual hard-delete operation for record lifecycle management.

## State Management

- Keep module-local state deterministic and explicitly modeled by domain state transitions.
- Avoid introducing cross-module orchestration complexity in v1-lite.
- Treat scheduling and campaign status progression as canonical workflow state.

## Security Considerations

- Baseline controls only in v1-lite: secure access assumptions without full role/approval model.
- Protect contact and campaign data from accidental cross-client mixing even in single-workspace mode (via strict data partitioning conventions at data layer).
- Defer enterprise-grade permission and compliance controls to later versions.

## Performance Constraints

- Optimize for practical agency workloads in one workspace.
- Ensure campaign lists, segment resolution, and baseline analytics views remain responsive.
- Recurring schedule handling must remain lightweight and predictable (daily/weekly only).

## Deployment Notes

- v1-lite deployment should remain simple (single deployable unit).
- Preserve clean module interfaces to avoid lock-in if future service split is required.

## Future Scalability

- Candidate future service boundaries:
  - audience/segment service
  - campaign execution service
  - template service
  - analytics service
- Introduce formal client/account isolation model before scaling to multi-tenant service architecture.
- Keep integration points abstract so external provider connectors can be added later.
