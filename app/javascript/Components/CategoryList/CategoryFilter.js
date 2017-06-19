
import React, { Component } from 'react';
import CategoryButton from "../Category/CategoryButton";

class CategoryFilter extends Component{
    constructor() {
        super();
    }


    render() {
        let categories = [];
        for (let i = 0; i < this.props.categories.length; i++) {
            let category = this.props.categories[i];
            if (category.layer_id === this.props.layer) {
                for (let j = 0; j < category.ids.length; j ++) {
                    if (category.ids[j] === this.props.publication_id) {
                        categories.push(category);
                    }
                }
            }
        }

        return (
            <td>
                {categories.map(categoryButton =>
                    <CategoryButton
                        categorySelected={this.props.categorySelected}
                        setCategoryState={this.props.setCategoryState}
                        key={categoryButton.id}
                        name={categoryButton.name}
                        status={this.props.categorySelected.indexOf(categoryButton.name) > -1}
                    />
                )}
            </td>
        )
    }
}

export default CategoryFilter;