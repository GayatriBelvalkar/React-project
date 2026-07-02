import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>College Events</h2>

      <Link to="/">Home</Link>

      <Link to="/events">Events</Link>

      <Link to="/add">Add Event</Link>

      <Link to="/register">Register</Link>

      <Link to="/admin">Admin</Link>
    </nav>
  );
}

export default Navbar;
