'use client';

import { useState } from 'react';
import { ScreenHeader } from '@/components/screen-header';
import { TamperEvidentAuditRow } from '@/components/tamper-evident-audit-row';
import { DEMO_AUDITS } from '@/lib/demo-data';

export default function AuditsPage() {
  const [verified, setVerified] = useState<boolean | null>(null);
  return (
    <div>
      <ScreenHeader
        kicker="Compliance"
        title="Tamper-evident append-only trail"
      />
      <div className="mb-4 flex gap-3">
        <button
          className="border border-white/20 px-4 py-2 text-sm"
          onClick={() => setVerified(true)}
        >
          Verify chain
        </button>
        <button className="border border-white/20 px-4 py-2 text-sm">Export bundle</button>
      </div>
      {verified === true ? (
        <p className="mb-3 text-sm text-gate">Hash chain intact.</p>
      ) : null}
      <table className="w-full text-left text-sm">
        <thead className="text-steel">
          <tr>
            <th className="py-2">Event</th>
            <th>Agent</th>
            <th>Action</th>
            <th>Outcome</th>
            <th>Hash</th>
            <th>Provenance</th>
          </tr>
        </thead>
        <tbody>
          {DEMO_AUDITS.map((event) => (
            <TamperEvidentAuditRow key={event.eventId} event={event} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
