import { useState } from "react"

export const useFilteredItems = (data, brandMapping) => {
    const [originalData] = useState(data);
    const [filteredData, setData] = useState(data);
    const [actveBrand, setActiveBrand] = useState("All");

    const filteredItems = (value) => {
        const fullName = brandMapping[value];
        if (value === "All") {
            setData(originalData);
        } else {
            setData(originalData.filter(item => item.title === fullName));
        }
        setActiveBrand(value);
    };

    return { filteredData, actveBrand, filteredItems };
};

export const useSortByIndicator = (filteredData) => {
    const [selectPrice, setSelectPrice] = useState("")
    const [selectRating, setSelectRating] = useState("")
    const [sorted, setSortedData] = useState(filteredData)
    const [inputValue, setInputValue] = useState("")

        const changeInputValue = (value) => {
            setInputValue(value)
        }
        
        const searchData = sorted.filter(el => el.title.toLowerCase().includes(inputValue.toLowerCase()))


    const sortDataArr = (selectValue, dataIndicator, indicator1, indicator2) => {
        let sortedData = [...filteredData]

        if(selectValue === indicator1) {
            sortedData.sort((a, b) => parseFloat(a[dataIndicator].replace(/\s/g, "")) 
            - parseFloat(b[dataIndicator].replace(/\s/g, "")))
        } else if(selectValue === indicator2) {         
            sortedData.sort((a, b) => parseFloat(b[dataIndicator].replace(/\s/g, "")) 
            - parseFloat(a[dataIndicator].replace(/\s/g, "")))
        }

        setSelectPrice(selectValue)
        setSelectRating(selectValue);
        setSortedData(sortedData)
        
    }
    return {sortDataArr, setSortedData, selectPrice, setSelectPrice, selectRating, setSelectRating, searchData,
     changeInputValue, inputValue}
};