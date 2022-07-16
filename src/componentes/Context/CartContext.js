import React,{createContext,useState,useEffect} from 'react';

export const contexto=createContext();

const {Provider} = contexto;

const CustomProvider =({children})=>{

    const [productos,setProductos]=useState([])

    const [qtyProducts,setQtyProducts]=useState(0)

    const getQtyProducts=()=>{
        let qty=0;
        productos.forEach(producto => qty += producto.qty)
        //le agrego al array la prop cantidad
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
        //find cual encontro
        //some true false
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
        <Provider value={{productos,addProduct,deleteProduct,clear,qtyProducts,isInCart,calcularTotal}}>
            {children}
        </Provider>
    )
}
export default CustomProvider