import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { DropdownItem } from 'reactstrap';

class Category extends Component{

    constructor() {
        super();
        this.select = this.select.bind(this);
    }

    select() {
        this.props.updateTable(this.props.category.name);
    }

    render() {

        return (
            <DropdownItem toggle={true} className={this.props.status ? "btn selected" : "btn"} onClick={this.select}>
                <span>{this.props.category.name}</span>
            </DropdownItem>
        );

    }
}

Category.propTypes = {
    category: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        layer_id: PropTypes.number.isRequired,
        description: PropTypes.string
    }),
    name: PropTypes.string,
    updateTable: PropTypes.func,
    status: PropTypes.bool
};

export default Category;