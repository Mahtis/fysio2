import React from 'react';
import { mount } from 'enzyme';
import Publication from '../Fysio/Publication/Publication.js';

describe("PublicationTitle", () => {
    let props;
    let mountedPublication;
    const publication = () => {
        if (!mountedPublication) {
            mountedPublication = mount(
                <Publication {...props} />
            );
        }
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
            const wrapper = publication().find("tr");;
            expect(wrapper.find("PublicationTitle").length).toBe(1);
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
