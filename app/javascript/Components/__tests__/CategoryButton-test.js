import React from "react";
import { shallow } from "enzyme";
import CategoryButton from '../Fysio/Publication/PublicationLayerCategoryList/CategoryButton/CategoryButton';
import {Tooltip} from 'reactstrap';

describe("CategoryButton", () => {
    let props;
    let mountedCategoryButton;
    const categoryButton = () => {
        if (!mountedCategoryButton) {
            mountedCategoryButton = shallow(
                <CategoryButton {...props} >
                    <Tooltip
                        isOpen={false}
                        target={"1"}
                        toggle={undefined}
                        delay={100}
                        placement={"bottom left"} >
                        <br />
                    </Tooltip>
                    "Testi"
                </CategoryButton>
            );
        }
        return mountedCategoryButton;
    };

    beforeEach(() => {
        props = {
            id: 1,
            name: "Testi",
            unId: "1",
            description: "Testi",
            infolink: "http://localhost",
            status: false
        };
        mountedCategoryButton = undefined;
    });

    it("always renders a tr", () => {
        const button = categoryButton().find("Button");
        expect(button.length).toEqual(1);
    });



});