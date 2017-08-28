
import React, { Component } from 'react';
import LayerLink from './LayerLink/LayerLink.js';
import PropTypes from 'prop-types';
import { Collapse, Button, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarHeader } from 'reactstrap';

/**
 * Navigation bar component, contains all the components within navigation bar
 * @extends Component
 */


class NavBar extends Component{

    /**
     * Component constructor
     */

    constructor(props) {
        super(props);

        this.changeView = this.changeView.bind(this);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    /**
     * Lifecycle method that triggers changing of its text after the component has loaded
     */

    componentDidMount() {
        if(this.props.layerTypes.length > 0) {
            this.setState({
                text: this.props.layerTypes[0].name
            })
        }
    }

    /**
     * Changes the layers in the view
     * @param type {object} Type object
     */

    changeView(type) {
        this.props.changeLayerView(type.id);
        this.setState({
            text: type.name
        });
    }

    /**
     * Toggles the dropdown menu state
     */

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    /**
     * Lifecycle render method
     * @returns {XML} The view as jsx
     */

    render(){
        let layerTypes = this.props.layerTypes;

        let addPubButton = (
            <NavItem>
                <NavLink className={"btn modeButtons"} href="/publications/new">Create Publication</NavLink>
            </NavItem>
        );
        let loginButton = (
            <NavItem>
                <Button className={"modeButtons"} onClick={this.props.doLogout}>Logout</Button>
            </NavItem>
        );
        let statusText = (<span />);

        if(this.props.userMode === "guest" || this.props.userMode === undefined){
            addPubButton = null;
            loginButton=(
                <NavItem>
                    <Button className={"modeButtons"} onClick={this.props.toLogin}>Login</Button>
                </NavItem>
            );
        }

        if(this.props.userMode !== undefined){
            statusText= (<Button className={"modeButtons"}>{this.props.userMode} </Button>);
        }

        let appModeVersion = (
            <Navbar color="faded" light toggleable className={"navBar"}>

                <NavbarToggler right onClick={this.toggle} />
                <Nav className="ml-auto" navbar>
                    <NavItem><Button className={"modeButtons"} onClick={this.props.toNormal}>Fysio</Button></NavItem>
                    <NavItem><Button className={"modeButtons"} onClick={this.props.toAbout}>About</Button></NavItem>
                    <NavItem><Button className={"modeButtons"} onClick={this.props.doClear}>Clear</Button></NavItem>
                    {addPubButton}

                </Nav>

                <Collapse isOpen={this.state.isOpen} navbar>
                </Collapse>
                <Nav className="ml-auto nav-left" navbar>
                    {layerTypes.map(t => <LayerLink className="navbar-left" key={t.id} type={t} changeView={this.changeView} />)}
                </Nav>
                <Collapse isOpen={this.state.isOpen} navbar>
                </Collapse>
                {statusText}
                <Nav className="ml-auto" navbar>
                    {loginButton}
                </Nav>
            </Navbar>
        );

        return ( appModeVersion );
    }
}

NavBar.propTypes = {
    layerTypes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        layers: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        }))
    })).isRequired,
    changeLayerView: PropTypes.func.isRequired
};

export default NavBar;