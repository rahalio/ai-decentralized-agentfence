'use client';

import { ScreenHeader } from '@/components/screen-header';
import { DEMO_AUDITS, DEMO_KILLS } from '@/lib/demo-data';

export default function ReportingPage() {
  return (
    <div>
      <ScreenHeader kicker="Exports" title="Period compliance bundle" />
      <dl className="grid max-w-md grid-cols-2 gap-y-3 text-sm">
        <dt className="text-steel">Period</dt>
        <dd>2026-Q3</dd>
        <dt className="text-steel">Audit events</dt>
        <dd>{DEMO_AUDITS.length}</dd>
        <dt className="text-steel">Denied actions</dt>
        <dd>{DEMO_AUDITS.filter((a) => a.outcome === 'denied').length}</dd>
        <dt className="text-steel">Kill-switch invocations</dt>
        <dd>{DEMO_KILLS.length}</dd>
      </dl>
      <button className="mt-8 border border-white/20 px-4 py-2 text-sm">
        Export
      </button>
    </div>
  );
}
