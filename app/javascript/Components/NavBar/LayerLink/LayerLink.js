import React, { Component } from 'react';
import {NavItem, NavLink} from 'reactstrap';

class LayerLink extends Component {

    constructor(){
        super();
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick() {
        this.props.changeView(this.props.type);
    }

    render() {
        let type = this.props.type;
        return (
            <NavItem onClick={this.handleOnClick}><NavLink href="#">{type.name}</NavLink></NavItem>
        );
    }
}

export default LayerLink;