const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const STATUS = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
});

const Productslice = createSlice({

    name: 'product',
    initialState: {
        data: [],
        status: STATUS.IDLE,
    },
    reducers:{
        // we cannot do any asynchronous call from reducaers as they are pure functions , so they should not have any side effect.

        //we use thunk middle ware to get the data

        // setproducts( state , action ) {
        //     state.data = action.payload;
        // },

        // setStatus(state , action ){
        //     state.status = action.payload;
        // },
    },
        extraReducers: (builder) =>{
            builder
            .addCase(fetchproducts.pending , (state , action ) => {
               state.status = STATUS.LOADING; 
            })
            .addCase(fetchproducts.fulfilled , (state , action ) =>{
                state.data = action.payload;
                state.status = STATUS.IDLE;
            })
            .addCase(fetchproducts.rejected , (state , action ) => {
                state.status = STATUS.ERROR;
            })
        }

});

export const {setproducts , setStatus } = Productslice.actions; // exporting action
export default Productslice.reducer; // exporting reducer.
// previous we have to make reducers and actions seprately 
// action in redux we made like {type: 'add/cart ', payload: 1};


// thunk is a programming term that means a piece od code that does some delayed work, rather than execute some logic now , we can write body or code that can be usef to perform the work later
// means that if we want to do some asynchronous call from reducers then we have to it using thunk as we cant directly call some asynchronous function from our reducers as they are pure functions

// previous we have to register our thunk in our store but in this toolkit thunk is inbuilt and we don't need to configure it .

// in thunks from function we return a new fucntion and the inside fucntion should be async

// Normal thunks :- export fucntion fetchproducts(){ return async funciton fetchproductthunk(dispatch , getstate ) try {}  catch(err) {}}

// export function fetchproducts(){ 
//     return async function fetchproductthunk(dispatch , getstate) {
//         dispatch(setStatus(STATUS.LOADING));
        
//     try {
//         const res = await fetch('https://fakestoreapi.com/products');
//         const data = await res.json();
//         dispatch(setproducts(data));
//         dispatch(setStatus(STATUS.IDLE));
//     }  
//     catch(err) {
//         console.log(err);
//         dispatch(setStatus(STATUS.ERROR))
//     }
// }
// }

export const fetchproducts = createAsyncThunk('products/fetch' , async() => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data;
});