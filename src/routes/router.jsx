import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/Home/HomeLayout";
import Home from "../layouts/Home/home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";

const router=createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout></HomeLayout>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"/category/:id",
                element:<CategoryNews/>,
                loader: ()=> fetch("/news.json"),
            }
        ]
    },
    {
        path:'/auth',
        element:<AuthLayout></AuthLayout>,
        children:[
            {
        path:'/auth/login',
        element:<Login></Login>
    },
    {
        path:'/auth/register',
        element:<Register></Register>
    }
        ]
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
    