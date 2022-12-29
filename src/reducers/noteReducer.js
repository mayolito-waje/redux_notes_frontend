import { nanoid } from 'nanoid';

const initialState = [
  {
    content: 'reducer defines how redux store works',
    important: true,
    id: nanoid(),
  },
  {
    content: 'state of store can contain any data',
    important: false,
    id: nanoid()
  }
];

const noteReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'NEW_NOTE':
      return [...state, action.data];
    case 'TOGGLE_IMPORTANCE': {
      const id = action.data.id;
      const noteToChange = state.find(note => note.id === id);
      const changedNote = {
        ...noteToChange,
        important: !noteToChange.important,
      };
      return state.map(note =>
        note.id !== id ? note : changedNote
      );
    }
    default: 
      return state;
  }
};

export const createNote = (content) => {
  return {
    type: 'NEW_NOTE',
    data: {
      content,
      important: false,
      id: nanoid()
    }
  }
}

export const toggleImportanceOf = (id) => {
  return {
    type: 'TOGGLE_IMPORTANCE',
    data: { id }
  }
}

export default noteReducer;
