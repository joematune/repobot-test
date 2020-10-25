import { useReducer } from 'react'
import { createContainer } from 'react-tracked'

type Joke = {
    text: string
}

type State = {
    jokes: Joke[],
    categories: string[]
}

type Action = 
  | { type: 'ADD_JOKE'; payload: string }
  | { type: 'ADD_CATEGORY'; payload: string[] }

const initialState: State = {
    jokes: [
        {
            text: 'Select a category from below'
        }
    ],
    categories: []
}

const reducer = (state: State, action: Action) => {
    switch(action.type) {
        case 'ADD_JOKE':
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
