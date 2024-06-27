import { useTranslation } from "react-i18next";

const ChangeLanguage = () => {
  const { i18n: i18next } = useTranslation("global");

  const handleChangeLanguage = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    i18next.changeLanguage(event.target.value);
  };

  return (
    <div className="flex mt-4">
      <label className="flex items-center space-x-2">
        <select
          value={i18next.language}
          onChange={handleChangeLanguage}
          className="px-4 py-2 bg-transparent border border-gray-400 rounded shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option className="text-gray-700" value="en">
            English
          </option>
          <option className="text-gray-700" value="ar">
            Arabic
          </option>
        </select>
      </label>
    </div>
  );
};
export default ChangeLanguage;
