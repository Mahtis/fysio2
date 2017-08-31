import React from 'react';
import { shallow } from 'enzyme';
import App from '../../App';
import DatabaseConnector from '../../Services/__mocks__/DatabaseConnector.js';
import Tests from '../Helpers/Tests'
import Data from '../../Services/Data';
import cookie from 'react-cookies';

jest.mock('../../Services/DatabaseConnector');

describe('App component', () => {
    const app = shallow(
        <App />
    );

    /* May not be the proper way, but the tests work by explicitly calling the same
       fetch functions that the App-component is calling, and after the explicit
       call is resolved checks if the app state has also changed.
       This works, but possibly isn't the correct/best way to test this.
       Note that these tests rely on the specific functioning of the DatabaseConnector
       mock-class and knowledge of the returns of those functions. Could be done more
       elegantly.
    */

    beforeEach(() => {
        let data = app.state().data;
        data = Tests.newData(data);
        app.setState({data: data});
        app.setState({appMode: 'normal'});
    }
    );

    it('Fetches layers correctly', () => {
        DatabaseConnector.getDataFromDatabase("/layer_types/1").then(resolve => {
            expect(resolve.length).toEqual(3);
        })
    });

    it('Fetches layer types correctly', () => {
        DatabaseConnector.getDataFromDatabase("/layer_types").then(resolve => {
            expect(resolve.length).toEqual(2);
        })
    });

    it('Fetches publications correctly', () => {
        DatabaseConnector.getDataFromDatabase("/publications").then(resolve => {
            expect(resolve.length).toEqual(6);
        })
    });

    it('Fetches categories correctly', () => {
        DatabaseConnector.getDataFromDatabase("/categories").then(resolve => {
            expect(resolve.length).toEqual(6);
        })
    });


    it('toAbout switches state to about and shows about view', () => {
        app.instance().toAbout();
        expect(app.state().appMode).toEqual('about');
        expect(app.find('.aboutBody').node).toBeDefined();
    });

    it('toNormal switches state to normal', () => {
        app.instance().toNormal();
        expect(app.state().appMode).toEqual('normal');
    });

    it('toLogin switches state to login and shows login view', () => {
        app.instance().toLogin();
        expect(app.state().appMode).toEqual('login');
        expect(app.find('Login').node).toBeDefined();
    });

    it('doLogout switches user state to guest', () => {
        app.instance().doLogout();
        expect(app.state().userMode).toEqual('guest');
        expect(cookie.load('auth_token')).not.toBeDefined();
    });

    it('setting user mode to admin switches user state to admin', () => {
        app.instance().setUserMode('admin');
        expect(app.state().userMode).toEqual('admin');
    });

    it('setting user mode to user switches user state to user', () => {
        app.instance().setUserMode('user');
        expect(app.state().userMode).toEqual('user');
    });

    it('No publications renders loading screen', () => {
        let data = app.state().data;
        data.setPublications([]);
        app.setState({data: data});
        expect(app.state().data.getPublications().length).toEqual(0);
        expect(app.find('.loader').node).toBeDefined();
    });

    it('No layers renders loading screen', () => {
        let data = app.state().data;
        data.setLayers([]);
        app.setState({data: data});
        expect(app.state().data.getLayers().length).toEqual(0);
        expect(app.find('.loader').node).toBeDefined();
    });

    it('No layerTypes renders loading screen', () => {
        let data = app.state().data;
        data.setLayerTypes([]);
        app.setState({data: data});
        expect(app.state().data.getLayerTypes().length).toEqual(0);
        expect(app.find('.loader').node).toBeDefined();
    });

    it('No categories renders loading screen', () => {
        let data = app.state().data;
        data.setCategories([]);
        app.setState({data: data});
        expect(app.state().data.getCategories().length).toEqual(0);
        expect(app.find('.loader').node).toBeDefined();
    });
/*
    it('Fetches new view categories correctly', () => {
        app.instance().changeLayerView(1);
        DatabaseConnector.getLayersForType(1).then(resolve => {
            expect(resolve.length).toEqual(1);
        })
    });
*/

    it('doClear after selecting a category empties the selection', () => {
        let data = app.state().data;
        data.selectCategory(1);
        expect(data.getSelectedCategories().length).toBe(1);
        app.instance().doClear();
        expect(data.getSelectedCategories().length).toBe(0);

    });

    it('calling changeLayerView results in a change in layers', () => {
        app.instance().changeLayerView(2);
        DatabaseConnector.getLayersForType(2).then(resolve => {
            expect(app.state().data.getLayers().length).toBe(3);
        });
    });
/*
    it('clicking the same layerType results in no change in layers', () => {
        const nav = app.find('NavBar');
        const link = nav.find('LayerLink').last();
        link.simulate('click');
        DatabaseConnector.getLayersForType(2).then(resolve => {
            expect(app.state().layers.length).toEqual(3);
        });
    });

    it('clicking a category filters down number of displayed publications', () => {
        const fysio = app.find('Fysio');
        console.log(fysio);
        const pubs = fysio.find('Publication');
        console.log(pubs);
        const cats = pubs.find('PublicationLayerCategoryList');
        console.log(cats);
        const buts = cats.find('CategoryButton');
        console.log(buts);
        buts.first().simulate('click');
        expect(app.state().data.selected_count.toEqual(1));
    });
*/



});

