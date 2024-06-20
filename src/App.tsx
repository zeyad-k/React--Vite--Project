import TodoApp from "./components/TodoApp";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold  mb-6 text-center underline">
        Hello world!
      </h1>
      <div className="flex justify-center">
        <div className="w-1/8">
          <TodoApp />
        </div>
      </div>
    </>
  );
}

export default App;
