import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from 'reactstrap';
import {Tooltip} from 'reactstrap';

/**
 * Component for single category button
 * @extends Component
 */

class CategoryButton extends Component {

    /**
     * Constructor
     * @param props {object} Props as object
     */

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            tooltipOpen: false
        };
        this.selected = this.selected.bind(this);
    }

    /**
     * Function that toggles the state of associated tooltip
     */

    toggle() {
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        });
    }

    /**
     * Calls parent node update table function telling the category has been selected
     */

    selected() {
        this.props.updateTable(this.props.id);
    }

    /**
     * Lifecycle render method
     * @returns {XML} The view as jsx
     */

    render() {
        let useStyle;
        if (this.props.status) {
            useStyle = "buttonSelect";
        } else {
            useStyle = "buttonNormal";
        }
        if (this.props.name.length < 7){
            useStyle += " button_narrow";
        } else {
            useStyle += " button_wide";
        }
        return (
            // <Button style={this.props.status ? style2 : style1} onClick={this.selected}>
            <Button id={this.props.unId} className={useStyle} onClick={this.selected}>

                <Tooltip isOpen={this.state.tooltipOpen} autohide={false} target={this.props.unId} toggle={this.toggle}
                         delay={100} placement="bottom left">
                    {this.props.description}
                    <br/>
                    <a target="_blank" href={this.props.infolink} id="TooltipExample">More</a>
                </Tooltip>

                {this.props.name}
            </Button>
        );
    }
}

CategoryButton.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    unId: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    infolink: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
};

export default CategoryButton;



