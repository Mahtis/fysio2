import React from 'react';
import { shallow, mount, render } from 'enzyme';
import CategoryList from '../Fysio/TableHeader/Layer/CategoryList/CategoryList.js'

describe("CategoryList", () => {
    let props;
    let mountedLayer;
    const categoryList = () => {
        if (!mountedLayer) {
            mountedLayer = mount(
                <CategoryList {...props} />
            );
        }
        return mountedLayer;
    }

    beforeEach(() => {
        props = {
            categories: undefined
        };
        mountedLayer = undefined;
    });

    // ^boilerplate code that is run before each test

    it("always renders drop down item", () => {
        props.categories = [];
        //const buttons = filter().find("td");
        expect(categoryList().find("DropDownItem")).exists;
    });

    it("contains the correct number of drop down items", () => {
        props.categories = [{"id":1,"name":"EEG","layer_id":1,"ids":[1,3]},{"id":2,"name":"EDA","layer_id":1,"ids":[1,3,4,5,6]},{"id":3,"name":"fEMG","layer_id":1,"ids":[1]}];
        props.categorySelected = [];
        const items = categoryList().find("ListGroup").children();
        expect(items.length).toEqual(props.categories.length);
    });

});
