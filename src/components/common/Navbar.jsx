import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../context/AuthContext';
import LanguageToggle from './LanguageToggle';

export default function Navbar() {
  const { t } = useTranslation();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const dashboardPath =
    user?.role === 'FARMER' ? '/farmer' : user?.role === 'ADMIN' ? '/admin' : '/buyer';

  return (
    <header className="border-b border-ink/10 bg-paper/95 backdrop-blur sticky top-0 z-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-3">
        <Link to="/" className="font-display text-xl text-rose">
          Flowerhub
        </Link>

        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <Link to="/catalog" className="hover:text-rose transition-colors">
            {t('nav.catalog')}
          </Link>
          {user ? (
            <Link to={dashboardPath} className="hover:text-rose transition-colors">
              {t('nav.account')}
            </Link>
          ) : (
            <Link to="/login" className="hover:text-rose transition-colors">
              {t('nav.login')}
            </Link>
          )}
          {user && (
            <button
              onClick={() => {
                logout();
                navigate('/');
              }}
              className="text-ink/50 hover:text-rose transition-colors"
            >
              ⏻
            </button>
          )}
        </nav>

        <LanguageToggle />
      </div>
    </header>
  );
}