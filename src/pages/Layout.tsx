import { useTranslation } from "react-i18next";
import { Outlet, Link } from "react-router-dom";
import ChangeLanguage from "../components/LanguageComponents/ChangeLanguage";

const Layout = () => {
  // const [t] = useTranslation("global");
  const {t, i18n: i18next } = useTranslation("global");

  // Determine the direction based on the current language
  const direction = i18next.language === 'ar' ? 'rtl' : 'ltr';

  return (
    <div dir={direction}>
      <ChangeLanguage />
      <nav className="bg-gray-800 flex gap-2 items-center text-white p-4">
        
        <ul className="flex  gap-3 justify-center">
          <li>
            <Link to="/" className="hover:text-gray-400">
              {t("home")}
            </Link>
          </li>
          <li>
            <Link to="/redux" className="hover:text-gray-400">
              {t("redux")}
            </Link>
          </li>
          <li>
            <Link to="/atom" className="hover:text-gray-400">
              {t("atom")}
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;
