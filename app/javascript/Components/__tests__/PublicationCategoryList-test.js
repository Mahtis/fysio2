import React from "react";
import PublicationCategoryList from '../Fysio/Publication/PublicationTitle/PublicationInfoTable/PublicationCategoryList/PublicationCategoryList';
import TestHelper from '../Helpers/Tests';

describe("PublicationCategoryList", () => {
    let props;
    let mountedPublicationCategoryList;
    const publicationCategoryList = () => {
        mountedPublicationCategoryList = TestHelper.initializationWithMount(mountedPublicationCategoryList, <PublicationCategoryList {...props} />);
        return mountedPublicationCategoryList;
    };

    beforeEach(() => {
        props = {
            id: undefined,
            layer_id: undefined,
            data: undefined
        };
        mountedPublicationCategoryList = undefined;
    });

    it("always renders a p", () => {
        props = TestHelper.initializePublicationCategoryListProps(props);
        const p = publicationCategoryList().find("p");
        expect(p.length).toEqual(1);

        const span = publicationCategoryList().find("span");
        expect(span.length).toEqual(0);

    });
});

