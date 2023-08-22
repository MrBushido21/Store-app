import Select from "../Select";
import classes from "./modal.module.css"
import React from "react";
function Modal(props) {

    const hiddenModal = () => {
        props.setModalState(false)
    }

    return (
        <div className={props.modalState
            ? [classes.modal, classes.active].join(' ')
            : classes.modal}
            onClick={hiddenModal}
        >
            <div className={classes.content} onClick={(e) => e.stopPropagation()}>
                <label>Id писати з 19 (включно)</label>
                <Select
                    value={props.valueTipe}
                    onChange={value => props.setTipe(value)}
                    def="Тип товару"
                    options={[
                        { value: "tipe", name: "Тип товару" },
                        { value: "fridge", name: "холодильник" },
                        { value: "phone", name: "смартфон" },
                        { value: "leptop", name: "ноутбук" },
                    ]}
                />
                <input
                    className={classes.modalInput}
                    type="number"
                    value={props.valueId}
                    onChange={e => props.setId(e.target.value)}
                    placeholder="Id" />
                <input
                    className={classes.modalInput}
                    value={props.valueLink}
                    onChange={e => props.setLink(e.target.value)}
                    placeholder="Посилання на зображення" />
                <input
                    className={classes.modalInput}
                    value={props.valueTitle}
                    onChange={e => props.setTitle(e.target.value)}
                    placeholder="Назва товару" />
                <input
                    className={classes.modalInput}
                    value={props.valuePrice}
                    onChange={e => props.setPrice(e.target.value)}
                    placeholder="Ціна товару" />
                <input
                    className={classes.modalInput}
                    value={props.valueDescription}
                    onChange={e => props.setDescription(e.target.value)}
                    placeholder="Опис товару" />
                <button className={classes.modalBtn} onClick={props.createNewItem}>Додати новий товар</button>
            </div>
        </div>
    );
}
export default Modal;