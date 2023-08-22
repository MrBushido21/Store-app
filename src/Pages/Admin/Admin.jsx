import { useContext, useState } from "react";
import Modal from "../../UI/Modal/Modal";
import { useAuth } from "../../hooks/useIsAuth";
import "./admin.css"
import { dataFrige } from "../../Data/dataFridge";
import { dataPhones } from "../../Data/dataPhones";
import { dataLeptop } from "../../Data/dataLeptop";
function Admin() {


    useAuth("/admin")

    const [modalState, setModalState] = useState(false)
    const [valueTipe, setTipe] = useState("")
    const [valueId, setId] = useState("19")
    const [valueLink, setLink] = useState("https://content1.rozetka.com.ua/goods/images/big/181827426.jpg")
    const [valueTitle, setTitle] = useState("Холодильник BOSCH KAI93VI304")
    const [valuePrice, setPrice] = useState("74 766")
    const [valueDescription, setDescription] = useState("Холодильник BOSCH KAI93VI304 двокамерний крутий стильний")
    
    const createNewItem = () => {
        const newItem = {
            id: valueId,
            image: valueLink,
            title: valueTitle,
            price: valuePrice,
            rating: "3",
            description: valueDescription
        }

        
        setModalState(false)
        if(valueTipe === "fridge") {
           dataFrige.push(newItem)
        } else if (valueTipe === "phone") {
            dataPhones.push(newItem)
        } else if (valueTipe === "leptop") {
            dataLeptop.push(newItem)
        }
    }

return (
    <div className="admin-panels">
        <button onClick={() => setModalState(true)} className="admin-function">Додати новий товар</button>
        <Modal 
        setModalState={setModalState}
         modalState={modalState}
         valueId={valueId}
         valueLink={valueLink}
         valueTitle={valueTitle}
         valuePrice={valuePrice}
         valueDescription={valueDescription}
         valueTipe={valueTipe}
         setId={setId}
         setLink={setLink}
         setTitle={setTitle}
         setPrice={setPrice}
         setDescription={setDescription}
         setTipe={setTipe}
         createNewItem={createNewItem}
         />
    </div>
);
}
export default Admin;