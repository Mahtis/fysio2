
import React, { Component } from 'react';
import { Button } from 'reactstrap';

class CategoryButton extends Component {

    constructor(props) {
        super(props);

        this.selected = this.selected.bind(this);
    }

    selected() {
        console.log(1);
        this.props.setCategoryState(this.props.name);
    }

    render() {

        const style1 = {
            backgroundColor: 'white',
            whiteSpace: 'normal',
            minWidth: '50%',
            maxWidth: '100%',

        }
        const style2 = {
            backgroundColor: 'green',
            whiteSpace: 'normal',
            minWidth: '50%',
            maxWidth: '100%'
        }


        console.log(6);

    return (
        <Button style={this.props.status ? style2 : style1} onClick={this.selected}>
            {this.props.name}
        </Button>
        );
    }
}

export default CategoryButton;
