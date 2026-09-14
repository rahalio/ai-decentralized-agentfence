import type { DelegationNode } from '@/lib/demo-data';

export function KillBlastRadius({
  nodes,
  rootAgentId,
}: {
  nodes: DelegationNode[];
  rootAgentId: string;
}) {
  return (
    <div className="border border-emergency/30 bg-emergency/5 p-4">
      <p className="font-display text-emergency">Blast radius</p>
      <p className="mt-1 text-sm text-steel">
        Halt will include the root and inherited children.
      </p>
      <ul className="mt-3 space-y-2 font-mono text-sm">
        {nodes
          .filter(
            (n) => n.agentId === rootAgentId || n.parentAgentId === rootAgentId,
          )
          .map((n) => (
            <li key={n.agentId} style={{ paddingLeft: n.depth * 16 }}>
              {n.agentId} · depth {n.depth}
            </li>
          ))}
      </ul>
    </div>
  );
}
