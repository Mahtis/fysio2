/**
 * Created by perkoila on 27.7.2017.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CategoryCheckbox from "./CategoryCheckbox";
import CategoryForm from "./CategoryForm";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input, Form, FormGroup, Col} from 'reactstrap';
import AuthorCheckbox from "./AuthorCheckbox";

class PublicationForm extends Component {

    constructor() {
        super();

        this.toggle = this.toggle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAbstractChange = this.handleAbstractChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleJournalChange = this.handleJournalChange.bind(this);
        this.handleCategoryCheckbox = this.handleCategoryCheckbox.bind(this);
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
        this.addAuthor = this.addAuthor.bind(this);
        this.removeAuthor = this.removeAuthor.bind(this);
        this.handleAuthorCheckbox = this.handleAuthorCheckbox.bind(this);

        this.state = {
            modalOpen: false,
            name: "",
            abstract: "",
            year: "",
            journal: "",
            categories: [],
            authors: [],
            authorField: "",
            authorSelected: []
        };
    }

    toggle() {
        this.setState({
            modalOpen: !this.state.modalOpen
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        //console.log(this.state);
        let attributes = {
            name: this.state.name,
            abstract: this.state.abstract,
            year: this.state.year,
            journal: this.state.journal,
            categories: this.state.categories,
            authors: this.state.authors
        };
        this.setState({
            name: "",
            abstract: "",
            year: "",
            journal: "",
            categories: [],
            authors: [],
            authorField: "",
            authorSelected: []
        });
        this.props.createPublication(attributes);
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleAuthorChange(e) {
        this.setState({
           authorField: e.target.value
        });
        console.log(e.target.value);
    }

    addAuthor(e) {
        e.preventDefault();
        let authors = this.state.authors;
        authors.push(this.state.authorField);
        this.setState({
            authorField: "",
            authors: authors
        });
        //console.log(this.state.authors);
    }

    removeAuthor() {
        let authors = this.state.authors;
        let selection = this.state.authorSelected;
        selection.map(selected =>
            authors.splice(authors.indexOf(selected), 1)
        )
        this.setState({
            authors: authors,
            authorSelected: []
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

    handleCategoryCheckbox(category) {

        let cats = this.state.categories;

        let index = cats.indexOf(category.id);

        if (index > -1) {
            cats.splice(index, 1);
        } else {
            cats.push(category.id);
        }

        this.setState({
            categories: cats
        })
    }

    handleAuthorCheckbox(author) {
        let authors = this.state.authorSelected;

        let index = authors.indexOf(author);

        if (index > -1) {
            authors.splice(index, 1);
        } else {
            authors.push(author);
        }
        console.log(authors);
        this.setState({
            authorSelected: authors
        })
    }

    render() {
        //console.log(this.props.layerCategories);

        return (
            <Button onClick={this.toggle} className="modeButtons">
                Add publication
                <Modal isOpen={this.state.modalOpen} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add publication</ModalHeader>
                    <ModalBody>
                        <div>
                            <Form>
                                <FormGroup>
                                    <Label>
                                        Name:
                                        <Input type="text" value={this.state.name} onChange={this.handleNameChange} />
                                    </Label>
                                </FormGroup>
                                <FormGroup row>
                                    <Col>
                                        <Label>
                                            Author
                                            <Input type="text" list="authors" value={this.state.authorField} onChange={this.handleAuthorChange}/>
                                            <datalist id="authors" >
                                                {this.props.authors.map(author =>
                                                    <option value={author.name} ></option>
                                                )}
                                            </datalist>
                                        </Label>
                                    </Col>
                                    <Col>
                                        <Label>
                                            <br/>
                                            <Button onClick={this.addAuthor}>Add</Button>
                                        </Label>
                                    </Col>
                                    <Col>
                                        <Label>
                                            <br/>
                                            <Button onClick={this.removeAuthor}>Remove</Button>
                                        </Label>
                                    </Col>
                                    <Col>
                                        <br/>
                                        {this.state.authors.map(author =>
                                            <AuthorCheckbox
                                                key={author}
                                                author={author}
                                                handleCheckbox={this.handleAuthorCheckbox}
                                            />
                                        )}
                                    </Col>
                                </FormGroup>
                                <FormGroup>
                                    <Label>
                                        Abstract:
                                        <Input type="text" value={this.state.abstract} onChange={this.handleAbstractChange} />
                                    </Label>
                                </FormGroup>
                                <FormGroup>
                                    <Label>
                                        Year:
                                        <Input type="number" value={this.state.year} onChange={this.handleYearChange} />
                                    </Label>
                                </FormGroup>
                                <FormGroup>
                                    <Label>
                                        Journal:
                                        <Input type="text" value={this.state.journal} onChange={this.handleJournalChange} />
                                    </Label>
                                </FormGroup>
                                <FormGroup>
                                    {Object.keys(this.props.layerCategories).map(layer =>
                                        <FormGroup key={layer} >
                                            <Label>{layer}</Label>
                                            {this.props.layerCategories[layer].map(category =>
                                                <CategoryCheckbox
                                                    key={category.id}
                                                    category={category}
                                                    handleCheckbox={this.handleCategoryCheckbox}
                                                />
                                            )}
                                            <CategoryForm layer={layer} createCategory={this.props.createCategory}/>
                                        </FormGroup>
                                    )}
                                </FormGroup>
                                <Input type="submit" value="Submit" onClick={this.toggle} />
                            </Form>
                        </div>
                    </ModalBody>
                </Modal>
            </Button>

        )
    }
}

export default PublicationForm;
