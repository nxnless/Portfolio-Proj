// Route.tsx
import App from '../../ProjectShop/Page/App.tsx';
import Home from '../../ProjectShop/Page/Home.tsx';
export const portfolioRoutes = [
  {
    path: "portfolio",
    children: [
      { index: true, element: <Home /> },
      { path: "app", element: <App /> },
    ]
  }
];