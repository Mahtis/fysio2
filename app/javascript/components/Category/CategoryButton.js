
import React, { Component } from 'react';
import { Button } from 'reactstrap';

class CategoryButton extends Component {

    constructor(props) {
        super(props);
        const style1 = {
            borderStyle: 'ridge',
            borderColor: 'black',
            backgroundColor: 'white',
            padding: '5px',
        }
        this.state = { onOff: this.props.status, style: style1 };

        this.selected = this.selected.bind(this);
    }

    selected() {
        const style1 = {
            borderStyle: 'ridge',
            borderColor: 'black',
            backgroundColor: 'white',
            padding: '5px',
        }
        const style2 = {
            borderStyle: 'ridge',
            borderColor: 'black',
            backgroundColor: 'green',
            padding: '5px',
        }
        if (this.state.onOff) {
            this.setState({onOff: false, style: style1});
        } else {
            this.setState({onOff: true, style: style2});
        }
    }

    render() {
        return (
            <div style={this.state.style} onClick={this.selected}>
                <span>
                    {this.props.name}
                </span>
            </div>
        );
    }
}

export default CategoryButton;
