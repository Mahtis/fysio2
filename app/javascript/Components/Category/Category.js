import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Category extends Component{

    render() {
        const width = {
            width: '150px',
            maxWidth: '150px',
            minWidth: '150px'
        }
        // are these checks necessary?
        if (this.props.category === undefined || this.props.category.name === undefined) {
            return null;
        }
        return (
            <span style={width}>{this.props.category.name}</span>
        );
    }
}

Category.propTypes = {
    category: PropTypes.shape({
        name: PropTypes.string.isRequired
    })
};

export default Category;