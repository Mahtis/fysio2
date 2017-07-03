import React, {Component} from 'react';
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

        this.hover = this.selected.bind(this);
    }

    toggle() {
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        });
    }

    selected() {

        this.props.updateTable(this.props.name);
    }


    mouseOver() {
        this.setState({hover: true});
    }

    mouseOut() {
        this.setState({hover: false});
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
        const styleHover = {
            backgroundColor: 'red',
            whiteSpace: 'normal',
            minWidth: '50%',
            maxWidth: '100%',
        }
        var useStyle;
        if (this.props.status) {
            useStyle = style2;
            //} else if (this.state.hover) {
            //    useStyle = styleHover;
        } else {
            useStyle = style1;
        }

        // onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}
        return (
            <Button id={this.props.unId} style={useStyle} onClick={this.selected}>
                <Tooltip isOpen={this.state.tooltipOpen} autohide={false} target={this.props.unId}
                         toggle={this.toggle} delay={100}>
                    {'aaa'+this.props.description}
                    <br/>
                    <a target="_blank" href={this.props.infolink} id="TooltipExample">More</a>
                </Tooltip>
                {this.props.name}
            </Button>
        );
    }
}

export
default
CategoryButton;

// <Button style={this.props.status ? style2 : style1} onClick={this.selected}>
//<Button style={style1} onClick={this.mores}>
//More...
//</Button>
