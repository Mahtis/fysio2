import React from "react";
import { shallow, mount } from "enzyme";
import CategoryForm from '../NavBar/CategoryForm';
import TestHelper from '../Helpers/Tests.js';
import Data from '../../Services/Data';

describe("PublicationForm", () => {
    let props;
    let mountedForm;

    let states = {
        modalOpen: false,
        name: "",
        description: "",
        infolink: ""
    };

    let catForm = () => {
        mountedForm = TestHelper.initializationWithMount(mountedForm, <CategoryForm {...props} />);
        return mountedForm;
    };

    let catFormShallow = () => {
        mountedForm = TestHelper.initializationWithShallow(mountedForm, <CategoryForm {...props} />);
        return mountedForm;
    };

    beforeEach(() => {
        props = {
            createCategory: function (){},
            layer: {
                "name": "Application",
                "order": 80
            }
        };
        mountedForm = undefined;
    });

    it("always renders a modal", () => {
        let wrapper = catFormShallow();
        expect(wrapper.find("Modal").length).toBe(1);
    });

    it("always renders a form", () => {
        let wrapper = catFormShallow();
        expect(wrapper.find("Form").length).toBe(1);
    });

    it("always renders 3 formgroups", () => {
        let wrapper = catFormShallow();
        expect(wrapper.find("FormGroup").length).toBe(3);
    });

    it("clearState", () => {

        let wrapper = catForm();

        wrapper.setState({
            modalOpen: true,
            name: "Kissa",
            description: "Kissa",
            infolink: "Kissa"
        });

        wrapper.instance().clearState();

        expect(wrapper.state()).toEqual(states);

    });

    it("toggle", () => {

        let wrapper = catForm();

        wrapper.setState({
            modalOpen: true,
            name: "Kissa",
            description: "Kissa",
            infolink: "Kissa"
        });

        wrapper.instance().toggle();

        expect(wrapper.state()).toEqual(states);

    });

    it("handleNameChange", () => {

        let wrapper = catFormShallow();

        wrapper.find("Input").at(0).simulate("change", {target: {value: "Kekkonen"}});

        expect(wrapper.state().name).toEqual("Kekkonen");
    });

    it("handleDescriptionChange", () => {

        let wrapper = catFormShallow();

        wrapper.find("Input").at(1).simulate("change", {target: {value: "Kekkonen"}});

        expect(wrapper.state().description).toEqual("Kekkonen");
    });


    it("handleInfolinkChange", () => {

        let wrapper = catFormShallow();

        wrapper.find("Input").at(2).simulate("change", {target: {value: "Kekkonen"}});

        expect(wrapper.state().infolink).toEqual("Kekkonen");
    });

    it("handleSubmit", () => {

        let category = {};

        let createCategory = (cat) => {
            category = cat;
        };

        let wrapper = shallow(<CategoryForm
            layer={{
                id: 1,
                name: "Application",
                order: 80
            }}
            createCategory={createCategory}
        />);

        let state = {
            name: "category",
            description: "description",
            infolink: "infolink"
        };

        let attributes = {
            name: "category",
            layer_id: 1,
            description: "description",
            infolink: "infolink",
        };

        wrapper.setState(state);

        wrapper.find("Button").at(1).simulate("click", {target: {value: "Kekkonen"}});

        expect(attributes).toEqual(category);
    });

});