import { useEffect, useState } from "react";
import { dataFrige } from "../Data/dataFridge"
import { dataLeptop } from "../Data/dataLeptop"
import { dataPhones } from "../Data/dataPhones"

const allProducts = [...dataFrige, ...dataPhones, ...dataLeptop];

export const useIdItem = (index) => {
    let selectedProduct = allProducts.find(product => +product.id === parseInt(index))
    return selectedProduct
};

