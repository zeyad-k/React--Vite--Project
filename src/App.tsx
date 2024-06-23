// import TodoApp from "./components/TodoApp";

// function App() {
//   return (
//     <>
//       <h1 className="text-3xl font-bold  mb-6 text-center underline">
//         Todo App using props drilling
//       </h1>
//       <div className="flex justify-center">
//         <div className="w-1/8">
//           <TodoApp />
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} /> */}
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
