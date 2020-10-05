import React from 'react';
import { shallow } from 'enzyme';
import IndexPage from '../pages/index';
describe('MyComponent', () => {
    it('should render correctly', () => {
        const component = shallow(<IndexPage />);

        expect(component).toBeDefined();
    });
});