import React from 'react';
import CategoryList from '../Fysio/TableHeader/Layer/CategoryList/CategoryList.js';
import TestHelper from '../Helpers/Tests.js';

describe("CategoryList", () => {
    let props;
    let mountedCategory;
    const categoryList = () => {
        mountedCategory = TestHelper.initializationWithMount(mountedCategory, <CategoryList {...props} />);
        return mountedCategory;
    };

    beforeEach(() => {
        props = {
            data: undefined,
            layer_id: undefined
        };
        mountedCategory = undefined;
    });

    // ^boilerplate code that is run before each test

    it("always renders drop down item", () => {
        props = TestHelper.initializeCategoryListProps(props);
        //const buttons = filter().find("td");
        expect(categoryList().find("DropDownItem")).exists;
    });

    it("contains the correct number of drop down items", () => {
        props = TestHelper.initializeCategoryListProps(props);
        const items = categoryList().find("ListGroup").children();
        expect(items.length).toEqual(props.data.getCategoriesByLayerId(1).length);
    });
});
