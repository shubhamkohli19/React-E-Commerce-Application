import { useEffect, useState } from "react";
import "./App.css";
import userContext from "./contexts/userContext";
import cartContext from "./contexts/cartContext";
import Navbar from "./Components/Navbar/Navbar";
import Routing from "./Components/Routing/Routing";
import { jwtDecode } from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import {
  addToCartAPI,
  getCartAPI,
  removeFromCartAPI,
  increaseCartAPI,
  decreaseCartAPI
} from "./services/cartServices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

setAuthToken(localStorage.getItem("token"));

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (product, quantity) => {
    const updatedCart = [...cart];
    const productIndex = updatedCart.findIndex(
      (item) => item.product._id === product._id
    );
    if (productIndex === -1) {
      updatedCart.push({ product: product, quantity: quantity });
    } else {
      updatedCart[productIndex].quantity += quantity;
    }
    setCart(updatedCart);
    addToCartAPI(product._id, quantity)
      .then((res) => {
        toast.success("Product Added Successfully!");
      })
      .catch((err) => {
        toast.error("Failed to Add Product!");
        setCart(cart);
      });
  };

  const [user, setUser] = useState(null);
  useEffect(() => {
    try {
      const jwt = localStorage.getItem("token");
      const jwtUser = jwtDecode(jwt);
      if (Date.now() >= jwtUser.exp * 1000) {
        localStorage.removeItem("token");
        location.reload();
      }
      setUser(jwtUser);
    } catch {}
  }, []);

  const getCart = () => {
    getCartAPI()
      .then((res) => {
        setCart(res.data);
      })
      .catch((err) => {
        toast.error("Something went wrong!");
      });
  };

  useEffect(() => {
    if (user) {
      getCart();
    }
  }, []);

  const removeFromCart = (_id) => {
    const oldCart = [...cart];
    const newCart = oldCart.filter((item) => item.product._id !== _id);
    setCart(newCart);
    removeFromCartAPI(_id).catch(err => {
      toast.error("Something Went Wrong");
      setCart(oldCart);
    })
  };

  const updateCart = (type, id) => {
    const updatedCart = [...cart];
    const productIndex = updatedCart.findIndex((item) => item.product._id === id);
  
    if (type === 'increase') {
      updatedCart[productIndex].quantity += 1;
      setCart(updatedCart);
  
      increaseCartAPI(id).catch((err) => {
        toast.error("Something Went Wrong!");
        setCart(updatedCart);
      });
    }
  
    if (type === 'decrease') {
      updatedCart[productIndex].quantity -= 1;
      setCart(updatedCart);
  
      decreaseCartAPI(id).catch((err) => {
        toast.error("Something Went Wrong!");
        setCart(updatedCart);
      });
    }
  };
  

  return (
    <>
      <userContext.Provider value={user}>
        <cartContext.Provider value={{ cart, addToCart, removeFromCart, updateCart, setCart }}>
          <div className="app">
            <Navbar />
            <main>
              <ToastContainer position="bottom-right" />
              <Routing addToCart={addToCart} cart={cart} />
            </main>
          </div>
        </cartContext.Provider>
      </userContext.Provider>
    </>
  );
}

export default App;