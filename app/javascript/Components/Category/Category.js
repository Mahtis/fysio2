import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { DropdownItem, Button } from 'reactstrap';

class Category extends Component{

    constructor(props) {
        super(props);

        this.selected = this.selected.bind(this);
    }

    selected() {
        this.props.updateTable(this.props.category.name);
    }



    render() {
        // are these checks necessary?
        if (this.props.category === undefined || this.props.category.name === undefined) {
            return null;
        }

        return (
                <span className={this.props.status ? "btn-success" : "btn-default"} onClick={this.selected}>{this.props.category.name}</span>
        );
    }
}

Category.propTypes = {
    category: PropTypes.shape({
        name: PropTypes.string.isRequired
    })
};

export default Category;