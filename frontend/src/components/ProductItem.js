import React from 'react';
import {Link, useParams} from "react-router-dom";
import CounterProducts from "./CounterProducts";

const ProductItem = (props) => {
    const params = useParams()

    return (
        <div className="card mb-2 pb-2 mx-1 product__cart" style={{overflowX: "hidden"}}>
            <div className="row ">
            <div className="col-4 mx-auto my-auto">
                <Link to={`/category/${params.slug}/${props.post.slug}`}>
                    <img src={props.post.photo} className="img-fluid rounded" alt="..."/>
                </Link>
            </div>

            <div className="col d-flex flex-column justify-content-between">
                <div className="row mb-auto">
                    <div className="row ">
                        <div className="col">
                            <Link to={`/category/${params.slug}/${props.post.slug}`}>
                                <p className="card-title  text-start fs-6 lh-1">{props.post.name}</p>
                            </Link>
                        </div>
                        <div className="col card-title px-0 py-0 text-end">
                            <span >{
                                (props.post.grams)
                                    ? <small> {props.post.grams} г</small>
                                    :<small></small>
                            }</span>
                        </div>
                    </div>
                    <p className="card-subtitle text-start card-descript lh-1"><small>
                        <Link to={`/category/${params.slug}/${props.post.slug}`}>
                            {props.post.description}
                        </Link>
                        </small></p>
                </div>

                <div className="row ">
                    <div className="col">
                        <div className={ (!props.post.old_price) ? "my-3" : "my-2"}>
                            <p className="card-subtitle  text-decoration-line-through lh-1">
                                {
                                    props.post.old_price &&
                                    <small> {props.post.old_price} р</small>

                                }
                            </p>
                            <p className="card-title fs-4 lh-1">{props.post.new_price} р</p>
                        </div>

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