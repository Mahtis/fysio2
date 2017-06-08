
import React, { Component } from 'react';
import { Button } from 'reactstrap';

class CategoryButton extends Component {

    constructor(props) {
        super(props);

        this.state = { selected: this.props.color };

        this.onBtnClick = this.onBtnClick.bind(this);
    }

    onBtnClick() {
        if (this.state.selected === "primary") {
            this.setState({selected: "warning"});
            this.props.table.state.myList.push(1);
            this.props.table.drawAgain();
        } else {
            this.setState({selected: "primary"});
        }
    }

    render() {
        return (
            <Button color={this.state.selected} onClick={() => this.onBtnClick()}>
                {this.props.category}
            </Button>
        );
    }
}

export default CategoryButton;
