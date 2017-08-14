import React from "react";
import { mount, shallow } from "enzyme";
import Login from '../Tabs/Login';
import TestHelper from '../Helpers/Tests.js';

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

    it("always renders a div", () => {
        TestHelper.sizeEqualWithFindAndLength(login, "div", 4);
    });
});

