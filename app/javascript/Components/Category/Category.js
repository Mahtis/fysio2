import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { DropdownItem, Button } from 'reactstrap';

class Category extends Component{

    constructor(props) {
        super(props);

        this.selected = this.selected.bind(this);
    }

    selected() {
        this.props.updateTable(this.props.category.name);
    }



    render() {
        const width = {
            width: '150px',
            maxWidth: '150px',
            minWidth: '150px'
        };

        const style1 = {
            backgroundColor: 'white',
            whiteSpace: 'normal',
            //width: '150px',
            //minWidth: '150%',
            //maxWidth: '150%',

        };
        const style2 = {
            backgroundColor: 'green',
            whiteSpace: 'normal',
            //width: '150px',
            //minWidth: '150%',
            //maxWidth: '150%',
        };

        // are these checks necessary?
        if (this.props.category === undefined || this.props.category.name === undefined) {
            return null;
        }

        return (
            <DropdownItem style={this.props.status ? style2 : style1} onClick={this.selected}>
                <span style={width}>{this.props.category.name}</span>
            </DropdownItem>
        );
    }
}

Category.propTypes = {
    category: PropTypes.shape({
        name: PropTypes.string.isRequired
    })
};

export default Category;