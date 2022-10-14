import React, {useEffect, useState} from 'react';
import CategoryList from "../components/CategoryList";
import axios from "axios";
import api from "../components/API/Categorys"
import loadAnimation from "../lottie/99346-loader.json";
import Lottie from "lottie-react";

const Categorys = () => {
    const [category, setCategory] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect( () => {
        setLoading(true)
        async function loadPage() {
            const categoryAll = await api.getAll()
            setCategory(categoryAll)
        };
        loadPage().then(el=>{
            setLoading(false)
        })
    }, [])
    return (
        <div>{(loading)
            ? <Lottie animationData={loadAnimation} loop={true}/>
            : <CategoryList categorys={category}/>
        }
        </div>
    );
};

export default Categorys;