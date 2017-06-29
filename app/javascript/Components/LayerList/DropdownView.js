
import React, { Component } from 'react';
import { ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';


class DropdownView extends Component {
    constructor() {
        super();

        this.changeView = this.changeView.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
            text: "Science"
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    changeView(type) {
        this.props.changeLayerView(type.id);
        this.setState({
            text: type.name
        });
    }



    render() {
        let layerTypes = this.props.layerTypes;
        return (
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                    {this.state.text}
                </DropdownToggle>
                <DropdownMenu>
                    {layerTypes.map(t => <DropdownItem key={t.id} onClick={() => this.changeView(t)}>{t.name}</DropdownItem>)}
                </DropdownMenu>
            </ButtonDropdown>
        )
    }
}


export default DropdownView;