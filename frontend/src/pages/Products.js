import React, {useEffect, useState} from 'react';
import api from "../components/API/Products";
import {useParams} from "react-router-dom";
import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";
import ProductItem from "../components/ProductItem";

const Products = (props) => {
    const params = useParams()
    const [products, setProducts] = useState([])
    useEffect( () => {
        async function loadPage() {
            const Products = await api.getByCategorySlug(params.slug)
            setProducts(Products)
        };
        loadPage()
    }, [])


    return (
        <div>
           <ProductList orders={props.orders} products={products} onAdd={props.onAdd}/>
        </div>
    );
};

export default Products;