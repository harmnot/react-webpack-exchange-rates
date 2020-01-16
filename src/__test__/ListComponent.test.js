import React from 'react';
import { shallow } from 'enzyme';
import { App }  from '../app';

// import List from "../components/list";

// describe('MyComponentList ', () => {
//     it('should render correctly in "debug" mode', () => {
//       const component = shallow(<List />);
    
//       expect(component).toMatchSnapshot();
//     });
//   });

  describe('app', () => {
    it('renders <App /> components', () => {
      const component = shallow(<App />);
      expect(component).toMatchSnapshot();
    });
  });