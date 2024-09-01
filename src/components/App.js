import { createBrowserRouter, RouterProvider } from "react-router-dom";
import homeBackgroundImg from "../assets/Kasa-1.png";
import proposBackgroundImg from "../assets/Kasa-2.png";

import Banner from "./Banner";
import BannerImage from "./BannerImage";
import Gallery from "./Gallery";
import About from "./About";
import Footer from "./Footer";

import logementsList from "../data/logementsList";
import about from "../data/about";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="main-container">
        <Banner />
        <main>
          <BannerImage
            title="Chez vous, partout et ailleurs"
            backgroundImage={homeBackgroundImg}
          />
          <Gallery logements={logementsList} />
        </main>
        <Footer />
      </div>
    ),
  },
  {
    path: "/A-Propos",
    element: (
      <div className="main-container">
        <Banner />
        <main>
          <BannerImage title="" backgroundImage={proposBackgroundImg} />
          <About abouts={about} />
        </main>
        <Footer />
      </div>
    ),
  },
  {
    path: "/Fiche-Logement",
    element: <div>Fiche Logement</div>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
