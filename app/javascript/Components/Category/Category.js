
import React, { Component } from 'react';

class Category extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        const width = {
            width: '150px',
            maxWidth: '150px',
            minWidth: '150px'
        }
        return (
            <span style={width}>{this.props.category.name}</span>
        );
    }
}

export default Category;