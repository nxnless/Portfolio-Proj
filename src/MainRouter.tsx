import { createBrowserRouter } from 'react-router-dom';
import { portfolioRoutes } from './SiteProj/Portfolio/Route.tsx';
import PortfolioPortal from './ProjectShop/PortfolioPortal.tsx';
import { WebPortal } from './SiteProj/Web Portal/Route.tsx';
export const router = createBrowserRouter([
  {
    path: "/",
    element: <PortfolioPortal />
  },
  ...portfolioRoutes,
  ...WebPortal
]);

export default router;