import { useNavigate } from "react-router-dom";
import Rating from "../../UI/Rating";
import MyBtn from "../../UI/MyBtn/MyBtn";
import { useContext } from "react";
import { Context } from "../../context/comtext";
import { useIdItem } from "../../hooks/useId";

function ItemCart(props) {
    const navigate = useNavigate()

    const opentItem = () => {
        return navigate(`store-app/main/itemPage/${props.id}`)
    }

    let {cartCounter, setCartCounter, cartItems, setCartItems, setSumm, summ} = useContext(Context)

    let item = useIdItem(props.id)

    const uppCartCounter = () => {
        setCartCounter(cartCounter += 1)
        setCartItems([...cartItems, item]);
        setSumm(summ += parseFloat(item.price.replace(/\s/g, "")))   
    }

    return (
        <div className="item-cart">
            <div onClick={opentItem}><img src={props.image} alt="" /></div>
            <div className="item-description">
                <h4>{props.title}</h4>
                <Rating rating={props.rating}/>
                <div>Ціна:<span> {props.price} грн</span></div>
            </div>
            <MyBtn value="Додати у корзину" uppCartCounter={uppCartCounter}/>
        </div>
    );
}
export default ItemCart;
