export default function TechBadge({ name }) {
  return (
    <span className="px-2.5 py-1 text-xs font-mono rounded-full bg-accent-teal/10 text-text-secondary border border-accent-teal/20">
      {name}
    </span>
  );
}
