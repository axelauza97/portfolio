export default function TechBadge({ name }) {
  return (
    <span className="px-2.5 py-1 text-xs font-mono rounded-full bg-accent-purple/10 text-accent-purple border border-accent-purple/20">
      {name}
    </span>
  );
}
