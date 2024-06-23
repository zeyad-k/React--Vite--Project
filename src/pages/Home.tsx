import TodoApp from "../components/TodoApp";

const Home = () => {
  return (
    <>
      <h1 className="text-3xl font-bold  mb-6 text-center underline">
        Todo App using props drilling
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
