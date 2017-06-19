
import React, { Component } from 'react';
import { Button } from 'reactstrap';

class CategoryButton extends Component {

    constructor(props) {
        super(props);

        this.selected = this.selected.bind(this);
    }

    selected() {

        this.props.setCategoryState(this.props.name);

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

        const style3= {
            whiteSpace: 'normal'
        }

    return (


            <div style={this.props.status ? style2 : style1} onClick={this.selected}>
                <Button style={style3}>
                    {this.props.name}
                </Button>
            </div>

        );
    }
}

export default CategoryButton;
