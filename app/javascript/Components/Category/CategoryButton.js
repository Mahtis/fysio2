import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from 'reactstrap';
import {Tooltip} from 'reactstrap';

class CategoryButton extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            tooltipOpen: false
        };
        this.selected = this.selected.bind(this);
    }

    toggle() {
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        });
    }

    selected() {
        this.props.setCategoryState(this.props.id);
    }

    render() {
        const style1 = {
            backgroundColor: 'white',
            whiteSpace: 'normal',
            minWidth: '50%',
            maxWidth: '100%',
        }
        const style2 = {
            backgroundColor: 'green',
            whiteSpace: 'normal',
            minWidth: '50%',
            maxWidth: '100%'
        }
        var useStyle;
        if (this.props.status) {
            useStyle = style2;
        } else {
            useStyle = style1;
        }

        return (
            // <Button style={this.props.status ? style2 : style1} onClick={this.selected}>
            <Button id={this.props.unId} style={useStyle} onClick={this.selected}>

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



