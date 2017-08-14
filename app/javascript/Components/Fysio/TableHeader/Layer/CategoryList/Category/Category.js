import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { DropdownItem } from 'reactstrap';

/**
 * Component that is each category item in the dropdown
 * @extends Component
 */

class Category extends Component{

    /**
     * Component constructor
    */

    constructor() {
        super();
        this.select = this.select.bind(this);
    }

    /**
     *  Helper method that invokes the selection process in the parent node
     */

    select() {
        this.props.updateTable(this.props.category.name);
    }

    /**
     *  Lifecycle render method
     *  @returns {XML} The view as jsx
     */

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