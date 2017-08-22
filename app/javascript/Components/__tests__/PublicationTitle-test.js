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
            data: undefined,
            id: undefined
        };
        mountedPublicationTitle = undefined;
    });

    it("always renders a tr", () => {
        props = TestHelper.initializePublicationTitleProps(props);
        TestHelper.sizeEqualWithFindAndLength(publicationTitle, "td", 1);
        TestHelper.sizeEqualWithFindAndLength(publicationTitle, "span", 1);

        const wrapper = shallow(
            <PublicationTitle
                id={props.id}
                modalOpen={false}
                data={props.data} />).instance();
        expect(wrapper.props.modalOpen).toEqual(false);

    });
});