import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from './Components/Home/HomePage';
import ProductsPage from './Components/Products/ProductsPage';
import SingleProductPage from './Components/SingleProduct/SingleProductPage';
import CartPage from "./Components/Cart/CartPage";
import MyOrderPage from "./Components/MyOrder/MyOrderPage";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <main>
          <HomePage/>
          {/* <ProductsPage/> */}
          {/* <SingleProductPage/>   */}
          {/* <CartPage/> */}
          {/* <MyOrderPage/> */}
        </main>
      </div>
    </>
  );
}

export default App;
