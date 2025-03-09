import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nulla
        animi vero, aut amet, ipsa blanditiis similique labore id, sunt
        reiciendis sint quo autem corporis architecto perspiciatis molestias
        fugiat officiis.
      </p>

      <nav>
        <ul>
          <NavLink to="/help/faq">FAQ</NavLink>
          <NavLink to="/help/contact">Contact</NavLink>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}
