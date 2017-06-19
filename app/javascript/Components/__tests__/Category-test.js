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

    expect(categoryComponent.text()).toEqual('Dog');
});

test('Category no name', () => {
    let c = {
        id: 1
    }
    const categoryComponent = shallow(
        <Category category={c} />
    );

    expect(categoryComponent.text()).toEqual('');
});
