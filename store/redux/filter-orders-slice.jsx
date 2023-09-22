import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filterOffersIds:[],
    filterOffers:[],
};
const filterOrdersSlice = createSlice({
    name: "filterOrder",
    initialState: initialState,
    reducers: {
        setFilterOffersIds(state, action){
            state.filterOffersIds = action.payload.filterOffersIds;
        },
        setFilterOffers(state, action){
            state.filterOffers = action.payload.filterOffers;
        },
    }
});

export const filterOrdersAction = filterOrdersSlice.actions;
export default filterOrdersSlice;
 