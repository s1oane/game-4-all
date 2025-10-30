import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const navIconSrc = `${process.env.PUBLIC_URL}/images/nav-bar.png`;

  return (
    <header className="centered">
      {/* site Title */}
      <h1 className="header-font beige-font big-font">
        GAME
        <span style={{ color: "var(--red)" }}>4</span>
        ALL
      </h1>

      {/* navigation Menu */}
      <aside className="dropdown">
        <button>
          <img src={navIconSrc} alt="Navigation Menu" />
        </button>
        <nav className="dropdown-content">
          <div className="red-font subheader-font medium-font">
            <ul>
              <Link to="/" className="nav-link">
                PLAY
              </Link>
              <br />
              <Link to="/setup" className="nav-link">
                SETUP
              </Link>
              <br />
              <Link to="/about" className="nav-link">
                ABOUT
              </Link>
              <br />
              <Link to="/settings" className="nav-link">
                SETTINGS
              </Link>
              <br />
              <Link to="/contact" className="nav-link">
                CONTACT
              </Link>
            </ul>
          </div>
        </nav>
      </aside>
    </header>
  );
};

export default Header;
