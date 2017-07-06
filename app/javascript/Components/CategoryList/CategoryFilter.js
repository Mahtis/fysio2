
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryButton from "../Category/CategoryButton";
import { Button } from 'reactstrap';

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

                {categories.map((category, index) =>
                <CategoryButton
                            updateTable={this.props.updateTable}
                            key={this.props.publication_id + category.id}
                            shit={this.props.publication_id + category.id}
                            id={category.id}
                            name={category.name}
                            status={this.props.categorySelected.indexOf(category.name) > -1}
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
    updateTable: PropTypes.func
};

export default CategoryFilter;