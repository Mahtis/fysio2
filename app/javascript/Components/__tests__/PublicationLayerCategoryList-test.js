import React from 'react';
import { shallow, mount, render } from 'enzyme';
import PublicationLayerCategoryList from '../Fysio/Publication/PublicationLayerCategoryList/PublicationLayerCategoryList.js'

describe("PublicationLayerCategoryList", () => {
    let props;
    let mountedPublicationLayerCategoryList;
    const publicationLayerCategoryList = () => {
        if (!mountedPublicationLayerCategoryList) {
            mountedPublicationLayerCategoryList = shallow(
                <PublicationLayerCategoryList {...props} />
            );
        }
        return mountedPublicationLayerCategoryList;
    };

    beforeEach(() => {
        props = {
            categories: undefined,
            layer: 1,
            publication_id: 1,
            categorySelected: ["EEG", "EDA"]
        };
        mountedPublicationLayerCategoryList = undefined;
    });

    // ^boilerplate code that is run before each test

    it("always renders a td (table cell)", () => {
        props.categories = [];
        const buttons = publicationLayerCategoryList().find("td");
        expect(buttons.children().length).toEqual(0);
    });

    describe("the rendered td", () => {

        it("contains correct number of categories", () => {
            props.categories = [{"id":1,"name":"EEG","layer_id":1,"description":"test" ,"infolink":"localhost","ids":[1,3]},{"id":2,"name":"EDA","layer_id":1,"description":"test" ,"infolink":"localhost","ids":[1,3,4,5,6]},{"id":3,"name":"fEMG","layer_id":1,"description":"test" ,"infolink":"localhost","ids":[1]}];
            const td = publicationLayerCategoryList().find("td");
            expect(td.children().length).toEqual(props.categories.length);
        });

        it("doesn't contain non-matching categories", () => {
            // two categories now have non-matching layer_id or ids.
            props.categories = [{"id":1,"name":"EEG","layer_id":1,"description":"test" ,"infolink":"localhost","ids":[1,3]},{"id":2,"name":"EDA","layer_id":2,"description":"test" ,"infolink":"localhost","ids":[1,3,4,5,6]},{"id":3,"name":"fEMG","layer_id":1,"description":"test" ,"infolink":"localhost","ids":[2]}];
            const td = publicationLayerCategoryList().find("td");
            expect(td.children().length).toEqual(1);
        });

        it("doesn't contain categories if publication is not linked to any categories in particular layer", () => {
            props.categories = undefined;
            const td = publicationLayerCategoryList().find("td");
            expect(td.children().length).toEqual(0);
        })

    });

});
