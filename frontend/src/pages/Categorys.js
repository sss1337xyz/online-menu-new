import React, {useEffect, useState} from 'react';
import CategoryList from "../components/CategoryList";
import axios from "axios";
import api from "../components/API/Categorys"

const Categorys = () => {
    const [category, setCategory] = useState([])

    useEffect( () => {
        async function loadPage() {
            const categoryAll = await api.getAll()
            setCategory(categoryAll)
        };
        loadPage()
    }, [])
    return (
        <div>
            <CategoryList categorys={category}/>
        </div>
    );
};

export default Categorys;