/**
 * Created by perkoila on 27.7.2017.
 */
import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class PublicationForm extends Component {

    constructor() {
        super();

        this.toggle = this.toggle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAbstractChange = this.handleAbstractChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleJournalChange = this.handleJournalChange.bind(this);

        this.state = {
            modalOpen: false,
            name: "",
            abstract: "",
            year: "",
            journal: ""
        };
    }

    toggle() {
        this.setState({
            modalOpen: !this.state.modalOpen
        });
    };

    handleSubmit(e) {
        e.preventDefault();
        //console.log(this.state);
        let attributes = {
            name: this.state.name,
            abstract: this.state.abstract,
            year: this.state.year,
            journal: this.state.journal,
            categories: []
        };
        this.props.createPublication(attributes);
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleAbstractChange(e) {
        this.setState({
            abstract: e.target.value
        })
    }

    handleYearChange(e) {
        this.setState({
            year: e.target.value
        })
    }

    handleJournalChange(e) {
        this.setState({
            journal: e.target.value
        })
    }

    render() {
        //console.log(this.props.layerCategories);
        return (
            <div>
                <span onClick={this.toggle}>Add publication</span>
                <Modal isOpen={this.state.modalOpen} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add publication</ModalHeader>
                    <ModalBody>
                        <div>
                            <form onSubmit={this.handleSubmit}>
                                <label>
                                    Name:
                                    <input type="text" value={this.state.name} onChange={this.handleNameChange} />
                                </label>
                                <label>
                                    Abstract:
                                    <input type="text" value={this.state.abstract} onChange={this.handleAbstractChange} />
                                </label>
                                <label>
                                    Year:
                                    <input type="number" value={this.state.year} onChange={this.handleYearChange} />
                                </label>
                                <label>
                                    Journal:
                                    <input type="text" value={this.state.journal} onChange={this.handleJournalChange} />
                                </label>
                                {Object.keys(this.props.layerCategories).forEach(layer =>
                                  <label>{layer}</label>
                                )}
                                <input type="submit" value="Submit" onClick={this.toggle} />

                            </form>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default PublicationForm;