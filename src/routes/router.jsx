import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/Home/HomeLayout";

const router=createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout></HomeLayout>,
    },
    {
        path:'/auth',
        element:<h1> Auth Layout</h1>,
    },
    {
        path:'/news',
        element:<h1> News Layout</h1>,
    },
    {
        path:'/*',
        element:<h1> Error Layout</h1>,
    },
]);
export default router;
    