
import React, { Component } from 'react';
import { Button } from 'reactstrap';

class CategoryButton extends Component {

    constructor(props) {
        super(props);
        //console.log("nakki");
        this.state = {color: "secondary"};
        /*this.state = { onOff: this.props.status, color: "secondary" };
        if (this.state.onOff) {
            this.state.color = "success";
        }*/
        this.selected = this.selected.bind(this);
    }

    comonentWillReceiveProps(nextProps) {
        console.log("jeee");
        if (nextProps.status) {

            this.setState({color: "success"});
        } else {
            this.setState({color: "secondary"});
        }
    }

    selected() {
        this.props.setCatState(this.props.name);
        /*if (this.state.onOff) {
            this.setState({onOff: false, color: "secondary"});
        } else {
            this.setState({onOff: true, color: "success"});
        }*/
    }

    render() {
        console.log(this.props.status);
        //console.log(this.props.name + this.state.onOff);
        return (
            <Button onClick={this.selected} color={this.props.status ? "success" : "secondary"}>
                {this.props.name}
            </Button>
        );
    }
}

export default CategoryButton;
