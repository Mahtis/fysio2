
import React, { Component } from 'react';
import { ButtonDropdown,
        DropdownToggle,
        DropdownMenu } from 'reactstrap';
import CategoryList from "../CategoryList/CategoryList";
import CategoryFilter from "../CategoryList/CategoryFilter";

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
        const staticPosition = {
            position: 'absolute',
            float: 'left',
            display: 'block',
            maxWidth: '100%',
            maxHeight: '100%',
            backgroundColor: 'white',
            padding: 'auto',
            textAlign: 'center',
        }
        let layer = this.props.layer;
        let categories = this.props.categories;
        let publications = this.props.publications;

        return (
            <tr>

                <td id={layer.id}>
                    <div style={staticPosition} >
                        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle caret>
                            {layer.name}
                            </DropdownToggle>
                            <DropdownMenu>
                                <CategoryList key={layer.id} categories={categories}/>
                            </DropdownMenu>
                        </ButtonDropdown>
                    </div>
                </td>
                { publications.map(p => <CategoryFilter setCatState={this.props.setCatState} catSel={this.props.catSel} key={p.id} pub_id={p.id} layer={layer.id} categories={categories} />) }

            </tr>
      );
    }
}

export default Layer;