import React from "react";
import { shallow, mount } from "enzyme";
import PublicationForm from '../NavBar/PublicationForm';
import TestHelper from '../Helpers/Tests.js';
import Data from '../../Services/Data';

describe("PublicationForm", () => {
    let props;
    let mountedForm;

    let formProps = {
        createPublication: function(){},
        createCategory: function (){},
        data: TestHelper.newData(new Data())

    };

    let states = {
        name: "",
        abstract: "",
        year: "",
        journal: "",
        categories: [],
        authors: [],
        authorField: "",
        authorSelected: [],
        links: [],
        linkField: "",
        linkSelect: "",
        linkSelected: [],
        modalOpen: false,
        collapseLink: false,
        collapseAuthor: false
    };

    let pubForm = () => {
        mountedForm = TestHelper.initializationWithMount(mountedForm, <PublicationForm {...props} />);
        return mountedForm;
    };

    let pubFormShallow = () => {
        mountedForm = TestHelper.initializationWithShallow(mountedForm, <PublicationForm {...props} />);
        return mountedForm;
    };

    beforeEach(() => {
        props = {
            createPublication: function(){},
            createCategory: function (){},
            data: TestHelper.newData(new Data())

        };
        mountedForm = undefined;
    });

    it("always renders a Modal", () => {
        TestHelper.sizeEqualWithFindAndLength(pubForm, "Modal", 1)
    });

    it("renders author datalist options", () => {
        let wrapper = pubFormShallow();
        expect(wrapper.find("datalist").first().children().length).toBe(8);
    });

    it("renders layers", () => {
        let wrapper = pubFormShallow();
        expect(wrapper.find("FormGroup").at(8).children().length).toBe(11);
    });

    it("renders layer categories", () => {
        let wrapper = pubFormShallow();
        expect(wrapper.find("FormGroup").at(8).at(0).children().length).toBe(11);
    });

    it("clearState", () => {

     let wrapper = pubForm();

     wrapper.setState({
         name: "kissa",
         abstract: "koira",
         year: "koira",
         journal: "koira",
         categories: ["koira"],
         authors: ["koira"],
         authorField: "koira",
         authorSelected: ["koira"],
         links: [{
             link_url: "www",
             link_type: "web"
         }],
         linkField: "koira",
         linkSelect: "koira",
         linkSelected: ["koira"],
         modalOpen: true,
         collapseLink: true,
         collapseAuthor: true
     });

     wrapper.instance().clearState();

     expect(wrapper.state()).toEqual(states);

     });

    it("toggle", () => {

        let wrapper = pubForm();

        wrapper.setState({
            name: "kissa",
            abstract: "koira",
            year: "koira",
            journal: "koira",
            categories: ["koira"],
            authors: ["koira"],
            authorField: "koira",
            authorSelected: ["koira"],
            links: [{
                link_url: "www",
                link_type: "web"
            }],
            linkField: "koira",
            linkSelect: "koira",
            linkSelected: ["koira"],
            modalOpen: true,
            collapseLink: true,
            collapseAuthor: true
        });

        wrapper.instance().toggle();

        expect(wrapper.state()).toEqual(states);

    });

    it("handleLinkCheckboxAdd", () => {

     let wrapper = pubForm();

     let link = {
         link_url: "www",
         link_type: "web"
         };

     wrapper.instance().handleLinkCheckbox(link);

     expect(wrapper.state()["linkSelected"]).toEqual([link]);


     });

    it("handleLinkCheckboxRemove", () => {

        let wrapper = pubForm();

        let link = {
            link_url: "www",
            link_type: "web"
        };

        wrapper.instance().handleLinkCheckbox(link);

        wrapper.instance().handleLinkCheckbox(link);

        expect(wrapper.state()["linkSelected"]).toEqual([]);


    });

    it("handleCategoryCheckboxAdd", () => {

        let wrapper = pubForm();

        let category = {
            "id": 1
        };

        wrapper.instance().handleCategoryCheckbox(category);

        expect(wrapper.state()["categories"]).toEqual([1]);


    });

    it("handleCategoryCheckboxRemove", () => {

        let wrapper = pubForm();

        let category = {
            "id": 1
        };

        wrapper.instance().handleCategoryCheckbox(category);
        wrapper.instance().handleCategoryCheckbox(category);

        expect(wrapper.state()["categories"]).toEqual([]);


    });

    it("handleAuthorCheckboxAdd", () => {

        let wrapper = pubForm();

        let author = {
            "name": "keijo"
        };

        wrapper.instance().handleAuthorCheckbox(author);

        expect(wrapper.state()["authorSelected"]).toEqual([author]);


    });

    it("handleAuthorCheckboxRemove", () => {

        let wrapper = pubForm();

        let author = {
            "name": "keijo"
        };

        wrapper.instance().handleAuthorCheckbox(author);
        wrapper.instance().handleAuthorCheckbox(author);

        expect(wrapper.state()["authorSelected"]).toEqual([]);


    });

    it("addLink", () => {

        let wrapper = pubForm();

        wrapper.setState({
            linkField: "www",
            linkSelect: "web"
        });

        wrapper.instance().addLink();

        let link = {
            link_url: "www",
            link_type: "web"
        };

        expect(wrapper.state()["links"]).toEqual([link]);
    });

    it("removeLink so that links is empty", () => {

        let wrapper = pubForm();

        let link = {
            link_url: "www",
            link_type: "web"
        };

        wrapper.setState({
            links: [link],
            linkSelected: [link]
        });

        wrapper.instance().removeLink();

         expect(wrapper.state()["links"]).toEqual([]);
    });

    it("removeLink so that links is not empty", () => {

        let wrapper = pubForm();

        wrapper.setState({
            linkField: "www.fi",
            linkSelect: "web"
        });

        wrapper.instance().addLink();

        wrapper.setState({
            linkField: "www",
            linkSelect: "web"
        });

        wrapper.instance().addLink();

        let link1 = {
            link_url: "www.fi",
            link_type: "web"
        };

        let link2 = {
            link_url: "www",
            link_type: "web"
        };

        wrapper.setState({
            links: [link1, link2],
            linkSelected: [link1]
        });

        wrapper.instance().removeLink();

        expect(wrapper.state()["collapseLink"]).toEqual(true);
        expect(wrapper.state()["links"]).toEqual([link2]);
    });

    it("addAuthor", () => {

        let wrapper = pubForm();

        wrapper.setState({
            authorField: "Authööör"
        });

        wrapper.instance().addAuthor();

        expect(wrapper.state()["authors"]).toEqual(["Authööör"]);
    });

    it("removeAuthor so that authors list is empty", () => {

        let wrapper = pubForm();

        wrapper.setState({
            authors: ["Väinö Linna"],
            authorSelected: ["Väinö Linna"]
        });

        wrapper.instance().removeAuthor();

        expect(wrapper.state()["authors"]).toEqual([]);
    });

    it("removeAuthor so that authors list is not empty", () => {

        let wrapper = pubForm();

        wrapper.setState({
            authorField: "Väinö Linna"
        });

        wrapper.instance().addAuthor();

        wrapper.setState({
            authorField: "Carl Barks"
        });

        wrapper.instance().addAuthor();

         wrapper.setState({
            authorSelected: ["Väinö Linna"]
        });

        wrapper.instance().removeAuthor();

        //expect(wrapper.state()["authors"]).toEqual(["Carl Barks"]);
        expect(wrapper.state()["collapseAuthor"]).toEqual(true);
    });

    it("handleNameChange", () => {

        let wrapper = pubFormShallow();

        wrapper.find("Input").at(0).simulate("change", {target: {value: "Kekkonen"}});

        expect(wrapper.state().name).toEqual("Kekkonen");
    });

    it("handleAuthorChange", () => {

        let wrapper = pubFormShallow();

        wrapper.find("Input").at(1).simulate("change", {target: {value: "Kekkonen"}});

        expect(wrapper.state().authorField).toEqual("Kekkonen");
    });

    it("handleAbstractChange", () => {

        let wrapper = pubFormShallow();

        wrapper.find("Input").at(2).simulate("change", {target: {value: "Kekkonen"}});

        expect(wrapper.state().abstract).toEqual("Kekkonen");
    });

    it("handleYearChange", () => {

        let wrapper = pubFormShallow();

        wrapper.find("Input").at(3).simulate("change", {target: {value: 1999}});

        expect(wrapper.state().year).toEqual(1999);
    });

    it("handleJournalChange", () => {

        let wrapper = pubFormShallow();

        wrapper.find("Input").at(4).simulate("change", {target: {value: "Kekkonen"}});

        expect(wrapper.state().journal).toEqual("Kekkonen");
    });

    it("handleUrlChange", () => {

        let wrapper = pubFormShallow();

        wrapper.find("Input").at(5).simulate("change", {target: {value: "Kekkonen"}});

        expect(wrapper.state().linkField).toEqual("Kekkonen");
    });

    it("handleLinkTypeChange", () => {

        let wrapper = pubFormShallow();

        wrapper.find("Input").at(6).simulate("change", {target: {value: "Kekkonen"}});

        expect(wrapper.state().linkSelect).toEqual("Kekkonen");
    });

    it("handleSubmit", () => {

        let publication = {};

        let createPublication = (pub) => {
            publication = pub;
        };

        let wrapper = shallow(<PublicationForm
            createPublication={createPublication}
            createCategory={function(){}}
            data={TestHelper.newData(new Data())} />);

        let state = {
            name: "Humor Detection",
            abstract: "Abstract text here",
            year: 2016,
            journal: "Science",
            categories: [
                "C++",
                "EDA",
                "Custom",
                "Supervised Machine Learning Features",
                "ML Features => Affective States (Happy, Sad, Angry, Neutral)",
                "Annotate Cont. Adapt Interface",
                "Layperson",
                "Coder",
                "Researcher"
            ],
            authors: [
                "Ilkka Kosunen"
            ],
            links: [
                {
                    link_url: "www",
                    link_type: "web"
                }
            ]
        };

        let attributes = {
            name: "Humor Detection",
            abstract: "Abstract text here",
            year: 2016,
            journal: "Science",
            categories: [
                "C++",
                "EDA",
                "Custom",
                "Supervised Machine Learning Features",
                "ML Features => Affective States (Happy, Sad, Angry, Neutral)",
                "Annotate Cont. Adapt Interface",
                "Layperson",
                "Coder",
                "Researcher"
            ],
            authors: [
                "Ilkka Kosunen"
            ],
            links_attributes: [
                {
                    link_url: "www",
                    link_type: "web"
                }
            ]
        };

        wrapper.setState(state);

        wrapper.find("Form").first().simulate("submit", {target: {value: "Kekkonen"}});

        expect(attributes).toEqual(publication)
    });
});
