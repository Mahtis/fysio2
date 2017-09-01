import React from "react";
import { mount } from "enzyme";
import Login from '../Tabs/Login';
import DatabaseConnector from '../../Services/__mocks__/DatabaseConnector';

jest.mock('../../Services/DatabaseConnector');

describe("Login", () => {
    let props;
    let mountedPublicationInfoTable;
    const login = () => {
        if (!mountedPublicationInfoTable) {
            mountedPublicationInfoTable = mount(
                <Login {...props} />
            );
        }
        return mountedPublicationInfoTable;
    };

    beforeEach(() => {
        props = {setUserMode: jest.fn()};
        mountedPublicationInfoTable = undefined;
    });

    it("always renders a div", () => {
        const wrapper = login();
        expect(wrapper.find("div").first().length).toBe(1);
    });

    describe("the rendered div", () => {

        it("renders a span", () => {
            const wrapper = login().find("div");
            expect(wrapper.find("span").length).toBe(1);
        });

        it("renders 'a", () => {
            const wrapper = login().find("div");
            expect(wrapper.find("a").length).toBe(1);
        });

        describe("the rendered span", () => {

            it("renders a h4", () => {
                const wrapper = login().find("span");
                expect(wrapper.find("h4").length).toBe(1);
            });

            describe("the rendered h4", () => {

                it("has loginError as className", () => {
                    const wrapper = login().find("h4");
                    expect(wrapper.hasClass("loginError"));
                });

                it("shows the error message stored in state", () => {
                    const wrapper = login();
                    wrapper.setState({errorMessage: "virhe"});
                    expect(wrapper.find("h4").text()).toBe("virhe");
                });
            });

            it("renders a Form", () => {
                const wrapper = login().find("div");
                expect(wrapper.find("Form").length).toBe(1);
            });

            describe("the rendered Form", () => {

                it("renders two FormGroups", () => {
                    const wrapper = login().find("Form");
                    expect(wrapper.find("FormGroup").length).toBe(2);
                });

                describe("the rendered FormGroup", () => {

                    it("has loginForm as className", () => {
                        const wrapper = login().find("FormGroup").first();
                        expect(wrapper.hasClass("loginForm"))
                    });

                    it("renders a Label", () => {
                        const wrapper = login().find("FormGroup");
                        expect(wrapper.find("Label").length).toBe(2);
                    });

                    describe("the rendered Label", () => {

                        it("renders text 'Username'", () => {
                            const wrapper = login().find("Label").first();
                            expect(wrapper.text()).toBe("Username");
                        });
                    });

                    it("renders Input", () => {
                        const wrapper = login().find("FormGroup");
                        expect(wrapper.find("Input").length).toBe(2);
                    });
                });

                it("renders Button", () => {
                    const wrapper = login().find("Form");
                    expect(wrapper.find("Button").length).toBe(1);
                });

                describe("The rendered button", () => {

                    it("has modeButtons as className", () => {
                       const wrapper = login().find("Button");
                       expect(wrapper.hasClass("modeButtons"));
                    });

                    it("renders text 'Submit'", () => {
                        const wrapper = login().find("Button");
                        expect(wrapper.text()).toBe("Submit");
                    });
                });
            });
        });
    });

    it("correctly changes username", () => {
        const wrapper = login();
        let e = {target: {value: "Matti"}};
        wrapper.instance().updateUsername(e);
        expect(wrapper.state().usernameI).toBe('Matti');
    });

    it("correctly changes password", () => {
        const wrapper = login();
        let e = {target: {value: "Matti"}};
        wrapper.instance().updatePassword(e);
        expect(wrapper.state().passwordI).toBe('Matti');
    });

    it("sending correct user credentials results in call to setUserMode", () => {
        const wrapper = login();
        class Event {
            preventDefault() {
                return null;
            }
        }
        let event = new Event();
        wrapper.instance().handleSubmit(event);
        DatabaseConnector.sendUserCredentials('name','').then(response => {
            expect(wrapper.props().setUserMode.mock.calls.length).toBe(1);
        });
    });

    it("sending incorrect user credentials results in error and no calls to setUserMode", () => {
        const wrapper = login();
        class Event {
            preventDefault() {
                return null;
            }
        }
        let event = new Event();
        wrapper.setState({usernameI: 'noAuth'});
        wrapper.instance().handleSubmit(event);
        DatabaseConnector.sendUserCredentials('noAuth','').then(response => {
            expect(wrapper.props().setUserMode.mock.calls.length).toBe(0);
            expect(wrapper.state().errorMessage).toBe('Wrong username/password or GitHub account');
        });
    });

});

