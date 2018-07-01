import reducer, { initialState, addItem, deleteItem, toggleCompleted } from '../todos';

describe('reducer', () => {
  it('should return state for unknown action', () => {
    const mockState = { test: 'testItem' };
    const mockAction = { type: 'mystery-meat' };
    const result = reducer(mockState, mockAction);
    expect(result).toEqual(mockState);
  });

  it('should use initial state if state not provided', () => {
    const mockAction = { type: 'mystery-meat' };
    const result = reducer(undefined, mockAction);
    expect(result).toEqual(initialState);
  });

  it('should add new items on ADD_ITEM', () => {
    const state = {
      items: [{ id: 1, content: 'first' }, { id: 2, content: 'second' }],
    };
    const mockAction = addItem('third');
    const result = reducer(state, mockAction);
    expect(result.items).toHaveLength(3);
    expect(result.items[2].id).toEqual(3);
    expect(result.items[2].content).toEqual('third');
  });

  it('should delete item on DELETE_ITEM', () => {
    const state = {
      items: [{ id: 1, content: 'first' }, { id: 2, content: 'second' }],
    };
    const mockAction = deleteItem(1);
    const result = reducer(state, mockAction);
    expect(result.items).toHaveLength(1);
    expect(result.items[0].id).toEqual(2);
    expect(result.items[0].content).toEqual('second');
  });

  it('should toggle completed item on TOGGLE_COMPLETED', () => {
    const state = {
      items: [{ id: 1, content: 'first', completed: true }, { id: 2, content: 'second', completed: false }],
    };
    const mockAction1 = toggleCompleted(1);
    const mockAction2 = toggleCompleted(2);
    const result1 = reducer(state, mockAction1);
    const result2 = reducer(state, mockAction2);
    expect(result1.items[0].completed).toBeFalsy();
    expect(result2.items[1].completed).toBeTruthy();
  });
});
