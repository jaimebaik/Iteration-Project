import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import App from '../client/components/app';

configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('A suite', function() {
    it('renders without crashing', () => {
        const store = mockStore({}); // Instead of {}, you can give your initial store
        shallow(
          <Provider store={store}>   // Provides the store to your App
            <App />
          </Provider>
        );
      });
});