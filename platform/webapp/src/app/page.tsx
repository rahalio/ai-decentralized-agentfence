'use client';

import Link from 'next/link';
import { ScreenHeader } from '@/components/screen-header';
import {
  DEMO_AGENTS,
  DEMO_DECISIONS,
  DEMO_KILLS,
} from '@/lib/demo-data';
import { useHealth } from '@/contexts/health-context';

export default function SecurityHomePage() {
  const { failClosed } = useHealth();
  const near = DEMO_AGENTS.filter((a) => a.nearLimit);
  const denied = DEMO_DECISIONS.filter((d) => !d.allowed);
  const ready = DEMO_KILLS[0];

  return (
    <div>
      <ScreenHeader
        kicker="CISO home"
        title="Which agents are near limits — and can we halt them now?"
      />
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <section>
          <h2 className="mb-3 font-display text-sm uppercase tracking-widest text-steel">
            Risk band
          </h2>
          {DEMO_AGENTS.length === 0 ? (
            <p className="text-steel">Register the first agent identity.</p>
          ) : (
            <ul className="space-y-3">
              {DEMO_AGENTS.map((a) => (
                <li key={a.agentId}>
                  <Link
                    href="/agents"
                    className="flex items-center justify-between border border-white/10 bg-charcoal-900 px-4 py-3"
                  >
                    <span className="font-mono text-sm">{a.agentId}</span>
                    <span
                      className={
                        a.nearLimit ? 'text-hazard' : a.status === 'suspended' ? 'text-emergency' : 'text-gate'
                      }
                    >
                      {a.nearLimit ? `${a.spendUsedPct}% spend` : a.status}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
        <aside className="space-y-6">
          <section>
            <h2 className="mb-3 font-display text-sm uppercase tracking-widest text-steel">
              Near-limit HITL
            </h2>
            <p className="text-sm text-steel">
              {near.length} agent{near.length === 1 ? '' : 's'} approaching a
              boundary. {denied.length} denied action{denied.length === 1 ? '' : 's'} in the live feed.
            </p>
            <Link href="/enforcement" className="mt-2 inline-block text-sm text-hazard">
              Review denied actions
            </Link>
          </section>
          <section>
            <h2 className="mb-3 font-display text-sm uppercase tracking-widest text-steel">
              Kill-switch SLA
            </h2>
            <p className="font-display text-2xl text-emergency">
              {ready.slaSeconds}s
            </p>
            <p className="mt-1 text-sm text-steel">
              Target halt for agent trees and pending txs.
            </p>
            <Link href="/kill-switch" className="mt-2 inline-block text-sm text-emergency">
              Arm kill
            </Link>
          </section>
          <section>
            <h2 className="mb-3 font-display text-sm uppercase tracking-widest text-steel">
              Fail-closed
            </h2>
            <p className={failClosed ? 'text-emergency' : 'text-gate'}>
              {failClosed ? 'PEP unreachable — deny all' : 'Identity and audit reachable'}
            </p>
            <p className="mt-2 text-sm text-steel">Shadow-agent scan: 1 unmapped id</p>
          </section>
        </aside>
      </div>
    </div>
  );
}
