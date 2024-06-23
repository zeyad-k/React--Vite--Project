import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
<nav className="bg-gray-800 text-white p-4">
  <ul className="flex space-x-4 justify-center">
    <li>
      <Link to="/" className="hover:text-gray-400">Home</Link>
    </li>
    <li>
      <Link to="/Redux" className="hover:text-gray-400">Redux</Link>
    </li>
    <li>
      <Link to="/Atom" className="hover:text-gray-400">Atom</Link>
    </li>
  </ul>
</nav>

      <Outlet />
    </>
  )
};

export default Layout;