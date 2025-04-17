/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react"
import food_items from "../utils/Data";
export const dataContext = createContext();

const UserContext = ({ children }) => {
    const [cat, setCat] = useState(food_items);
    const [input, setInput] = useState("");
    const [showCart, setShowCart] = useState(false);
    let data = {
        input,
        setInput,
        cat,
        setCat,
        showCart,
        setShowCart,
    }
  return (
    <div>
        <dataContext.Provider value={data}>
        {children }
        </dataContext.Provider>
    </div>
  )
}

export default UserContext