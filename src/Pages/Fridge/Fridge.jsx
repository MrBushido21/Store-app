import { useContext, useEffect, useState } from "react";
import { dataFrige } from "../../Data/dataFridge";
import ItemCart from "../../commponents/ItemCart/ItemCart";
import { useFilteredItems, useSortByIndicator } from "../../hooks/useFilter";
import Sort from "../../UI/SortUI";
import { Context } from "../../context/comtext";
import MyInput from "../../UI/MyInput/MyInput";

function Fridge() {

    const brandMapping = {
        "Apple": "холодильник Apple",
        "Samsung": "холодильник Samsung",
        "Xiomi": "холодильник Xiomi"
    };
    
    const {filteredData, actveBrand, filteredItems} = useFilteredItems(dataFrige, brandMapping)
    const {sortDataArr, setSortedData, selectPrice, selectRating, searchData, 
        changeInputValue, inputValue} = useSortByIndicator(filteredData)


    useEffect(() => {
        setSortedData(filteredData);
    }, [filteredData]);


    return (
        <div>
            <Sort 
                filteredItems={filteredItems} 
                actveBrand={actveBrand}
                selectPrice={selectPrice}
                sortDataArr={sortDataArr}
                selectRating={selectRating}
            />
           <MyInput inputValue={inputValue} changeInputValue={changeInputValue}/>
            <div className="items__flexrow">
            {searchData.map(el => (
                <ItemCart key={el.id} id={el.id} image={el.image} title={el.title} price={el.price} rating={el.rating} />
            ))}
        </div>
        </div>
    );
}
export default Fridge;