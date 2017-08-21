import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import Category from '../Fysio/TableHeader/Layer/CategoryList/Category/Category.js';
import TestHelper from "../Helpers/Tests";
import Data from '../../Services/Data';

describe("Category", () => {
    let props;
    let mountedCategory;
    const category = () => {
        mountedCategory = TestHelper.initializationWithMount(mountedCategory, <Category {...props} />)
        return mountedCategory;
    };

    beforeEach(() => {
        props = {
            updateTable: undefined,
            id: undefined,
            data: undefined

        };
        mountedCategory: undefined
    });

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

        it("has btn as className if status is false", () => {
            // status is initialized to false
            initializeProps(props);
            const wrapper = category().find("DropdownItem");
            expect(wrapper.hasClass("btn")).toEqual(true);
        });

        it("does not have selected as className if status is false", () => {
            initializeProps(props);
            const wrapper = category().find("DropdownItem");
            expect(wrapper.hasClass("selected")).toEqual(false);
        });

        // it("has btn and selected as ClassName if status is true", () => {
        //     initializeProps(props);
        //     const wrapper = category();
        //     wrapper.setProps({status: true});
        //     expect(wrapper.find("DropdownItem").hasClass("selected")).toEqual(true);
        //     expect(wrapper.find("DropdownItem").hasClass("btn")).toEqual(true);
        // });

        describe("the rendered span", () => {

            it("has name of the category as text", () => {
                initializeProps(props);
                const span = category().find("span");
                expect(span.text()).toEqual("Arduino")
            });
        });
    });
});


function initializeProps(props) {
    let workdata = new Data();
    workdata = TestHelper.newData(workdata);
    props.id = 1;
    props.data = workdata;
    props.updateTable = function mockUpdate(name) { return name;}
}
