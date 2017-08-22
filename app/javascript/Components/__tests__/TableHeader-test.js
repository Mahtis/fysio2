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
            data: undefined
        };
        mountedTableHeader = undefined;
    });

    it("always renders a tr", () => {
        props = TestHelper.initializeTableHeaderProps(props);
        TestHelper.sizeEqualWithFindAndLength(tableHeader, "tr", 1);
        TestHelper.sizeEqualWithFindAndLength(tableHeader, "th", 6);
        const span = tableHeader().find("Layer");
        console.log(span.nodes[0].props.id);
        expect(span.nodes[0].props.id).toEqual(1);
    });



});