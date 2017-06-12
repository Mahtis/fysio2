
import React, { Component } from 'react';
import { ListGroupItem,
        Button,
        ButtonDropdown,
        DropdownToggle,
        DropdownMenu } from 'reactstrap';
import CategoryList from "../CategoryList/CategoryList";
import CategoryFilter from "../CategoryList/CategoryFilter";

class Layer extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        console.log(props.categories);
        this.state = {
            dropdownOpen: false,
            categories: props.categories,
            id: props.id,
            publications: props.publications
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            categories: nextProps.categories,
            id: nextProps.id
        })
    }

    render(){
        return (
            <tr>
                <th id={this.props.layer.id}>
                    <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle caret>
                        {this.props.layer.name}
                        </DropdownToggle>
                        <DropdownMenu>
                            <CategoryList key={this.state.id} categories={this.state.categories}/>
                        </DropdownMenu>
                    </ButtonDropdown>
                </th>
                { this.state.publications.map(p => <CategoryFilter key={p.id} layer={this.props.layer.id} categories={this.state.categories} />) }
                {/*<td>

                    <Button>Category</Button>
                    <Button>Category</Button>
                    <Button>Category</Button>
                </td>
                <td>
                    <Button>Category</Button>
                    <Button>Category</Button>
                    <Button>Category</Button>
                </td>
                <td>
                    <Button>Category</Button>
                    <Button>Category</Button>
                    <Button>Category</Button>
                </td>*/}
            </tr>
      );
    }
}

export default Layer;