
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
    };

    render() {
        return (
            <td>
                <span onClick={this.toggle}>{this.props.pub.name}</span>
                <Modal isOpen={this.state.modalOpen} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}><h6>{this.props.pub.name}</h6></ModalHeader>
                    <ModalBody>
                        <p><b>Abstract: </b>{this.props.pub.abstract}</p>
                        <p><b>Links: </b>{this.props.pub.links.map((link => <a key={link.id} href={link.url}>
                            {link.url} </a>))}</p>
                        <p><b>Authors: </b>{this.props.pub.authors.map((author => <span key={author.id}>
                            {author.name}
                            {/*We'll separate authors with ","*/}
                            {this.props.pub.authors.indexOf(author) !== this.props.pub.authors.length-1 && ", "}</span>))}</p>
                        <p><b>Year: </b>{this.props.pub.year}</p>
                        <p><b>Journal: </b>{this.props.pub.journal}</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" size="sm" onClick={this.toggle}>Close</Button>
                    </ModalFooter>
                </Modal>
            </td>
        );

    }
}

export default Publication;