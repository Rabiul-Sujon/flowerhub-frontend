import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';
import { useFetch } from '../hooks/useFetch';
import { useLanguage } from '../hooks/useLanguage';
import EscrowThread from '../components/common/EscrowThread';

export default function BuyerDashboard() {
  const { t } = useTranslation();
  const { user } = useAuth();
  const { formatCurrency } = useLanguage();
  const { data: orders } = useFetch('/orders/mine');

  if (!user) {
    return <p className="max-w-6xl mx-auto px-5 py-16 text-ink/50">Please log in.</p>;
  }

  return (
    <div className="max-w-6xl mx-auto px-5 py-10">
      <div className="flex items-center gap-2 mb-6">
        <h1 className="font-display text-2xl">{user.name}</h1>
        {user.badges?.includes('RELIABLE_PAYER') && (
          <span className="text-[11px] bg-trust/10 text-trust border border-trust/30 rounded-full px-2 py-0.5">
            {t('buyer.reliablePayer')}
          </span>
        )}
      </div>

      <div className="space-y-4">
        {orders?.map((order) => (
          <div key={order._id} className="border border-ink/10 rounded p-5 bg-white/50">
            <div className="flex justify-between items-start mb-3">
              <span className="text-sm text-ink/60">Order #{order._id.slice(-6)}</span>
              <span className="text-[11px] border border-ink/20 rounded-full px-2 py-0.5">
                {t(`order.${order.status.toLowerCase()}`, order.status)}
              </span>
            </div>

            <EscrowThread status={order.escrow?.status} />

            <div className="flex justify-between items-center mt-4">
              <span className="text-xs text-ink/50">{t('buyer.escrowHeld')}</span>
              <span className="num text-rose">{formatCurrency(order.escrow?.heldAmount || 0)}</span>
            </div>

            {order.status === 'DELIVERED' && (
              <div className="flex gap-2 mt-4">
                <button className="flex-1 bg-rose text-paper py-2 rounded text-sm font-medium">
                  {t('buyer.accept')}
                </button>
                <button className="flex-1 border border-ink/20 py-2 rounded text-sm font-medium">
                  {t('buyer.dispute')}
                </button>
              </div>
            )}
          </div>
        ))}

        {(!orders || orders.length === 0) && (
          <p className="text-ink/40 text-sm">No orders yet.</p>
        )}
      </div>
    </div>
  );
}
