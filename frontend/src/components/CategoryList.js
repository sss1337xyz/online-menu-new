import React from 'react';
import CategoryItem from "./CategoryItem";

const CategoryList = (props) => {
    return (
        <div className="container ">
            <div className="row">
        {props.categorys.map(item =>
                <CategoryItem key={item.id} post={{id: item.id, photo: item.photo, name: item.name, slug: item.slug}}/>
            )}
            </div>
        </div>
    );
};

export default CategoryList;