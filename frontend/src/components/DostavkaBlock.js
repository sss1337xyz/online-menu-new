import React from 'react';

const DostavkaBlock = () => {
    return (
        <div className="dostavka__form container-fluid" >
            <div className="mb-3">
                <label htmlFor="InputName" className="form-label">Адрес доставки</label>
                <input type="text" className="form-control" id="InputName"/>
            </div>
            <div className="row d-flex align-items-end mb-3">
                <div className="col">
                    <label htmlFor="InputName" className="form-label">Подъезд</label>
                    <input type="text" className="form-control" id="InputName"/>
                </div>
                <div className="col">
                    <label htmlFor="InputName" className="form-label">Кв./дом*</label>
                    <input type="text" className="form-control" id="InputName"/>
                </div>
                <div className="col">
                    <label htmlFor="InputName" className="form-label">Этаж</label>
                    <input type="text" className="form-control" id="InputName"/>
                </div>
            </div>

        </div>
    );
};

export default DostavkaBlock;