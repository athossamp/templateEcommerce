import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Catalog } from "../pages/Catalog";

function RouterAllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
    </Routes>
  );
}

export { RouterAllRoutes };
