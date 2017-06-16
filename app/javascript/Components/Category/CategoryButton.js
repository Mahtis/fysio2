
import React, { Component } from 'react';
import { Button } from 'reactstrap';

class CategoryButton extends Component {

    constructor(props) {
        super(props);

        this.selected = this.selected.bind(this);
    }

    selected() {

        this.props.setCatState(this.props.id);

    }

    render() {

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

    return (


            <div style={this.props.status ? style2 : style1} onClick={this.selected}>
                <span>
                    {this.props.name}
                </span>
            </div>

        );
    }
}

export default CategoryButton;
