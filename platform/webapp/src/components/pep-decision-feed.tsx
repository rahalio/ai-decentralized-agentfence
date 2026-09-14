'use client';

import { useState } from 'react';
import type { DecisionRow } from '@/lib/demo-data';

export function PepDecisionFeed({ decisions }: { decisions: DecisionRow[] }) {
  const [flashId, setFlashId] = useState<string | null>(null);
  return (
    <ul className="space-y-3">
      {decisions.map((d) => (
        <li
          key={d.id}
          className={`border border-white/10 bg-charcoal-900 px-4 py-3 ${
            !d.allowed && flashId === d.id ? 'motion-deny' : ''
          }`}
          onMouseEnter={() => !d.allowed && setFlashId(d.id)}
        >
          <div className="flex items-baseline justify-between gap-4">
            <span className="font-mono text-xs text-steel">{d.agentId}</span>
            <span className={d.allowed ? 'text-gate' : 'text-emergency'}>
              {d.allowed ? 'allow' : 'deny'}
            </span>
          </div>
          <p className="mt-1 text-sm">{d.actionType}</p>
          <p className="mt-1 text-sm text-steel">{d.reason}</p>
          {d.modelProvenance ? (
            <p className="mt-1 font-mono text-xs text-steel">
              model {d.modelProvenance}
            </p>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
