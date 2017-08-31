import React from "react";
import { shallow } from "enzyme";
import PublicationForm from '../NavBar/PublicationForm';
import {Tooltip} from 'reactstrap';
import TestHelper from '../Helpers/Tests.js';
import Data from '../../Services/Data';

describe("PublicationForm", () => {
    let props;
    let mountedForm;
    let formProps = props = {
        createPublication: function(){},
        createCategory: function (){},
        data: TestHelper.newData(new Data())

    };
    const pubForm = () => {
        mountedForm = TestHelper.initializationWithMount(mountedForm, <PublicationForm {...props} />);
        return mountedForm;
    };

    beforeEach(() => {
        props = {
            createPublication: function(){},
            createCategory: function (){},
            data: TestHelper.newData(new Data())

        };
        mountedForm = undefined;
    });

    it("always renders a Button", () => {
        TestHelper.sizeEqualWithFindAndLength(pubForm, "Button", 1)
    });

    it("always renders a shit", () => {
        let form = shallow(<PublicationForm {...formProps} />);
        let wrapper = pubForm();
        wrapper.setState({modalOpen: true});
        TestHelper.sizeEqualWithFindAndLength(wrapper, "Button", 5);
    });



});
