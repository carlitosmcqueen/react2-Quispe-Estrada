import Header from './componentes/header/header';
import Nav from './componentes/nav/nav';
import ItemList from "./componentes/itemlist/itemListContainer";
import ItemDetail from "./componentes/itemDetails/itemDatailContainer";
import CustomProvider from "./componentes/Context/CartContext"
import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    <div>
      <BrowserRouter>
      <CustomProvider>
      <Header/>
      
      
      <Nav/>
      <Routes>
        <Route path="/" element={<ItemList greeting="Bienvenido a Mercado Coder"/>}></Route>
        {/*los :category es el params */}
        <Route path="/category/:categoryId" element={<ItemList greeting="Bienvenido a Mercado Coder"/>}></Route>
        <Route path="/detail/:id" element={<ItemDetail></ItemDetail>}></Route>


      </Routes>

      </CustomProvider>
    
    </BrowserRouter>



    </div>
    
  );
}
export default App;


