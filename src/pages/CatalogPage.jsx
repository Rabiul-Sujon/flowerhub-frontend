import { useTranslation } from 'react-i18next';
import { useFetch } from '../hooks/useFetch';
import { useLanguage } from '../hooks/useLanguage';

export default function CatalogPage() {
  const { t } = useTranslation();
  const { formatCurrency, formatNumber } = useLanguage();
  const { data: products, loading, error } = useFetch('/products');

  return (
    <div className="max-w-6xl mx-auto px-5 py-10">
      <h1 className="font-display text-2xl mb-6">{t('nav.catalog')}</h1>

      {loading && <p className="text-ink/50">Loading…</p>}
      {error && <p className="text-rose">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products?.map((p) => (
          <div key={p._id} className="border border-ink/10 rounded overflow-hidden bg-white/50">
            <div className="h-32 bg-paper flex items-center justify-center text-ink/30 text-xs">
              {p.photos?.[0] ? (
                <img src={p.photos[0]} alt={p.flowerType} className="w-full h-full object-cover" />
              ) : (
                'photo'
              )}
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start">
                <p className="font-medium">{p.flowerType}</p>
                <span className="text-[11px] border border-ink/20 rounded-full px-2 py-0.5">
                  {p.grade === 'A' ? t('product.gradeA') : t('product.gradeB')}
                </span>
              </div>
              <p className="text-xs text-ink/50 mt-1">
                {formatNumber(p.availableQuantity)} {t('product.available')}
              </p>
              <p className="num text-rose mt-2">
                {formatCurrency(p.pricePerUnit)}{' '}
                <span className="text-xs text-ink/40">/{t('product.perUnit')}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {products?.length === 0 && (
        <p className="text-ink/40 text-sm">No listings live right now.</p>
      )}
    </div>
  );
}
