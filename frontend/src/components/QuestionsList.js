import React from 'react';

/*{el.answers.map(answer=>{
                                <option>{answer.name}</option>
                            })}*/

const QuestionsList = (props) => {
    console.log(props)
    function selectCallback(e, item){
        let price = 0
        item.answers.forEach(el=>{
            if(el.id == e.target.value)
                price = el.price_increase
        })
        let question  = {
            id: item.id,
            question: item.question,
            answer_id: e.target.value,
            price: price
        }
        props.onChange(question)
    }

    function valueSelect(index, el){
        let val;
        if(props.defaultVal !==[])
            val = props.defaultVal[index].answer_id
        else
            val = el.answers[0]

        return val
    }


    return (
        <div key={1}>
            {props.post.map((el, index) => (
                <div className="row mb-3">
                    <div className="form-group row mx-auto">
                        <label htmlFor="size" className="col-2 col-form-label m-0 p-0">{el.question}</label>
                        <select key={el.id} id="size" className="col-10 form-control" onChange={(e)=>selectCallback(e, el)} value={valueSelect(index, el)}>
                            {el.answers.map(answer=>(
                                <option key={answer.id} value={answer.id}>{answer.name}</option>
                            ))}
                        </select>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default QuestionsList;