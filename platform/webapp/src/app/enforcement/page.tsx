'use client';

import { PepDecisionFeed } from '@/components/pep-decision-feed';
import { ScreenHeader } from '@/components/screen-header';
import { DEMO_DECISIONS } from '@/lib/demo-data';

export default function EnforcementPage() {
  return (
    <div>
      <ScreenHeader
        kicker="Runtime PEP"
        title="Allow and deny at invocation — with near-miss escalation"
      />
      <PepDecisionFeed decisions={DEMO_DECISIONS} />
      <div className="mt-6 flex gap-3">
        <button className="border border-hazard/40 px-4 py-2 text-sm text-hazard">
          Approve one-time exception
        </button>
        <button className="border border-white/20 px-4 py-2 text-sm">Harden rule</button>
      </div>
    </div>
  );
}
