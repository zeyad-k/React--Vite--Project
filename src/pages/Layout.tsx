import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
 import Header from "../components/Header";

const Layout = () => {
  // const [t] = useTranslation("global");
  const { i18n: i18next } = useTranslation("global");

  // Determine the direction based on the current language
  const direction = i18next.language === "ar" ? "rtl" : "ltr";

  return (
    <div dir={direction}>
      
      
      <Header />
      

      <Outlet />
    </div>
  );
};

export default Layout;
