import React from 'react';
import style from "@/sections/front/HomeFlightSearch/index.module.scss";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { formatDateWithLeadingZero } from '@/service/Helpers';
import { useSelector, useDispatch } from "react-redux";
import { searchFieldActions } from "@/store/redux/search-field-slice";


export default function Departure() {
    const dispatch = useDispatch();
    const value = useSelector((state)=>state['searchField'].departureDate);
    //console.log(value);
   
    const setValue = (departureDate)=> dispatch(searchFieldActions.setDepartureDate({departureDate:formatDateWithLeadingZero(departureDate)}));
    const today = new Date();
    today.setHours(0, 0, 0, 0);
  return (
    
                                            <div className={style.inputArea}>
                                                <div className="w-100">
                                                    <label>Departure</label>
                                                </div>
                                                <DatePicker clearIcon="" format="MM/dd/yyyy" minDate={today} onChange={setValue} value={value} />
                                                
                                            </div>
                                       
  )
}
