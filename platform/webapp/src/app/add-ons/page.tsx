'use client';

import { AddOnAttestationBadge } from '@/components/addon-attestation-badge';
import { ScreenHeader } from '@/components/screen-header';
import { DEMO_ADDONS } from '@/lib/demo-data';

export default function AddOnsPage() {
  return (
    <div>
      <ScreenHeader
        kicker="Supply chain"
        title="Allowlisted extensions only — unattested loads deny"
      />
      <ul className="space-y-3">
        {DEMO_ADDONS.map((pkg) => (
          <li
            key={pkg.addOnId}
            className="flex items-center justify-between border border-white/10 bg-charcoal-900 px-4 py-3"
          >
            <div>
              <p className="font-display">{pkg.name}</p>
              <p className="font-mono text-xs text-steel">
                {pkg.version} · {pkg.artifactRef}
              </p>
            </div>
            <AddOnAttestationBadge status={pkg.status} />
          </li>
        ))}
      </ul>
      <div className="mt-6 flex gap-3">
        <button className="border border-white/20 px-4 py-2 text-sm">Submit</button>
        <button className="border border-gate/40 px-4 py-2 text-sm text-gate">Approve</button>
        <button className="border border-emergency/40 px-4 py-2 text-sm text-emergency">
          Revoke / unload
        </button>
      </div>
    </div>
  );
}
