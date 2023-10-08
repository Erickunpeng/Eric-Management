import Home from "@/views/Home.tsx";
import {Navigate} from "react-router-dom"
import React, {lazy} from "react";
const About = lazy(() => import("@/views/About.tsx"))
const User = lazy(() => import("@/views/User.tsx"))


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
        element: <Navigate to="/home"></Navigate>
    },
    {
        path: "/home",
        element: <Home></Home>
    },
    {
        path: "/about",
        element: withLoadingComponent(<About></About>)
    },
    {
        path: "/user",
        element: withLoadingComponent(<User></User>)
    }
]

export default routes