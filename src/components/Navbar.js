import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="Navbar">
      <div>
        <Link to="/">Login</Link>
      </div>
      <div>
        <Link to="/SignUpPage">SignUpPage</Link>
      </div>
    </nav>
  );
}

export default Navbar;