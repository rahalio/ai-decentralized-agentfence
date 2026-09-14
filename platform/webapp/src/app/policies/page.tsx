'use client';

import { BoundaryPolicyMatrix } from '@/components/boundary-policy-matrix';
import { ScreenHeader } from '@/components/screen-header';
import { DEMO_POLICIES } from '@/lib/demo-data';

export default function PoliciesPage() {
  const policy = DEMO_POLICIES[0];
  return (
    <div>
      <ScreenHeader
        kicker="Autonomy policies"
        title="Spend, tools, domains, and depth — enforced at runtime"
      />
      {policy ? (
        <>
          <p className="mb-4 text-sm text-steel">
            Reputation / staking is advisory only and cannot override these
            boundaries.
          </p>
          <BoundaryPolicyMatrix policy={policy} />
          <div className="mt-6 flex gap-3">
            <button className="border border-white/20 px-4 py-2 text-sm">Save</button>
            <button className="border border-white/20 px-4 py-2 text-sm">Simulate</button>
            <button className="bg-gate/20 px-4 py-2 text-sm text-gate">Publish</button>
          </div>
        </>
      ) : (
        <p className="text-emergency">Missing policy — deny all autonomous actions.</p>
      )}
    </div>
  );
}
