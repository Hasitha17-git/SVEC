import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'


export default function Home() {
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Main/>}> </Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

function Main(){
    return(
        <>
        <h1>::Home Page ::</h1>
        </>
    )
}