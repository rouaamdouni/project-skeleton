import { useTranslation } from 'react-i18next';

function Homepage() {
  const { t, i18n, ready } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  if (ready) {
    return (
      <div>
        <button type="submit" onClick={() => changeLanguage('en')}>
          en
        </button>
        <button type="submit" onClick={() => changeLanguage('fr')}>
          fr
        </button>
        <button type="submit" onClick={() => changeLanguage('ar')}>
          ar
        </button>
        <div>{t('welcome_message')}</div>
        <div>{t('app_title')}</div>
        <div>{t('welcome_message')}</div>
        <div>{t('language')}</div>
        <div>{t('days_since_release')}</div>
      </div>
    );
  }
  return <span>Loading...</span>;
}
export default Homepage;
