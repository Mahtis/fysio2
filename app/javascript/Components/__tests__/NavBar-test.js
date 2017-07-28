import React from "react";
import { mount } from "enzyme";
import NavBar from '../NavBar/NavBar.js'

describe("Navbar", () => {
    let props;
    let mountedNavbar;
    const navBar = () => {
        if (!mountedNavbar) {
            mountedNavbar = mount(
                <NavBar {...props} />
            );
        }
        return mountedNavbar;
    };

    beforeEach(() => {
        props = {
            isOpen: undefined,
            layerTypes: createLayerTypes()
        };
        mountedNavbar = undefined;
    });

    it("always renders a div", () => {
        const div = navBar().find("div");
        expect(div.length).toBeGreaterThan(0);
    });

    describe("the rendered div is not included", () => {
        it("contains one Navbar", () => {
            const divs = navBar().find("div")
            const wrappingDiv = divs.first();
            expect(wrappingDiv.find("Navbar").length).toBe(0);
        })
    });

    function createLayerTypes() {

        return [
            {
                "id": 1,
                "name": "Science",
                "layers": [
                    {   "id": 1,
                        "name": "Application" },
                    {   "id": 2,
                        "name": "Logic" },
                    { "id": 3,
                        "name": "Indicies" },
                    { "id": 4,
                        "name": "Metrics" },
                    { "id": 5,
                        "name": "Signal" }
                        ]
            },
            {
                "id": 2,
                "name": "Hacker",
                "layers": [
                    { "id": 6,
                        "name": "Software" },
                    { "id": 7,
                        "name": "Hardware" }
                        ]
            }
            ]
    }

});