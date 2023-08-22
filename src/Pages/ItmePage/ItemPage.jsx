import { useParams } from "react-router-dom";
import { dataFrige } from "../../Data/dataFridge";
import { dataLeptop } from "../../Data/dataLeptop";
import { dataPhones } from "../../Data/dataPhones";
import Rating from "../../UI/Rating";
import "./itemsPage.css"
import { useEffect, useState } from "react";
import ItemServer from "../../API/ItemsServer";
import Loader from "../../UI/Loader/Loader";
import { useIdItem } from "../../hooks/useId";


function ItemPage() {

    const {id} = useParams()
    
    const selectedProduct = useIdItem(id)

    const [comments, setCommnets] = useState([])
    const [isFetching, setIsFetching] = useState(false)

    const getComment = async () => {
        setIsFetching(true)
        const response = await ItemServer.getComment(id)
        setIsFetching(false)
        return setCommnets(response.data)
    }

    useEffect(() => {
        getComment()
    }, [])

    if(!selectedProduct) {
        return <div>Not found product</div>
    }
    

    return (
        <div className="itemPage">
            <div className="itemPage__flexrow">
                <div className="itemPage__img">
                    <img src={selectedProduct.image} alt="" />
                </div>
                <div className="itemPage__info">
                    <h4 className="itemPage__title">{selectedProduct.title}</h4>
                    <div>
                        <Rating rating={selectedProduct.rating}/>
                    </div>
                    <p className="itemPage__desription">{selectedProduct.description}</p>
                </div>
            </div>
            <h2 className="">Коментарі:</h2>
            {isFetching && <Loader />}
            {comments.map(com =>
                <div key={com.id} className="itemPage__comments">
                <span>Email: {com.email}</span>
                <p>{com.body}</p>
                
            </div>    
            )}
        </div>
    );
}
export default ItemPage;