import React from 'react';
import {mount} from 'enzyme';
import Layer from '../Fysio/TableHeader/Layer/Layer.js'

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
            categories: undefined,
            id: undefined,
            layer: undefined,
            publications: undefined,
            layerCategoriesDropDown: undefined,
            categorySelected: undefined
        };
        mountedLayer = undefined;
    });

    // above code is run before each test to null the props

    it("always renders one th element", () => {
        initializeProps(props);
        const tr = layer().find("th");
        expect(tr.length).toBe(1);
    });

    describe("the rendered tr", () => {
        beforeEach(() => {
            initializeProps(props);
        });

        it("contains everything else that is rendered", () => {
            const th = layer().find("th");
            expect(th.children()).toEqual(layer().children());
        });

        /*it("renders one `CategoryList`", () => {
            const tr = layer().find("tr");
            expect(tr.find("CategoryList") > 0);
        });*/

        describe("the rendered th", () => {

            it("receives layer.id as id", () => {
                const th = layer().find("th");
                expect(th.props().id).toBe(props.layer.id)
            });

            it("renders div", () => {
                const th = layer().find("th");
                expect(th.find("div").length > 0);
            });

            it("renders one ButtonDropdown", () => {
                const th = layer().find("th");
                expect(th.find("ButtonDropdown").length).toBe(1);
            });

            describe("the rendered ButtonDropdown", () => {

                it("is closed if no one has clicked it", () => {
                    const buttonDropdown = layer().find("ButtonDropdown");
                    expect(buttonDropdown.props().isOpen).toBe(false);
                });

               it("opens up when clicked", () => {
                    const wrapper = layer();
                    const buttonDropdown = layer().find("ButtonDropdown");
                    wrapper.instance().toggle();
                    expect(buttonDropdown.props().isOpen).toBe(true);
                });

                it("renders one DropdownToggle", () => {
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

                    it("always renders `CategoryList`", () => {
                        const dropDownMenu = layer().find("DropdownMenu");
                        expect(dropDownMenu.find("CategoryList").length).toBe(1);
                    });

                    describe("the rendered CategoryList", () => {

                        it("receives categories as prop", () => {
                            const categoryList = layer().find("CategoryList");
                            expect(categoryList.props().categories).toBe(props.layerCategoriesDropDown);
                        });
                    });
                });
            });
        });
    });
});

    function initializeProps(props) {
        props.categories = [{
            id: 1,
            name: "EEG",
            layer_id: 1,
            }, {
            id: 2,
            name: "ABC",
            layer_id: "2"}];
        props.layer = {
            id: 1,
            name: "Test"
        };
        props.publications = [];
        props.layerCategoriesDropDown = [{
            id: 1,
            name: "EEG",
            layer_id: 1,
        },
            {id: 2,
                name: "ABC",
                layer_id: "2"}];
        props.categorySelected  = [];
    }

