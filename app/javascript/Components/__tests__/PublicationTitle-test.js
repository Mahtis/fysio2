import React from "react";
import { mount, shallow } from "enzyme";
import PublicationTitle from '../Fysio/Publication/PublicationTitle/PublicationTitle';

describe("TableHeader", () => {
    let props;
    let mountedTableHeader;
    const publicationTitle = () => {
        if (!mountedTableHeader) {
            mountedTableHeader = mount(
                <PublicationTitle {...props} />
            );
        }
        return mountedTableHeader;
    };

    beforeEach(() => {
        props = {
            modalOpen: false,
            pub: createPublication()
        };
        mountedTableHeader = undefined;
    });

    it("always renders a tr", () => {
        const tr = publicationTitle().find("td");
        expect(tr.length).toEqual(1);
        const span = publicationTitle().find("span");
        expect(span.length).toEqual(1);

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