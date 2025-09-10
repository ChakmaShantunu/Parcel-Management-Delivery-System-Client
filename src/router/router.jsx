import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home/Home";
import RootLayout from "../layouts/RootLayout";
import About from "../pages/about/About";
import BeARider from "../pages/Dashboard/BeARider/BeARider";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'about',
                Component: About
            },
            {
                path: 'beARider',
                Component: BeARider
            }
        ]
    },
]);