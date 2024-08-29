import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Banner from "./Banner";
import BannerImage from "./BannerImage";
import homeBackgroundImg from "../assets/Kasa-1.png";
import proposBackgroundImg from "../assets/Kasa-2.png";

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
        </main>
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
        </main>
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
