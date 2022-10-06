import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import api from "../components/API/Products"
import QuestionsList from "./QuestionsList";
import ToppingList from "./ToppingList";
import CounterToppingProduct from "./CounterToppingProduct";

/* {(infoProduct.questions.length) ? (
                infoProduct.questions.map(el => {
                    <div className="row mb-3">

                        <div className="form-group row mx-auto">
                            <label htmlFor="size" className="col-2 col-form-label m-0 p-0"></label>
                            <select id="size" className="col-10 form-control">
                                {el.answers.map(answer=>{
                                    <option>{answer.name}</option>
                                })}


                            </select>
                        </div>

                    </div>
                })) : (
                <div></div>
                 <QuestionsList post={infoProduct.questions}/>
            )}*/

const AboutProduct = (props) => {
    const [loading, setLoading] = useState(true)
    const [infoProduct, setInfoProduct] = useState({})
    const params = useParams()
    const [summ, setSumm] = useState(0)

    const [toppings, setToppings] = useState([])
    const [questions, setQuestions] = useState([])

    const [quantityProduct, setQuantityProduct] = useState(1)

    useEffect(()=>{
        setLoading(true)
        if(params.id_order){
            console.log(props.orders)
            setInfoProduct(props.orders.with[params.id_order].info)
            setToppings(props.orders.with[params.id_order].toppings)
            setQuestions(props.orders.with[params.id_order].questions)
            setQuantityProduct(props.orders.with[params.id_order].quantity)
        }else {
            async function loadPage() {
                setInfoProduct(await api.getByProductSlug(params.product_slug))
            }
            loadPage()
        }


    }, [])

    useEffect(()=>{

        if(infoProduct.id && (!params.id_order)) {
            //задаем ответ на вопросы при загрузке страницы
            let newQuestionList = []

            infoProduct.questions.forEach(el=>{

                newQuestionList.push({
                    id: el.id,
                    question: el.id,
                    answer_id: el.answers[0].id,
                    price: el.answers[0].price_increase
            })
            })
            setQuestions(newQuestionList)
            console.log("задали ответы")
        }else{
            console.log(infoProduct)
        }
        if(infoProduct.id)
            setLoading(false)
    }, [infoProduct])

    useEffect(()=>{

        let newSumm = 0
        newSumm += quantityProduct * infoProduct.new_price

        toppings.forEach(el=>{
            newSumm += el.quantity * el.price
        })

        questions.forEach(el=>{
            newSumm += el.price * quantityProduct
        })

        setSumm(newSumm)

    }, [infoProduct, quantityProduct, toppings, questions])

    return (
        <div>
            { (loading)
                ? <p><small>Идёт загрузка</small></p>
                : ( <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="card_image">
                            <div className="col-12 mx-auto my-auto">
                                <img src={infoProduct.photo} className="img-fluid rounded" alt="..."/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h2>{infoProduct.name} {(infoProduct.grams) ? <span>{infoProduct.grams} г </span> :
                                <span></span>} </h2>
                        </div>
                        <div className="row">
                            <div className="col">
                                <i className="fa fa-creative-commons" aria-hidden="true"></i>
                                <i className="fa fa-creative-commons" aria-hidden="true"></i>
                                <i className="fa fa-creative-commons" aria-hidden="true"></i>
                            </div>
                            <div className="col">
                                {(infoProduct.callory) ?
                                    <p>{infoProduct.callory}/{infoProduct.protein}/{infoProduct.fats}/{infoProduct.carbohydrates}</p> :
                                    <p></p>}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <p><small>{infoProduct.description}</small></p>
                    </div>

                    {infoProduct.questions && infoProduct.questions.length && questions &&
                        <QuestionsList onChange={onChangeQuestion} post={infoProduct.questions} defaultVal={questions}/>
                    }

                    <label className="m-0 p-0">Топпинги</label>
                    {infoProduct.topping_group && infoProduct.topping_group.toppings.length &&

                        <ToppingList post={infoProduct.topping_group} onAdd={onAddTopping} onDel={onDelTopping}/>
                    }

                </div>
                <nav className="navbar bg-light sticky-bottom">
                <div className="container-fluid" >
                <div className="row justify-content-center d-flex align-items-center" >
                <div className="col">
                <CounterToppingProduct minSize={1} defaultValue={quantityProduct} post={{}} onAdd={onEditProduct} onDel={onEditProduct}/>

                </div>
                <div className="col ">
                <div className="">
                <span className="fw-bold text-center ">{summ} р</span>
                </div>

                </div>
                <div className="col mx-auto ">

                    <div className="">
                        {(!params.id_order)
                            ? <button className="btn btn-warning  text-nowrap" type='button'
                                      onClick={() => handleAddOrder()}>В корзину</button>
                            : <button className="btn btn-warning  text-nowrap" type='button'
                                      onClick={() => handleEditOrder()}>Редактировать</button>
                        }
                    </div>
                </div>
                </div>
                </div>
                </nav>

                </div>)}
    </div>
    );

    function handleAddOrder(){
        let item = {}
        item.info = infoProduct
        item.quantity = quantityProduct
        item.toppings = toppings
        item.questions = questions
        item.summ = summ

        props.onAddWith(item)
    }

    function handleEditOrder(){
        let item = {}
        item.info = infoProduct
        item.quantity = quantityProduct
        item.toppings = toppings
        item.questions = questions
        item.summ = summ

        props.onAddWith(item, params.id_order)
    }
    function onEditProduct(item, quantity, update){
        setQuantityProduct(quantity)
    }

    function onAddTopping(item, quantity, update){
        if(!update){
           let newTopping = toppings
            item.quantity = quantity
            newTopping.push(item)
            setToppings([...newTopping])
        }else{
            let newTopping = toppings
            newTopping.forEach(el=>{
                if(el.id == item.id){
                    el.quantity = quantity
                }
            })
            setToppings([...newTopping])
        }
    }

    function onDelTopping(item, quantity, del){
        if(del){
           let newToppings = toppings.filter(el=> el.id !== item.id)
           setToppings([...newToppings])
        }else{
            let newToppings = toppings
            newToppings.forEach(el=>{
                if(el.id == item.id)
                    el.quantity = quantity
            })
            setToppings([...newToppings])
        }
    }

    function onChangeQuestion(question){
        let newQuestions = questions
        newQuestions.forEach(el=>{
            if(el.id == question.id){
                el.answer_id = question.answer_id
                el.price = question.price
            }
        })
        setQuestions([...newQuestions])
    }

};

export default AboutProduct;