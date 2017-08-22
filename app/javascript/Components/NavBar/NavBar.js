
import React, { Component } from 'react';
import LayerLink from './LayerLink/LayerLink.js';
import PropTypes from 'prop-types';
import { Collapse, Button, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarHeader } from 'reactstrap';
import { Link } from 'react-router-link'
import PublicationForm from "./PublicationForm";
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
        console.log(this.props.layerTypes.length);
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
                <PublicationForm
                    createPublication={this.props.createPublication}
                    createCategory={this.props.createCategory}
                    layerCategories={this.props.layerCategories}
                />
            </NavItem>
        );

        let loginButton = (
            <NavItem>
                <Button className={"modeButtons"} onClick={this.props.doLogout}>Logout</Button>
            </NavItem>
        );
        if(this.props.userMode === "guest"){
            addPubButton = null;
            loginButton=(
                <NavItem>
                    <Button className={"modeButtons"} onClick={this.props.toLogin}>Login</Button>
                </NavItem>
            );
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
                {this.props.userMode}
                <Nav className="ml-auto" navbar>
                    {loginButton}
                </Nav>
            </Navbar>
        );

        let oldVersion = (
            <Navbar color="faded" light toggleable className={"navBar"}>
                <NavbarBrand className="header" href="/">fysio</NavbarBrand>
                <NavbarToggler right onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto nav-left" navbar>
                        {layerTypes.map(t => <LayerLink className="navbar-left" key={t.id} type={t} changeView={this.changeView} />)}
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="#">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Users</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );

        let routerVersion = (
            <Navbar color="faded" light toggleable className={"navBar"}>
                <NavbarToggler right onClick={this.toggle} />

                <Nav >
                    <NavItem><Link to="/"><Button className={"modeButtons"} >fysio</Button></Link></NavItem>
                    <NavItem><Link to="/about"><Button className={"modeButtons"} >about</Button></Link></NavItem>
                    <NavItem><Link to="/login"><Button className={"modeButtons"} >login</Button></Link></NavItem>

                    <NavItem><NavLink href="/"><Button className={"modeButtons"} >fysio</Button></NavLink></NavItem>
                    <NavItem><NavLink tag={Link} href="/about">about</NavLink></NavItem>
                    <NavItem><NavLink href="/login"><Button className={"modeButtons"} >login</Button></NavLink></NavItem>
                </Nav>

                <Collapse isOpen={this.state.isOpen} navbar>
                </Collapse>

                <Nav className="ml-auto nav-left" navbar>
                    {layerTypes.map(t => <LayerLink className="navbar-left" key={t.id} type={t} changeView={this.changeView} />)}
                </Nav>

                <Collapse isOpen={this.state.isOpen} navbar>
                </Collapse>

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