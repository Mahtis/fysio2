
import React, { Component } from 'react';

class Category extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span>{this.props.category.name}</span>
        );
    }
}

export default Category;