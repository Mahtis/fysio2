import React from "react";
import NavBar from '../NavBar/NavBar.js';
import TestHelper from '../Helpers/Tests.js';

describe("Navbar", () => {
    let props;
    let mountedNavbar;
    const navBar = () => {
        mountedNavbar = TestHelper.initializationWithMount(mountedNavbar, <NavBar {...props} />);
        return mountedNavbar;
    };

    beforeEach(() => {
        props = {
            isOpen: undefined,
            changeLayerView: function(){},
            layerTypes: []
        };
        mountedNavbar = undefined;
    });

    it("always renders a div", () => {
        props = TestHelper.initializeNavBarProps(props);
        TestHelper.sizeEqualWithFindAndLength(navBar, "div", 2)
    });

    describe("the rendered div is not included", () => {
        it("contains one Navbar", () => {
            const divs = navBar().find("div");
            const wrappingDiv = divs.first();
            expect(wrappingDiv.find("Navbar").length).toBe(0);
        })
    });
});