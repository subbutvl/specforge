# Mailchimp Clone (Marketing Team Platform)

Lightweight BMAD-style spec-first project for an agency-focused marketing campaign platform.

## Start Here (2-minute onboarding)

1. Read `metadata.json` for project status and readiness.
2. Read `decisions/2026-05-08-v1-lite-decision-snapshot.md` for locked decisions.
3. Follow the spec flow in order:
   - `specs/00-idea.md`
   - `specs/01-problem-brief.md`
   - `specs/02-domain-model.md`
   - `specs/03-architecture-notes.md`
   - `specs/04-design-tokens.md`
   - `specs/05-milestones.md`
   - `specs/06-tasks.md`
   - `specs/07-versions.md`
   - `specs/08-poc-brief.md`
4. Use `specs/09-acceptance-checklist.md` as the implementation entry gate.

## Current v1-lite Position

- Project readiness: `spec-defined`
- Architecture: modular monolith (future split seams defined)
- Scope posture: balanced core coverage, shallow depth
- Major open decision: migration path from single-workspace to formal client/account boundaries

## Working Rules

- Keep workflow spec-first, not implementation-first.
- Lock decisions incrementally and update snapshot files immediately.
- Prevent scope creep by checking non-goals before adding new requirements.
