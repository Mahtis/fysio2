
import React, { Component } from 'react';
import Category from "../Category/Category";

import { DropdownItem, ListGroup } from 'reactstrap';

class CategoryList extends Component{
    constructor() {
        super();
        this.state = {
            categories: []
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            categories: nextProps.categories
        })
    }

    render() {
        if(this.state.categories === null){
            return null;
        }else{
            const width = {
                width: '100%'
            }
            return (
                <div className={['btn-group']} style={width}>
                    <ListGroup className={['btn-block']}>
                        { this.state.categories.map(category =>
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

export default CategoryList;