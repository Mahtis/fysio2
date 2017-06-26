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
    }

    beforeEach(() => {
        props = {
            isOpen: undefined,
        };
        mountedNavbar = undefined;
    });

    it("always renders a div", () => {
        const div = navBar().find("div");
        expect(div.length).toBeGreaterThan(0);
    });

    describe("the rendered div", () => {
        it("contains one Navbar", () => {
            const divs = navBar().find("div")
            const wrappingDiv = divs.first();
            expect(wrappingDiv.find("Navbar").length).toBe(1);
        })
    })
})