import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from './pages/Cart'

function Task13(){
    return(
        <>
        <Header />
        <Routes>
            <Route path="/" element={<Home/>}> </Route>
            <Route path="/cart" element={<Cart/>}> </Route>
        </Routes>
        </>
    )
}

export default Task13;