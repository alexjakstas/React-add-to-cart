import { BrowserRouter } from "react-router-dom";
import Task13 from "./ADD-TO-CART/Task13"
import { CartProvider } from "./ADD-TO-CART/context/CartContext";
import './App.css'

function App() {


  return (
     <>
      <BrowserRouter>
        <CartProvider>
          <Task13 />
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
