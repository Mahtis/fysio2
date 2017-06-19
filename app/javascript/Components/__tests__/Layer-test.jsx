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

    // above^ code that is run before each test to null the props

    it("always renders a tr element", () => {
        initializeProps(props);
        const listGroupItems = layer().find("tr");
        expect(listGroupItems.length).toBeGreaterThan(0);
    });

    describe("the rendered tr", () => {
        beforeEach(() => {
            initializeProps(props);
        });

        it("contains everything else that is rendered", () => {
            const tr = layer().find("tr")
            const wrappingTr = tr.first();
            expect(wrappingTr.children()).toEqual(layer().children());
        });

        it("contains ButtonDropdown", () => {
            const tr = layer().find("tr");
            const buttonDropdown = tr.first();
            expect(buttonDropdown.length).toBeGreaterThan(0);
        });

    });

    function initializeProps(props) {
        props.categories = [];
        props.layer = {
            id: 1,
            name: "Test"
        }
        props.publications = [];
    }

});

