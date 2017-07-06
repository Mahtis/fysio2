import React from 'react';
import { shallow } from 'enzyme';
import Category from '../Category/Category.js';

test('Category spans the category name', () => {
    let c = {
        id: 1,
        name: "Dog"
    }
    const categoryComponent = shallow(
        <Category category={c} />
    );

    let text = categoryComponent.find('span');

    expect(text.text()).toEqual('Dog');

});

test('Category no name', () => {
    let c = {
        id: 1,
        name: ''
    }
    const categoryComponent = shallow(
        <Category category={c} />
    );

    let text = categoryComponent.find('span');

    expect(text).exists;
    
});
