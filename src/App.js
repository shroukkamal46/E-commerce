import Homepage from "./Components/Pages/Homepage";
import Layout from "./Components/jsx/Layout";
import LatestProducts from "./Components/LatestProducts";
import Details from "./Components/Details";
import Cart from "./Components/Cart";
import CartDetails from "./Components/CartItem"
import { BrowserRouter,Route, Routes } from "react-router-dom";
import { TbSettingsExclamation } from "react-icons/tb";
export default function App(){
  return <>
  <BrowserRouter>


  <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Homepage/>}></Route>
    <Route path="/" element={<LatestProducts />} />
    <Route path="details/:ProductId" element={<Details />} />
    <Route path="cart/:productId" element={<Cart />} />
    <Route path="CartDetails/:productId" element={<CartDetails/>}></Route>
    </Route>
   
  </Routes>

  </BrowserRouter>
  </>
}