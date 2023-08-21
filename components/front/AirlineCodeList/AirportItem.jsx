import React from "react";
import style from "@/sections/front/HomeFlightSearch/index.module.scss";
import Image from "next/image";
import plain2 from "@/assets/front/images/plain-3.svg";
export default function AirportItem({data,setAirportDetails}) {
    let addFieldtext = '';
    if(data.address.cityName){
        addFieldtext+=data.address.cityName+', ';
    }
    if(data.address.countryName){
        addFieldtext+=data.address.countryName+', ';
    }
    if(data.address.regionCode){
        addFieldtext+=data.address.regionCode+', ';
    }
    addFieldtext = addFieldtext.trimEnd();
    if (addFieldtext.endsWith(',')) {
            addFieldtext = addFieldtext.slice(0, -1); // Remove the last character
    }
  return (
    <div onClick={()=>setAirportDetails(data)}
      className={`d-flex align-items-center justify-content-between ${style.srcBox}`}
    >
      <div className={style.srcBoxLeft}>
        <Image src={plain2} width={26} height={26} alt="" />
      </div>
      <div className={style.srcBoxMid}>
        <h5>{data.name}</h5>
        <p>
        {addFieldtext} 
        </p>
      </div>
      <div className={style.srcBoxRight}>
        <h3>{data.iataCode}</h3>
      </div>
    </div>
  );
}
