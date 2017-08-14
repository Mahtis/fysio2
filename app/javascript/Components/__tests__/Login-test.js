import React from "react";
import { mount, shallow } from "enzyme";
import Login from '../Tabs/Login';

describe("Login", () => {
    let props;
    let mountedPublicationInfoTable;
    const login = () => {
        if (!mountedPublicationInfoTable) {
            mountedPublicationInfoTable = mount(
                <Login {...props} />
            );
        }
        return mountedPublicationInfoTable;
    };

    beforeEach(() => {
        props = {
        };
        mountedPublicationInfoTable = undefined;
    });

    it("always renders a p", () => {
        const div = login().find("div");
        expect(div.length).toEqual(4);

    });
});

