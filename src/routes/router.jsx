import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/Home/HomeLayout";
import Home from "../layouts/Home/home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import NewsDetails from "../components/NewsCard/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../pages/Loading";

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
                 hydrateFallbackElement: <Loading></Loading>
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
        path:'/news-details/:id',
        element:<PrivateRoute>
<NewsDetails></NewsDetails>
        </PrivateRoute>,
        
        loader: ()=> fetch("/news.json"),
        hydrateFallbackElement: <Loading></Loading>
    },
    {
        path:'/*',
        element:<h1> Error Layout</h1>,
    },
]);
export default router;
    