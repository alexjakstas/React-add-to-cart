import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext"

export default function Header() {

    const navigate = useNavigate();
    const {state} = useCart();

    const totalItems = state?.cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="mx-auto my-2 flex items-center h-22 justify-between px-2 xl:w-5/6">
      <h2 className="text-2xl font-bold xl:text-3xl">Parduotuvė</h2>
      <div>
        {totalItems > 0 && (
            <span className=" flex items-center justify-center sticky text-[20px] p-1 h-6 ml-2 w-6 top-7   text-white bg-red-600 rounded-2xl  ">{totalItems}</span>
        )}
        <i className="bx bx-cart cursor-pointer text-3xl transition-colors hover:text-amber-600 xl:text-4xl" onClick={() => navigate("/cart")}></i>
      </div>
    </header>
  );
}
