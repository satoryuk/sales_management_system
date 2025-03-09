import { Link } from "react-router-dom";
import React from "react";

export default function NotFound() {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>

      <p>
        Go to the <Link to="/">Home Page</Link>.
      </p>
    </div>
  );
}
