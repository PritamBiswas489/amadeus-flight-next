import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   airports:[],
   airlines:[],
   onwardStops:[],
   departureTimimgs:[],
   returnTimimgs:[],
   maxPrice:0,
   minPrice:0,
   maxDeparttureDuration: [],
   minDeparttureDuration: [],
   
    
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
            const d = [...state.onwardStops];
            if(!d?.[action.payload.index]){
                d[action.payload.index] = [];
            }
            if(!d[action.payload.index].includes(action.payload.value)){
                d[action.payload.index].push(action.payload.value);
            }
            state.onwardStops = d;
        },
        removeOnwardStops(state, action){
            const d = [...state.onwardStops];
            const c = d[action.payload.index].filter(item => item !== action.payload.value);
            if(c.length > 0){
                d[action.payload.index] = c;
            }else{
                console.log('delete');
                d.splice(action.payload.index, 1);
            }
            state.onwardStops = d;
        },
       


        setDepartureTimimgs(state, action){
            const d = [...state.departureTimimgs];
            if(!d?.[action.payload.index]){
                d[action.payload.index] = [];
            }
            if(!d[action.payload.index].includes(action.payload.value)){
                d[action.payload.index].push(action.payload.value);
            }
            state.departureTimimgs = d;
        },
        removeDepartureTimimgs(state, action){
            const d = [...state.departureTimimgs];
            const c = d[action.payload.index].filter(item => item !== action.payload.value);
            if(c.length > 0){
                d[action.payload.index] = c;
            }else{
                console.log('delete');
                d.splice(action.payload.index, 1);
            }
            state.departureTimimgs = d;
        },

 
        setMinPrice(state, action){
            state.minPrice = action.payload.minPrice;
        },
        setMaxPrice(state, action){
            state.maxPrice = action.payload.maxPrice;
        }, 
        setMaxDeparttureDuration(state, action){
            const d = [...state.maxDeparttureDuration];
            d[action.payload.index] = action.payload.maxDeparttureDuration; 
            console.log(action.payload.index);
            // console.log(d);
            state.maxDeparttureDuration = d;
        }, 
        setMinDeparttureDuration(state, action){
            const d = [...state.minDeparttureDuration];
            d[action.payload.index] = action.payload.minDeparttureDuration; 
            state.minDeparttureDuration = d;
        }, 
        reset(state, action){
            state.airports = [];
            state.airlines =[];
            state.onwardStops =[];
            state.departureTimimgs =[];
            state.returnTimimgs =[];
            state.maxPrice =0;
            state.minPrice= 0;
            state.maxDeparttureDuration= [];
            state.minDeparttureDuration= [];
            
      
          }
        

    }
});
export const filterFieldActions = filterFieldSlice.actions;
export default filterFieldSlice;
