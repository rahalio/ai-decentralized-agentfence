# Agentfence — User stories

**Product:** [PRODUCT.md](./PRODUCT.md)


### Enterprise agent platform engineer

- As a platform engineer, I want to register an AEA with scoped credentials, so that it can bid on Fetch-like tasks without enterprise-wide keys.
- As a platform engineer, I want sub-agent calls to carry inherited spend caps, so that SingularityNET-style delegation cannot bypass limits.

### CISO / security architect

- As a CISO, I want a global kill-switch for an agent family, so that we answer the "cannot turn off AI DAO" risk for our deployments.
- As a security architect, I want autonomy boundaries enforced on tool invocation, so that probabilistic models cannot wire funds or exfiltrate data silently.

### Compliance officer

- As a compliance officer, I want tamper-evident audit exports per agent, so that regulators see accountability despite decentralised infrastructure.
- As a compliance officer, I want add-on marketplace packages reviewed before production, so that supply-chain compromise is blocked.

### Marketplace operator (partner)

- As a marketplace operator, I want to verify enterprise-attested agent identities, so that only governed bots participate in our network.

### Incident responder

- As an incident responder, I want one-click containment that stops pending agent transactions, so that damage is bounded when behaviour anomalies appear.

### Platform administrator

- As a platform administrator, I want fail-closed behaviour when identity service is down, so that agents do not run unauthenticated.
- As a platform administrator, I want negative-path alerts when an agent attempts a prohibited cross-domain call, so that violations are caught pre-execution.
