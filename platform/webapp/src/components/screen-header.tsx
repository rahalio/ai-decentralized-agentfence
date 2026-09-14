export function ScreenHeader({
  title,
  kicker,
}: {
  title: string;
  kicker?: string;
}) {
  return (
    <header className="mb-8">
      {kicker ? (
        <p className="mb-2 font-display text-xs uppercase tracking-[0.18em] text-steel">
          {kicker}
        </p>
      ) : null}
      <h1 className="font-display text-3xl tracking-wide">{title}</h1>
    </header>
  );
}
