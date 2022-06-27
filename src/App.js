import Header from './componentes/header';
import Nav from './componentes/nav';
import ItemList from "./componentes/itemListContainer";

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


