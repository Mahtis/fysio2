import React, { Component } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';


class CategoryCheckbox extends Component {
    constructor() {
        super();
        this.handleCheckbox = this.handleCheckbox.bind(this);
    }

    handleCheckbox() {
        this.props.handleCheckbox(this.props.category)
    }

    render() {
        return(
            <FormGroup check>
                <Label check>
                    <Input type="checkbox" onChange={this.handleCheckbox}/>
                    {this.props.category.name}
                </Label>
            </FormGroup>
        )
    }
}

export default CategoryCheckbox;
