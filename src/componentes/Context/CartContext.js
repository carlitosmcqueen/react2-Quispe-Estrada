import React,{createContext,useState,useEffect} from 'react';
export const contexto=createContext();
const {Provider} = contexto;
const CustomProvider =({children})=>{
    const [productos,setProductos]=useState([]);
    const [usuarioLogeado,setUsuarioLogeado]=useState([]);
    const [loginUser,setLoginUser]=useState(false);

    /*
    Profe hhasta aca pude llegar sin problemas 
    Le explico pude hacer que los items se queden en el carrito al reiniciar la pagina sin problema 
    Mi error aparece cuando en finalizarCompra en buyDate borro el local storage "lol" en ese momento se rompe mi codigo ya que productos se convierte en null 
    
    y el .forEach y el .some dejan de funcionar se le ocurre una solucion 

    En comentarios le dejo como intente solucionar el problema
    */
    // const [productos,setProductos]=useState(JSON.parse(localStorage.getItem("lol")));
    
    const [qtyProducts,setQtyProducts]=useState(0);

    const logeado=(user)=>{
        setUsuarioLogeado(user)
    }
    const mostrarLogin=(mostrar)=>{
        setLoginUser(mostrar)
    }

    const getQtyProducts=()=>{
        // if((productos===null)){
        //     console.log("vacio")
        // }else{
        //     let qty=0;
        //     productos.forEach(producto => qty += producto.qty)
        //     setQtyProducts(qty)
        // }

        let qty=0;
        productos.forEach(producto => qty += producto.qty)
        setQtyProducts(qty)
    }
    useEffect(() =>{
        getQtyProducts()
    },[productos])

    const addProduct=(producto)=>{

        if(isInCart(producto.id)){
            const found=productos.find(p=>p.id===producto.id)
            const index= productos.indexOf(found)
            const aux=[...productos]
            aux[index].qty += producto.qty
            setProductos(aux)
        }else{
            setProductos([...productos,producto]);
        }
        
    }
    const deleteProduct=(id)=>{
        setProductos(productos.filter(producto=>producto.id !== id))    
    }
    const isInCart=(id)=>{
        
        return productos.some(productos=>productos.id===id)
        
    }
    const clear=()=>{
        setProductos([])
    }
    const calcularTotal = () => {
        return productos.reduce(
            (total, suma) => total + suma.price * suma.qty,0
        );
    };
    return (
        <Provider value={{productos,addProduct,deleteProduct,clear,qtyProducts,isInCart,calcularTotal,logeado,usuarioLogeado,mostrarLogin,loginUser}}>
            {children}
        </Provider>
    )
}
export default CustomProvider