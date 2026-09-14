'use client';

import { AgentIdentityCard } from '@/components/agent-identity-card';
import { ScreenHeader } from '@/components/screen-header';
import { DEMO_AGENTS } from '@/lib/demo-data';

export default function AgentsPage() {
  return (
    <div>
      <ScreenHeader
        kicker="Identity registry"
        title="Cryptographic agent identity before any workflow join"
      />
      <div className="mb-6 flex gap-3">
        <button className="border border-white/20 px-4 py-2 text-sm">Register</button>
        <button className="border border-white/20 px-4 py-2 text-sm">Rotate secrets</button>
        <button className="border border-white/20 px-4 py-2 text-sm">Map marketplace ids</button>
      </div>
      {DEMO_AGENTS.some((a) => Object.keys(a.marketplaceIds).length === 0) ? (
        <p className="mb-4 text-sm text-hazard">
          Unmapped marketplace id cannot join a workflow.
        </p>
      ) : null}
      <div className="grid gap-4 md:grid-cols-2">
        {DEMO_AGENTS.map((agent) => (
          <AgentIdentityCard key={agent.agentId} agent={agent} />
        ))}
      </div>
    </div>
  );
}
