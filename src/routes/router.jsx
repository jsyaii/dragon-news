import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/Home/HomeLayout";
import Home from "../layouts/Home/home";
import CategoryNews from "../pages/CategoryNews";

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
    