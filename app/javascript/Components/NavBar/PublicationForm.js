/**
 * Created by perkoila on 27.7.2017.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CategoryCheckbox from "./CategoryCheckbox";
import CategoryForm from "./CategoryForm";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input, Form, FormGroup, Col, Row, Collapse} from 'reactstrap';
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
        this.clearState = this.clearState.bind(this);

        this.state = {
            modalOpen: false,
            name: "",
            abstract: "",
            year: "",
            journal: "",
            categories: [],
            authors: [],
            authorField: "",
            authorSelected: [],
            collapse: false
        };
    }

    toggle() {
        this.clearState();
    }

     handleSubmit(e) {
        e.preventDefault();

        let attributes = {
            name: this.state.name,
            abstract: this.state.abstract,
            year: this.state.year,
            journal: this.state.journal,
            categories: this.state.categories,
            authors: this.state.authors
        };

        this.clearState();

        this.props.createPublication(attributes);
    }

    clearState() {
        this.setState({
            name: "",
            abstract: "",
            year: "",
            journal: "",
            categories: [],
            authors: [],
            authorField: "",
            authorSelected: [],
            modalOpen: !this.state.modalOpen
        });
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
    }

    addAuthor(e) {
        e.preventDefault();
        let authors = this.state.authors;
        let author = this.state.authorField;
        if (authors.indexOf(author) === -1 && author !== "") {
            authors.push(author);
            this.setState({
                authorField: "",
                authors: authors,
                collapse: true
            })
        }

    }

    removeAuthor() {
        let authors = this.state.authors;
        let selection = this.state.authorSelected;
        selection.map(selected =>
            authors.splice(authors.indexOf(selected), 1)
        );
        if (authors.length === 0) {
            this.setState({
                authors: authors,
                authorSelected: [],
                collapse: false
            })
        } else {
            this.setState({
                authors: authors,
                authorSelected: []
            })
        }

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

        this.setState({
            authorSelected: authors
        })
    }

    render() {

        let name = (
            <FormGroup key="name">
                <Label>
                    Name:
                    <Input type="text" value={this.state.name} onChange={this.handleNameChange} />
                </Label>
            </FormGroup>
        );

        let authorCombo = (
            <FormGroup key="authorCombo">
                <Label>
                    Author
                    <Input type="text" list="authors" value={this.state.authorField} onChange={this.handleAuthorChange}/>
                    <datalist id="authors" >
                        {this.props.authors.map(author =>
                            <option key={author.id} value={author.name} ></option>
                        )}
                    </datalist>
                </Label>
            </FormGroup>
        );

        let addAuthorButton = <Button className="formRow" onClick={this.addAuthor}>Add</Button>;

        let authorSelected = (
            <FormGroup className="formRow" key="authorSelected">
                {this.state.authors.map(author =>
                    <AuthorCheckbox
                        key={author}
                        author={author}
                        handleCheckbox={this.handleAuthorCheckbox}
                        check/>
                )}
            </FormGroup>
        );

        let removeAuthorButton = (
            <Collapse isOpen={this.state.collapse}>
                <Button className="formRow" onClick={this.removeAuthor}>Remove</Button>
            </Collapse>
        );

        let abstract = (
            <FormGroup key="abstract">
                <Label>
                    Abstract:
                    <Input type="text" value={this.state.abstract} onChange={this.handleAbstractChange} />
                </Label>
            </FormGroup>
        );

        let year = (
            <FormGroup key="year">
                <Label>
                    Year:
                    <Input type="number" value={this.state.year} onChange={this.handleYearChange} />
                </Label>
            </FormGroup>
        );

        let journal = (
            <FormGroup key="journal">
                <Label>
                    Journal:
                    <Input type="text" value={this.state.journal} onChange={this.handleJournalChange} />
                </Label>
            </FormGroup>
        );

        let links = (
            <FormGroup></FormGroup>
        );

        let categories = (
            <FormGroup key="categories">
                {Object.keys(this.props.layerCategories).map(layer =>
                    <FormGroup key={JSON.parse(layer).id} >
                        <Label>{JSON.parse(layer).name}</Label>
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
        );

        let submit = <Input type="submit" value="Submit" />;

         return (
            <Button onClick={this.toggle} className="modeButtons">
                Add publication
                <Modal isOpen={this.state.modalOpen} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add publication</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <Row>
                                <Col sm="4">
                                    {name}
                                    {authorCombo}
                                    {abstract}
                                    {year}
                                    {journal}
                                </Col>
                                <Col sm="2">
                                    {addAuthorButton}
                                </Col>
                                <Col sm="2">
                                    {removeAuthorButton}
                                </Col>
                                <Col sm="4">
                                    {authorSelected}
                                </Col>
                            </Row>
                            <Row>
                                {links}
                            </Row>
                            <Row>
                                {categories}
                                {submit}
                            </Row>
                        </Form>
                    </ModalBody>
                </Modal>
            </Button>

        )
    }
}

export default PublicationForm;
