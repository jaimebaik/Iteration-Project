import {wobbeReducer} from '../client/reducers/wobbeReducer';



describe('wobbeReducerTest', function() {
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

  describe('SET_USERNAME', () => {
    const action = {
      type: 'SET_USERNAME',
      payload: 'Scott'
    }
    it('updates username with action payload', () => {
      const {username} = wobbeReducer(state, action);
      expect(username).toBe(action.payload);
    })
  
  it('returns a state object not strictly equal to the original', () => {
    const{ state } = wobbeReducer(state, action); 
    expect(wobbeReducer(undefined, {})).not.toStrictEqual(state)
  });

  it('doesn\'t touch the itemList array', () => {
    const { list } = wobbeReducer(state, action);
    expect(list).toEqual([]);
  });

})

});
 