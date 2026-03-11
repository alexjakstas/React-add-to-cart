import { useCart } from "../context/CartContext";

export default function CartSummary() {
  const { state } = useCart();
  const { cartItems } = state;

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const subTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const discount = subTotal * 0.2;
  const deliveryFee = 15;
  const total = subTotal - discount + deliveryFee;

  return (
    <div className="rounded-3xl border border-neutral-300 p-4 xl:w-full xl:h-94">
      <h1 className="space-y-2 text-sm xl:text-base">Order Summary</h1>

      <div className="space-y-2 text-sm xl:text-base">
        <div className="flex justify-between">
          <p className="text-gray-600">Subtotal</p>
          <p className="font-semibold">€{subTotal}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-600">Total Items</p>
          <p className="font-semibold">{totalItems}</p>
        </div>
        <div className="flex justify-between">
            <p className="text-gray-600">Discount (-20%)</p>
            <p className="font-semibold text-red-600">€{discount}</p>
        </div>
        <div className="flex justify-between border-b border-neutral-300 pb-4">
            <p className="text-gray-600">Delivery Fee</p>
            <p className="font-semibold">€{deliveryFee}</p>
        </div>
      </div>
      <div className="mt-4 flex justify-between text-lg font-semibold xl:text-xl">
        <p>Total</p>
        <p>€{total}</p>
      </div>
      <button className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-3xl bg-black text-white transition-colors cursor-pointer hover:bg-gray-900">
        Go to Checkout
        <i className="bx bx-arrow-right text-2xl"></i>
      </button>
    </div>
  );
}
