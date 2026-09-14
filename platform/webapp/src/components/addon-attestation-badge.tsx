export function AddOnAttestationBadge({
  status,
}: {
  status: 'pending' | 'approved' | 'blocked' | 'revoked';
}) {
  const color =
    status === 'approved'
      ? 'text-gate'
      : status === 'pending'
        ? 'text-hazard'
        : 'text-emergency';
  return <span className={`font-display text-sm ${color}`}>{status}</span>;
}
