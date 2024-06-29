import { Provider } from "react-redux";
import store from "../ReduxToolkit/store";
import TodoAppWithRedux from "../components/ReduxAppComponents/TodoAppWithRedux";
import { useTranslation } from "react-i18next";

const ReduxAppPage = () => {
  const { t } = useTranslation("global");
  return (
    <div className="flex flex-col     mt-3 ">
      <h1 className="text-blue-500 text-center text-3xl my-5">
        {t("Redux_App_Page")}
      </h1>
      <Provider store={store}>
        <TodoAppWithRedux />
      </Provider>
    </div>
  );
};

export default ReduxAppPage;
