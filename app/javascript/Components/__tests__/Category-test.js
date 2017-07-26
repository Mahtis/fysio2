import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import Category from '../Fysio/LayerList/Layer/CategoryList/Category/Category.js';

describe("Category", () => {
    let props;
    let mountedCategory;
    const category = () => {
        if (!mountedCategory) {
            mountedCategory = mount(
                <Category {...props} />
            );
        }
        return mountedCategory;
    }

    beforeEach(() => {
        props = {
            category: undefined,
            name: undefined,
            layer: undefined,
            updateTable: undefined,
            status: undefined
        };
        mountedCategory: undefined
    });

    const select = sinon.stub();

    it("always renders one DropDownItem", () => {
        initializeProps(props);
        const dropDownItem = category().find("DropdownItem");
        expect(dropDownItem.length).toBe(1);
    });

    describe("the rendered DropDownItem", () => {

        it("contains everything else that gets rendered", () => {
            initializeProps(props);
            const wrappingDropDownItem = category().find("DropdownItem");
            expect(wrappingDropDownItem.children()).toEqual(category().children())
        });

        it("renders one span", () => {
            initializeProps(props);
            const wrappingDropDownItem = category().find("DropdownItem");
            expect(wrappingDropDownItem.find("span").length).toBe(1);
        });

        it("calls select function once when clicked", () => {
            initializeProps(props);
            const wrapper = category();
            // instance of the wrapper is needed to call functions
            const instance = wrapper.instance();
            // let's mock the select() function as we want to test if it gets called
            instance.select = sinon.spy(instance.select);
            wrapper.update();
            // select is not called if the DropdownItem is not clicked
            expect(instance.select.notCalled).toEqual(true)
            wrapper.find("DropdownItem").simulate("click");
            expect(instance.select.calledOnce).toEqual(true);
        });

        it("has btn as className if status is false", () => {
            // status is initialized to false
            initializeProps(props);
            const wrapper = category().find("DropdownItem");
            expect(wrapper.hasClass("btn")).toEqual(true);
        });

        it("does not have selected as className if status is false", () => {
            // status is initialized to false
            initializeProps(props);
            const wrapper = category().find("DropdownItem");
            expect(wrapper.hasClass("selected")).toEqual(false);
        });

        it("has btn and selected as ClassName if status is true", () => {
            initializeProps(props);
            const wrapper = category();
            wrapper.setProps({status: true});
            expect(wrapper.find("DropdownItem").hasClass("selected")).toEqual(true);
            expect(wrapper.find("DropdownItem").hasClass("btn")).toEqual(true);
        });

        describe("the rendered span", () => {

            it("has name of the category as text", () => {
                initializeProps(props);
                const span = category().find("span");
                expect(span.text()).toEqual("EEG")
            });
        });
    });
});


function initializeProps(props) {
    props.category = {
        id: 1,
        name: "EEG",
        layer_id: 1,
    };
    props.name = props.category.name;
    props.satus = false;
    props.updateTable = function mockUpdate(name) { return name;}
}
