import React, {useContext, useEffect, useState} from 'react';
import './Catalog.css'
import CatalogIMG from './CatalogImages/colection.png'
import {CatalogItem} from "./CatalogsItem/CatalogItem";

import {Link} from "react-router-dom";
import {CardContext} from "../../Сontext/CardContext";


const Catalog = () => {
    const {catalog,getBasketItem}= useContext(CardContext)
    let [catalogItem, setCatalog] = useState([])
    let [filter, setFilter] = useState('All')
    useEffect(()=> {
        setCatalog(catalog)
    },[])
    const filterProperty = (array, filter) => {
        if (filter === 'All') return array

        return array.filter((el) => el.filter === filter)
    }
    let hookCatalogItem = (id) => {
        let hook = catalogItem.filter(el => el.id === id)
        return hook
    }

    let dataType = filterProperty(catalogItem, filter)

    return (
        <div className={'container'}>

            <div className='catalog-marge'>

                    <img className={'catalog-img'} src={CatalogIMG} alt=""/>

                <div className="containere">

                    <div className={'flex-container'}>
                        <a className={filter === 'All' ? `flex-button-active` : `flex-button`}
                           onClick={() => setFilter('All')}>Всё</a>
                        <a className={filter === 'Underwear' ? `flex-button-active` : `flex-button`}
                           onClick={() => setFilter('Underwear')}>Нижнее белье</a>
                        <a className={filter === 'BodyJewelry' ? `flex-button-active` : `flex-button`}
                           onClick={() => setFilter('BodyJewelry')}>Украшения для тела</a>
                        <a className={filter === 'clothing' ? `flex-button-active` : `flex-button`}
                           onClick={() => setFilter('clothing')}>Одежда</a>
                        <a className={filter === 'Swimwear' ? `flex-button-active` : `flex-button`}
                           onClick={() => setFilter('Swimwear')}>Купальники</a>

                    </div>


                    <div className="catalog-items">
                        {

                            dataType.map((el) => {

                                return (
                                    <Link  onClick={()=>{getBasketItem(el.id)}} className={'catalog-link'} to={`/item/${el.id}`}>
                                        <CatalogItem
                                            img={el.img}
                                            key={el.id}
                                            id={el.id}
                                            title={el.title}
                                            color={el.color}
                                            price={el.price}
                                            filter={el.filter}
                                            hookCatalogItem={hookCatalogItem}
                                        />
                                    </Link>

                                )
                            })
                        }
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Catalog;