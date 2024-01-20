import { createContext } from "react";
import useLocalStorage from "../hooks/useLOcalStorage";


export const BasketContext=createContext()



const BasketProvider = ({children}) => {
    const [basket, setBasket] = useLocalStorage("basket")
    function addBasket(product) {
        const existBasket=basket.findIndex(x=>x._id===product._id)
        if (existBasket!==-1) {
            basket[existBasket].count++
            setBasket([...basket])
          
        }
        else{
            setBasket([...basket,{...product,count:1}])
        }
        
    }
        function incBasket(product) {
            const existBasket=basket.findIndex(x=>x._id===product._id)
            if (existBasket!==-1) {
                basket[existBasket].count++
                setBasket([...basket])
            }
             
    }
    function decBasket(product) {
        const existBasket=basket.findIndex(x=>x._id===product._id)
        if (existBasket!==-1) {
            basket[existBasket].count--
            setBasket([...basket])
            if (basket[existBasket].count===0) {
                deleteBasket(product)
            }
        }
         
}
function deleteBasket(product) {
            const deletedBasket=basket.filter(x=>x._id!==product._id)
            setBasket(deletedBasket)
        }
    const  data={
        basket, setBasket,decBasket,incBasket,addBasket,deleteBasket
    }
  return (
    <BasketContext.Provider value={data}>
{children}
    </BasketContext.Provider>
  )
}

export default BasketProvider