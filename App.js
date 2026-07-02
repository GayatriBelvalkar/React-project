import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";
import Events from "./Pages/Events";
import AddEvent from "./Pages/AddEvent";
import Register from "./Pages/Register";
import Admin from "./Pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/events" element={<Events />} />

        <Route path="/add" element={<AddEvent />} />

        <Route path="/register" element={<Register />} />

        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
