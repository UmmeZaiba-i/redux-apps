import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Counter from "../components/Counter";
import Todo from "../components/Todo";

export const router = createBrowserRouter([
    {
       path:'/',
       element: <Layout/>,
       children:[
        {
            path:'/counter',
            element:<Counter/>
        },
        {
            path:'/todo',
            element:<Todo/>
        },
       ]
    },
    
    
])