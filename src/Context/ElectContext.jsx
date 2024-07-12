import { useEffect, useState } from "react";
import { createContext } from "react";
import { ProductAPI } from "../Data";
import { useParams } from "react-router-dom";

const ElectContext = createContext({});
export const ShopProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  // Add to Cart logic
  const [addedToCart, setAddedToCart] = useState([]);

  const AddToCart = (productId) => {
    const newProduct = { ...productId, amount: 1 };
    const checkTheCart = addedToCart.find((item) => productId.id === item.id);

    if (checkTheCart) {
      const newCart = addedToCart.map((item) => {
        if (item.id === productId.id ) {
          return{ ...productId, amount: checkTheCart.amount + 1 };
        } else {
          return item;
        }
      });
      setAddedToCart(newCart);
    } else {
      setAddedToCart([...addedToCart, newProduct]);
    }
  };

 
  // ADD/SUBT LOGIC
   const Add = (id)=>{
     const addItem = addedToCart.find((item)=>{
      return item.id === id
     })
     AddToCart(addItem)
   };

  //  SUBT LOGIC 
   const Subt = (id) =>{
     const checkForItem = addedToCart.find((item)=> item.id === id)

     if (checkForItem) {
      const newCart = addedToCart.map((item)=>{
        if (item.id === id) {
          return {...item , amount: checkForItem.amount - 1}
        }
        else{
          return item
        }
      })
      setAddedToCart(newCart)
     }
     if (checkForItem.amount < 1) {
      removeFromCart(id);
    }
   }


   



  //  remove from cart logic 
  const removeFromCart =(id)=>{
    const checkCart = addedToCart.filter((item)=>{
      return item.id !== id
    })
    setAddedToCart(checkCart)
  }

  // Total Cost Logic 
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const total = addedToCart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    setTotalCost(total);
  },[addedToCart]);



  
  return (
    <ElectContext.Provider
      value={{  theme, addedToCart, AddToCart, Add, Subt, removeFromCart, totalCost, handleToggle }}
    >
      {children}
    </ElectContext.Provider>
  );
};

export default ElectContext;
