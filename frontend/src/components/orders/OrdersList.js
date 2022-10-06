import React from 'react';
import OrdersItem from "./OrdersItem";

const OrdersList = (props) => {
    return (
        <div>
            {props.post.map((item, index)=>
                <OrdersItem index={index} type={props.type} post={item} orders={props.orders} onAdd={props.onAdd}/>
            )}
        </div>
    );
};

export default OrdersList;