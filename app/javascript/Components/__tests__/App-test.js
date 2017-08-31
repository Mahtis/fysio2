import React from 'react';
import { mount } from 'enzyme';
import App from '../../App';
import DatabaseConnector from '../../Services/__mocks__/DatabaseConnector.js';
import Tests from '../Helpers/Tests'
import Data from '../../Services/Data';

jest.mock('../../Services/DatabaseConnector');

describe('App component', () => {
    const app = mount(
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

    beforeEach( () => {
        let data = app.state().data;
        Tests.newData(data);
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

    it('Clicking About switches state to about', () => {
        app.find('Button')
    });

    it('0 publications renders loading screen', () => {
        let data = app.state().data;
        data.setPublications([]);
        console.log(app.state().data.getPublications().length);
        console.log(app.find('.loader'));
    });
/*
    it('Fetches new view categories correctly', () => {
        app.instance().changeLayerView(1);
        DatabaseConnector.getLayersForType(1).then(resolve => {
            expect(resolve.length).toEqual(1);
        })
    });
*/
    it('clicking a layerType results in a change in layers', () => {
        let nav = app.find('NavBar');
        let link = nav.find('ml-auto nav-left');
        console.log(nav.props().layerTypes);
        /*DatabaseConnector.getDataFromDatabase("/layer_types").then(resolve => {
            const nav = app.find('NavBar');
            const link = nav.find('ml-auto nav-left');
            console.log(nav.props().layerTypes);
        });*/

        //link.simulate('click');

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

