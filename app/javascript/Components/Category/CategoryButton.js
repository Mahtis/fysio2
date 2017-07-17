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

        this.props.updateTable(this.props.name);
    }

    render() {
        const styleDefault = {
            color: 'rgb(0, 0, 0)',
            backgroundColor: 'rgb(220, 255, 220)',
            borderColor: 'rgb(0, 0, 0)',
            whiteSpace: 'normal',
            textAlign: 'center',
            minWidth: '50%',
            maxWidth: '100%',
        }
        const styleSelected = {
            color: 'rgb(255, 255, 255)',
            backgroundColor: 'rgb(150, 255, 150)',
            borderColor: 'rgb(255, 255, 255)',
            whiteSpace: 'normal',
            textAlign: 'center',
            minWidth: '50%',
            maxWidth: '100%'
        }
        var useStyle;
        if (this.props.status) {
            useStyle = styleSelected;
        } else {
            useStyle = styleDefault;
        }

        return (
            // <Button style={this.props.status ? style2 : style1} onClick={this.selected}>
            //full width: block
            //<p id={this.props.unId} style={useStyle} onClick={this.selected} > Button
            <Button id={this.props.unId} style={useStyle} onClick={this.selected}
                    size="sm" >

                <Tooltip isOpen={this.state.tooltipOpen} autohide={false} target={this.props.unId} toggle={this.toggle}
                         delay={100} placement="bottom left">
                    {this.props.description}
                    <br/>
                    <a target="_blank" href={this.props.infolink} id="TooltipExample">More</a>
                </Tooltip>

                {this.props.name}
            </Button>
            //</p>

        );
    }
}
https://react-bootstrap.github.io/components.html bsSize: one of: "lg", "large", "sm", "small", "xs", "xsmall"

CategoryButton.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    unId: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    infolink: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
};

export default CategoryButton;
