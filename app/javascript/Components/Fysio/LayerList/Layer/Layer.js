
import React, { Component } from 'react';
import { ButtonDropdown,
        DropdownToggle,
        DropdownMenu } from 'reactstrap';
import CategoryList from "./CategoryList/CategoryList";
import PublicationLayerCategoryList from "./PublicationLayerCategoryList/PublicationLayerCategoryList";
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
        let categories = this.props.categories;
        let publications = this.props.publications;

        //console.log(this.props.layer.id);
        //this.props.categories.map(c => {console.log(c.name)});

        return (
            <tr>
                <td className="fixed-column" id={layer.id}>
                        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle caret>
                            {layer.name}
                            </DropdownToggle>
                            <DropdownMenu>
                                <CategoryList
                                    key={layer.id}
                                    categories={this.props.layerCategoriesDropDown}
                                    updateTable={this.props.updateTable}
                                    categorySelected={this.props.categorySelected}
                                />
                            </DropdownMenu>
                        </ButtonDropdown>
                </td>

                    { publications.map((publication) =>
                    <PublicationLayerCategoryList
                        updateTable={this.props.updateTable}
                        categorySelected={this.props.categorySelected}
                        key={publication.id}
                        publication_id={publication.id}
                        layer={layer.id}
                        categories={categories}
                    />) }
            </tr>
      );
    }
}

Layer.propTypes = {
    layer: PropTypes.object.isRequired,
    categories: PropTypes.arrayOf(PropTypes.object).isRequired,
    publications: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Layer;