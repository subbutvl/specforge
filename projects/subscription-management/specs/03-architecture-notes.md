# Architecture Notes

## Stack

- v1-lite remains implementation-light and spec-driven.
- Working technical direction:
  - local-first runtime
  - browser storage primitives for immediate persistence
  - `SQLite WASM` for structured local data modeling

## System Boundaries

- In boundary (v1-lite):
  - local subscription data capture and review
  - local worth/usage tracking
  - local status and renewal visibility
- Out of boundary (v1-lite):
  - cloud sync
  - household collaboration
  - third-party billing/bank integrations

## Data Flow

- User creates/updates subscription records.
- Changes are persisted locally.
- Views derive current state and lightweight review history from local data.
- No server round-trips are required in v1-lite.

## Persistence Strategy

- Primary strategy: local-first.
- Practical split for v1-lite:
  - `localStorage` for lightweight app/session preferences
  - `SQLite WASM` for core subscription domain data and review history
- Cloud migration is intentionally deferred, but schema/record modeling should avoid assumptions that block future sync.
- Sync-friendly readiness in v1-lite:
  - stable IDs on domain records
  - `createdAt` and `updatedAt` timestamps
  - soft-delete markers (instead of hard delete by default)

## State Management

- Keep state handling minimal and predictable.
- Prefer deterministic local state transitions aligned with domain rules.
- Avoid introducing heavy orchestration patterns in v1-lite.

## Security Considerations

- v1-lite handles personal financial metadata locally; avoid collecting unnecessary sensitive fields.
- No cloud transmission path in v1-lite reduces remote exposure surface.
- Future cloud sync must define encryption/auth boundaries before rollout.

## Performance Constraints

- Optimize for fast local reads/writes on consumer devices.
- Keep data model compact and query patterns straightforward.
- Ensure list/dashboard views remain responsive with typical personal subscription volumes.

## Deployment Notes

- v1-lite can ship as a local-first web experience without backend dependency.
- Environment complexity should stay low to support rapid iteration of specs and product decisions.

## Future Scalability

- Add a migration layer from local-first schema to cloud-backed storage.
- Introduce account/identity and multi-user ownership model when household mode starts.
- Add sync conflict strategy only when cloud collaboration becomes in-scope.
