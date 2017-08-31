import React from "react";
import Fysio from '../Fysio/Fysio.js';
import TestHelper from '../Helpers/Tests.js';
import Data from '../../Services/Data';

describe("Fysio", () => {
    let props;
    let mountedFysio;
    const fysio = () => {
        mountedFysio = TestHelper.initializationWithShallow(mountedFysio, <Fysio {...props} />);
        return mountedFysio;
    };

    beforeEach(() => {
        props = {
            data: TestHelper.newData(new Data()),
            updateTable: undefined
        };
        mountedFysio = undefined
    });

    describe("State is initial", () => {

        it("Current search is empty", () => {
            expect(fysio().instance().state.currentSearch).toBe("");
        });

        it("Current pubIdLimit is correct", () => {
            expect(fysio().instance().state.pubIdLimit).toBe(15);
        });

        it("Current pubsSeen is correct", () => {
            expect(fysio().instance().state.pubsSeen).toBe(6);
        });

        it("Returnable returns empty tbody tag", () => {
            expect(fysio().find("tbody").first().children().length).toBe(6);
            expect(fysio().find("tbody").first().text()).toBe("<Publication /><Publication /><Publication /><Publication /><Publication /><Publication />");
        });
    });

    describe("Things are empty if data is empty", () => {
        it("Current pubIdLimit is correct", () => {
            props.data = new Data();
            expect(fysio().instance().state.pubIdLimit).toBe(15);
        });

        it("Current pubsSeen is correct", () => {
            props.data = new Data();
            expect(fysio().instance().state.pubsSeen).toBe(0);
        });

        it("Current pubIdLimit is correct", () => {
            props.data = undefined;
            expect(fysio().instance().state.pubIdLimit).toBe(15);
        });

        it("Current pubsSeen is correct", () => {
            props.data = undefined;
            expect(fysio().instance().state.pubsSeen).toBe(0);
        });

        it("Returnable returns empty tbody tag", () => {
            props.data = undefined;
            expect(fysio().find("tbody").first().children().length).toBe(0);
            expect(fysio().find("tbody").first().text()).toBe("");
        });
    });

    describe("Clicking publication +/- buttons work", () => {
       it("All work", () => {
           let button = fysio().find("Button").at(1);
           button.simulate("click");
           expect(fysio().instance().state.pubIdLimit).toBe(10);
           expect(fysio().instance().state.pubsSeen).toBe(6);
           button.simulate("click");

           button = fysio().find("Button").at(4);
           button.simulate("click");
           expect(fysio().instance().state.pubIdLimit).toBe(25);
           expect(fysio().instance().state.pubsSeen).toBe(6);

           button = fysio().find("Button").at(0);
           button.simulate("click");
           expect(fysio().instance().state.pubIdLimit).toBe(5);
           expect(fysio().instance().state.pubsSeen).toBe(6);

           button = fysio().find("Button").at(3);
           button.simulate("click");
           expect(fysio().instance().state.pubIdLimit).toBe(10);
           expect(fysio().instance().state.pubsSeen).toBe(6);
       }) ;
    });

    describe("Functions works", () => {
        it("Search changes state", () => {
            fysio().instance().setTextSearch("Query");
            expect(fysio().instance().state.currentSearch).toBe("Query");
        });

        it("Change visible publications changes state", () => {
            fysio().instance().changePub(-5);
            expect(fysio().instance().state.pubIdLimit).toBe(10);
            fysio().instance().changePub(15);
            expect(fysio().instance().state.pubIdLimit).toBe(10);
            fysio().instance().changePub(-50);
            expect(fysio().instance().state.pubIdLimit).toBe(5);
        })
    });
});