
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DropdownViewItem from './DropdownViewItem';
import { ButtonDropdown,
    DropdownToggle,
    DropdownMenu } from 'reactstrap';


class DropdownView extends Component {
    constructor() {
        super();

        this.changeView = this.changeView.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
            text: ""
        };
    }

    componentDidMount() {
        this.setState({
            text: this.props.layerTypes[0].name
        })
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
                    {layerTypes.map(t => <DropdownViewItem key={t.id} type={t} changeView={this.changeView}/>)}
                </DropdownMenu>
            </ButtonDropdown>
        )
    }
}

DropdownView.propTypes = {
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

export default DropdownView;