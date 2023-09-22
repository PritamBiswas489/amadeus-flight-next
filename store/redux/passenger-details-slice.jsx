import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itinerary_id: 0,
  contact: { emailAddress: "", countryCallingCode: "", number: "" },
  travellers: [],
};

const passengerDetailsSlice = createSlice({
  name: "passengerdetails",
  initialState: initialState,
  reducers: {
    setItineraryId(state, action) { //set ItineraryId
        state.itinerary_id = action.payload.itineraryId;
    },
    setContact(state, action){ //set contact
        state.contact = action.payload.contact;
    },
    addTraveller(state,action){ //add traveller
        state.travellers = action.payload.travellers;
    }
  }
});

export const passengerDetailsActions = passengerDetailsSlice.actions;
export default passengerDetailsSlice;
