/**
 * Created by perkoila on 27.7.2017.
 */
import React, { Component } from 'react';
import { NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import PublicationForm from "./PublicationForm";

class UserDropdown extends Component {
    constructor() {
        super();
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return(
            <NavLink>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret className={"categoryDrop"}>
                        User
                    </DropdownToggle>
                    <DropdownMenu className={"categoryDrop"}>
                        <DropdownItem>
                            <PublicationForm createPublication={this.props.createPublication} />
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavLink>
        )
    }
}

export default UserDropdown;
