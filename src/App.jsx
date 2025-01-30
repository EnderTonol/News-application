import React,{Suspense} from "react";
import { Spinner} from '@heroui/react'
import NEWS from './layouts/Newspage';
import Home from "./layouts/Home";
function App(){
    return (
        <>
        <Suspense fallback={<div className="h-[100vh] flex items-center justify-center"><Spinner/></div>}>
        <Home/>
        </Suspense>
        </>
    )

}

export default App;