import type { AgentRow } from '@/lib/demo-data';

export function AgentIdentityCard({ agent }: { agent: AgentRow }) {
  return (
    <article className="border border-white/10 bg-charcoal-900 p-4">
      <p className="font-mono text-xs text-steel">{agent.agentId}</p>
      <p className="mt-2 font-display text-lg">
        {agent.runtimeType.replace('_', ' ')}
      </p>
      <p className="mt-1 text-sm text-steel">
        Canonical enterprise id · {agent.enterpriseId}
      </p>
      <p className="mt-3 text-sm">
        Attestation:{' '}
        <span className={agent.attestationStatus === 'attested' ? 'text-gate' : 'text-hazard'}>
          {agent.attestationStatus}
        </span>
      </p>
      <p className="mt-1 text-sm text-steel">
        Marketplaces:{' '}
        {Object.keys(agent.marketplaceIds).length
          ? Object.entries(agent.marketplaceIds)
              .map(([k, v]) => `${k}=${v}`)
              .join(', ')
          : 'unmapped'}
      </p>
    </article>
  );
}
