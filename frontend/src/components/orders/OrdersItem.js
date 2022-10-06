import React from 'react';
import CounterProducts from "../CounterProducts";
import orders from "../../pages/Orders";
import OrderItemNone from "./OrderItemNone";
import OrderItemsWith from "./OrderItemsWith";

const OrdersItem = (props) => {
    console.log(props.index)
    return (
            <div>
                {(props.type == "none")
                    ? <OrderItemNone post={props.post} orders={props.orders} onAdd={props.onAdd}/>
                    : <OrderItemsWith index={props.index} post={props.post} orders={props.orders} onAdd={props.onAdd}/>
                }
            </div>

    );
};

export default OrdersItem;