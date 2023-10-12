import { configureStore } from "@reduxjs/toolkit";
import passengerDetailsSlice from "./redux/passenger-details-slice";
import searchFieldSlice from "./redux/search-field-slice";
import filterFieldSlice from "./redux/filter-field-slice";
import offerDataSlice from "./redux/offer-data-slice";
import filterOrdersSlice from "./redux/filter-orders-slice";
import multicitySearchFieldSlice from "./redux/multicity-search-field-slice";
import applyfilterFieldSlice from "./redux/apply-fliter-slice";
import graphDataSlice from "./redux/graph-data-slice";
 

const store = configureStore({
    reducer: { 
      passergerdetails: passengerDetailsSlice.reducer,
      searchField: searchFieldSlice.reducer, 
      filterField:filterFieldSlice.reducer,
      offerData:offerDataSlice.reducer,
      graphData:graphDataSlice.reducer,
      filterOrders:filterOrdersSlice.reducer,
      multicitySearch:multicitySearchFieldSlice.reducer,
      applyfilterField:applyfilterFieldSlice.reducer
    },
  });
  
export default store;
  