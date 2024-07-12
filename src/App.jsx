import {   Route, Routes } from 'react-router-dom';

import "./App.css";
import { ShopProvider } from "./Context/ElectContext";
import Home from "./component/HomeFolder/Home";
import ProductDetails from "./component/HomeFolder/Product/ProductDetails";
import Cart from './component/HomeFolder/Product/Cart';

function App() {
  return (
    <div>
      <ShopProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProductDetails/:id" element={<ProductDetails />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </ShopProvider>
    </div>
  );
}

export default App;
