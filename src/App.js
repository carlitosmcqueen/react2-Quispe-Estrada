import Header from './componentes/header';
import Nav from './componentes/nav';
import ItemList from "./componentes/itemListContainer";
import ItemCount from "./componentes/itemCount"

function App() {
  return (
    <div>
    <Header/>
    <Nav/>
    <ItemList greeting="Bienvenido a la tienda Online"/>
    <ItemCount producto="ARROZ GALLO" stock="5"></ItemCount>
    <ItemCount producto="FIDEOS MATARAZZO" stock="10"></ItemCount>
    <ItemCount producto="LECHE DE COCO" stock="17"></ItemCount>

    </div>
  );
}
export default App;


