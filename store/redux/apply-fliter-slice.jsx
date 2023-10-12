import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    applyFilter:false, 
 };
 const applyfilterFieldSlice = createSlice({
    name: "applyFilter",
    initialState: initialState,
    reducers: {
        setApplyFilter(state, action){
            state.applyFilter = action.payload.applyFilter;
        },
    }

 });
 export const applyfilterFieldActions = applyfilterFieldSlice.actions;
export default applyfilterFieldSlice;