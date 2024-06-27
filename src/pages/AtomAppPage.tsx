import { RecoilRoot } from "recoil";
import TodoAppWithAtom from "../components/AtomAppComponents/TodoAppWithAtom";
import { useTranslation } from "react-i18next";

const AtomAppPage = () => {
  const { t } = useTranslation("global");
  return (
    <div className="flex flex-col     mt-3 ">
      <h1 className="text-red-500 text-center text-3xl my-5">
        {t("Atom_App_Page")}
      </h1>
      <RecoilRoot>
        <TodoAppWithAtom />
      </RecoilRoot>
    </div>
  );
};

export default AtomAppPage;
