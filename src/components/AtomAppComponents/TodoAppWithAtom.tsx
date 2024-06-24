import InputFormRecoil from "./InputFormAtom";
import TodosListAtom from "./TodosListAtom";

const TodoAppWithAtom = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
        <InputFormRecoil />
        <TodosListAtom />
      </div>
    </div>
  );
};

export default TodoAppWithAtom;
