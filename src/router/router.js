import { createBrowserRouter } from "react-router-dom";

import homeBackgroundImg from "../assets/Kasa-1.png";
import proposBackgroundImg from "../assets/Kasa-2.png";

import Banner from "../components/Banner";
import BannerImage from "../components/BannerImage";
import Gallery from "../components/Gallery";
import About from "../components/About";
import Footer from "../components/Footer";
import NotFound from "../components/NotFound";

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
  {
    path: "*",
    element: (
      <div className="main-container">
        <Banner />
        <main>
          <NotFound />
        </main>
        <Footer />
      </div>
    ),
  },
]);

export default router;
