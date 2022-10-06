import React from 'react';
import {Link} from "react-router-dom";

const CategoryItem = (props) => {
    return (
        <div className="col-6 col-sm-4 pb-3">
            <div className="card h-100">
                <Link to={`/category/${props.post.slug}`}>
                    <img src={props.post.photo} className="card-img-top" alt="..."/>
                        <div className="category-name">
                            <h6 className="card-title ps-2">{props.post.name}</h6>
                        </div>
                </Link>
            </div>
        </div>
    );
};

export default CategoryItem;