// The signature visual for Flowerhub: escrow rendered as a length of jute twine
// running between farmer and buyer. A drawn knot sits mid-thread while funds
// are HELD, and the knot loosens/opens once RELEASED or REFUNDED.
export default function EscrowThread({ status = 'HELD' }) {
  const knotted = status === 'HELD';

  return (
    <div className="flex items-center gap-2 w-full">
      <span className="text-xs text-ink/50 shrink-0">চাষি</span>
      <svg viewBox="0 0 160 24" className="flex-1 h-6" preserveAspectRatio="none">
        <path d="M4 12 C 40 4, 55 20, 76 12" className="twine-path" />
        {knotted ? (
          <g>
            <circle cx="80" cy="12" r="7" fill="none" stroke="#8a7550" strokeWidth="2" />
            <circle cx="80" cy="12" r="2.4" fill="#8a7550" />
          </g>
        ) : (
          <circle cx="80" cy="12" r="2" fill="#3F5A3A" />
        )}
        <path d="M84 12 C 105 4, 120 20, 156 12" className="twine-path" />
      </svg>
      <span className="text-xs text-ink/50 shrink-0">ক্রেতা</span>
    </div>
  );
}