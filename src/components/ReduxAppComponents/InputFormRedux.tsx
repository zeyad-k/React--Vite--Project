import { useDispatch } from "react-redux";
import { useState, ChangeEvent, FormEvent } from "react";
import { addTodo } from "../../ReduxToolkit/todoSlice";
import { useTranslation } from "react-i18next";
 

const InputFormRedux = () => {
  const [text, setText] = useState<string>("");
   const dispatch = useDispatch();
   const { t } = useTranslation();


  const handleAddTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <form className="flex items-center space-x-2" onSubmit={handleAddTodo}>
      <input
        type="text"
        className="flex-1 p-2 border-2 border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        value={text}
        onChange={handleInputChange}
        placeholder={t("Add a new todo...")}
      />
      <button
        type="submit"
        className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        {t('add')}
      </button>
    </form>
  );
};

export default InputFormRedux;
