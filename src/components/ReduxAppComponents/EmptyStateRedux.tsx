import { useTranslation } from "react-i18next";

const EmptyStateRedux = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-4 text-center text-gray-500">
      {t("No todos yet. Add a new one above!")}
    </div>
  );
};

export default EmptyStateRedux;
