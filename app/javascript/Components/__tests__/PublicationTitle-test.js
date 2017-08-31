import React from "react";
import { shallow } from "enzyme";
import PublicationTitle from '../Fysio/Publication/PublicationTitle/PublicationTitle';
import TestHelper from '../Helpers/Tests.js';
import Data from '../../Services/Data';

jest.mock("../../Services/DatabaseConnector");

describe("TableHeader", () => {
    let props;
    let mountedPublicationTitle;
    const publicationTitle = () => {
        mountedPublicationTitle = TestHelper.initializationWithMount(mountedPublicationTitle, <PublicationTitle {...props} />);
        return mountedPublicationTitle;
    };

    beforeEach(() => {
        props = {
            data: TestHelper.newData(new Data()),
            id: 1
        };
        mountedPublicationTitle = undefined;
    });

    describe("Works", () => {
        it("renders a td", () => {
            expect(publicationTitle().find("td").length).toBe(1);
        });
        it("renders a span", () => {
            expect(publicationTitle().find("span").length).toBe(1);
        });
        it("modalOpen is false", () => {
           expect(publicationTitle().state().modalOpen).toBe(false);
        });
        it("Span value", () => {
            expect(publicationTitle().find("span").first().text()).toBe("Audio Biofeedback for Poker Players");
        });
        it("Modal is closed", () => {
           expect(publicationTitle().find("ModalHeader").length).toBe(0);
           expect(publicationTitle().find("ModalBody").length).toBe(0);
        });

        describe("Clicking it, opens the modal", () => {
           it("Clicking opens the modal", () => {
               publicationTitle().find("span").first().simulate("click");
               expect(publicationTitle().state().modalOpen).toBe(true);

           });
        });
    });

});