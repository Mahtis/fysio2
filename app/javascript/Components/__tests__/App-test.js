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
        console.log(app.state().layers.length);
        DatabaseConnector.getLayersForType(1).then(resolve => {
            console.log(app.state().layers.length);
        });
        console.log(app.find('td').first().text());
    })
});

