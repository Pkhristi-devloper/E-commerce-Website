/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import { DecrementQty, IncrementQty, RemoveItem } from "../Redux/cartSlice";
import { toast } from "react-toastify";

const CartCard = ({ id, name, price, qty, image }) => {
  let dispatch = useDispatch();
  return (
    <div className="container mt-[1vh] mx-auto w-[93%] h-[140px] flex justify-between shadow-lg rounded-2xl p-2">
      <div className="first flex  w-[70%] h-full gap-4">
        <div className="image h-full w-[50%]">
          <img
            src={image}
            alt=""
            className=" object-cover h-full w-full rounded-2xl"
          />
        </div>
        <div className="text flex w-[50%] flex-col justify-between py-4">
          <h1 className="font-semibold text-xl">{name}</h1>
          <div className="btn border-2 border-green-500 flex justify-between h-[40px] rounded-2xl">
            <span
              className="text-2xl text-green-500 font-bold text-center w-[33%] cursor-pointer"
              onClick={() => {
                qty > 1 ? dispatch(DecrementQty(id)) : qty;
              }}
            >
              {" "}
              -{" "}
            </span>
            <span className="text-xl text-green-500 text-center w-[33%] bg-gray-300">
              {qty}
            </span>
            <button
              className="text-2xl text-green-500 font-bold text-center w-[33%] cursor-pointer"
              onClick={() => dispatch(IncrementQty(id))}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="second flex flex-col items-center justify-center gap-3">
        <h1 className="text-green-500 font-semibold text-xl">Rs {price}/-</h1>
        <RiDeleteBin6Line
          className="text-red-600 text-2xl font-bold cursor-pointer"
          onClick={() => {
            dispatch(RemoveItem(id))
            toast.error("Item removed from the cart.")
        }}
        />
      </div>
    </div>
  );
};

export default CartCard;
