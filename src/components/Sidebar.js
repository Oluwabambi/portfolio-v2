import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const activePath = location.pathname;

  return (
    <div className="sidemenu">
      <div className="text-white py-3">
        <Link className = { activePath === '/' ? 'active' : '' } to='/'>HOME</Link>
      </div>
      <div className="text-white py-3">
        <Link className = { activePath === '/about-me' ? 'active' : '' } to='/about-me'>ABOUT</Link>
      </div>
      <div className="text-white py-3">
        <Link className = { activePath === '/portfolio' ? 'active' : '' } to='/portfolio'>PORTFOLIO</Link>
      </div>
      <div className="text-white py-3">
        <Link className = { activePath === '/contact' ? 'active' : '' } to='/contact'>CONTACT</Link>
      </div>
    </div>
  );
};

export default Sidebar;
