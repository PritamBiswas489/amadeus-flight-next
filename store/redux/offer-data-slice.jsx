import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    offers:[],
    dictionaries:[],
    minPrice:0,
    maxPrice:0,
    maxDeparttureDuration: 0,
    minDeparttureDuration: 0,
    maxReturnDuration: 0,
    minReturnDuration: 0,
    cheapestOffer:{},
    bestOffer:{},
    quickestOffer:{}
};
const offerDataSlice = createSlice({
    name: "offerData",
    initialState: initialState,
    reducers: {
        setOffers(state, action){
            state.offers = action.payload.offers;
        },
        setDictionaries(state, action){
            state.dictionaries = action.payload.dictionaries;
        },
        setMinPrice(state, action){
            state.minPrice = action.payload.minPrice;
        },
        setMaxPrice(state, action){
            state.maxPrice = action.payload.maxPrice;
        },   
        setMaxDeparttureDuration(state, action){
            state.maxDeparttureDuration = action.payload.maxDeparttureDuration;
        }, 
        setMinDeparttureDuration(state, action){
            state.minDeparttureDuration = action.payload.minDeparttureDuration;
        }, 
        setMaxReturnDuration(state, action){
            state.maxReturnDuration = action.payload.maxReturnDuration;
        }, 
        setMinReturnDuration(state, action){
            state.minReturnDuration = action.payload.minReturnDuration;
        }, 


        setCheapestOffer(state, action){
            state.cheapestOffer = action.payload.cheapestOffer;
        }, 

        setBestOffer(state, action){
            state.bestOffer = action.payload.bestOffer;
        }, 

        setQuickestOffer(state, action){
            state.quickestOffer = action.payload.quickestOffer;
        }, 

    }
});

export const offerDataActions = offerDataSlice.actions;
export default offerDataSlice;
 