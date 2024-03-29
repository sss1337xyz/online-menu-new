import React from 'react';
import OrdersList from "../components/orders/OrdersList";

const Orders = (props) => {
    //Определяем тип товара
    return (
        <div>
            <OrdersList type={"none"} orders={props.orders} post={props.orders.none} onAdd={props.onAdd}/>

            <OrdersList type={"with"} orders={props.orders} post={props.orders.with} onAdd={props.onAddWith}/>

        </div>
    );
};

export default Orders;