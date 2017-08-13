import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PublicationCategoryList extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <p>
                {this.props.categories.filter(category => { if(category.layer_id === this.props.layer) return category }).map(category =>
                    <p key={category.name + "-listing"}>
                        {category.name}
                    </p>
                )}
            </p>
        );
    }
}
PublicationCategoryList.propTypes = {
};

export default PublicationCategoryList;