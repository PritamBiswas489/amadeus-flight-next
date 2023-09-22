import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   airports:[],
   airlines:[],
   onwardStops:[],
   returnStops:[],
   departureTimimgs:[],
   returnTimimgs:[],
   maxPrice:0,
   minPrice:0,
   maxDeparttureDuration: 0,
   minDeparttureDuration: 0,
   maxReturnDuration: 0,
   minReturnDuration: 0
};

const filterFieldSlice = createSlice({
    name: "filterfield",
    initialState: initialState,
    reducers: {
        setAirports(state, action){
            state.airports = action.payload.airports;
        },
        setAirlines(state, action){
            state.airlines = [...state.airlines,action.payload.value];
        },
        removeAirline(state, action){
            const data = state.airlines.filter(item => item !== action.payload.value);
            state.airlines = data;
        },
        setOnwardStops(state, action){
            state.onwardStops = [...state.onwardStops,action.payload.value];
        },
        removeOnwardStops(state, action){
            const data = state.onwardStops.filter(item => item !== action.payload.value);
            state.onwardStops = data;
        },
        setReturnStops(state, action){
            state.returnStops = [...state.returnStops,action.payload.value];
        },
        removeReturnStops(state, action){
            const data = state.returnStops.filter(item => item !== action.payload.value);
            state.returnStops = data;
        },


        setDepartureTimimgs(state, action){
            state.departureTimimgs = [...state.departureTimimgs,action.payload.value];
        },
        removeDepartureTimimgs(state, action){
            const data = state.departureTimimgs.filter(item => item !== action.payload.value);
            state.departureTimimgs = data;
        },


        setReturnTimimgs(state, action){
            state.returnTimimgs = [...state.returnTimimgs,action.payload.value];
        },
        removeReturnTimimgs(state, action){
            const data = state.returnTimimgs.filter(item => item !== action.payload.value);
            state.returnTimimgs = data;
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

    }
});
export const filterFieldActions = filterFieldSlice.actions;
export default filterFieldSlice;
