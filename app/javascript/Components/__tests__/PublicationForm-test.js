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

     wrapper.clearState;

     expect(wrapper.state().toString()).toBe(states.toString());

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

        wrapper.toggle;

        expect(wrapper.state().toString()).toBe(states.toString());

    });

    it("handleLinkCheckboxAdd", () => {

     let wrapper = pubForm();

     let link = {
     link_url: "www",
     link_type: "web"
     };

     wrapper.instance().handleLinkCheckbox(link);

     expect(wrapper.state()["linkSelected"].toString).toBe([link].toString);


     });

    it("handleLinkCheckboxRemove", () => {

        let wrapper = pubForm();

        let link = {
            link_url: "www",
            link_type: "web"
        };

        wrapper.instance().handleLinkCheckbox(link);

        wrapper.instance().handleLinkCheckbox(link);

        expect(wrapper.state()["linkSelected"].toString).toBe([].toString);


    });

    it("handleCategoryCheckboxAdd", () => {

        let wrapper = pubForm();

        let category = {
            "id": 1
        };

        wrapper.instance().handleCategoryCheckbox(category);

        expect(wrapper.state()["categories"].toString).toBe([category].toString);


    });

    it("handleCategoryCheckboxRemove", () => {

        let wrapper = pubForm();

        let category = {
            "id": 1
        };

        wrapper.instance().handleCategoryCheckbox(category);
        wrapper.instance().handleCategoryCheckbox(category);

        expect(wrapper.state()["categories"].toString).toBe([].toString);


    });

    it("handleAuthorCheckboxAdd", () => {

        let wrapper = pubForm();

        let author = {
            "name": "keijo"
        };

        wrapper.instance().handleAuthorCheckbox(author);

        expect(wrapper.state()["authorSelected"].toString).toBe([author].toString);


    });

    it("handleAuthorCheckboxRemove", () => {

        let wrapper = pubForm();

        let author = {
            "name": "keijo"
        };

        wrapper.instance().handleAuthorCheckbox(author);
        wrapper.instance().handleAuthorCheckbox(author);

        expect(wrapper.state()["authorSelected"].toString).toBe([author].toString);


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

        expect(wrapper.state()["links"].toString).toBe([link].toString);
    });

    it("removeLink", () => {

        let wrapper = pubForm();

        let link = {
            link_url: "www",
            link_type: "web"
        };

        wrapper.setState({
            links: [link],
            linkSelect: [link]
        });

        wrapper.instance().removeLink();



        expect(wrapper.state()["links"].toString).toBe([].toString);
    });

    it("handleNameChange", () => {

        let wrapper = pubFormShallow();

        wrapper.find("Input").at(0).simulate("change", {target: {value: "Kekkonen"}});

        expect(wrapper.state().name).toBe("Kekkonen");
    });

    it("handleAuthorChange", () => {

        let wrapper = pubFormShallow();

        wrapper.find("Input").at(1).simulate("change", {target: {value: "Kekkonen"}});

        expect(wrapper.state().authorField).toBe("Kekkonen");
    });

    it("handleAbstractChange", () => {

        let wrapper = pubFormShallow();

        wrapper.find("Input").at(2).simulate("change", {target: {value: "Kekkonen"}});

        expect(wrapper.state().abstract).toBe("Kekkonen");
    });

    it("handleYearChange", () => {

        let wrapper = pubFormShallow();

        wrapper.find("Input").at(3).simulate("change", {target: {value: 1999}});

        expect(wrapper.state().year).toBe(1999);
    });

    it("handleJournalChange", () => {

        let wrapper = pubFormShallow();

        wrapper.find("Input").at(4).simulate("change", {target: {value: "Kekkonen"}});

        expect(wrapper.state().journal).toBe("Kekkonen");
    });

    it("handleUrlChange", () => {

        let wrapper = pubFormShallow();

        wrapper.find("Input").at(5).simulate("change", {target: {value: "Kekkonen"}});

        expect(wrapper.state().linkField).toBe("Kekkonen");
    });

    it("handleLinkTypeChange", () => {

        let wrapper = pubFormShallow();

        wrapper.find("Input").at(6).simulate("change", {target: {value: "Kekkonen"}});

        expect(wrapper.state().linkSelect).toBe("Kekkonen");
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

        wrapper.setState(attributes);

        wrapper.find("Form").first().simulate("submit", {target: {value: "Kekkonen"}});

        //console.log(publication);

        expect(publication === attributes)
    });
});
