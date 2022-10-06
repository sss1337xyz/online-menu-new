import React, {useEffect, useState} from 'react';

const CounterToppingProduct = (props) => {
    const [counter, setCounter] = useState(0)
    const [minSize, setMinSize] = useState(0)

    useEffect(()=>{
        if(props.defaultValue) {
            setCounter(props.defaultValue)
            setMinSize(props.minSize)
        }
    }, [])

    useEffect(()=>{

    }, [counter])

    function inc(){
        let oldC = counter
        setCounter(counter+1)

        props.onAdd(props.item, oldC+1, (oldC == 0) ? false : true)

    }
    function dec(){
        if(counter>0 && counter > minSize) {
            let oldC = counter
            setCounter(counter - 1)
            props.onDel(props.item, oldC-1, (oldC == 1) ? true : false)
        }
    }

    return (
        <div className="col my-auto" >
            <div className="d-flex justify-content-end align-items-center">
                <button type="button" className={(counter == 0) ? "btn btn-warning px-2 btn-minus hide" : "btn btn-warning px-2 btn-minus" } onClick={()=>dec()}
                >
                    <i className="fas fa-minus"></i>
                </button>

                <span id='quantity__product' className="quantity__product  mx-3">{counter}</span>

                <button type="button" className="btn btn-warning px-2 btn-plus" onClick={()=>inc()}
                >
                    <i className="fas fa-plus"></i>
                </button>
            </div>

        </div>
    );
};

export default CounterToppingProduct;