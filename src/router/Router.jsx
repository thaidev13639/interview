import React from 'react'
import { useRoutes } from 'react-router-dom'
import HomeLayout from '../laytouts/HomeLayout'
import TitleHome from '../page/TitleHome/TitleHome'
import TitleUser from '../page/TitleUser/TitleUser'
import Home from '../page/Home/Home'

export default function Router() {
    const routing = useRoutes([
        {
            path: "/",
            element: <HomeLayout />,
            children: [
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "/title-home/:id/:userID",
                    element: <TitleHome />
                },
                {
                    path: "/title-user",
                    element: <TitleUser />
                }
            ]
        }
    ])
    return (
        routing
    )
}
