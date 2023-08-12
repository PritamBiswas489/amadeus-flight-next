import React, { useEffect } from 'react';
import style from "@/sections/front/HomeFlightSearch/index.module.scss";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { formatDateWithLeadingZero } from '@/service/Helpers';

export default function Return({value, setValue, flightType, depatureDate}) {
    let today = new Date();
    if(depatureDate){
        today = depatureDate;
    }
    useEffect(()=>{
        if(new Date(value) < new Date(depatureDate)){
            setValue(today);
        }   
    },[today,depatureDate,value])
    today.setHours(0, 0, 0, 0);
  return (
    <div style={flightType!=='RETURN' ? {backgroundColor:'#f0f0f0'} : {} } className="col-lg-3 col-md-3 col-sm-6 col-6">
    <div className={style.inputArea}>
        <div className="w-100">
            <label>Return</label>
        </div>
        <DatePicker clearIcon="" format="MM/dd/yyyy" disabled={flightType!=='RETURN' && true }  placeholder='MM/DD/YYYY' minDate={today} onChange={setValue} value={flightType!=='RETURN' ? ''  : formatDateWithLeadingZero(value) }
             />
    </div>
</div>
  )
}
