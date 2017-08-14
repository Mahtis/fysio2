import React from "react";
import { mount, shallow } from "enzyme";
import PublicationCategoryList from '../Fysio/Publication/PublicationTitle/PublicationInfoTable/PublicationCategoryList/PublicationCategoryList';

describe("PublicationCategoryList", () => {
    let props;
    let mountedPublicationCategoryList;
    const publicationCategoryList = () => {
        if (!mountedPublicationCategoryList) {
            mountedPublicationCategoryList = mount(
                <PublicationCategoryList {...props} />
            );
        }
        return mountedPublicationCategoryList;
    };

    beforeEach(() => {
        props = {
            categories: [{  "id" : 1,
                            "name" : "EEG",
                            "layer_id" : 1,
                            "ids" : [1]}],
            publication_id: 1,
            layer: 1
        };
        mountedPublicationCategoryList = undefined;
    });

    it("always renders a p", () => {
        const p = publicationCategoryList().find("p");
        expect(p.length).toEqual(1);

        const span = publicationCategoryList().find("span");
        expect(span.length).toEqual(1);

    });
});

