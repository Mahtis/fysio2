
import React, { Component } from 'react';
import { ButtonDropdown,
        DropdownToggle,
        DropdownMenu } from 'reactstrap';
import CategoryList from "./CategoryList/CategoryList";
import PropTypes from 'prop-types';

/**
 * Component that contains one layer, essentially one column in the table
 * @extends Component
 */

class Layer extends Component {

    /**
     * Component constructor
     */

    constructor() {
        super();
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    /**
     * Toggles the dropdown menu
     */

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    /**
     * Lifecycle render method
     * @returns {XML} The view as jsx
     */

    render(){
        let layer = this.props.data.getLayerById(this.props.id);

        //console.log(this.props.layer.id);
        //this.props.categories.map(c => {console.log(c.name)});
        return (
            <th id={layer.id} className="rowCell">
                <ButtonDropdown className="categoryDropUp" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret className={"categoryDrop"}>
                    {layer.name}
                    </DropdownToggle>
                    <DropdownMenu className={"categoryDrop"}>
                        <CategoryList
                            key={layer.id}
                            layer_id={layer.id}
                            data={this.props.data}
                            updateTable={this.props.updateTable}
                        />
                    </DropdownMenu>
                </ButtonDropdown>
            </th>
      );
    }
}

Layer.propTypes = {
    data: PropTypes.object.isRequired
};

export default Layer;