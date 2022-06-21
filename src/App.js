import Header from './componentes/header';
import Nav from './componentes/nav';
import ItemList from "./componentes/itemListContainer";

function App() {
  return (
    <>
    <Header/>
    <Nav/>
    <ItemList greeting="Bienvenido a la tienda Online"/>

    </>
  );
}
export default App;
