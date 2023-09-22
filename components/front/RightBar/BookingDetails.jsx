import React from 'react';
import airAsia from "@/assets/front/images/air-asia.svg";
import style from "./index.module.scss";
import Image from "next/image";
import { convertToLocalDate, getWeekDayNameFromDate } from '@/service/Helpers';
export default function BookingDetails({itinerary}) {
  const {from_to_details} = itinerary;
  const airlineListRenderImage = [];
  const airLines = [];
  for (let i = 0; i < itinerary.segments.length; i++) {
    if(!airLines.includes(itinerary.segments[i].airline.iataCode)){
        airlineListRenderImage.push(<Image  src={itinerary.segments[i].airline.image} alt={itinerary.segments[i].airline.name} title={itinerary.segments[i].airline.name} placeholder="airAsia" width={20} height={20} />);
        airLines.push(itinerary.segments[i].airline.iataCode);
    }
  }

  return (
    <div className={style.yourOrderBox}>
    <div className={style.yourOrderInner}>
        <span className={style.airAsia}>
            {airlineListRenderImage}
        </span>
        <h6>Departure</h6>
        <ul>
            <li>{getWeekDayNameFromDate(from_to_details?.depDate)} {convertToLocalDate(from_to_details?.depDate)}</li>
             <li>
                <span>{from_to_details?.depTime?.hours}:{from_to_details?.depTime?.minutes} - {from_to_details?.arrTime?.hours}:{from_to_details?.arrTime?.minutes}</span> 
                {from_to_details.numberofdays > 0 && `+${from_to_details.numberofdays} day` }
                 &nbsp;({from_to_details?.totalduration?.hours}h{from_to_details?.totalduration?.minutes}min)
            </li>
           <li><b>{from_to_details?.fromLocation?.name}</b>  - <b>{from_to_details?.toLocation?.name}</b></li>
        </ul>
    </div>
</div>
  )
}
