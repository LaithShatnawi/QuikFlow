import { createBrowserRouter } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import LoginRoutes from './AuthenticationRoutes';
import HomeRoutes from './HomeRoutes';

// ==============================|| ROUTING RENDER ||============================== //
const router = createBrowserRouter([HomeRoutes, MainRoutes, LoginRoutes]);

export default router;
