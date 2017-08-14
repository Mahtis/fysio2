import React from 'react';
import Publication from '../Fysio/Publication/Publication.js';
import TestHelper from '../Helpers/Tests.js';

describe("PublicationTitle", () => {
    let props;
    let mountedPublication;
    const publication = () => {
        mountedPublication = TestHelper.initializationWithMount(mountedPublication, <Publication {...props} />);
        return mountedPublication;
    };

    beforeEach(() => {
        props = {
            publication: getPublication(),
            layers: getLayers(),
            categories: getCategories()
        };
        mountedPublication = undefined;
    });

    it("always renders a tr", () => {
        const tr = publication().find("tr");
        expect(tr.length).toEqual(1);
    });

    describe("the rendered tr", () => {

        it("always renders a PublicationTitle", () => {
            TestHelper.sizeEqualWithFindAndLength(publication, "tr", 1);
        });

        it("always renders a PublicationCategoryList for each layer", () => {

            const wrapper = publication().find("tr");
            // (lenght + 1) since PublicationTitle is also a child
            expect(wrapper.children().length).toBe(props.layers.length + 1)

        })

    });

    function getPublication() {
        return {
            name: "Test",
            links: ["http://localhost"],
            authors: ["Matti Meikäläinen"],
            year: 2017,
            journal: "Aku Ankka",
            id: 1
        };
    }

    function getLayers(){
        return [{
            name: "Test",
            id: 1
        }, {
            name: "Test2",
            id: 2
            }];
    }

    function getCategories(){
        return [];
    }

});
