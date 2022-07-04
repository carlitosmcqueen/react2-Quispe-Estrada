import Header from './componentes/header/header';
import Nav from './componentes/nav/nav';
import ItemList from "./componentes/itemlist/itemListContainer";
import ItemDetail from "./componentes/itemDetails/itemDatailContainer"

function App() {
  return (
    <div>
    <Header/>
    <Nav/>
    <ItemList greeting="Bienvenido a la tienda Online"/>
    

    </div>
  );
}
export default App;


