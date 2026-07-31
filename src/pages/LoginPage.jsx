import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const { devLogin } = useAuth();
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('FARMER');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const user = await devLogin({ phone, name, role });
      navigate(user.role === 'FARMER' ? '/farmer' : user.role === 'ADMIN' ? '/admin' : '/buyer');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-sm mx-auto px-5 py-16">
      <h1 className="font-display text-2xl mb-1">Login</h1>
      <p className="text-xs text-ink/50 mb-6">
        Dev mode — this creates/loads a test account without real OTP verification.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-xs text-ink/60 block mb-1">Phone</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="01712345678"
            required
            className="w-full border border-ink/20 rounded px-3 py-2 bg-white/60"
          />
        </div>
        <div>
          <label className="text-xs text-ink/60 block mb-1">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Rahim Uddin"
            className="w-full border border-ink/20 rounded px-3 py-2 bg-white/60"
          />
        </div>
        <div>
          <label className="text-xs text-ink/60 block mb-1">Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full border border-ink/20 rounded px-3 py-2 bg-white/60"
          >
            <option value="FARMER">Farmer</option>
            <option value="BUYER">Buyer</option>
            <option value="ADMIN">Admin</option>
          </select>
        </div>

        {error && <p className="text-rose text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-rose text-paper py-2.5 rounded font-medium hover:bg-rose/90 disabled:opacity-50"
        >
          {loading ? 'Logging in…' : 'Continue'}
        </button>
      </form>
    </div>
  );
}
