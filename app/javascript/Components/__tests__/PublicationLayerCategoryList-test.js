import React from 'react';
import PublicationLayerCategoryList from '../Fysio/Publication/PublicationLayerCategoryList/PublicationLayerCategoryList.js';
import TestHelper from '../Helpers/Tests.js';
import Data from '../../Services/Data';

describe("PublicationLayerCategoryList", () => {
    let props;
    let mountedPublicationLayerCategoryList;
    const publicationLayerCategoryList = () => {
        mountedPublicationLayerCategoryList = TestHelper.initializationWithShallow(mountedPublicationLayerCategoryList, <PublicationLayerCategoryList {...props} />);
        return mountedPublicationLayerCategoryList;
    };

    beforeEach(() => {
        props = {
            id: undefined,
            layer_id: undefined,
            data: undefined
        };
        mountedPublicationLayerCategoryList = undefined;
    });

    // ^boilerplate code that is run before each test

    it("always renders a td (table cell)", () => {
        props = TestHelper.initializePublicationLayerCategoryListProps(props);
        const buttons = publicationLayerCategoryList().find("td");
        expect(buttons.children().length).toEqual(1);
    });

    describe("the rendered td", () => {

        it("contains correct number of categories", () => {
            props = TestHelper.initializePublicationLayerCategoryListProps(props);
            const td = publicationLayerCategoryList().find("td");
            expect(td.children().length).toEqual(props.data.getPublicationLayerCategories(props.id, props.layer_id).length);
        });

        it("doesn't contain non-matching categories", () => {
            // two categories now have non-matching layer_id or ids.
            props = TestHelper.initializePublicationLayerCategoryListProps(props);
            const td = publicationLayerCategoryList().find("td");
            expect(td.children().length).toEqual(1);
        });

        it("doesn't contain categories if publication is not linked to any categories in particular layer", () => {
            props.data = new Data();
            const td = publicationLayerCategoryList().find("td");
            expect(td.children().length).toEqual(0);
        })

    });

});
