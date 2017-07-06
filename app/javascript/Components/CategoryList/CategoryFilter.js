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

        return (

            <td >

                {categories.map(categoryButton =>
                    <CategoryButton
                        categorySelected={this.props.categorySelected}
                        updateTable={this.props.updateTable}
                        key={categoryButton.id}
                        id={categoryButton.id}
                        unId={this.props.publication_id + ':' + categoryButton.id}
                        //unId={Math.random()}
                        name={categoryButton.name}
                        description={categoryButton.description}
                        infolink={categoryButton.infolink}
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
        //unId: PropTypes.string.isRequired,
        layer_id: PropTypes.number.isRequired,
        ids: PropTypes.arrayOf(PropTypes.number)
    })),
    layer: PropTypes.number,
    publication_id: PropTypes.number,
    categorySelected: PropTypes.arrayOf(PropTypes.string),
    setCategoryState: PropTypes.func
};

export default CategoryFilter;