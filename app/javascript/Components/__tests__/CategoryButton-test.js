import React from "react";
import { shallow } from "enzyme";
import CategoryButton from '../Fysio/Publication/PublicationLayerCategoryList/CategoryButton/CategoryButton';
import {Tooltip} from 'reactstrap';
import TestHelper from '../Helpers/Tests.js';

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

    it("always renders a Button", () => {
        TestHelper.sizeEqualWithFindAndLength(categoryButton, "Button", 1)
    });

    describe("the rendered Button", () => {

       it("has buttonSelect as style if status is true", () => {
           const wrapper = categoryButton();
           wrapper.setProps({ status : true });
           expect(wrapper.find("Button").hasClass("buttonSelect")).toBe(true);
       });

       it("has buttonNormal as style if status is false", () => {
           const wrapper = categoryButton();
           expect(wrapper.find("Button").hasClass("buttonNormal")).toBe(true);
       });

       it("has button_narrow as style if length of the name prop < 7", () => {
           const wrapper = categoryButton();
           expect(wrapper.find("Button").hasClass("button_wide")).toBe(false);
           expect(wrapper.find("Button").hasClass("button_narrow")).toBe(true);
       });

       it("has button_wide as style if length of the name prop >= 7", () => {
           const wrapper = categoryButton();
           wrapper.setProps({ name : "Testi12" });
           expect(wrapper.find("Button").hasClass("button_narrow")).toBe(false);
           expect(wrapper.find("Button").hasClass("button_wide")).toBe(true);
       });

       it("always renders a Tooltip", () => {
          const wrapper = categoryButton().find("Button");
          expect(wrapper.find("Tooltip").length).toBe(1);
       });

    });



});