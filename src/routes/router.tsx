import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import { Footer } from "../components/Footer/Footer";
import { RouterAllRoutes } from "./RouterAllRoutes";
import { Support } from "../components/Support/Support";

function RoutesPages() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <RouterAllRoutes />

        <Support />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default RoutesPages;
