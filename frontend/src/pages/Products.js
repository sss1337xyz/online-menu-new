import React, {useEffect, useRef, useState} from 'react';
import api from "../components/API/Products";
import {useParams} from "react-router-dom";
import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";
import ProductItem from "../components/ProductItem";
import loadAnimation from "../lottie/99346-loader.json";
import Lottie from "lottie-react";

const Products = (props) => {
    const params = useParams()
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const lottieRef = useRef();



    useEffect( () => {
        setLoading(true)
        lottieRef.current.setSubframe(true)
        async function loadPage() {
            const Products = await api.getByCategorySlug(params.slug)
            setProducts(Products)
        };
        loadPage().then(el=>{
            setLoading(false)
        })
    }, [])


    return (
        <div>
            {(loading)
                ? <Lottie lottieRef={lottieRef} animationData={loadAnimation} loop ={true} />
                : <ProductList orders={props.orders} products={products} onAdd={props.onAdd}/>
            }
        </div>
    );
};

export default Products;