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
        let publication = this.props.data.getPublicationById(this.props.id);
        this.setState({
            modalOpen: !this.state.modalOpen
        });
        DatabaseConnector.fetchFromPath("authors.json?pubId=" + publication.id).then((resolve) => this.setState({
            authors: resolve
        }));
        DatabaseConnector.fetchFromPath("links.json?pubId=" + publication.id).then((resolve) => this.setState({
            links: resolve
        }));
    };

    /**
     * Lifecycle render method
     * @returns {XML} The view as jsx
     */

    render() {
        let publication = this.props.data.getPublicationById(this.props.id);
        let desc = publication.moreTitles;
        let fulldesc = "";
        if (desc !== null && desc.length > 2) {
             let array = desc.split("|");
             fulldesc = (
                 <div>
                    {array.map(function(object, i){
                        if (i % 2 === 0) {
                            return null;
                         } else {
                            return (<p key={i + "-moretitles-" + publication.name}><b>{array[i-1]}: </b>{array[i]}</p>);
                         }
                    })}
                 </div>
             );
        }

        return (
            <td className="rowCell">
                <span key={publication.name} onClick={this.toggle}>{publication.name}</span>
                <Modal isOpen={this.state.modalOpen} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{publication.name}</ModalHeader>
                    <ModalBody>
                        <p><b>Abstract: </b>{publication.abstract}</p>
                        <p><b>Links: </b>{this.state.links.map((link => <a key={link.id} href={link.link_url}>
                            {link.link_url} </a>))}</p>
                        <p><b>Authors: </b>{this.state.authors.map((author => <span key={author.id}>
                            {author.name}
                            {/*We'll separate authors with ","*/}
                            {this.state.authors.indexOf(author) !== this.state.authors.length-1 && ", "}</span>))}</p>
                        <p><b>Year: </b>{publication.year}</p>
                        <p><b>Journal: </b>{publication.journal}</p>
                        {fulldesc}
                        <PublicationInfoTable
                            key={publication.id}
                            data={this.props.data}
                            id={publication.id}
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