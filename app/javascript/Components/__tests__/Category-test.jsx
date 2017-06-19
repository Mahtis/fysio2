import React from 'react';
import { shallow } from 'enzyme';
import Category from '../Category/Category.js';

test('Category spans the category name', () => {
    // Render a checkbox with label in the document
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
    // Render a checkbox with label in the document
    let c = {
        id: 1
    }
    const categoryComponent = shallow(
        <Category category />
    );

    expect(categoryComponent.getNode()).toBeNull();
});
