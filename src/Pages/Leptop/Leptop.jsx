import { useEffect, useState } from "react";
import { dataLeptop } from "../../Data/dataLeptop";
import BrandList from "../../UI/BrandList";
import ItemCart from "../../commponents/ItemCart/ItemCart";
import { useFilteredItems, useSortByIndicator } from "../../hooks/useFilter";
import Sort from "../../UI/SortUI";
import MyInput from "../../UI/MyInput/MyInput";

function Leptop() {

    const brandMapping = {
        "Apple": "Ноутбук Apple",
        "Samsung": "Ноутбук Samsung",
        "Xiomi": "Ноутбук Xiomi"
    };

    const {filteredData, actveBrand, filteredItems} = useFilteredItems(dataLeptop, brandMapping)
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
export default Leptop;