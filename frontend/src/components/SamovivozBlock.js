import React from 'react';

const SamovivozBlock = () => {
    return (
        <div className="samovivoz__form container-fluid" >
            <div className="form-group">
                <label htmlFor="adress_restaraun" className=" col-form-label ">Адрес</label>
                <select id="adress_restaraun justify-content-left" className=" form-control">
                    <option>ул. Самойлова 42</option>
                    <option>ул. Ленина 34</option>
                    <option>ул. Гагарина 12</option>
                </select>
            </div>
        </div>
    );
};

export default SamovivozBlock;