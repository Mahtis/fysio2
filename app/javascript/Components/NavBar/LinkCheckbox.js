/**
 * Created by perkoila on 27.8.2017.
 */
import React, { Component } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

class LinkCheckbox extends Component{
    constructor() {
        super();
        this.handleCheckbox = this.handleCheckbox.bind(this);
    }

    handleCheckbox() {
        this.props.handleCheckbox(this.props.link);
    }

    render() {
        return(
            <FormGroup >

                <Input type="checkbox" onChange={this.handleCheckbox} />
                {this.props.link.link_url}

            </FormGroup>
        )
    }
}

export default LinkCheckbox;
