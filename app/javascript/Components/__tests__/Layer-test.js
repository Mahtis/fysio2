import React from 'react';
import {mount} from 'enzyme';
import Layer from '../Layer/Layer.js'

describe("Layer", () => {
    let props;
    let mountedLayer;
    const layer = () => {
        if (!mountedLayer) {
            mountedLayer = mount(
                <Layer {...props} />
            );
        }
        return mountedLayer;
    }

    beforeEach(() => {
        props = {
            dropdownOpen: undefined,
            categories: undefined,
            id: undefined
        };
        mountedLayer = undefined;
    });

    beforeEach(() => {
        props = {
            categories: undefined,
            layer: undefined,
            publications: undefined
        };
        mountedLayer = undefined;
    });

    // above code that is run before each test to null the props

    it("always renders a tr element", () => {
        initializeProps(props);
        const tr = layer().find("div");
        expect(tr.length).toBe(1);
    });

    describe("the rendered tr", () => {
        beforeEach(() => {
            initializeProps(props);
        });

        it("contains everything else that is rendered", () => {
            const tr = layer().find("tr");
            expect(tr.children()).toEqual(layer().children());
        });

        it("renders td", () => {
            const tr = layer().find("tr");
            expect(tr.find("td").length).toBe(1);
        });

        describe("the rendered td", () => {

            it("renders div", () => {
                const td = layer().find("td");
                expect(td.find("div").length).toBe(1);
            });

            it("renders ButtonDropdown", () => {
                const tr = layer().find("tr");
                expect(tr.find("ButtonDropdown").length).toBe(1);
            });

            describe("the rendered ButtonDropdown", () => {

                it("renders DropdownToggle", () => {
                    const buttonDropdown = layer().find("ButtonDropdown");
                    expect(buttonDropdown.find("DropdownToggle").length).toBe(1);
                });

                describe("the rendered DropdownToggle", () => {

                    it("has name of the layer as label", () => {
                        const dropDownToggle = layer().find("DropdownToggle");
                        expect(dropDownToggle.text()).toEqual("Test");
                    });
                });

                it("renders DropdownMenu", () => {
                    const buttonDropdown = layer().find("ButtonDropdown");
                    expect(buttonDropdown.find("DropdownMenu").length).toBe(1);
                });

                describe("the rendered DropdownMenu", () => {

                    it("contains CategoryList component", () => {
                        const dropDownMenu = layer().find("DropdownMenu");
                        expect(dropDownMenu.find("CategoryList").length).toBe(1);
                    });
                });
            });
        });
    });

    function initializeProps(props) {
        props.categories = [];
        props.layer = {
            id: 1,
            name: "Test"
        };
        props.publications = [];
    }

});

