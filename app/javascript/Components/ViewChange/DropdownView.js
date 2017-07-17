
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
        if(this.props.layerTypes.length > 0) {
            this.setState({
                text: this.props.layerTypes[0].name
            })
        }
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
        const style = {
            color: 'rgb(0, 0, 0)',
            backgroundColor: 'rgb(220, 255, 220)',
            borderColor: 'rgb(0, 0, 0)',
            whiteSpace: 'normal',
            textAlign: 'center',
            //minWidth: '100%',
            //maxWidth: '100%',
        }
        let layerTypes = this.props.layerTypes;
        return (
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} >
                <DropdownToggle caret style={style}>
                    {this.state.text}
                </DropdownToggle>
                <DropdownMenu style={style}>
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