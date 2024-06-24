 import { RecoilRoot } from "recoil";
import TodoAppWithAtom from "../components/AtomAppComponents/TodoAppWithAtom";

const AtomAppPage = () => {
  return (
    <div className="flex flex-col     mt-3 ">
      <h1 className="text-red-500 text-center text-3xl my-5">
        Atom App Page
      </h1>
      <RecoilRoot>
        <TodoAppWithAtom />
      </RecoilRoot>
    </div>
  );
};

export default AtomAppPage;
