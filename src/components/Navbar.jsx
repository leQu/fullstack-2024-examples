import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/examples/form">Examples form</Link>
        </li>
        <li>
          <Link to="/examples/title">Examples titles</Link>
        </li>
      </ul>
    </nav>
  );
}
