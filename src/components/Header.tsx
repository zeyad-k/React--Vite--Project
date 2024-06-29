import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ChangeLanguage from "./LanguageComponents/ChangeLanguage";

const Header = () => {
  const { t } = useTranslation("global");

  return (
    // <div>
      <nav className="bg-gray-800 flex gap-2 items-center justify-between text-white  px-16 py-2">
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
        <ChangeLanguage />
      </nav>
    // </div>
  );
};

export default Header;
