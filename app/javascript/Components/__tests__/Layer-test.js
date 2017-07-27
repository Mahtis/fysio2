import React from 'react';
import {mount, shallow} from 'enzyme';
import Layer from '../Fysio/LayerList/Layer/Layer.js'

describe("Layer", () => {
    let props;
    let mountedLayer;
    const layer = () => {
        if (!mountedLayer) {
            mountedLayer = shallow(
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

        it("renders PublicationLayerCategoryList", () => {
            const wrapper = layer().find("tr");
            expect(wrapper.children().find("PublicationLayerCategoryList").length).toBe(2);
        });

        describe("the rendered td", () => {

            it("receives layer.id as id", () => {
                const td = layer().find("td");
                expect(td.props().id).toBe(props.layer.id)
            });

            it("renders one Dropdown", () => {
                const tr = layer().find("tr");
                expect(tr.find("Dropdown").length).toBe(1);
            });

            describe("the rendered Dropdown", () => {

                it("is closed if no one has clicked it", () => {
                    const dropdown = layer().find("Dropdown");
                    expect(dropdown.props().isOpen).toBe(false);
                });

               it("opens up when clicked", () => {
                    const wrapper = mount(<Layer {...props}/> );
                    const dropdown = wrapper.find("Dropdown");
                    wrapper.instance().toggle();
                    expect(dropdown.props().isOpen).toBe(true);
                });

                it("renders one DropdownToggle", () => {
                    const dropdown = layer().find("Dropdown");
                    expect(dropdown.find("DropdownToggle").length).toBe(1);
                });

                describe("the rendered DropdownToggle", () => {

                    it("has name of the layer as label", () => {
                        const wrapper = mount(<Layer {...props}/> );
                        const dropDownToggle = wrapper.find("DropdownToggle");
                        expect(dropDownToggle.text()).toEqual("Test");
                    });

                });

                it("renders DropdownMenu", () => {
                    const dropdown = layer().find("Dropdown");
                    expect(dropdown.find("DropdownMenu").length).toBe(1);
                });

                describe("the rendered DropdownMenu", () => {

                    it("always renders CategoryList", () => {
                        const dropDownMenu = layer().find("DropdownMenu");
                        expect(dropDownMenu.find("CategoryList").length).toBe(1);
                    });

                    describe("the rendered CategoryList", () => {

                        it("receives categories as prop", () => {
                            const wrapper = mount(<Layer {...props}/> );
                            const categoryList = wrapper.find("CategoryList");
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
            ids: [4,5,6]
            }, {
            id: 2,
            name: "ABC",
            layer_id: "2",
            ids: [4,5,6]
            }];
        props.layer = {
            id: 1,
            name: "Test"
        };
        props.publications = [{
            id: 1,
            name: "Audio Biofeedback for Poker Players",
            abstract: "Abstract text here",
            year: 2001,
            journal: "Nature",
            authors: [{
                id: 1,
                name: "Pasi Kosunen"
            }, {
                id: 2,
                name: "Ilkka Kosunen"
            }
            ],
            links: [{
                id: 1,
                url: "www.nature.com",
                publication_id: 1
            }]
        }, {
            id: 2,
            name: "Neurofeedback Meditation in Virtual Reality",
            abstract: "Abstract text here",
            year: 2005,
            journal: "Science",
            authors: [{
                id: 1,
                name: "Pasi Kosunen"
            }, {
                id: 2,
                name: "Ilkka Kosunen"
            }
            ],
            links: [{
                id: 2,
                url: "www.science.com",
                publication_id: 2
            }]
        }];
        props.layerCategoriesDropDown = [{
            id: 1,
            name: "EEG",
            layer_id: 1,
        },
            {id: 2,
                name: "ABC",
                layer_id: "2"}];
        props.categorySelected  = [{
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
    }

