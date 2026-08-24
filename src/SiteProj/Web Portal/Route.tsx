// Route.tsx
import App from '../../ProjectShop/Page/App.tsx';
import Home from './Page/Home.tsx';
export const WebPortal = [
  {
    path: "web-portal",
    children: [
      { index: true, element: <Home /> },
      { path: "app", element: <App /> },
    ]
  }
];