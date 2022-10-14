import React, {Component, useEffect, useState} from 'react';
import { createRoot } from 'react-dom/client';
import classes from '../styles/App.css';
import HeaderNav from "./Header";
import {BrowserRouter, Link, Route, Routes, useNavigate} from "react-router-dom";
import Products from "../pages/Products";
import Categorys from "../pages/Categorys";
import AboutProduct from "./AboutProduct";
import Orders from "../pages/Orders";
import MakeOrder from "../pages/MakeOrder";

function App() {
    const [orders, setOrders] = useState({'none': [], 'with': []})


    function addOrder(item, quantity=1){
        if(quantity==0){
            let none = orders.none.filter(el => el.id !== item.id)
            let new_ord = {'none': [], 'with': []}
            new_ord.with = orders.with
            new_ord.none = none
            setOrders({...new_ord})

        }else if(quantity >= 1){
            let update = false;

            orders.none.forEach(el => {
                if (el.id == item.id) {
                    update = true;
                    el.quantity = quantity;
                }
            })
            if(update){
                setOrders({...orders})
            }else{
                item.quantity=quantity
                orders.none.push(item)
                setOrders({...orders})
            }
        }
        console.log("сработала функция добавления без топпингов")
        console.log(orders)

    }
    function addOrderWith(item){
        let newOrderWith = orders
        newOrderWith.with.push(item)
        setOrders(newOrderWith)
    }

    function incOrderWith(item, quantity){
        let changeOrder = orders
        changeOrder.with.forEach(el=>{
            if(el.id == item.id){
                el.quantity = quantity
            }
        })
        setOrders({...changeOrder})
    }

    function decOrderWith(item, quantity, del){
        let changeOrder;
        if(del){
            let filter = orders.with.filter(el=> el.id !== item.id)
            changeOrder = {'none': orders.none, 'with': filter}
        }else{
            changeOrder = orders
            changeOrder.with.forEach(el=>{
                if(el.id == item.id){
                    el.quantity = quantity
                }
            })
        }
        setOrders({...changeOrder})
    }

    function editOrderWith(item, index){
        let changeOrder = orders
        changeOrder.with[index] = item
        setOrders({...changeOrder})
    }
    useEffect(()=>{ console.log(orders) }, [orders])

  return (

      <div>
            <HeaderNav />
            <Routes>
                <Route path="/" element={<Categorys/>} />
                <Route exact path="/category/:slug" element={<Products orders={orders} onAdd={addOrder}/>} />
                <Route exact path="/category/:slug/:product_slug" element={<AboutProduct onAddWith={addOrderWith}/>} />
                <Route exact path="/edit_order/:id_order" element={<AboutProduct orders={orders} onAddWith={editOrderWith}/>} />
                <Route path="/orders" element={<Orders orders={orders} onAdd={addOrder} onAddWith={incOrderWith} onDelWith={decOrderWith}/>} />
                <Route path="/make_order" element={<MakeOrder orders={orders}/>} />
            </Routes>
      </div>

  );

}

export default App;

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>);

