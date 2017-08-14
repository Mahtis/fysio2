import React, { Component } from 'react';
import {NavItem, NavLink} from 'reactstrap';

/**
 * Component for the different layer type views
 * @extends Component
 */

class LayerLink extends Component {

    /**
     * Component constructor
     */

    constructor(){
        super();
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    /**
     * CLick handler that propagates the status change to parent
     */

    handleOnClick() {
        this.props.changeView(this.props.type);
    }

    /**
     * Lifecycle render method
     * @returns {XML} The view as jsx
     */

    render() {
        let type = this.props.type;
        return (
            <NavItem onClick={this.handleOnClick}><NavLink href="#">{type.name}</NavLink></NavItem>
        );
    }
}

export default LayerLink;