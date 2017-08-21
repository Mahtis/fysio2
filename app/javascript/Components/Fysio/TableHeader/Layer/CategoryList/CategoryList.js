
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Category from "./Category/Category";

import { ListGroup } from 'reactstrap';

/**
 * Component that is the dropdown menu of the layer and contains list of the categories
 * @extends Component
 */

class CategoryList extends Component{

    /**
     * Component constructor
    */

    constructor(){
        super();
    }

    /**
     * Lifecycle render method
     * @returns {XML} The view as jsx
     */

    render() {
        if(this.props.data.getCategories() === null || this.props.data.getCategories() === undefined){
            return null;
        }else{
            return (
                    <ListGroup className={"categoryDrop"}>
                        { this.props.data.getCategoriesByLayerId(this.props.layer_id).map((category) =>
                                <Category
                                        key={category.id}
                                        id={category.id}
                                        data={this.props.data}
                                        updateTable={this.props.updateTable}
                                 />
                        )}
                    </ListGroup>
            )
        }
    }
}

Category.propTypes = {
    data: PropTypes.object.isRequired
};

export default CategoryList;