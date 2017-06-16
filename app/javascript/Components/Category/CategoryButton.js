
import React, { Component } from 'react';
import { Button } from 'reactstrap';

class CategoryButton extends Component {

    constructor(props) {
        super(props);
        this.state = {color: "secondary"};
        this.selected = this.selected.bind(this);
    }

    selected() {
        this.props.setCatState(this.props.name);
    }

    render() {
        return (
            <Button onClick={this.selected} color={this.props.status ? "success" : "secondary"}>
                {this.props.name}
            </Button>
        );
    }
}

export default CategoryButton;
