import React, { useEffect } from 'react';
import style from "@/sections/front/HomeFlightSearch/index.module.scss";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { formatDateWithLeadingZero } from '@/service/Helpers';

import { useSelector, useDispatch } from "react-redux";
import { searchFieldActions } from "@/store/redux/search-field-slice";


export default function Return() {
    const dispatch = useDispatch();
    const departureDate = useSelector((state)=>state['searchField'].departureDate);
    const flightType = useSelector((state)=>state['searchField'].flightType);
    const value = useSelector((state)=>state['searchField'].returnDate);
    const setValue = (returnDate)=> dispatch(searchFieldActions.setReturnDate({returnDate:formatDateWithLeadingZero(returnDate)}));
     let today = new Date();
    if(departureDate){
        today = new Date(departureDate);
    }
    useEffect(()=>{
        if(new Date(value) < new Date(departureDate)){
            setValue(today);
        }   
    },[today,departureDate,value,setValue])
    today.setHours(0, 0, 0, 0);
  return (
    <div
                    style={
                      flightType !== "RETURN"
                        ? { backgroundColor: "#f0f0f0" }
                        : {}
                    }
                    className="col-lg-3 col-md-3 col-sm-6 col-6"
                  >
    <div className={style.inputArea}>
        <div className="w-100">
            <label>Return</label>
        </div>
        <DatePicker clearIcon="" format="MM/dd/yyyy" disabled={flightType!=='RETURN' && true }  placeholder='MM/DD/YYYY' minDate={today} onChange={setValue} value={flightType!=='RETURN' ? ''  : value }
             />
             
    </div>
    </div>
 
  )
}
