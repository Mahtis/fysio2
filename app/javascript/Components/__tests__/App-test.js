import React from 'react';
import { mount } from 'enzyme';
import App from '../../App';
import DatabaseConnector from '../../Services/__mocks__/DatabaseConnector'

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

    it('Fetches layers correctly', () => {
        DatabaseConnector.getLayers().then(resolve => {
            expect(app.state().layers.length).toEqual(3);
        })
    })

    it('Fetches layer types correctly', () => {
        DatabaseConnector.getLayerTypes().then(resolve => {
            expect(app.state().layerTypes.length).toEqual(2);
        })
    })

    it('Fetches publications correctly', () => {
        DatabaseConnector.getPublications().then(resolve => {
            expect(app.state().publications.length).toEqual(6);
        })
    })

    it('Fetches categories correctly', () => {
        DatabaseConnector.getCategories().then(resolve => {
            expect(app.state().categories.length).toEqual(6);
        })
    })

    it('Fetches new view categories correctly', () => {
        app.instance().changeLayerView(1);
        DatabaseConnector.getLayersForType(1).then(resolve => {
            expect(app.state().layers.length).toEqual(1);
        })
    })

    it('clicking a layerType results in a change in layers', () => {
        const nav = app.find('NavBar');
        const link = nav.find('LayerLink').first();
        link.simulate('click');
        DatabaseConnector.getLayersForType(1).then(resolve => {
            expect(app.state().layers.length).toEqual(1);
        });
    })

    it('clicking the same layerType results in no change in layers', () => {
        const nav = app.find('NavBar');
        const link = nav.find('LayerLink').last();
        link.simulate('click');
        DatabaseConnector.getLayersForType(2).then(resolve => {
            expect(app.state().layers.length).toEqual(3);
        });
    })

    it('clicking a category filters down number of displayed publications', () => {
        const fysio = app.find('Fysio');
        const pubs = fysio.find('Publication');
        const cats = pubs.find('PublicationLayerCategoryList');
        const buts = cats.find('CategoryButton');
        buts.first().simulate('click');
        DatabaseConnector.fetchFromPath('publications').then(resolve => {
            DatabaseConnector.fetchFromPath('categories').then(resolve => {
                expect(app.state().publications.length.toEqual(5));
            })
        })
    })

});

