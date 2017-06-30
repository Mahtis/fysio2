
import React, { Component } from 'react';
import { DropdownItem } from 'reactstrap';


class DropdownViewItem extends Component {
    constructor() {
        super();

        this.handleOnClick = this.handleOnClick.bind(this);

    }

    handleOnClick() {
        this.props.changeView(this.props.type);
    }

    render() {
        let type = this.props.type;
        return (
            <DropdownItem onClick={this.handleOnClick}>{type.name}</DropdownItem>
        );
    }
}

export default DropdownViewItem;