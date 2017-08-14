import React from "react";
import { mount, shallow } from "enzyme";
import PublicationInfoTable from '../Fysio/Publication/PublicationTitle/PublicationInfoTable/PublicationInfoTable';
import TestHelper from '../Helpers/Tests.js';

describe("PublicationCategoryList", () => {
    let props;
    let mountedPublicationInfoTable;
    const publicationInfoTable = () => {
        if (!mountedPublicationInfoTable) {
            mountedPublicationInfoTable = mount(
                <PublicationInfoTable {...props} />
            );
        }
        return mountedPublicationInfoTable;
    };

    beforeEach(() => {
        props = {
            categories: [{  "id" : 1,
                "name" : "EEG",
                "layer_id" : 1,
                "ids" : [1]}],
            layers: [{
                "name" : "Application",
                "id" : 1
            }],
            publication: {
                "id": 1,
                "name": "Game of Life"
            },
        };
        mountedPublicationInfoTable = undefined;
    });

    it("always renders a Table", () => {
        TestHelper.sizeEqualWithFindAndLength(publicationInfoTable, "Table", 1);
    });
});

