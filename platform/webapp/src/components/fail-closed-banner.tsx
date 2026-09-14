'use client';

import { useHealth } from '@/contexts/health-context';

export function FailClosedBanner() {
  const { failClosed } = useHealth();
  if (!failClosed) return null;
  return (
    <div
      role="alert"
      className="motion-deny mb-6 border border-emergency/40 bg-emergency/10 px-4 py-3 text-sm"
      style={{ borderRadius: 'var(--radius-sm)' }}
    >
      Identity or audit path is unreachable. New autonomous actions are denied
      (fail closed).
    </div>
  );
}
