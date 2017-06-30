import React from 'react';
import { shallow, mount, render } from 'enzyme';
import DropdownView from "../ViewChange/DropdownView";

describe("DropdownView", () => {
    let props;
    let mountedLayer;
    const view = () => {
        if (!mountedLayer) {
            mountedLayer = mount(
                <DropdownView {...props} />
            );
        }
        return mountedLayer;
    }

    beforeEach(() => {
        props = {
            layerTypes: [],
            changeLayerView: function(){1}
        };
        mountedLayer = undefined;
    });

    // ^boilerplate code that is run before each test

    it("always renders a dropdown", () => {
        //const buttons = filter().find("td");
        expect(view().find("ButtonDropdown")).exists;
    });

    describe("the dropdown", () => {

        beforeEach(() => {
            props = {
                layerTypes: createLayerTypes(),
                changeLayerView: function(){1}
            };
            mountedLayer = undefined;
        });

        it("contains correct number of layerTypes", () => {
            const v = view().find("DropdownMenu");
            expect(v.children().length).toEqual(props.layerTypes.length);
        });
        /*it("doesn't contain non-matching categories", () => {
            // two categories now have non-matching layer_id or ids.
            props.categories = [{"id":1,"name":"EEG","layer_id":1,"ids":[1,3]},{"id":2,"name":"EDA","layer_id":2,"ids":[1,3,4,5,6]},{"id":3,"name":"fEMG","layer_id":1,"ids":[2]}];
            const td = filter().find("td")
            expect(td.children().length).toEqual(1);
        });*/
    });


    function createLayerTypes() {

        return [{
            "id": 1,
            "name": "Science",
            "layers": [
                { "id": 1,
                    "name": "Application" },
                { "id": 2,
                    "name": "Logic" },
                { "id": 3,
                    "name": "Indicies" },
                { "id": 4,
                    "name": "Metrics" },
                { "id": 5,
                    "name": "Signal" }]},
            { "id": 2,
            "name": "Hacker",
            "layers": [
                { "id": 6,
                    "name": "Software" },
                { "id": 7,
                    "name": "Hardware" }]}]
    }

});
