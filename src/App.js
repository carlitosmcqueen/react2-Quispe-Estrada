import Header from './componentes/header/header';
import Nav from './componentes/nav/nav';
import ItemList from "./componentes/itemlist/itemListContainer";
import ItemDetail from "./componentes/itemDetails/itemDatailContainer";
import CustomProvider from "./componentes/Context/CartContext";
import Carta from "./componentes/Cart/cart"

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
        <Route path="/cart" element={<Carta></Carta>}></Route>


      </Routes>

      </CustomProvider>
    
    </BrowserRouter>



    </div>
    
  );
}
export default App;


/*

base de datos SQL es un excel basicamente osea una tabla que contiene datos de cada usuario una igual a la otra son RELACIONALES


base de datos no relaciones no tienen los mismos datos, pueden ser mas flexibles y aca losdatos no se guardan en datos sino en Colecciones 

dentro de las colleciones tengo documentos y dentro de ellos tengo datos (uno puede tener nombre, apellido,dirrecion   y  otro puede tener nombre,dni, piso no necesariamente deben ser iguales)





En firebase no vamos a estar trabajando con tablas sino con documentos 

*/