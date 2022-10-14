import React from 'react';

const DopsAndPayBlock = () => {
    return (
        <div className="dostavka_none_in_restaraun container-fluid" >
            <legend>Дополнительно</legend>
            <div className="dop__options row">

                <div className="row">


                    <div className="col">
                        <label htmlFor="pribors" className="form-label">Приборы</label>
                    </div>

                    <div className="col">
                        <div className="d-flex justify-content-end" >
                            <button className="btn btn-primary px-2"
                                    onClick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                <i className="fas fa-minus"></i>
                            </button>


                            <input disabled id="form1" min="0" name="quantity" value="0" type="number" className=""
                            />


                            <button className="btn btn-primary px-2"
                                    onClick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                <i className="fas fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <legend>Оплата*</legend>
            <div className="payment__form">
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="BuyInput" id="BuyInput1" value="option1"/>
                    <label className="form-check-label" htmlFor="BuyInput1">Наличными</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="BuyInput" id="BuyInput2" value="option2"/>
                    <label className="form-check-label" htmlFor="BuyInput2">Оплата онлайн</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="BuyInput" id="BuyInput3" value="option3"/>
                    <label className="form-check-label" htmlFor="BuyInput3">Банковской картой</label>
                </div>

            </div>
        </div>
    );
};

export default DopsAndPayBlock;