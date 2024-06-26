 
import InputFormRedux from "./InputFormRedux";
import TodosListRedux from "./TodosListRedux";

 

const TodoAppWithRedux = () => {
  

  return (
    <div className="flex flex-col items-center justify-center  ">
      <div className="w-full max-w-md p-4 bg-gray-100 rounded-lg shadow-md">
        <InputFormRedux />
        <TodosListRedux />
      </div>
    </div>
  );
};

export default TodoAppWithRedux;
