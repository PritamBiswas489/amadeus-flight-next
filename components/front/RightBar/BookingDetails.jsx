import React from 'react';
import airAsia from "@/assets/front/images/air-asia.svg";
import style from "./index.module.scss";
import Image from "next/image";
import { convertToLocalDate, getWeekDayNameFromDate } from '@/service/Helpers';
export default function BookingDetails({airportdet,airlinedet,timingdet}) {
    console.log("============= timingdet ==============================//");
    console.log(airlinedet);
  return (
    <div className={style.yourOrderBox}>
    <div className={style.yourOrderInner}>
        <span className={style.airAsia}>
            <Image  src={airlinedet.image} alt={airlinedet.commonName} title={airlinedet.commonName} placeholder="airAsia" width={20} height={20} />
        </span>
        <h6>Departure</h6>
        <ul>
            <li>{getWeekDayNameFromDate(timingdet?.dep_date)} {convertToLocalDate(timingdet?.dep_date)}</li>
            <li>
                <span>{timingdet?.dep_time?.hours}:{timingdet?.dep_time?.minutes} - {timingdet?.ar_time?.hours}:{timingdet?.ar_time?.minutes}</span> 
                {timingdet.num_days > 0 && `+${timingdet.num_days} day` }
                 &nbsp;({timingdet?.total_duration?.hours}h{timingdet?.total_duration?.minutes}min)
            </li>
            <li><b>{airportdet?.departure?.iataCode}</b> {airportdet?.departure?.location?.city} - <b>{airportdet?.arrival?.iataCode}</b> {airportdet?.arrival?.location?.city}</li>
        </ul>
    </div>
</div>
  )
}
