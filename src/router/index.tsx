import Home from "@/views/Home.tsx";
import {Navigate} from "react-router-dom"
import React, {lazy} from "react";
const About = lazy(() => import("@/views/About.tsx"))
const User = lazy(() => import("@/views/User.tsx"))
const Page1 = lazy(() => import("@/views/Page1.tsx"))
const Page2 = lazy(() => import("@/views/Page2.tsx"))


const withLoadingComponent = (comp: JSX.Element) => {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            {comp}
        </React.Suspense>
    )
}

const routes = [
    {
        path: "/",
        element: <Navigate to="/page1"></Navigate>
    },
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: "/page1",
                element: withLoadingComponent(<Page1></Page1>)
            },
            {
                path: "/page2",
                element: withLoadingComponent(<Page2></Page2>)
            }
        ]
    },
    {
        path: "/about",
        element: withLoadingComponent(<About></About>)
    },
    {
        path: "/user",
        element: withLoadingComponent(<User></User>)
    },
]

export default routes