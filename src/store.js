import { useReducer } from "react";
import { createContainer } from "react-tracked";

const initialState = {
    jokes: [
        {
            text: 'Select a category from below'
        }
    ],
    categories: []
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                jokes: [
                    ...state.jokes,
                    {
                        text: action.payload
                    }
                ]
            }
        case 'ADD_CATEGORY':
            return {
                ...state,
                categories: [...state.categories, ...action.payload]
            }
        default:
            return state;
    }
}

const useValue = () => useReducer(reducer, initialState);

export const {
  Provider,
  useTrackedState,
  useUpdate: useDispatch
} = createContainer(useValue);
