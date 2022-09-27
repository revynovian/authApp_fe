import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { NavLink } from 'react-router-dom';

const Navbar = ({isUser}) => {
  const { toogleTheme } = useContext(ThemeContext);

  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self")
  }

  // console.log(isUser)
  return (
    <div>
      <nav className="navbar">
        <div className="navbarMenuLeft">
          <NavLink to={"/home"}>
            <span className="navbarLogo">
              <img src="https://img.icons8.com/color/30/000000/triskelion.png" alt="logo" />
              <h1>Triskelion</h1>
            </span>
          </NavLink>
          <li><NavLink to={"/home"} className={({ isActive }) => 
            (isActive ? "navLinkActive" : "navLinkInactive")}>Home</NavLink>
          </li>
          <li><NavLink to={"/about"}
            className={({ isActive }) => 
            (isActive ? "navLinkActive" : "navLinkInactive")}>About</NavLink></li>
        </div>

        <ul className="navbarMenuRight">
          {
            isUser ? (
              <>
                <li>{isUser.displayName}</li>
                <li><img className="userAvatar" src={isUser.photos[0].value} alt="avatar" /></li>
                <li><button className="customButton" onClick={logout}>Sign Out</button></li>
              </>
            ) : (
              <>
              <NavLink to={"/login"}><li><button className="customButton">Sign In</button></li></NavLink>
              </>
            )
          }          
          <li>
            <button className="customButton3" onClick={toogleTheme}>
              <img src="https://img.icons8.com/ios-glyphs/30/000000/day-and-night.png" alt="" />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
