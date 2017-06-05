
import React, { Component } from 'react';
import Category from "../Category/Category";

import { DropdownItem, ListGroup } from 'reactstrap';

class CategoryList extends Component{
    constructor(props) {
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
        if(this.state.categories == null){
            return null;
        }else{
            return (
                <div>
                    <ListGroup>
                        { this.state.categories.map(l => <DropdownItem key={l.id}><Category key={l.id} category={l}/></DropdownItem>) }
                    </ListGroup>
                </div>
            )
        }
    }
}

export default CategoryList;