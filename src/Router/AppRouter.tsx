import { Route, Routes } from "react-router-dom";
import { About } from "../components/Pages/About";
import { Library } from "../components/Pages/Library";
import { Home } from "../components/Pages/Home";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/library" element={<Library />} />
    </Routes>
  );
};