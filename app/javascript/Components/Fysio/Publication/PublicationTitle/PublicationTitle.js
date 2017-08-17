/**
 * Modal that is opened when a publication is clicked showing all information related to it
 * @extends Component
 */
import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';
import PublicationInfoTable from './PublicationInfoTable/PublicationInfoTable.js';
import DatabaseConnector from "../../../../Services/DatabaseConnector";

class PublicationTitle extends Component {

    /**
     * Constructor
     */

    constructor() {
        super();
        this.toggle = this.toggle.bind(this);
        this.state = {
            modalOpen: false,
            authors: [],
            links: []
        };
    }

    /**
     * Function that toggles the state of the modal and launches fetch for links and authors related
     * to the publication
     */

    toggle() {
        this.setState({
            modalOpen: !this.state.modalOpen
        });
        DatabaseConnector.fetchFromPath("authors.json?pubId=" + this.props.pub.id).then((resolve) => this.setState({
            authors: resolve
        }));
        DatabaseConnector.fetchFromPath("links.json?pubId=" + this.props.pub.id).then((resolve) => this.setState({
            links: resolve
        }));
    };

    /**
     * Lifecycle render method
     * @returns {XML} The view as jsx
     */

    render() {
        return (
            <td className="rowCell">
                <span key={this.props.pub.name} onClick={this.toggle}>{this.props.pub.name} </span>
                <Modal isOpen={this.state.modalOpen} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{this.props.pub.name}</ModalHeader>
                    <ModalBody>
                        <p><b>Abstract: </b>{this.props.pub.abstract}</p>
                        <p><b>Links: </b>{this.state.links.map((link => <a key={link.id} href={link.url}>
                            {link.url} </a>))}</p>
                        <p><b>Authors: </b>{this.state.authors.map((author => <span key={author.id}>
                            {author.name}
                            {/*We'll separate authors with ","*/}
                            {this.state.authors.indexOf(author) !== this.state.authors.length-1 && ", "}</span>))}</p>
                        <p><b>Year: </b>{this.props.pub.year}</p>
                        <p><b>Journal: </b>{this.props.pub.journal}</p>
                        <PublicationInfoTable
                            key={this.props.pub.id + "-infotable"}
                            publication={this.props.pub}
                            categories={this.props.categories}
                            layers={this.props.layers}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" size="sm" onClick={this.toggle}>Close</Button>
                    </ModalFooter>
                </Modal>

            </td>
        );

    }
}

PublicationTitle.propTypes = {
    pub: PropTypes.object,
};

export default PublicationTitle;