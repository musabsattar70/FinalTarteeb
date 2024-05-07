// React Router 
import { createBrowserRouter } from "react-router-dom";

// Custom Components
import { Dashboard } from "../pages/Dashboard/Index";
import { Login } from "../pages/Login/Index";

// Constants
import { PAGE_ROUTES } from "../constants/PageRoutesPath";
import { Profile } from "../pages/Profile/Index";
import { Reports } from "../pages/Reports/Index";

// Create a BrowserRouter with specified routes
const router = createBrowserRouter([
    {
        // Route for the dashboard page
        path: PAGE_ROUTES.DASHBOARD,
        element: <Dashboard />
    },
    {
        // Route for the login page using AuthWrapper with Login component
        path: PAGE_ROUTES.LOGIN,
        element: <Login />
    },
    {
        // Route for the profile page using AuthWrapper with Profile component
        path: PAGE_ROUTES.PROFILE + "/:id",
        element: <Profile />
    },
    {
        // Route for the profile page using AuthWrapper with Profile component
        path: PAGE_ROUTES.SEARCH,
        element: <Dashboard />
    },
    {
        // Route for the profile page using AuthWrapper with Profile component
        path: PAGE_ROUTES.REPORTS,
        element: <Reports />
    }
]);

// Export the configured router for use in the application
export default router