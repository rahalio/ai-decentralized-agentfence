# @agentfence/openapi-core

OpenAPI contracts for **Agentfence**. One YAML file per domain under `src/`.

**Rule:** After routine YAML edits, regenerate **core only** and handwrite lower layers. New domains use full multi-layer generate once (Mode A).

`.codegen/` is local-only — never commit or push it.

## Domains

| API | Entry |
| ----- | ----- |
| `identity` | `src/identity.yaml` |
| `agents` | `src/agents.yaml` |
| `policies` | `src/policies.yaml` |
| `audits` | `src/audits.yaml` |
| `kill-switch` | `src/kill-switch.yaml` |
| `add-ons` | `src/add-ons.yaml` |
| `delegations` | `src/delegations.yaml` |
| `incidents` | `src/incidents.yaml` |
| `reporting` | `src/reporting.yaml` |
| `marketplace-adapters` | `src/marketplace-adapters.yaml` |

Shared fragments live under `src/common/`.

## Commands

```bash
pnpm lint:domains
pnpm bundle:domains
```
