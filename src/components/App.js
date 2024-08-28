import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Banner from "./Banner";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <main>
        <Banner />
        <h1>Home</h1>
      </main>
    ),
  },
  {
    path: "/A-Propos",
    element: (
      <main>
        <Banner />
        <h1>A Propos</h1>
      </main>
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
