import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import toJson from 'enzyme-to-json';

import CardList from '../client/components/CardList';

// configure({ adapter: new Adapter() });

// let wrapper;    

// const props = {label: 'Mega', text: 'Markets',};    

// beforeAll(() => {wrapper = shallow(<LabeledText {...props} />);});

describe('A suite', function() {
  it('should render without throwing an error', function() {
    expect(shallow(<CardList />).contains(<div className="CardList"></div>)).toBe(true);
  });

  it('should be selectable by class "CardList"', function() {
    expect(shallow(<CardList />).is('.CardList')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<CardList />).find('.CardList').length).toBe(1);
  });

});