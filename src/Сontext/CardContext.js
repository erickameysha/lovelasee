import React, {createContext, useEffect, useState} from 'react';
import {catalogData} from "../commponent/Catalog/CatalogFakeData";


export const CardContext = createContext(null)
const CardProvider = ({children}) => {
    const [catalog, setCard] = useState([])
    const [basket, setBasket]= useState([])
const [item,setItem] = useState({})
    const getItem = (id) => {
      setItem(catalog.find(el=> el.id === id))
    }
    const getBasket = (array, sizeItem,colorItem) => {
        debugger
      let itemBasket= {...array, size: sizeItem, color: colorItem,}
        basket.map(el=>[...el, itemBasket])

    }
    useEffect(() => {
        setCard(catalogData.map(el => el))
    }, [])
    console.log(catalog)
    return <CardContext.Provider value={{getBasket,catalog, basket: item, getBasketItem: getItem}}>{children}</CardContext.Provider>
};

export default CardProvider;