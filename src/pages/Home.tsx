import { useTranslation } from "react-i18next";
import TodoApp from "../components/TodoApp";

const Home = () => {
  const { t } = useTranslation("global");
  return (
    <>
      <h1 className="text-3xl font-bold  mb-6 text-center underline">
        {t("Todo App using props drilling")}
      </h1>
      <div className="flex justify-center">
        <div className="w-1/8">
          <TodoApp />
        </div>
      </div>
    </>
  );
};

export default Home;
