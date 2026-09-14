'use client';

import { DelegationInheritBanner } from '@/components/delegation-inherit-banner';
import { KillBlastRadius } from '@/components/kill-blast-radius';
import { ScreenHeader } from '@/components/screen-header';
import { DEMO_GRAPH } from '@/lib/demo-data';

export default function DelegationsPage() {
  return (
    <div>
      <ScreenHeader
        kicker="Sub-agents"
        title="Parent boundaries inherit — orphan spawn is denied"
      />
      <DelegationInheritBanner />
      <KillBlastRadius
        nodes={DEMO_GRAPH}
        rootAgentId="agt_01jtravelorchestrator00001"
      />
    </div>
  );
}
