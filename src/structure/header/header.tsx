import { Fragment } from "react";
import { Link, NavLink, Outlet } from "react-router";
import Contact from "../../pages/contact/contact";

const Header = () => {
  return (
    <Fragment>
      <header className="main-header">
        <div className="logo">
          <Link to="/" className="title">
            <span>Chander Valle</span>
            <span>Software Engineer & Web Developer</span>
          </Link>
        </div>
        <div className="spacer"></div>
        <nav className="nav">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/resume">Resume</NavLink>
        </nav>
      </header>
      <main className="main">
        <div className="left-content">
          <Outlet />
        </div>
        <div className="spacer"></div>
        <div className="right-content">
          <Contact></Contact>
        </div>
      </main>
    </Fragment>
  );
};

export default Header;
