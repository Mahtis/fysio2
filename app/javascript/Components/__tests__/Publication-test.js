import React from 'react';
import Publication from '../Fysio/Publication/Publication.js';
import TestHelper from '../Helpers/Tests.js';

describe("Publication", () => {
    let props;
    let mountedPublication;
    const publication = () => {
        mountedPublication = TestHelper.initializationWithShallow(mountedPublication, <Publication {...props} />);
        return mountedPublication;
    };

    beforeEach(() => {
        props = {
            id: undefined,
            data: undefined
        };
        mountedPublication = undefined;
    });

    it("always renders a tr", () => {
        props = TestHelper.initializePublicationProps(props);
        const tr = publication().find("tr");
        expect(tr.length).toEqual(1);
    });

//     describe("the rendered tr", () => {
//
//         it("always renders a PublicationTitle", () => {
//             TestHelper.sizeEqualWithFindAndLength(publication, "tr", 1);
//         });
//
//         it("always renders a PublicationCategoryList for each layer", () => {
//             const wrapper = publication().find("tr");
//             // (lenght + 1) since PublicationTitle is also a child
//             expect(wrapper.children().length).toBe(publication().props.data.getLayers().length + 1)
//         })
//     });
});
