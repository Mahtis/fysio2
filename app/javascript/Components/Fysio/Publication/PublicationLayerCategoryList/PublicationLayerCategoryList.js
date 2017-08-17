import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryButton from "./CategoryButton/CategoryButton.js";

/**
 * Lists all categories in a selected layer
 * @extends Component
 */

class PublicationLayerCategoryList extends Component{

    /**
     * Constructor
     */

    constructor() {
        super();
    }

    /**
     * Function that extracts all the associated categories
     * @returns {Array} The associated categories
     */

    getPublicationLayerCategories() {
        const categories = [];
        if (this.props.categories !== undefined) {
            for (let i = 0; i < this.props.categories.length; i++) {
                let category = this.props.categories[i];
                if (category.layer_id === this.props.layer) {
                    for (let j = 0; j < category.ids.length; j++) {
                        if (category.ids[j] === this.props.publication_id) {
                            categories.push(category);
                        }
                    }
                }
            }
        }
        return categories;
    }

    /**
     * Lifecycle render method
     * @returns {XML} The view as jsx
     */

    render() {
        let categories = this.getPublicationLayerCategories();

        return (

            <td className="rowCell">
                {categories.map(category =>
                    <CategoryButton
                        categorySelected={this.props.categorySelected}
                        updateTable={this.props.updateTable}
                        key={category.id + ':' + this.props.publication_id}
                        id={category.id}
                        unId={this.props.publication_id + ':' + category.id}
                        name={category.name}
                        description={category.description}
                        infolink={category.infolink}
                        status={this.props.categorySelected.indexOf(category.name) > -1}
                    />
                )}
            </td>
        )
    }
}

PublicationLayerCategoryList.propTypes = {
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

export default PublicationLayerCategoryList;