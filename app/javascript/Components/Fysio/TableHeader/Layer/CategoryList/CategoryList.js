
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Category from "./Category/Category";

import { ListGroup } from 'reactstrap';

/*

Component that is the dropdown menu of the layer and contains list of the categories

 */

class CategoryList extends Component{

    /*

    Component constructor

    */

    constructor(){
        super();
    }

    /*

    Lifecycle render method

     */

    render() {
        if(this.props.categories === null || this.props.categories === undefined){
            return null;
        }else{
            return (
                    <ListGroup className={"categoryDrop"}>
                        { this.props.categories.map((category) =>
                                <Category
                                        key={category.id}
                                        name={category.name}
                                        category={category}
                                        updateTable={this.props.updateTable}
                                        status={this.props.categorySelected.indexOf(category.name) > -1}
                                 />
                        )}
                    </ListGroup>
            )
        }
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

export default CategoryList;