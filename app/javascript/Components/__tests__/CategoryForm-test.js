import React from "react";
import { shallow, mount } from "enzyme";
import CategoryForm from '../NavBar/CategoryForm';
import TestHelper from '../Helpers/Tests.js';
import Data from '../../Services/Data';

describe("PublicationForm", () => {
    let props;
    let mountedForm;

    let states = {
        name: "",
        abstract: "",
        year: "",
        journal: "",
        categories: [],
        authors: [],
        authorField: "",
        authorSelected: [],
        links: [],
        linkField: "",
        linkSelect: "",
        linkSelected: [],
        modalOpen: false,
        collapseLink: false,
        collapseAuthor: false
    };

    let pubForm = () => {
        mountedForm = TestHelper.initializationWithMount(mountedForm, <PublicationForm {...props} />);
        return mountedForm;
    };

    let pubFormShallow = () => {
        mountedForm = TestHelper.initializationWithShallow(mountedForm, <PublicationForm {...props} />);
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
});