
import React, { Component } from 'react';
import { Button } from 'reactstrap';

class CategoryButton extends Component {

    constructor(props) {
        super(props);

        this.state = { onOff: this.props.status, color: "secondary" };

        this.selected = this.selected.bind(this);
    }

    selected() {
        if (this.state.onOff) {
            this.setState({onOff: false, color: "secondary"});
        } else {
            this.setState({onOff: true, color: "success"});
        }
    }

    render() {
        return (
            <Button onClick={this.selected} color={this.state.color}>
                {this.props.name}
            </Button>
        );
    }
}

export default CategoryButton;
