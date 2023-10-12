import React from 'react';
import style from "@/sections/front/HomeFlightSearch/index.module.scss";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { formatDateWithLeadingZero } from '@/service/Helpers';
import { useSelector, useDispatch } from "react-redux";
import { multicitySearchFieldActions } from '@/store/redux/multicity-search-field-slice';

export default function DepartureDateTimeRangeDate({fieldCount}) {
  const dispatch = useDispatch();
  const departureDateState = useSelector((state)=>state['multicitySearch'].m_departureDate);
  const value =    departureDateState?.[fieldCount] || '';

  function setValue(departureDate){
    const dPrev = [...departureDateState];
    dPrev[fieldCount] = formatDateWithLeadingZero(departureDate);
    dispatch(multicitySearchFieldActions.setDepartureDate({departureDate:dPrev}));
  }
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
