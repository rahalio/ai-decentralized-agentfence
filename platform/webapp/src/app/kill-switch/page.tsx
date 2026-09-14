'use client';

import { useState } from 'react';
import { KillBlastRadius } from '@/components/kill-blast-radius';
import { ScreenHeader } from '@/components/screen-header';
import { DEMO_GRAPH, DEMO_KILLS } from '@/lib/demo-data';

export default function KillSwitchPage() {
  const order = DEMO_KILLS[0];
  const [armed, setArmed] = useState(false);
  const [executing, setExecuting] = useState(false);
  const [acked, setAcked] = useState(false);

  return (
    <div>
      <ScreenHeader
        kicker="Containment"
        title="Halt the agent, its children, and pending txs"
      />
      <p className="mb-6 font-display text-brand">Agentfence</p>
      {executing ? (
        <div className="motion-kill mb-6 bg-emergency/20 px-4 py-6 text-emergency">
          Kill-switch propagating — SLA {order.slaSeconds}s
        </div>
      ) : null}
      <KillBlastRadius nodes={DEMO_GRAPH} rootAgentId={order.rootAgentId} />
      <div className="mt-6 flex flex-wrap gap-3">
        <button
          className="border border-hazard px-4 py-2 text-hazard"
          onClick={() => setArmed(true)}
        >
          Arm (dual control)
        </button>
        <button
          className="bg-emergency px-4 py-2 text-ink disabled:opacity-40"
          disabled={!armed}
          onClick={() => setExecuting(true)}
        >
          Execute halt
        </button>
        <button
          className={`border border-gate px-4 py-2 text-gate ${acked ? 'motion-ack' : ''}`}
          onClick={() => setAcked(true)}
        >
          Confirm adapter acks
        </button>
      </div>
      {!armed ? (
        <p className="mt-4 text-sm text-steel">
          Dual-control arm is required before execute.
        </p>
      ) : null}
    </div>
  );
}
