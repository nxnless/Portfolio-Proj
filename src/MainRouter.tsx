import { createBrowserRouter } from 'react-router-dom';
import { portfolioRoutes } from './SiteProj/Portfolio/Route.tsx';
import PortfolioPortal from './ProjectShop/PortfolioPortal.tsx';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PortfolioPortal />
  },
  ...portfolioRoutes,
]);

export default router;