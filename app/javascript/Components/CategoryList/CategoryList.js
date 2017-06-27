
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Category from "../Category/Category";

import { DropdownItem, ListGroup } from 'reactstrap';

class CategoryList extends Component{

    render() {
        if(this.props.categories === null){
            return null;
        }else{
            const width = {
                width: '100%'
            }
            return (
                <div className={'btn-group'} style={width}>
                    <ListGroup className={'btn-block'}>
                        { this.props.categories.map(category =>
                            <DropdownItem key={category.id}>
                                <Category
                                    key={category.id}
                                    category={category}
                                />
                            </DropdownItem>
                        )}
                    </ListGroup>
                </div>
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