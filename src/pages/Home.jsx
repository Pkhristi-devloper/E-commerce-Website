import Categories from "../utils/Categories";
import Nav from "../components/Nav";
import Card from "../components/Card";
import food_items from "../utils/Data";
import { useContext } from "react";
import { dataContext } from "../Context/UserContext";
import { RxCross2 } from "react-icons/rx";
import CartCard from "../components/CartCard";
import { useSelector } from "react-redux";
import shopping from '../assets/shopping.png';
const Home = () => {
  let items = useSelector((state) => state.cart);
  let subTotal = items.reduce(
    (total, item) => total + item.price * item.qty,
    0,
  );
  let { input, cat, setCat, showCart, setShowCart } = useContext(dataContext);
  function filter(category) {
    if (category == "All") {
      setCat(food_items);
    } else {
      let newList = food_items.filter((item) => item.food_category == category);
      setCat(newList);
    }
  }
  return (
    <div className="w-full h-full">
      <Nav />
      {!input && (
        <div className="categories w-[100%] flex items-center justify-center md:gap-[2vw] gap-[3.5vw] md:mt-[5vh] mt-[2vh] px-[20px] flex-wrap">
          {Categories.map((item) => {
            return (
              <div
                key={item.id}
                className="w-[160px] h-[160px] bg-white flex items-center justify-center flex-col gap-[1vh] text-xl font-semibold cursor-pointer hover:bg-green-200 transition-all duration-200 rounded-lg shadow-2xl"
                onClick={() => filter(item.name)}
              >
                {item.icon}
                {item.name}
              </div>
            );
          })}
        </div>
      )}
      <div className="cards flex items-center justify-center flex-wrap py-8">
        {cat.length > 0 ? cat.map((item) => {
          return (
            <Card
              image={item.food_image}
              type={item.food_type}
              price={item.price}
              name={item.food_name}
              key={item.id}
              id={item.id}
            />
          );
        }) : <div className="w-full h-full items-center justify-center flex flex-col gap-[2vh]">
                <h1 className="text-3xl text-green-500 font-bold">No Dish Found..!!</h1>
          </div>}
      </div>
      <div
        className={`cart w-[50vw] h-full fixed min-w-[300px] bg-white right-0 ${showCart ? "translate-x-0" : "translate-x-full"} top-0 transition-all duration-500 overflow-y-scroll hide-scrollbar`}
      >
        <header className="w-full flex justify-between px-[2vw] py-[1vh]">
          <span className="text-2xl text-green-500 font-semibold">
            Order Items
          </span>
          <button onClick={() => setShowCart(false)}>
            <RxCross2 className="text-3xl text-green-500 cursor-pointer transition-all hover:text-gray-500" />
          </button>
        </header>
        <div className="cards flex flex-col gap-[2vh]">
          {items.map((item) => {
            return (
              <CartCard
                id={item.id}
                key={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                qty={item.qty}
              />
            );
          })}
        </div>
        {items.length>=1 ? <div className="prices w-full h-[300px] mt-[2vh] flex flex-col items-center">
          <div className="first border-y-[1px] w-[90%] h-fit py-[10px] mx-auto flex flex-col justify-between">
            <div className="w-full flex justify-between py-0.5">
              <span className="text-gray-700 font-semibold text-lg">
                Subtotal
              </span>
              <span className="text-green-500 font-bold text-lg">
                Rs {subTotal}/-
              </span>
            </div>
            <div className="w-full flex justify-between py-0.5">
              <span className="text-gray-700 font-semibold text-lg">
                Delivery Fees
              </span>
              <span className="text-green-500 font-bold text-lg">
                Rs {items.length * 10}/-
              </span>
            </div>
            <div className="w-full flex justify-between py-0.5">
              <span className="text-gray-700 font-semibold text-lg">Taxes</span>
              <span className="text-green-500 font-bold text-lg">
                Rs {(subTotal * 0.018).toFixed(2)}/-
              </span>
            </div>
          </div>
          <div className="total flex justify-between w-[90%] mx-auto mt-[2vh]">
            <span className="text-3xl text-gray-700 font-semibold font-serif">
              Total
            </span>
            <span className="text-2xl text-green-500 font-semibold">
              Rs{" "}
              {subTotal +
                items.length * 10 +
                parseFloat((subTotal * 0.018).toFixed(2))}
              /-
            </span>
          </div>
          <button className="w-[70%] bg-green-500 mt-[2vh] mx-auto py-1 font-semibold text-zinc-200 hover:bg-green-600 hover:text-white rounded-lg text-xl cursor-pointer transition-all active:scale-95">
            Place Order
          </button>
        </div> : <div className="w-full h-full items-center justify-center flex flex-col gap-[2vh]">
          <div className="image h-[40%] ">
            <img src={shopping} alt="" className="h-full object-cover"/>
          </div>
          <div className="text">
            <h1 className="text-2xl text-red-500 font-bold">Your Cart is Empty..!!</h1>
          </div>
          </div>}
      </div>
    </div>
  );
};

export default Home;
