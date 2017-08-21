import React from "react";
import { mount, shallow } from "enzyme";
import PublicationInfoTable from '../Fysio/Publication/PublicationTitle/PublicationInfoTable/PublicationInfoTable';
import TestHelper from '../Helpers/Tests.js';

describe("PublicationInfoTable", () => {
    let props;
    let mountedPublicationInfoTable;
    const publicationInfoTable = () => {
        mountedPublicationInfoTable = TestHelper.initializationWithMount(mountedPublicationInfoTable, <PublicationInfoTable {...props} />);
        return mountedPublicationInfoTable;
    };

    beforeEach(() => {
        props = {
            data: undefined
        };
        mountedPublicationInfoTable = undefined;
    });

    it("always renders a Table", () => {
        props = TestHelper.initializePublicatioInfoTableProps(props);
        TestHelper.sizeEqualWithFindAndLength(publicationInfoTable, "Table", 1);
    });
});

