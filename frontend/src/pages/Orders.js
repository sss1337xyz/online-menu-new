import React from 'react';
import OrdersList from "../components/orders/OrdersList";
import api from "../components/API/Orders";

const Orders = (props) => {
    //Определяем тип товара
    let tg = window.Telegram.WebApp; //объявили chat_id тг

    function sendOrder(){
        let json = {
            chat_id: 123,
            orders: props.orders
        }
        api.sendOrder(json).then(()=>{
            console.log("запрос наверн выполнен")
        })

    }
    //tg.openInvoice("https://sex.com")
    return (
        <div>
            <OrdersList type={"none"} orders={props.orders} post={props.orders.none} onAdd={props.onAdd}/>

            <OrdersList type={"with"} orders={props.orders} post={props.orders.with} onAdd={props.onAddWith}/>


            <button onClick={sendOrder}>Оплатить лол</button>
        </div>
    );

};

export default Orders;