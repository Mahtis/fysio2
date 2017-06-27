
import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
        const width = {
            maxWidth: '150px',
            width: '150px',
            minWidth: '150px'
        }
        return (

            <td style={width}>

                {categories.map(categoryButton =>
                    <CategoryButton
                        setCategoryState={this.props.setCategoryState}
                        key={categoryButton.id}
                        id={categoryButton.id}
                        name={categoryButton.name}
                        status={this.props.categorySelected.indexOf(categoryButton.name) > -1}
                    />
                )}
            </td>
        )
    }
}

CategoryFilter.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        layer_id: PropTypes.number.isRequired,
        ids: PropTypes.arrayOf(PropTypes.number)
    })),
    layer: PropTypes.number,
    publication_id: PropTypes.number,
    categorySelected: PropTypes.arrayOf(PropTypes.string),
    setCategoryState: PropTypes.func
};

export default CategoryFilter;