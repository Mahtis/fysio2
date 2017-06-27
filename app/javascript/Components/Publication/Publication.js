
import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Publication extends Component {

    constructor() {
        super();
        this.toggle = this.toggle.bind(this);
        this.state = {
            modalOpen: false
        };
    }

    toggle() {
        this.setState({
            modalOpen: !this.state.modalOpen
        });
    }

    render() {
        return (
            <div>
                <span onClick={this.toggle}>{this.props.pub.name}</span>
                <Modal isOpen={this.state.modalOpen} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}><h6>{this.props.pub.name}</h6></ModalHeader>
                    <ModalBody>
                        <p><b>Abstract: </b>{this.props.pub.abstract}</p>
                        <p><b>Links: </b>{this.props.pub.abstract}</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" size="sm" onClick={this.toggle}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default Publication;