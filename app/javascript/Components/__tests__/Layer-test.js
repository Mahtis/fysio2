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

    it("always renders one tr element", () => {
        initializeProps(props);
        const tr = layer().find("tr");
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

        it("renders one td", () => {
            const tr = layer().find("tr");
            expect(tr.find("td").length).toBe(1);
        });

        it("renders one `PublicationLayerCategoryList`", () => {
            const tr = layer().find("tr");
            expect(tr.find("PublicationLayerCategoryList")).exists;
        });

        describe("the rendered td", () => {

            it("receives layer.id as id", () => {
                const td = layer().find("td");
                expect(td.props().id).toBe(props.layer.id)
            });

            it("renders div", () => {
                const td = layer().find("td");
                expect(td.find("div").length).exists;
            });

            it("renders one ButtonDropdown", () => {
                const tr = layer().find("tr");
                expect(tr.find("ButtonDropdown").length).toBe(1);
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

