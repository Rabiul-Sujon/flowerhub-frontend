import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../hooks/useLanguage';

export default function FarmerDashboard() {
  const { t } = useTranslation();
  const { user } = useAuth();
  const { formatCurrency } = useLanguage();

  if (!user) {
    return <p className="max-w-6xl mx-auto px-5 py-16 text-ink/50">Please log in.</p>;
  }

  return (
    <div className="max-w-6xl mx-auto px-5 py-10">
      <div className="flex items-center gap-2 mb-6">
        <h1 className="font-display text-2xl">{user.name}</h1>
        {user.kycStatus === 'VERIFIED' && (
          <span className="text-[11px] bg-leaf/10 text-leaf border border-leaf/30 rounded-full px-2 py-0.5">
            {t('farmer.verifiedFarmer')}
          </span>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="border border-ink/10 rounded p-5 text-center">
          <p className="num text-2xl text-rose">{formatCurrency(user.availableBalance || 0)}</p>
          <p className="text-xs text-ink/50 mt-1">{t('farmer.escrowBalance')}</p>
        </div>
        <div className="border border-ink/10 rounded p-5 text-center">
          <p className="num text-2xl">{user.totalOrders || 0}</p>
          <p className="text-xs text-ink/50 mt-1">{t('farmer.activeOrders')}</p>
        </div>
      </div>

      <button className="w-full bg-marigold text-ink py-3 rounded font-medium mb-8">
        + {t('farmer.quickPost')}
      </button>

      <button className="w-full border border-ink/20 py-2.5 rounded font-medium">
        {t('farmer.cashOut')}
      </button>
    </div>
  );
}
