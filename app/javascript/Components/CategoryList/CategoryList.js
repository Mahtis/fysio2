
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Category from "../Category/Category";

import { DropdownItem, ListGroup } from 'reactstrap';

class CategoryList extends Component{



    render() {
        if(this.props.categories === null){
            return null;
        }else{
            return (
                    <ListGroup className={'btn-block'}>
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

CategoryList.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    }))
};

export default CategoryList;