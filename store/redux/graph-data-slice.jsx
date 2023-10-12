import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    offers: [],
    currencyCode:'',
    minTotalPrice:0,
    maxTotalPrice:0,
};
const graphDataSlice = createSlice({
    name: "graphData",
    initialState: initialState,
    reducers: {
        setOffers(state, action) {
            state.offers = action.payload.offers;
        },
        setCurrencyCode(state, action) {
            state.currencyCode = action.payload.currencyCode;
        },
        setMinTotalPrice(state, action) {
            state.minTotalPrice = action.payload.minTotalPrice;
        },
        setMaxTotalPrice(state, action) {
            state.maxTotalPrice = action.payload.maxTotalPrice;
        },
    }
});

export const graphDataActions = graphDataSlice.actions;
export default graphDataSlice;