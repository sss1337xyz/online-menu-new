import React from 'react';

const StolikBlock = () => {
    return (
        <div className="stolik__form container-fluid" >
            <div className="row">
                <div className="col">
                    <label htmlFor="InputName" className="form-label">За каким столиком вы сидите?</label>
                </div>
                <div className="col">
                    <input type="number" className="form-control" id="NumberStolik"/>
                </div>
            </div>

        </div>
    );
};

export default StolikBlock;