import { IoFastFoodOutline } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { useContext, useEffect } from "react";
import { dataContext } from "../Context/UserContext";
import food_items from "../utils/Data";
import { useSelector } from "react-redux";


const Nav = () => {
  let items = useSelector(state=>state.cart)
  let { input, setInput, setCat, setShowCart } = useContext(dataContext);
  useEffect(()=>{
      let newList = food_items.filter((item)=> item.food_name.includes(input) || item.food_name.toLowerCase().includes(input));
      setCat(newList);
  },[input])
  return (
    <div className="w-full h-[12vh] flex justify-between items-center px-5 py-1">
      <div className="logo w-[60px] h-[60px] bg-white flex items-center justify-center rounded-lg cursor-pointer shadow-2xl">
        <IoFastFoodOutline className="text-green-500 h-[30px] w-[30px]" />
      </div>
      <form className="md:w-[70%] w-[45%] bg-white md:h-[80%] h-[50%] px-[10px] flex items-center justify-between gap-2 rounded-lg shadow-2xl">
        <IoSearchSharp className="w-[30px] h-[30px] text-green-500" />
        <input
          type="text"
          placeholder="Search Here..."
          className="w-full h-full text-lg md:text-2xl outline-0 "
          onChange={(e)=>setInput(e.target.value)}
          value={input}
        />
      </form>
      <button className="cart w-[60px] h-[60px] bg-white flex items-center justify-center rounded-lg cursor-pointer shadow-2xl relative" onClick={()=>{
        setShowCart(true)
      }}>
        <span className=" absolute top-0 right-2 text-green-400 font-bold">{items.length}</span>
        <FiShoppingBag className="text-green-500 h-[30px] w-[30px]" />
      </button>
    </div>
  );
};

export default Nav;
