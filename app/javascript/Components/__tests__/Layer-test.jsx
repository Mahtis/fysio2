import React from 'react';
import { shallow, mount, render } from 'enzyme';
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

    // ^boilerplate code that is run before each test

    it("always renders a tr (table row)", () => {
        props.categories = [];
        props.layer = {
            id: 1,
            name: "Test"
        }
        props.publications = [];
        const listGroupItems = layer().find("tr");
        expect(listGroupItems.length).toBeGreaterThan(0);
    });

    describe("the rendered tr", () => {
        it("contains everything else that is rendered", () => {
            props.categories = [];
            props.layer = {
                id: 1,
                name: "Test"
            }
            props.publications = [];
            const trs = layer().find("tr")
            const wrappingTr = trs.first();
            expect(wrappingTr.children()).toEqual(layer().children());
        });
        it("contains ButtonDropdown", () => {
            props.categories = [];
            props.layer = {
                id: 1,
                name: "Test"
            }
            props.publications = [];
        })
    });




});