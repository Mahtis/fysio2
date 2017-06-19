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

    it("", () => {});

// ^boilerplate code that is run before each test

/*    it("always renders a ListGroupItem", () => {
        beforeEach(() => {
            props.dropdownOpen = false;
            props.categorie = ['Test', 'Category'];
            props.id = 1;
        })
        const listGroupItems = layer().find("ListGroupItem");
        expect(listGroupItems.length).toBeGreaterThan(0);
    });*/

});