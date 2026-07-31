import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import SpotTicker from '../components/buyer/SpotTicker';

export default function HomePage() {
  const { t } = useTranslation();
  const { data: rates } = useFetch('/rates');

  return (
    <div>
      <section className="bg-gradient-to-b from-marigold/20 to-transparent">
        <div className="max-w-6xl mx-auto px-5 py-16 sm:py-24">
          <h1 className="font-display text-3xl sm:text-5xl text-ink max-w-2xl leading-tight">
            {t('home.heroTitle')}
          </h1>
          <p className="mt-4 text-ink/70 max-w-xl">{t('home.heroSubtitle')}</p>
          <div className="mt-8 flex gap-3">
            <Link
              to="/login"
              className="bg-rose text-paper px-5 py-3 rounded font-medium hover:bg-rose/90 transition-colors"
            >
              {t('home.sellCta')}
            </Link>
            <Link
              to="/catalog"
              className="border border-ink/20 px-5 py-3 rounded font-medium hover:border-ink/40 transition-colors"
            >
              {t('home.buyCta')}
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-10">
        <h2 className="text-lg font-display mb-4">{t('home.todayRates')}</h2>
        <SpotTicker rates={rates?.rates || []} />
      </section>

      <section className="max-w-6xl mx-auto px-5 py-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="border border-ink/10 rounded p-5">
          <p className="text-trust font-medium">{t('home.whyEscrow')}</p>
        </div>
        <div className="border border-ink/10 rounded p-5">
          <p className="text-trust font-medium">{t('home.whyVerified')}</p>
        </div>
        <div className="border border-ink/10 rounded p-5">
          <p className="text-trust font-medium">{t('home.whyPayment')}</p>
        </div>
      </section>
    </div>
  );
}
