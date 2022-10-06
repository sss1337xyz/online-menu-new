import React from 'react';
import CounterProducts from "../CounterProducts";

const OrderItemNone = (props) => {
    return (
        <div className="card mb-1">
            <div className="row g-2">
                <div className="">

                </div>
                <div className="col-4 mx-auto my-auto">
                    <a href="">
                        <img src={props.post.photo} className="img-fluid rounded" alt="..."/>
                    </a>
                </div>

                <div className="col"  >
                    <div className="" >
                        <p className="card-title text-start fs-5 lh-1">{props.post.name}</p>
                        <p className="card-subtitle text-start lh-1"><small>{props.post.description}</small></p>
                    </div>

                    <div className="row" >
                        <div className="col mx-auto">
                            <p className=" text-start lh-1">
                                {props.post.grams && <small>{props.post.grams} г</small>
                                }</p>
                        </div>
                    </div>
                    <div className="row row-price-info" >
                        <div className="col mx-auto prices_info" >
                            <p className="card-subtitle text-start lh-1" ><small>{props.post.new_price} р</small></p>
                            <p className="card-title text-start lh-1 total_price" >{props.post.new_price * props.post.quantity} р</p>
                        </div>
                        <div className="col" >
                            <CounterProducts orders={props.orders} post={props.post} onAdd={props.onAdd}/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OrderItemNone;