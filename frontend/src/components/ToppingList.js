import React from 'react';
import CounterToppingProduct from "./CounterToppingProduct";

const ToppingList = (props) => {


    return (
        <div>
            {props.post.toppings.map(el => (
            <div className="row mx-auto mb-1">
                <div className="row border mx-auto rounded" >
                    <div className="col-6 " >
                        <div className="text">
                            <p className="m-0 p-0"><small>{el.name}</small></p>
                            <p className="m-0 p-0"><small>{el.price} р</small></p>
                        </div>
                    </div>

                    <CounterToppingProduct defaultValue={el.quantity} item={el} onAdd={props.onAdd} onDel={props.onDel} />
                </div>

            </div>
        ))}
        </div>
    );
};

export default ToppingList;