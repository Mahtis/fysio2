
import React, { Component } from 'react';
import { ListGroupItem,
         ButtonDropdown,
         DropdownToggle,
         DropdownMenu
} from 'reactstrap';
import CategoryList from "../CategoryList/CategoryList";

class Layer extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        console.log(props.categories);
        this.state = {
            dropdownOpen: false,
            categories: props.categories,
            id: props.id
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
            <ListGroupItem id={this.props.layer.id}>
                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>
                    {this.props.layer.name}
                    </DropdownToggle>
                    <DropdownMenu>
                        <CategoryList key={this.state.id} categories={this.state.categories}/>
                    </DropdownMenu>
                </ButtonDropdown>
            </ListGroupItem>
        );
    }
}

export default Layer;