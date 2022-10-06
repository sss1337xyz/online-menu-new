import React from 'react';
import {Link, useParams} from "react-router-dom";
import CounterProducts from "./CounterProducts";

const ProductItem = (props) => {
    const params = useParams()

    return (
        <div className="card mb-1 mx-1">
            <div className="row g-2">
            <div className="col-4 mx-auto my-auto">
                <Link to={`/category/${params.slug}/${props.post.slug}`}>
                    <img src={props.post.photo} className="img-fluid rounded" alt="..."/>
                </Link>
            </div>

            <div className="col">
                <div className="">
                    <p className="card-title text-start fs-5 lh-1">{props.post.name}</p>
                    <p className="card-subtitle text-start lh-1"><small>{props.post.description}</small></p>
                </div>

                <div className="row">
                    <div className="col mx-auto">
                        <p className=" text-start lh-1">{
                            (props.post.grams)
                            ? <small> {props.post.grams} г</small>
                            :<small></small>
                        }</p>
                    </div>
                </div>
                <div className="row ">
                    <div className="col mx-auto">
                        <p className="card-subtitle text-start text-decoration-line-through lh-1">
                            {
                                (props.post.old_price)
                                    ? <small> {props.post.old_price} р</small>
                                    :   <small></small>
                            }
                        </p>
                        <p className="card-title text-start lh-1">{props.post.new_price} р</p>
                    </div>
                    <div className="col">
                        {
                            (props.post.topping_group || props.post.questions.length != 0) ? (
                                <div className="d-flex bottom-0 end-0 align-items-center justify-content-end mx-2"
                                     style={{maxWidth: '300px'}}>
                                    <Link to={`/category/${params.slug}/${props.post.slug}`} className="btn btn-warning " type='button'>
                                        Выбрать
                                    </Link>
                                </div>
                            ) : (<CounterProducts orders={props.orders} post={props.post} onAdd={props.onAdd}/>)
                        }

                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ProductItem;