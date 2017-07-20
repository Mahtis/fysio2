import React from 'react';
import { shallow } from 'enzyme';
import App from '../../App';
import DatabaseConnector from '../../Services/__mocks__/DatabaseConnector'

jest.mock('../../Services/DatabaseConnector');

describe('App component', () => {
    const app = shallow(
        <App />
    );

    // why is this working?
    it('Fetches layers correctly', () => {
        DatabaseConnector.getLayers().then(resolve => {
            expect(app.state().layers.length).toEqual(3);
        })
    })

    it('Fetches layer types correctly', () => {
        DatabaseConnector.getLayerTypes().then(resolve => {
            expect(app.state().layerTypes.length).toEqual(2);
            expect(app.state().publications.length).toEqual(6);
        })
    })

    it('Fetches publications correctly', () => {
        DatabaseConnector.getPublications().then(resolve => {
            expect(app.state().publications.length).toEqual(6);
        })
    })
/*
    it('Does stuff again', () => {
        DatabaseConnector.getCategories().then(resolve => {
            expect(app.state().layerTypes.length).toEqual(2);
        })
    })*/
});

