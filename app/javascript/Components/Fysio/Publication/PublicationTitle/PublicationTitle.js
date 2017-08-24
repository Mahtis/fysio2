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

        //var desc = "What|Despite how previous studies have shown that certain meditative relaxation techniques are efficient tools for stress management, these methods are not widely in use in work environments. Traditionally these methods require commitment and effort, and technological aids to support these activities are scarce. In this project we examined how the latest 3D virtual technologies can be utilized in enhancing meditation techniques.|How|The strong feel of being somewhere else typical to 3D virtual environments hastens the detachment from one's every day surroundings and boosts the effects of the relaxation techniques, and also enables the user to use the system during the work day in the work place.In this project we developed a neuroadaptive 3D virtual environment. In this first prototype phase we implemented two different meditation techniques – the body awareness and point focus exercises. In addition to the original project plan, an additional feature was developed for the environment: EEG based neuroadaptivity so that the environment is responsive to changes in the users brainwaves. Based on states of relaxation and focused attention measured from the brainwaves, the users avatar could levitate in the environment. The purpose of this neuroadaptivity is to boost the effects of the exercise and make the environment more responsive and immersive. It also provided feedback to the user and guided the meditation"
        var desc = publication.moreTitles;
        var fulldesc=desc;
       /* if(desc != null && desc.length > 0){
            var array = desc.split("|");
            fulldesc = <div>
            {array.map(function(object, i){
                if (i % 2 == 0) {
                    return <p><b>{array[i]}: </b>{array[i+1]}</p>
                } else {
                    return null;
                }
            })}</div>;
        }*/

        return (
            <td className="rowCell">
                <span key={publication.name} onClick={this.toggle}>{publication.name} </span>
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