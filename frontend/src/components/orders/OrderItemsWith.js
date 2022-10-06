import React from 'react';
import CounterProducts from "../CounterProducts";
import {Link} from "react-router-dom";

const OrderItemsWith = (props) => {
    console.log("ВЫВОД ПРЕДМЕТА")
    console.log(props)

    function variations(){
        let string = ""
        props.post.questions.map(el=> {

            props.post.info.questions.map(question =>{
                if(el.id == question.id){
                    question.answers.map(answer => {
                        if(el.answer_id == answer.id) {
                            string += `${answer.name}, `
                        }
                    })
                }
            })

        })
        console.log(string)
        return (<small> {string}</small>)
    }

    return (
        <div className="card mb-1">
            <div className="row g-2">
                <div className="">

                </div>
                <div className="col-4 mx-auto my-auto">
                    <a href="">
                        <img src={props.post.info.photo} className="img-fluid rounded" alt="..."/>
                    </a>
                </div>

                <div className="col"  >
                    <div className="" >
                        <p className="card-title text-start fs-5 lh-1">{props.post.info.name}
                            {variations()}
                        </p>
                        <p className="card-subtitle text-start lh-1">
                            {props.post.toppings.map(el=>(
                                <small>{el.name} x{el.quantity}, </small>
                            ))}

                        </p>
                    </div>

                    <div className="row" >
                        <div className="col mx-auto">
                            <p className=" text-start lh-1">
                                {props.post.info.grams && <small>{props.post.info.grams} г</small>
                                }</p>
                        </div>
                    </div>
                    <div className="row row-price-info" >
                        <div className="col mx-auto prices_info" >
                            <p className="card-subtitle text-start lh-1" ><small>{props.post.quantity} шт.</small></p>
                            <p className="card-title text-start lh-1 total_price" >{props.post.summ} р</p>
                        </div>
                        <div className="col" >
                            <div className="d-flex bottom-0 end-0 align-items-center justify-content-end mx-2"
                                 style={{maxWidth: '300px'}}>
                                <Link to={`/edit_order/${props.index}`} className="btn btn-warning " type='button'>
                                    Редактировать
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OrderItemsWith;