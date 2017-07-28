import React from 'react';
import {mount} from 'enzyme';
import Publication from '../Fysio/Publication/Publication.js';
import PublicationTitle from '../Fysio/Publication/PublicationTitle/PublicationTitle.js';
import PublicationCategoryList from '../Fysio/Publication/PublicationLayerCategoryList/PublicationLayerCategoryList.js';

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
        expect(tr.text()).toEqual("Test");
    });

    function getPublication() {
        return {
            name: "Test",
            links: ["http://localhost"],
            authors: ["Matti Meikäläinen"],
            year: 2017,
            journal: "Aku Ankka"
        };
    }

    function getLayers(){
        return [];
    }

    function getCategories(){
        return [];
    }

});
