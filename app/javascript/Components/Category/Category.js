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

            <DropdownItem className={this.props.status ? "selected" : "unselected"} onClick={this.selected}>
                <span>{this.props.category.name}</span>
            </DropdownItem>

        );
    }
}

Category.propTypes = {
    category: PropTypes.shape({
        name: PropTypes.string.isRequired
    })
};

export default Category;