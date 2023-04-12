import React, {useContext, useEffect} from 'react';
import {fakeDate} from "../Item/Item";
import './Basket.css'
import {useParams} from "react-router-dom";
import {CardContext} from "../../Сontext/CardContext";

const Basket = ({props}) => {
    const params = useParams()
    const {getBasketItem,basket} = useContext(CardContext)

debugger
    useEffect(()=> {
        if (params.coinID)
            getBasketItem(params.coinID)
    },[])
    return (
        <div>
            <div className={'container'}>
                <div className={'pises'}>
                    <div>
                        <h3 className={'mapTitle'}><span>{basket.title}</span>
                            <span>{basket.color}</span></h3>
                        <p className={'mapPrice'}>{basket.price}</p>
                      <div className={'re'}>
                         <span>color: </span> <button className={'colorItem'}></button>
                      </div>


                    </div>
                    <div className={'prisesType'}>
                        Price: 130.00 BYN
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Basket;