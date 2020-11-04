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
  });

  describe('SET_ITEM', () => {
    const item = {
      name:'Jacket',
      price:500,
      user_id:'1',
      location:'94583',
      category_id: 'Clothes',
      description: 'Like New',
    }
    const action = {
      type: 'SET_ITEM',
      payload: item
    }

    it('updates item with action payload', () => {
      const {item} = wobbeReducer(state, action);
      expect(item).toStrictEqual(action.payload);
    })
    
    it('returns a state object not strictly equal to the original', () => {
      const{ state } = wobbeReducer(state, action); 
      expect(wobbeReducer(undefined, {})).not.toStrictEqual(state)
    });

    it('doesn\'t touch the itemList array', () => {
      const { list } = wobbeReducer(state, action);
      expect(list).toEqual([]);
    });
  });

  describe('SET_SEARCH_ITEM', () => {
    const searchItem = {
      name:'Jacket',
      price:500,
      user_id:'1',
      location:'94583',
      category_id: 'Clothes',
      description: 'Like New',
    }
    const action = {
      type: 'SET_SEARCH_ITEM',
      payload: searchItem
    }

    it('updates item with action payload', () => {
      const {search} = wobbeReducer(state, action);
      expect(search).toStrictEqual(action.payload);
    })
    
    it('returns a state object not strictly equal to the original', () => {
      const{ state } = wobbeReducer(state, action); 
      expect(wobbeReducer(undefined, {})).not.toStrictEqual(state)
    });

    it('doesn\'t touch the itemList array', () => {
      const { list } = wobbeReducer(state, action);
      expect(list).toEqual([]);
    });
  });

  describe('SET_ID', () => {
    const action = {
      type: 'SET_ID',
      payload: 'Scott'
    }
    it('updates username with action payload', () => {
      const {user_id} = wobbeReducer(state, action);
      expect(user_id).toBe(action.payload);
    })
    
    it('returns a state object not strictly equal to the original', () => {
      const{ state } = wobbeReducer(state, action); 
      expect(wobbeReducer(undefined, {})).not.toStrictEqual(state)
    });

    it('doesn\'t touch the itemList array', () => {
      const { list } = wobbeReducer(state, action);
      expect(list).toEqual([]);
    });
  });

  describe('SET_LOCATION', () => {
    const action = {
      type: 'SET_LOCATION',
      payload: '90017'
    }
    it('updates username with action payload', () => {
      const {location} = wobbeReducer(state, action);
      expect(location).toBe(action.payload);
    })
    
    it('returns a state object not strictly equal to the original', () => {
      const{ state } = wobbeReducer(state, action); 
      expect(wobbeReducer(undefined, {})).not.toStrictEqual(state)
    });

    it('doesn\'t touch the itemList array', () => {
      const { list } = wobbeReducer(state, action);
      expect(list).toEqual([]);
    });
  });
  
  describe('DELETE_ITEM', () => {
    const item = {
      name:'Jacket',
      price:500,
      user_id:'1',
      location:'94583',
      category_id: 'Clothes',
      description: 'Like New',
    }
    const action = {
      type: 'DELETE_ITEM',
      payload: item
    }

    it('deletes item in action payload', () => {
      const {item} = wobbeReducer(state, action);
      expect(item).toStrictEqual(undefined);
    })
    
    it('returns a state object not strictly equal to the original', () => {
      const{ state } = wobbeReducer(state, action); 
      expect(wobbeReducer(undefined, {})).not.toStrictEqual(state)
    });

    it('shows change in itemList array', () => {
      const { list } = wobbeReducer(state, action);
      expect(list).not.toEqual(state.list);
    });
  });
});
 