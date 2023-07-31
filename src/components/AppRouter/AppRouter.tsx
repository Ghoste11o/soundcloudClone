import { Route, Routes } from "react-router-dom";
import { About } from "../Pages/About";
import { Library } from "../Pages/Library";
import { Home } from "../Pages/Home";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/library" element={<Library />} />
    </Routes>
  );
};