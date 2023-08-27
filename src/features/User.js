import {createSlice} from "@reduxjs/toolkit";
export const Userslice= createSlice({
    name:"User",
    initialState: {value:{email:"",nom:"", prenom:"",adress:""}},
    reducers:{
        login: (state, action)=>{
            state.value= action.payload;
        },
    },
});
export const { login } = Userslice.actions;
export default Userslice.reducer;