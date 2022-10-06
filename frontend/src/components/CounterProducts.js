import React, {useEffect, useState} from 'react';
import {useComponentDidMount} from "./useComponentDidMount";

const CounterProducts = (props) => {
    const [counter, setCounter] = useState(0)
    const isComponentMounted = useComponentDidMount()

    useEffect(()=>{
        if(props.orders){
            props.orders.none.forEach(el=>{
                if(el.id == props.post.id){
                    setCounter(el.quantity)
                }
            })
        }
    }, [])

    useEffect(()=>{
        if(isComponentMounted) {
            console.log("сработал т.к не старт страницы")
            props.onAdd(props.post, counter)
        }
    }, [counter])

    function inc(){
        setCounter(counter+1)
    }

    function dec(){
        if(counter!==0)
            setCounter(counter-1)
        //props.onAdd(props.post)
    }

    return (
        <div className="d-flex bottom-0 end-0 align-items-center justify-content-end mx-2"
             style={{maxWidth: '300px'}}>
            <button className="btn btn-warning px-2 btn-minus "
                    data-id="" onClick={ () => dec()}
            >
                <i className="fas fa-minus"></i>
            </button>

            <span id='quantity__product' className="quantity__product  mx-3">{counter}</span>
            <input id="form1" min="0" name="quantity" value="0" type="number" className="quantity__input"
            />
            <input hidden name='update' value='True'/>
            <button className="btn btn-warning  px-2 btn-plus " data-id="" onClick={ () => inc()}
            >
                <i className="fas fa-plus"></i>
            </button>
        </div>
    );
};

export default CounterProducts;