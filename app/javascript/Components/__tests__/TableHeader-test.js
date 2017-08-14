import React from "react";
import TableHeader from '../Fysio/TableHeader/TableHeader';
import TestHelper from '../Helpers/Tests.js';

describe("TableHeader", () => {
    let props;
    let mountedTableHeader;
    const tableHeader = () => {
        mountedTableHeader = TestHelper.initializationWithMount(mountedTableHeader, <TableHeader {...props} />);
        return mountedTableHeader;
    };

    beforeEach(() => {
        props = {
            layers: undefined,
            categories: undefined
        };
        mountedTableHeader = undefined;
    });

    it("always renders a tr", () => {
        TestHelper.sizeEqualWithFindAndLength(tableHeader, "tr", 1);
        TestHelper.sizeEqualWithFindAndLength(tableHeader, "th", 1);
        const span = tableHeader().find("span");
        expect(span.text()).toContain("Publications");
    });



});