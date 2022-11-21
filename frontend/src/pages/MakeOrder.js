import React, {useEffect, useState} from 'react';
import DostavkaBlock from "../components/DostavkaBlock";
import SamovivozBlock from "../components/SamovivozBlock";
import StolikBlock from "../components/StolikBlock";
import DopsAndPayBlock from "../components/DopsAndPayBlock";

const MakeOrder = () => {
    const [block, setBlock] = useState(0)
    function changeBlock(event) {
        console.log(event.target.value)
        setBlock(event.target.value)
    }

    /*  {(block === 1)
                ? <DostavkaBlock/>
                : (block === 2) ?
                    <SamovivozBlock/>
                    : (block === 3) ?
                        <StolikBlock/>
                        : <div></div>

            }*/

    return (
        <div className="form">

            <div className="container-fluid">
                <legend>Контактные данные*</legend>
                <div className="mb-2">
                    <label htmlFor="inputPhone" className="form-label">Телефон</label>
                    <input type="tel" className="form-control phone" id="inputPhone"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="InputName" className="form-label">Имя</label>
                    <input type="text" className="form-control" id="InputName"/>
                </div>
                <legend>Способ оплаты*</legend>
                <div onChange={changeBlock}>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input inputPayType" type="radio" name="PaymentType" id="PaymentType1"
                               value="1"/>
                            <label className="form-check-label" htmlFor="PaymentType1">Доставка</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input inputPayType" type="radio" name="PaymentType" id="PaymentType2"
                               value="2"/>
                            <label className="form-check-label" htmlFor="PaymentType2">Самовывоз</label>
                    </div>
                </div>
            </div>

            {(block == 1)
                ? <DostavkaBlock/>
                : (block == 2) ?
                    <SamovivozBlock/>
                    : (block == 3) ?
                        <StolikBlock/>
                        : <div></div>

            }


        </div>
    );
};

export default MakeOrder;