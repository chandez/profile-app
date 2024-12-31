import { Fragment } from "react";
import { Link, NavLink, Outlet } from "react-router";
import Contact from "../../pages/contact/contact";

const Header = () => {
  return (
    <Fragment>
      <header>
        <div className="main-header">
          <div className="logo">
            <Link to="/" className="title">
              <span>Chander Valle</span>
              <span>Software Engineer & Web Developer</span>
            </Link>
          </div>
          <nav className="nav">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/resume">Resume</NavLink>
          </nav>
        </div>
      </header>
      <main>
        <div className="main-content">
          <Outlet />
          <div className="right-content">
            <Contact></Contact>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Header;
