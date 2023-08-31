import React from 'react';
import style from "@/sections/front/HomeFlightSearch/index.module.scss";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { formatDateWithLeadingZero } from '@/service/Helpers';

export default function Departure({value, setValue}) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
  return (
    
                                            <div className={style.inputArea}>
                                                <div className="w-100">
                                                    <label>Departure</label>
                                                </div>
                                                <DatePicker clearIcon="" format="MM/dd/yyyy" minDate={today} onChange={setValue} value={formatDateWithLeadingZero(value)} />
                                            </div>
                                       
  )
}
