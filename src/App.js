import Header from './componentes/header/header';
import Nav from './componentes/nav/nav';
import Footer from './componentes/footer/footer';
import ItemList from "./componentes/itemlist/itemListContainer";
import ItemDetail from "./componentes/itemDetails/itemDatailContainer";
import CustomProvider from "./componentes/Context/CartContext";
import BuyDate from "./componentes/BuyDate/buyDate";
import Carta from "./componentes/Cart/cart";
import Login from "./componentes/login/login";
import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div>
      <BrowserRouter>
      <CustomProvider>
      <Header/>
      <Nav/>
      <Routes>
        <Route path="/" element={<ItemList greeting="Bienvenido a Mercado Coder"/>}></Route>
        <Route path="/category/:categoryId" element={<ItemList greeting="Bienvenido a Mercado Coder"/>}></Route>
        <Route path="/detail/:id" element={<ItemDetail></ItemDetail>}></Route>
        <Route path="/cart" element={<Carta></Carta>}></Route>
        <Route path="/Compra" element={<BuyDate/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
      </Routes>
      <Footer></Footer>
      </CustomProvider>
    
    </BrowserRouter>
    </div>
    
  );
}
export default App;
