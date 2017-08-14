import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PublicationCategoryList extends Component {

    constructor() {
        super();
    }

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

    render() {
        let categories = this.getPublicationLayerCategories();

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