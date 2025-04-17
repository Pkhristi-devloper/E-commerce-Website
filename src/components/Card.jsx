/* eslint-disable react/prop-types */
import { LuLeaf } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { AddItem } from "../Redux/cartSlice";
import { toast } from "react-toastify";

const Card = ({ image, price, type, name, id }) => {
  let dispatch = useDispatch();
  return (
    <div className="card bg-white h-[350px] w-[280px] rounded-lg flex flex-col justify-between overflow-hidden p-[10px] gap-[5px] hover:scale-[0.99] hover:border-2 border-green-500 shadow-green-400 transition-all hover:shadow-2xl md:m-5 m-2">
      <div className="w-full h-[60%] overflow-hidden rounded-2xl">
        <img src={image} alt="image" className="object-cover h-full w-full" />
      </div>
      <h1 className="text-2xl font-semibold">{name}</h1>
      <div className="w-full flex justify-between text-xl text-green-500 font-semibold">
        <h1>Rs {price}/-</h1>
        <h1 className="flex gap-[3px] items-center justify-center">
          {type == "veg" ? <LuLeaf /> : <GiChickenOven />} {type}
        </h1>
      </div>
      <button
        className="bg-green-200 text-xl py-[3px] hover:bg-green-300 cursor-pointer font-semibold"
        onClick={() =>{
          dispatch(
            AddItem({ id: id, name: name, price: price, qty: 1, image: image }),
          )
          toast.success("Item Addet to Cart.")
        }
        }
      >
        Add to Dish
      </button>
    </div>
  );
};

export default Card;
