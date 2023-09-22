import { configureStore } from "@reduxjs/toolkit";
import passengerDetailsSlice from "./redux/passenger-details-slice";
import searchFieldSlice from "./redux/search-field-slice";
import filterFieldSlice from "./redux/filter-field-slice";
import offerDataSlice from "./redux/offer-data-slice";
import filterOrdersSlice from "./redux/filter-orders-slice";
 

const store = configureStore({
    reducer: { 
      passergerdetails: passengerDetailsSlice.reducer,
      searchField: searchFieldSlice.reducer, 
      filterField:filterFieldSlice.reducer,
      offerData:offerDataSlice.reducer,
      filterOrders:filterOrdersSlice.reducer
    },
  });
  
export default store;
  