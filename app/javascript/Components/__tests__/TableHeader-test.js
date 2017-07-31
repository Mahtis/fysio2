import React from "react";
import { mount } from "enzyme";
import TableHeader from '../Fysio/TableHeader/TableHeader';

describe("TableHeader", () => {
    let props;
    let mountedTableHeader;
    const tableHeader = () => {
        if (!mountedTableHeader) {
            mountedTableHeader = mount(
                <TableHeader {...props} />
            );
        }
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
        const tr = tableHeader().find("tr");
        expect(tr.length).toEqual(1);
        const th = tableHeader().find("th");
        expect(th.length).toEqual(1);
        const span = tableHeader().find("span");
        expect(span.text()).toContain("Publications");
    });



});