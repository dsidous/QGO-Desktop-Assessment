export const ADD_ITEM = 'qgo/assessment/ADD_ITEM';
export const DELETE_ITEM = 'qgo/assessment/DELETE_ITEM';
export const TOGGLE_COMPLETED = 'qgo/assessment/TOGGLE_COMPLETED';

export const addItem = (content) => {
  return { type: ADD_ITEM, content };
};

export const deleteItem = (itemId) => {
  return { type: DELETE_ITEM, itemId };
};

export const toggleCompleted = (itemId) => {
  return { type: TOGGLE_COMPLETED, itemId };
};

export const initialState = {
  items: [
    { id: 1, content: 'Call mum', completed: true },
    { id: 2, content: 'Buy cat food', completed: false },
    { id: 3, content: 'Water the plants', completed: false },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_ITEM:
      const items = state.items.filter(s => s.id !== action.itemId);
      return {
        ...state,
        items
      };     
    case ADD_ITEM:
      const nextId =
        state.items.reduce((id, item) => Math.max(item.id, id), 0) + 1;
      const newItem = {
        id: nextId,
        content: action.content,
      };

      return {
        ...state,
        items: [...state.items, newItem],
      };
    case TOGGLE_COMPLETED:
      const toggleItems = state.items.map(item =>
        (item.id === action.itemId)
          ? {...item, completed: !item.completed}
          : item
      );  
      return {
        ...state,
        items: toggleItems 
      };
    default:
      return state;
  }
};

export default reducer;
