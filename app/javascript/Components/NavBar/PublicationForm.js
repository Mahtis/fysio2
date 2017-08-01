/**
 * Created by perkoila on 27.7.2017.
 */
import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class PublicationForm extends Component {

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
    };

    render() {
        return (
            <div>
                <span onClick={this.toggle}>Add publication</span>
                <Modal isOpen={this.state.modalOpen} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add publication</ModalHeader>
                    <ModalBody>
                        <p>shiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
                            iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
                            iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiit</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" size="sm" onClick={this.toggle}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default PublicationForm;
