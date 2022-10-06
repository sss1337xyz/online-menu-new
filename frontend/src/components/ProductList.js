import React from 'react';
import ProductItem from "./ProductItem";

const ProductList = (props) => {
    return (
        <div>
            {props.products.map(item =>
                <ProductItem orders={props.orders} key={item.id} post={item} onAdd={props.onAdd}/>
            )}
        </div>
    );
};

export default ProductList;