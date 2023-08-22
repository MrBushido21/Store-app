import './cart.css'
import { useAddItemToCart} from '../../hooks/useId';
import { useContext, useEffect, useMemo, useState } from 'react';
import { Context } from '../../context/comtext';
import MyBtn from '../../UI/MyBtn/MyBtn';
function Cart() {


    const { cartItems, summ, setCartCounter, setCartItems, setSumm,} = useContext(Context)

    const cleanCart = () => {
        setCartCounter(0)
        setCartItems([]);
        setSumm(0) 
    }

    return (
        <div className='cart'>
            {
            cartItems.length > 0
            ? cartItems.map(prod =>
                <div key={+prod.id} className="product__body">
                        <div className="product__title">{prod.title}:</div>
                        <span className="product__price">{prod.price}грн</span>
                </div>
                )
            : <h2>Корзина пуста :(</h2>
            }
           {cartItems.length > 0 && 
                <div>
                    <div className="summ">Сумма: {summ} грн</div>
                    <button onClick={cleanCart}>Очистити корзину</button>
                </div>
           }
           
        </div>
    );
}
export default Cart;