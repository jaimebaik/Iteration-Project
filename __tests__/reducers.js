import {wobbeReducer} from '../client/reducers/wobbeReducer';



describe('default state', function() {
  let state;
  beforeEach(() => {
   state = {username: '',
    location: '',
    user_id: '',
    list : [],
    item : {},
    search : {}
  };
});
  it('should render without throwing an error', function() {
    expect(wobbeReducer(undefined, {type: undefined})).toEqual(state);
  });

  describe('unrecognized action types', () => {
    it('should return the original without any duplication', () => {
      const action = { type: 'aajsbicawlbejckr' };
      expect(wobbeReducer(state, action)).toBe(state);
    });
  });
});
 