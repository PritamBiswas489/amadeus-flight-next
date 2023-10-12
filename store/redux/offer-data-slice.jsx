import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  offers: [],
  dictionaries: [],
  minPrice: 0,
  maxPrice: 0,
  itineraryDurationLimit: [],
  cheapestOffer: {},
  bestOffer: {},
  quickestOffer: {},
};
const offerDataSlice = createSlice({
  name: "offerData",
  initialState: initialState,
  reducers: {
    setOffers(state, action) {
      state.offers = action.payload.offers;
    },
    setDictionaries(state, action) {
      state.dictionaries = action.payload.dictionaries;
    },
    setMinPrice(state, action) {
      state.minPrice = action.payload.minPrice;
    },
    setMaxPrice(state, action) {
      state.maxPrice = action.payload.maxPrice;
    },

    setCheapestOffer(state, action) {
      state.cheapestOffer = action.payload.cheapestOffer;
    },

    setBestOffer(state, action) {
      state.bestOffer = action.payload.bestOffer;
    },

    setQuickestOffer(state, action) {
      state.quickestOffer = action.payload.quickestOffer;
    },
    setItineraryDurationLimit(state, action) {
      state.itineraryDurationLimit = action.payload.itineraryDurationLimit;
    },
  },
});

export const offerDataActions = offerDataSlice.actions;
export default offerDataSlice;
