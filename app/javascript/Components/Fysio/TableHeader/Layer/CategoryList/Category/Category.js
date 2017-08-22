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
        this.props.updateTable(this.props.id);
    }

    /**
     *  Lifecycle render method
     *  @returns {XML} The view as jsx
     */

    render() {
        let category = this.props.data.getCategoryById(this.props.id);

        return (
            <DropdownItem toggle={true} className={category.selected ? "btn selected" : "btn"} onClick={this.select}>
                <span>{category.name}</span>
            </DropdownItem>
        );

    }
}

Category.propTypes = {
    data: PropTypes.object
};

export default Category;