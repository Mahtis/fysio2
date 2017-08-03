
import React, { Component } from 'react';
import LayerLink from './LayerLink/LayerLink.js';
import PropTypes from 'prop-types';
import { Collapse, Button, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarHeader } from 'reactstrap';
import { Link } from 'react-router';

class NavBar extends Component{
    constructor(props) {
        super(props);

        this.changeView = this.changeView.bind(this);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    componentDidMount() {
        console.log(this.props.layerTypes.length);
        if(this.props.layerTypes.length > 0) {
            this.setState({
                text: this.props.layerTypes[0].name
            })
        }
    }

    changeView(type) {
        this.props.changeLayerView(type.id);
        this.setState({
            text: type.name
        });
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render(){
        let layerTypes = this.props.layerTypes;
        let oldStuff= <div>
            <NavbarBrand className="header" href="/">fysio</NavbarBrand>
            <Nav className="ml-auto" navbar>
            <NavItem>
            <NavLink href="#">Home</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="#">Users</NavLink>
            </NavItem>
            </Nav>
        </div>;
        return (
                <Navbar color="faded" light toggleable className={"navBar"}>
                    <NavbarToggler right onClick={this.toggle} />

                    <Nav >
                    <NavItem><NavLink href="/"><Button className={"modeButtons"} >fysio</Button></NavLink></NavItem>
                    <NavItem><NavLink tag={Link} to="about">about</NavLink></NavItem>
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