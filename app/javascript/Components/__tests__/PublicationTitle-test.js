import React from "react";
import { shallow } from "enzyme";
import PublicationTitle from '../Fysio/Publication/PublicationTitle/PublicationTitle';
import TestHelper from '../Helpers/Tests.js';

describe("TableHeader", () => {
    let props;
    let mountedPublicationTitle;
    const publicationTitle = () => {
        mountedPublicationTitle = TestHelper.initializationWithMount(mountedPublicationTitle, <PublicationTitle {...props} />);
        return mountedPublicationTitle;
    };

    beforeEach(() => {
        props = {
            modalOpen: false,
            pub: createPublication()
        };
        mountedPublicationTitle = undefined;
    });

    it("always renders a tr", () => {
        TestHelper.sizeEqualWithFindAndLength(publicationTitle, "td", 1);
        TestHelper.sizeEqualWithFindAndLength(publicationTitle, "span", 1);

        const wrapper = shallow(<PublicationTitle modalOpen={false}
                                                  pub={createPublication()} />).instance();
        expect(wrapper.props.modalOpen).toEqual(false);

    });

    function createPublication() {
        return {
            name: "Test",
            links: ["http://localhost"],
            authors: ["Matti Meikäläinen"],
            year: 2017,
            journal: "Aku Ankka"
        }
    }

});