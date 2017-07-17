import React from 'react';
import { shallow } from 'enzyme';
import App from '../../App';

jest.mock('../../Services/DatabaseConnector');

test('App', () => {
    const categoryComponent = shallow(
        <App />
    );

    expect(categoryComponent.state().layers.length).toEqual(0);

});

