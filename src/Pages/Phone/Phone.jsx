import { useEffect, useState } from "react";
import { dataPhones } from "../../Data/dataPhones";
import BrandList from "../../UI/BrandList";
import ItemCart from "../../commponents/ItemCart/ItemCart";
import { useFilteredItems, useSortByIndicator } from "../../hooks/useFilter";
import Sort from "../../UI/SortUI";
import MyInput from "../../UI/MyInput/MyInput";

function Phones() {

    const brandMapping = {
        "Apple": "Телефон Apple",
        "Samsung": "Телефон Samsung",
        "Xiomi": "Телефон Xiomi"
    };

    const {filteredData, actveBrand, filteredItems} = useFilteredItems(dataPhones, brandMapping)
    const {sortDataArr, setSortedData, selectPrice, selectRating, searchData, 
        changeInputValue, inputValue} = useSortByIndicator(filteredData)
    
     useEffect(() => {
        setSortedData(filteredData);
    }, [filteredData]);
    
    return (
        <>
            <Sort 
                filteredItems={filteredItems} 
                actveBrand={actveBrand}
                selectPrice={selectPrice}
                sortDataArr={sortDataArr}
                selectRating={selectRating}
            />
            <MyInput inputValue={inputValue} changeInputValue={changeInputValue}/>
            <div className="items__flexrow">
                {searchData.map(el =>
                    <ItemCart key={el.id} id={el.id} image={el.image} title={el.title} price={el.price} rating={el.rating} />
                )}
            </div>
        </>
    );
}
export default Phones;