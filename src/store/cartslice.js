const { createSlice } = require("@reduxjs/toolkit");


// reducers are pure function means they donot change the outside data and these donot have any side effects.

// reduces mutate the state

const initialState = [];
const cartSlice = createSlice({

    name: 'cart',
    initialState,
    reducers:{
        add( state , action ) {
            // redux says that we should not mutate out state directly
            // but in redux toolkit we can mutate our state directly.
             // in redux we create new state and then we assign that to our initial state. but in redux-toolkit we can update our state.
             // previously we do somehting like return [...state , action.payload];
             // this is the principle of redux

             // very important ===========
             // in redux tool kit we have a function called createslice, this method have feature that we can mutate our state directly. inside this createslice function all the things like that of redux happens
             //internally createslice do the same work return [...state , action.payload];

            state.push(action.payload);
        },
        remove(state , action ) {
            return state.filter(item => item.id !== action.payload);
        },
    }
});

export const {add , remove } = cartSlice.actions; // exporting action
export default cartSlice.reducer; // exporting reducer.
// previous we have to make reducers and actions seprately 
// action in redux we made like {type: 'add/cart ', payload: 1};

