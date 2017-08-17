import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';
import PublicationInfoTable from './PublicationInfoTable/PublicationInfoTable.js';

class PublicationTitle extends Component {

    constructor() {
        super();
        this.toggle = this.toggle.bind(this);
        this.getAuthors = this.getAuthors.bind(this);
        this.state = {
            modalOpen: false
        };
        this.state = {
            authors: []
        }
        this.state = {
            links: []
        }
    }

    toggle() {
        this.setState({
            modalOpen: !this.state.modalOpen,
        });
        this.getAuthors().then((resolve) => this.setState({
            authors: resoleve
        }));
    }

    getAuthors() {
        const path = "authors.json?pubId=" + this.props.pub.id;
        return fetch(path)
            .then(response => response.json())
            .then(authors => {
                return authors;
            });
    }

    getLinks() {
        const path = "links.json?pubId=" + this.props.pub.id;
        return fetch(path)
            .then(response => response.json())
            .then(authors => {
                return authors;
            });
    }

    parsePath(categoriesArray, table, paramName) {

        let path = table + ".json?pubId";
        let length = path.length;

        categoriesArray.map(cat => path += paramName + "[]=" + encodeURIComponent(cat) + "&");

        if (path.length === length) {
            return path.substring(0, path.length - 1);
        }
        return path.substring(0, path.length - 1);
    }

    render() {
        console.log(this.state.authors);
        return (
            <td>
                <span key={this.props.pub.name} onClick={this.toggle}>{this.props.pub.name} </span>
                <Modal isOpen={this.state.modalOpen} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{this.props.pub.name}</ModalHeader>
                    <ModalBody>
                        <p><b>Abstract: </b>{this.props.pub.abstract}</p>
                        <p><b>Links: </b>{this.props.pub.links.map((link => <a key={link.id} href={link.url}>
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