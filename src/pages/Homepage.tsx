import {useTranslation} from "react-i18next"

const langSelector =()=> {
  const { t, i18n, ready } = useTranslation();

  const changeLanguage = (lng:string) => {
    i18n.changeLanguage(lng);
  };

  if (ready) {
    return (
      <div > 
        <button onClick={() => changeLanguage("en")}>en</button>
        <button onClick={() => changeLanguage("fr")}>fr</button>
        <button onClick={() => changeLanguage("ar")}>ar</button>
        <div>{t("welcome_message")}</div>
        <div>{t("app_title")}</div>
        <div>{t("welcome_message")}</div>
        <div>{t("language")}</div>
        <div>{t("days_since_release")}</div>
        
      </div>
    );
  }
  return <span>Loading...</span>;
}

export default langSelector;

