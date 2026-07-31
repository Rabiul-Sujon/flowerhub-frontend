import { useAuth } from '../context/AuthContext';
import { useFetch } from '../hooks/useFetch';

export default function AdminDashboard() {
  const { user } = useAuth();
  const { data: disputes } = useFetch(user?.role === 'ADMIN' ? '/admin/disputes' : null, {
    skip: user?.role !== 'ADMIN',
  });

  if (!user || user.role !== 'ADMIN') {
    return <p className="max-w-6xl mx-auto px-5 py-16 text-ink/50">Admin access only.</p>;
  }

  return (
    <div className="max-w-6xl mx-auto px-5 py-10">
      <h1 className="font-display text-2xl mb-6">Escalation desk</h1>
      <div className="space-y-3">
        {disputes?.map((d) => (
          <div key={d._id} className="border border-ink/10 rounded p-4 bg-white/50">
            <p className="text-sm">Dispute — Order #{d._id.slice(-6)}</p>
            <p className="text-xs text-ink/50 mt-1">{d.dispute?.reason}</p>
          </div>
        ))}
        {(!disputes || disputes.length === 0) && (
          <p className="text-ink/40 text-sm">No open disputes.</p>
        )}
      </div>
    </div>
  );
}