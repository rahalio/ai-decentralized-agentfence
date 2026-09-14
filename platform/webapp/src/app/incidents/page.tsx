'use client';

import { ScreenHeader } from '@/components/screen-header';
import { DEMO_INCIDENTS } from '@/lib/demo-data';

export default function IncidentsPage() {
  return (
    <div>
      <ScreenHeader
        kicker="Playbooks"
        title="Incidents link audit slices to kill-switch and post-mortem"
      />
      {DEMO_INCIDENTS.length === 0 ? (
        <p className="text-gate">No open incidents.</p>
      ) : (
        <ul className="space-y-3">
          {DEMO_INCIDENTS.map((inc) => (
            <li key={inc.incidentId} className="border border-white/10 bg-charcoal-900 px-4 py-3">
              <p className="font-display">{inc.title}</p>
              <p className="mt-1 font-mono text-xs text-steel">{inc.incidentId}</p>
              <p className="mt-2 text-sm text-hazard">{inc.status}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
