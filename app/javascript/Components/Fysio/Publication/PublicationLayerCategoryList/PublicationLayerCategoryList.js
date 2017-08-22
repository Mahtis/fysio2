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
     * Lifecycle render method
     * @returns {XML} The view as jsx
     */

    render() {
        let categories = this.props.data.getPublicationLayerCategories(this.props.id, this.props.layer_id);

        return (

            <td className="rowCell">
                {categories.map(category =>
                    <CategoryButton
                        categorySelected={this.props.categorySelected}
                        updateTable={this.props.updateTable}
                        key={category.id + ':' + this.props.id}
                        id={category.id}
                        unId={this.props.id + ':' + category.id}
                        name={category.name}
                        description={category.description}
                        infolink={category.infolink}
                        status={category.selected}
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