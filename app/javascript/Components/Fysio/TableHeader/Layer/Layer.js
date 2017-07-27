
import React, { Component } from 'react';
import { ButtonDropdown,
        DropdownToggle,
        DropdownMenu } from 'reactstrap';
import CategoryList from "./CategoryList/CategoryList";
import PropTypes from 'prop-types';

class Layer extends Component {

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

    render(){
        let layer = this.props.layer;

        //console.log(this.props.layer.id);
        //this.props.categories.map(c => {console.log(c.name)});
        return (
            <th id={layer.id}>
                <ButtonDropdown className="categoryDropUp" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret className={"categoryDrop"}>
                    {layer.name}
                    </DropdownToggle>
                    <DropdownMenu className={"categoryDrop"}>
                        <CategoryList
                            key={layer.id}
                            categories={this.props.layerCategoriesDropDown}
                            updateTable={this.props.updateTable}
                            categorySelected={this.props.categorySelected}
                        />
                    </DropdownMenu>
                </ButtonDropdown>
            </th>
      );
    }
}

Layer.propTypes = {
    layer: PropTypes.object.isRequired,
    categories: PropTypes.arrayOf(PropTypes.object).isRequired,
    publications: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Layer;