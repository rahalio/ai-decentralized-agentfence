'use client';

import { ScreenHeader } from '@/components/screen-header';
import { DEMO_ADAPTERS, DEMO_AGENTS } from '@/lib/demo-data';

export default function AttestationPage() {
  const attested = DEMO_AGENTS.filter((a) => a.attestationStatus === 'attested');
  return (
    <div>
      <ScreenHeader
        kicker="Partner verifier"
        title="Enterprise-attested identities only"
      />
      <ul className="mb-10 space-y-3">
        {attested.map((a) => (
          <li key={a.agentId} className="border border-gate/30 bg-charcoal-900 px-4 py-3">
            <p className="font-mono text-sm">{a.agentId}</p>
            <p className="mt-1 text-sm text-gate">attested · {a.enterpriseId}</p>
          </li>
        ))}
      </ul>
      <h2 className="mb-3 font-display text-sm uppercase tracking-widest text-steel">
        Adapters
      </h2>
      <ul className="space-y-2">
        {DEMO_ADAPTERS.map((ad) => (
          <li key={ad.adapterId} className="flex justify-between text-sm">
            <span>{ad.name}</span>
            <span className={ad.status === 'active' ? 'text-gate' : 'text-hazard'}>
              {ad.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
