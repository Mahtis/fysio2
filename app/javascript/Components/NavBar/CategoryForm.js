/**
 * Created by perkoila on 17.8.2017.
 */

import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input, Form, FormGroup } from 'reactstrap';

class CategoryForm extends Component {

    constructor() {
        super();

        this.state = {
            modalOpen: false,
            name: "",
            description: "",
            infolink: ""
        };

        this.toggle = this.toggle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleInfolinkChange = this.handleInfolinkChange.bind(this);
    }

    toggle() {
        this.setState({
            modalOpen: !this.state.modalOpen
        });
    }

    handleSubmit() {
        //e.preventDefault();
        let attributes = {
            name: this.state.name,
            layer_id: this.props.layer.id,
            description: this.state.description,
            infolink: this.state.infolink,
        };
        //console.log(attributes);
        this.props.createCategory(attributes);
        this.setState({
            modalOpen: !this.state.modalOpen,
            name: "",
            description: "",
            infolink: ""
        });
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleDescriptionChange(e) {
        this.setState({
            description: e.target.value
        })
    }

    handleInfolinkChange(e) {
        this.setState({
            infolink: e.target.value
        })
    }

    render() {
        return(
            <Button onClick={this.toggle}>
                New
                <Modal isOpen={this.state.modalOpen} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add category for layer {this.props.layer.name}</ModalHeader>
                    <ModalBody>
                        <Form >
                            <FormGroup>
                                <Label>
                                    Name:
                                    <Input type="text" value={this.state.name} onChange={this.handleNameChange} />
                                </Label>
                            </FormGroup>
                            <FormGroup>
                                <Label>
                                    Description:
                                    <Input type="text" value={this.state.description} onChange={this.handleDescriptionChange} />
                                </Label>
                            </FormGroup>
                            <FormGroup>
                                <Label>
                                    Infolink:
                                    <Input type="text" value={this.state.infolink} onChange={this.handleInfolinkChange} />
                                </Label>
                            </FormGroup>
                            <Button onClick={this.handleSubmit}>Submit</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </Button>
        )
    }

}

export default CategoryForm;
