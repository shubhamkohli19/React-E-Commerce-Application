import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from './Components/Home/HomePage';
import ProductsPage from './Components/Products/ProductsPage';
import SingleProductPage from './Components/SingleProduct/SingleProductPage';

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <main>
          {/* <HomePage/> */}
          {/* <ProductsPage/> */}
          <SingleProductPage/>
        </main>
      </div>
    </>
  );
}

export default App;
