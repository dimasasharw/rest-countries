import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

// Lazy-loaded components
const Parent = lazy(() => import("../components/Parent"));
const HomePage = lazy(() => import("../views/HomePage"));
const DetailPage = lazy(() => import("../views/DetailPage"));
const CollaborationPage = lazy(() => import("../views/CollaborationPage"))

const router = createBrowserRouter([
  {
    element: <Parent />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/:countryName/:cca2',
        element: <DetailPage />,
      },
      {
        path: '/country-collaborations',
        element: <CollaborationPage />,
      },
    ],
  },
]);

export default router;
