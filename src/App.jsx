import React,{Suspense} from "react";
import { Spinner} from '@heroui/react';
import NEWS from './layouts/Newspage';
import Home from "./layouts/Home";
import { createBrowserRouter,RouterProvider } from "react-router";
import TopHeadlines from "./layouts/Headlines";
import Tech from "./layouts/Technews";
import Nav from "./layouts/Nav";
import Industry from "./layouts/Industrial";
import BBC from "./layouts/bbc";
import Headlines from "./layouts/defheadlines";

function App(){
    const Routs = createBrowserRouter([
        {path: '/', element: <><NEWS/></>},
        {path: '/headlines', element: <><Headlines/></>},
        {path: '/industrial-news',element: <><Industry/></>},
        {path: '/tech-news',element: <><Tech/></>},
        {path: '/bbc-headlines',element: <><TopHeadlines/></>},
        {path: '/bbc', element: <><BBC/></>},

    ]);

    return (
        <>
        <Nav/>
        <Suspense fallback={<div className="h-[100vh] flex items-center justify-center"><Spinner color="danger"/> PLEASE WAIT!</div>}>
        <Home/>
        <RouterProvider router={Routs}/>
        </Suspense>
        </>
    )

}

export default App;