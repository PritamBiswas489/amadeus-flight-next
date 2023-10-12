import { createSlice } from "@reduxjs/toolkit";
import { formatDateWithLeadingZero } from "@/service/Helpers";

const initialState = {
  departureDate: formatDateWithLeadingZero(new Date()),
  returnDate: formatDateWithLeadingZero(new Date()),
  fromAirportData: {},
  toAirportData: {},
  classValue: "ECONOMY",
  adultValue: 1,
  childrenValue: 0,
  infantValue: 0,
  flightType: "ONEWAY",
  nonStop: false,
  country: "",
  city: "",
  countryTo: "",
  cityTo: "",
  defaultFromAirportList: [],
  defaultToAirportList: [],
  fromAircodeShow:false,
  toAircodeShow:false,
};

const searchFieldSlice = createSlice({
  name: "searchfield",
  initialState: initialState,
  reducers: {
    setDepartureDate(state, action) {
        
      state.departureDate = action.payload.departureDate;
    },
    setReturnDate(state, action) {
      state.returnDate = action.payload.returnDate;
    },
    setClassValue(state, action) {
      state.classValue = action.payload.classValue;
    },
    setAdultValue(state, action) {
      state.adultValue = action.payload.adultValue;
    },
    setChildrenValue(state, action) {
      state.childrenValue = action.payload.childrenValue;
    },
    setInfantValue(state, action) { state.infantValue = action.payload.infantValue; },
    setflightType(state, action) { state.flightType = action.payload.flightType; },
    setNonStop(state, action) {    state.nonStop = action.payload.nonStop; },
    setfromAirportData(state, action) {   state.fromAirportData = action.payload.fromAirportData; },
    settoAirportData(state, action) {  state.toAirportData = action.payload.toAirportData; },
    
    setDefaultCountry(state, action) { state.country = action.payload.country; },
    setDefaultCity(state, action) { state.city = action.payload.city; },
    setDefaultToCountry(state, action) { state.countryTo = action.payload.countryTo; },
    setDefaultToCity(state, action) { state.cityTo = action.payload.cityTo; },
    setDefaultFromAirportList(state, action) { state.defaultFromAirportList = action.payload.defaultFromAirportList; },
    setDefaultToAirportList(state, action) { state.defaultToAirportList = action.payload.defaultToAirportList; },
    setFromAircodeShow(state, action) { state.fromAircodeShow = action.payload.fromAircodeShow; },
    settoAircodeShow(state, action) { state.toAircodeShow = action.payload.toAircodeShow; },
  },
});

export const searchFieldActions = searchFieldSlice.actions;
export default searchFieldSlice;
