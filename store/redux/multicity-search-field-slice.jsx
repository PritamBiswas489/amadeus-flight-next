import { createSlice } from "@reduxjs/toolkit";
import { formatDateWithLeadingZero } from "@/service/Helpers";
const initialState = {
  numberOfField: 1,
  m_fromAirportData: [],
  m_toAirportData: [],
  m_departureDate: [formatDateWithLeadingZero(new Date())],
  fromAircodeShow: [],
  toAircodeShow: [],
  classValue: "ECONOMY",
  adultValue: 1,
  childrenValue: 0,
  infantValue: 0,
  flightType: "MULTI_CITY",
  nonStop: false,
};

const multicitySearchFieldSlice = createSlice({
  name: "multicitySearchField",
  initialState: initialState,
  reducers: {
    setNumberOfField(state, action) {
      state.numberOfField = action.payload.numberOfField;
    },
    setFromAircodeShow(state, action) {
      state.fromAircodeShow = action.payload.fromAircodeShow;
    },
    settoAircodeShow(state, action) {
      state.toAircodeShow = action.payload.toAircodeShow;
    },
    setfromAirportData(state, action) {
      state.m_fromAirportData = action.payload.fromAirportData;
    },
    settoAirportData(state, action) {
      state.m_toAirportData = action.payload.toAirportData;
    },
    setDepartureDate(state, action) {
      state.m_departureDate = action.payload.departureDate;
    },
    setAdultValue(state, action) {
      state.adultValue = action.payload.adultValue;
    },
    setChildrenValue(state, action) {
      state.childrenValue = action.payload.childrenValue;
    },
    setInfantValue(state, action) {
      state.infantValue = action.payload.infantValue;
    },
    setClassValue(state, action) {
      state.classValue = action.payload.classValue;
    },
    setNonStop(state, action) {    state.nonStop = action.payload.nonStop; },
    setMulticitySearchData(state, action){
      return {...state,...action.payload};
       
       
    }
   
  },
});
export const multicitySearchFieldActions = multicitySearchFieldSlice.actions;
export default multicitySearchFieldSlice;
