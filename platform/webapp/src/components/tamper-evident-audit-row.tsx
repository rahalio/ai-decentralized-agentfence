import type { AuditRow } from '@/lib/demo-data';

export function TamperEvidentAuditRow({
  event,
  broken,
}: {
  event: AuditRow;
  broken?: boolean;
}) {
  return (
    <tr className={broken ? 'bg-emergency/10' : undefined}>
      <td className="py-2 font-mono text-xs">{event.eventId}</td>
      <td className="py-2 font-mono text-xs text-steel">{event.agentId}</td>
      <td className="py-2">{event.actionType}</td>
      <td className={event.outcome === 'denied' ? 'text-emergency' : 'text-gate'}>
        {event.outcome}
      </td>
      <td className="py-2 font-mono text-xs">{event.recordHash}</td>
      <td className="py-2 font-mono text-xs text-steel">
        {event.modelProvenance ?? '—'}
      </td>
    </tr>
  );
}
