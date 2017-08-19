import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Lists publication categories related to a layer
 * @extends Component
 */

class PublicationCategoryList extends Component {

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
        let categories = this.props.data.getPublicationLayerCategories(this.props.publication_id, this.props.layer_id);
        return (
            <p>
                {categories.map(category =>
                    <span key={category.name + "-listing"}>
                        {category.name}
                        <br />
                    </span>
                )}
            </p>
        );
    }
}
PublicationCategoryList.propTypes = {
};

export default PublicationCategoryList;