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

    /*it("addLink", () => {

        let wrapper = pubFormShallow();

        wrapper.setState({
            linkField: "www",
            linkSelect: "web"
        });

        let state = wrapper.state();



        //wrapper.addLink;

        wrapper.addLink;

        let link = {
            link_url: "www",
            link_type: "web"
        };

        console.log(wrapper.instance().addLink);

        expect(wrapper.state()["links"]).toBe([link]);
    });*/

    /*it("states", () => {
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
        let wrapper = pubForm();
        let rapper = mount(<PublicationForm createPublication={function(){}} createCategory={function(){}} data={TestHelper.newData(new Data())} />);
        console.log(wrapper.state());
        expect(wrapper.state().toString()).toBe(states.toString());
    });*/

    /*it("always renders a Buttons", () => {
        let wrapper = shallow(<PublicationForm createPublication={function(){}} createCategory={function(){}} data={TestHelper.newData(new Data())} />);
        //TestHelper.sizeEqualWithFindAndLength(pubForm, "Button", 1)
        expect(wrapper.find('Button').length).toBe(5);
    });*/

    /*it("always does something", () => {
        let wrapper = pubForm();
        let rapper = mount(<PublicationForm createPublication={function(){}} createCategory={function(){}} data={TestHelper.newData(new Data())} />);
        console.log(rapper.find("Row").at(2).children().at(0).children().at(0).text());
        expect(rapper.find("Row").at(2).children().length).toBe(1);
        //expect(wrapper.find('Modal').childAt(0).type()).to.equal('ModalHeader');
    });*/


    /*it("always renders a shit", () => {
        let form = shallow(<PublicationForm {...formProps} />);
        let wrapper = pubForm();
        wrapper.setState({modalOpen: true});
        TestHelper.sizeEqualWithFindAndLength(wrapper, "Button", 5);
    });*/



});
