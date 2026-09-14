import type { PolicyRow } from '@/lib/demo-data';

export function BoundaryPolicyMatrix({ policy }: { policy: PolicyRow }) {
  const rows = [
    ['Spend / day', String(policy.maxSpendPerDay)],
    ['Tools', policy.allowedTools.join(', ') || '—'],
    ['Sub-agent depth', String(policy.maxSubAgentDepth)],
    ['Prohibited domains', policy.prohibitedDomains.join(', ') || '—'],
    ['HITL threshold', `${policy.hitlSpendThresholdPct}%`],
  ];
  return (
    <table className="w-full text-left text-sm">
      <tbody>
        {rows.map(([k, v]) => (
          <tr key={k} className="border-b border-white/10">
            <th className="py-2 pr-4 font-display text-steel">{k}</th>
            <td className="py-2 font-mono text-ink">{v}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
