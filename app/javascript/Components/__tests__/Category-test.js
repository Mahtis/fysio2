import React from 'react';
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
