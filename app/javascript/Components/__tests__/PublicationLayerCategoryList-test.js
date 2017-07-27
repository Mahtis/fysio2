import React from 'react';
import { shallow, mount, render } from 'enzyme';
import PublicationLayerCategoryList from '../Fysio/Publication/PublicationLayerCategoryList/PublicationLayerCategoryList.js'

describe("PublicationLayerCategoryList", () => {
    let props;
    let mountedLayer;
    const filter = () => {
        if (!mountedLayer) {
            mountedLayer = shallow(
                <PublicationLayerCategoryList {...props} />
            );
        }
        return mountedLayer;
    }

    beforeEach(() => {
        props = {
            categories: undefined,
            layer: 1,
            publication_id: 1,
            categorySelected: ["EEG", "EDA"],
            setCategoryState: function(){1}
        };
        mountedLayer = undefined;
    });

    // ^boilerplate code that is run before each test

    it("always renders a td (table cell)", () => {
        props.categories = [];
        //const buttons = filter().find("td");
        expect(filter().find("td")).exists;
    });

    describe("the rendered td", () => {
        it("contains correct number of categories", () => {
            props.categories = [{"id":1,"name":"EEG","layer_id":1,"description":"test" ,"infolink":"localhost","ids":[1,3]},{"id":2,"name":"EDA","layer_id":1,"description":"test" ,"infolink":"localhost","ids":[1,3,4,5,6]},{"id":3,"name":"fEMG","layer_id":1,"description":"test" ,"infolink":"localhost","ids":[1]}];
            const td = filter().find("td");
            expect(td.children().length).toEqual(props.categories.length);
        });
        it("doesn't contain non-matching categories", () => {
            // two categories now have non-matching layer_id or ids.
            props.categories = [{"id":1,"name":"EEG","layer_id":1,"description":"test" ,"infolink":"localhost","ids":[1,3]},{"id":2,"name":"EDA","layer_id":2,"description":"test" ,"infolink":"localhost","ids":[1,3,4,5,6]},{"id":3,"name":"fEMG","layer_id":1,"description":"test" ,"infolink":"localhost","ids":[2]}];
            const td = filter().find("td")
            expect(td.children().length).toEqual(1);
        });
    });

});
