export type AgentRow = {
  agentId: string;
  enterpriseId: string;
  runtimeType: 'fetch_aea' | 'singularitynet' | 'internal';
  status: 'active' | 'suspended' | 'killed';
  marketplaceIds: Record<string, string>;
  parentAgentId?: string;
  attestationStatus: 'unverified' | 'attested' | 'revoked';
  spendUsedPct: number;
  nearLimit: boolean;
};

export type PolicyRow = {
  policyId: string;
  agentId: string;
  status: 'draft' | 'published' | 'archived';
  maxSpendPerDay: number;
  allowedTools: string[];
  maxSubAgentDepth: number;
  prohibitedDomains: string[];
  hitlSpendThresholdPct: number;
  advisoryTrustScore?: number;
};

export type DecisionRow = {
  id: string;
  agentId: string;
  actionType: string;
  allowed: boolean;
  reason: string;
  reasonCode: string;
  escalationRequired: boolean;
  modelProvenance?: string;
  at: string;
};

export type AuditRow = {
  eventId: string;
  agentId: string;
  actionType: string;
  outcome: 'allowed' | 'denied' | 'exception';
  recordHash: string;
  previousHash?: string;
  modelProvenance?: string;
  occurredAt: string;
};

export type KillOrderRow = {
  orderId: string;
  rootAgentId: string;
  status: 'draft' | 'armed' | 'propagating' | 'completed' | 'failed' | 'partial';
  includeSubAgents: boolean;
  rationale: string;
  ackCount: number;
  invokedAt: string;
  slaSeconds: number;
};

export type AddOnRow = {
  addOnId: string;
  name: string;
  version: string;
  status: 'pending' | 'approved' | 'blocked' | 'revoked';
  artifactRef: string;
};

export type DelegationNode = {
  agentId: string;
  parentAgentId?: string;
  depth: number;
};

export type IncidentRow = {
  incidentId: string;
  title: string;
  status: 'open' | 'investigating' | 'closed';
  rootAgentId: string;
  killSwitchOrderId?: string;
  createdAt: string;
};

export type AdapterRow = {
  adapterId: string;
  name: string;
  marketplace: 'fetch' | 'singularitynet' | 'internal';
  status: 'active' | 'degraded' | 'offline';
};

export const DEMO_AGENTS: AgentRow[] = [
  {
    agentId: 'agt_01jtravelorchestrator00001',
    enterpriseId: 'ent_blocks',
    runtimeType: 'fetch_aea',
    status: 'active',
    marketplaceIds: { fetch: 'aea_travel_01' },
    attestationStatus: 'attested',
    spendUsedPct: 91,
    nearLimit: true,
  },
  {
    agentId: 'agt_01jsnetsubcontractor000002',
    enterpriseId: 'ent_blocks',
    runtimeType: 'singularitynet',
    status: 'active',
    marketplaceIds: { singularitynet: 'snet_route_9' },
    parentAgentId: 'agt_01jtravelorchestrator00001',
    attestationStatus: 'attested',
    spendUsedPct: 44,
    nearLimit: false,
  },
  {
    agentId: 'agt_01jinternalopsbot000000003',
    enterpriseId: 'ent_blocks',
    runtimeType: 'internal',
    status: 'suspended',
    marketplaceIds: {},
    attestationStatus: 'unverified',
    spendUsedPct: 0,
    nearLimit: false,
  },
];

export const DEMO_POLICIES: PolicyRow[] = [
  {
    policyId: 'pol_01jtravelcap0000000000001',
    agentId: 'agt_01jtravelorchestrator00001',
    status: 'published',
    maxSpendPerDay: 2500,
    allowedTools: ['payments.transfer', 'travel.book', 'agents.spawn'],
    maxSubAgentDepth: 2,
    prohibitedDomains: ['hr.payroll', 'secrets.vault'],
    hitlSpendThresholdPct: 80,
    advisoryTrustScore: 0.72,
  },
];

export const DEMO_DECISIONS: DecisionRow[] = [
  {
    id: 'dec_1',
    agentId: 'agt_01jtravelorchestrator00001',
    actionType: 'payments.transfer',
    allowed: false,
    reason: 'Near daily spend cap — HITL required',
    reasonCode: 'NEAR_LIMIT',
    escalationRequired: true,
    modelProvenance: 'route-ranker@2.4',
    at: '2026-09-14T07:12:00Z',
  },
  {
    id: 'dec_2',
    agentId: 'agt_01jsnetsubcontractor000002',
    actionType: 'travel.reroute',
    allowed: true,
    reason: 'Within inherited depth and spend',
    reasonCode: 'ALLOW',
    escalationRequired: false,
    at: '2026-09-14T07:08:00Z',
  },
];

export const DEMO_AUDITS: AuditRow[] = [
  {
    eventId: 'aud_01jhashchain0000000000001',
    agentId: 'agt_01jtravelorchestrator00001',
    actionType: 'payments.transfer',
    outcome: 'denied',
    recordHash: '9f2c…a1b0',
    previousHash: '4aa1…11e2',
    modelProvenance: 'route-ranker@2.4',
    occurredAt: '2026-09-14T07:12:00Z',
  },
  {
    eventId: 'aud_01jhashchain0000000000002',
    agentId: 'agt_01jsnetsubcontractor000002',
    actionType: 'travel.reroute',
    outcome: 'allowed',
    recordHash: '4aa1…11e2',
    occurredAt: '2026-09-14T07:08:00Z',
  },
];

export const DEMO_KILLS: KillOrderRow[] = [
  {
    orderId: 'ksw_01jcontainment00000000001',
    rootAgentId: 'agt_01jtravelorchestrator00001',
    status: 'draft',
    includeSubAgents: true,
    rationale: 'Anomalous spend near cap',
    ackCount: 0,
    invokedAt: '2026-09-14T07:20:00Z',
    slaSeconds: 30,
  },
];

export const DEMO_ADDONS: AddOnRow[] = [
  {
    addOnId: 'ado_01jledgerbridge0000000001',
    name: 'Ledger bridge',
    version: '1.3.0',
    status: 'approved',
    artifactRef: 'oci://addons/ledger-bridge:1.3.0',
  },
  {
    addOnId: 'ado_01jshadowtool000000000002',
    name: 'Unattested scraper',
    version: '0.1.0',
    status: 'pending',
    artifactRef: 'oci://addons/scraper:0.1.0',
  },
];

export const DEMO_GRAPH: DelegationNode[] = [
  { agentId: 'agt_01jtravelorchestrator00001', depth: 0 },
  {
    agentId: 'agt_01jsnetsubcontractor000002',
    parentAgentId: 'agt_01jtravelorchestrator00001',
    depth: 1,
  },
];

export const DEMO_INCIDENTS: IncidentRow[] = [
  {
    incidentId: 'inc_01jnearlimit0000000000001',
    title: 'Travel AEA near spend cap',
    status: 'open',
    rootAgentId: 'agt_01jtravelorchestrator00001',
    createdAt: '2026-09-14T07:12:00Z',
  },
];

export const DEMO_ADAPTERS: AdapterRow[] = [
  {
    adapterId: 'mkt_01jfetchruntime0000000001',
    name: 'Fetch AEA control channel',
    marketplace: 'fetch',
    status: 'active',
  },
  {
    adapterId: 'mkt_01jsnetruntime00000000002',
    name: 'SingularityNET halt bus',
    marketplace: 'singularitynet',
    status: 'degraded',
  },
];
