import React from "react";
import style from "@/pages/flight/search/index.module.scss";
import Image from "next/image";
import airAsia from "@/assets/front/images/air-asia.svg";
import { useSelector } from "react-redux";
import {
    convertToLocalDate,
    removeDuplicateData,
  } from "@/service/Helpers";

export default function Itinerary({ data,cabinClass }) {

    const toAirportData =  useSelector((state)=>state['searchField'].toAirportData);
    const fromAirportData = useSelector((state)=>state['searchField'].fromAirportData);

  

  const { from_to_details, segments } = data;
  const {
    depDate,
    depTime,
    arrDate,
    arrTime,
    numberofdays,
    totalduration,
    fromLocation,
    toLocation

} = from_to_details;

let fromLocationText = '';
let toLocationText = '';

 
if(fromAirportData.iataCode === fromLocation.iataCode){
    fromLocationText = fromAirportData?.name+', '+fromAirportData?.address?.cityName;
}else if(toAirportData.iataCode === fromLocation.iataCode){
    fromLocationText = toAirportData?.name+', '+toAirportData?.address?.cityName;
}

if(fromAirportData.iataCode === toLocation.iataCode){
    toLocationText = fromAirportData?.name+', '+fromAirportData?.address?.cityName;
}else if(toAirportData.iataCode === toLocation.iataCode){
    toLocationText = toAirportData?.name+', '+toAirportData?.address?.cityName;
}

  const airlines = [];
  let numberOfDotOfStop = 0 ;
  let stopText = '' ;
  segments.forEach((segment)=>{
    airlines.push(segment.airline);
    if(segment.ar_city.iataCode!==toLocation.iataCode){
        numberOfDotOfStop++;
        stopText+= segment.ar_city.iataCode+", ";
    }
  });
  stopText = stopText.trim();
  if (stopText.endsWith(',')) {
    stopText = stopText.slice(0, -1);
  }
  const renderedItems = [];
  for (let i = 0; i < numberOfDotOfStop; i++) {
    renderedItems.push(<span></span>);
  }
  const airlineData = removeDuplicateData(airlines);
  let airlineListText = '';
  airlineData.forEach((airline,indexairline)=>{
      airlineListText += airline.name+'('+airline.aircraft+')'+','; 
    });
    if (airlineListText.endsWith(',')) {
    airlineListText =  airlineListText.slice(0, -1);
    }
    
  
  return (
    <div className={`row ${style.listBoxLeftInner}`}>
      <span className={style.classType}>{cabinClass}</span>
      <div className="col-lg-5 col-md-5 col-sm-5 col-12">
        <div className={style.depurture}>
          <span className={style.airlinesIcon}>
          {airlineData && airlineData.map((imageArr,imageIndex)=>{
                                                        return (<><Image key={imageIndex} alt="" src={imageArr.image} placeholder="flexibleDate" width={16} height={16} />  <br></br></>);

                                                      })}
          </span>
          <h6>{`${depTime.hours}h${depTime.minutes}m`}</h6>
          <p>
            <strong>({fromLocation.iataCode})</strong> {fromLocationText} {convertToLocalDate(depDate)}
          </p>
        </div>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-3 col-12">
      <div className={style.stopsBtm}>{`${totalduration.hours}h${totalduration.minutes}m` }</div>
        <div className={style.stops}>
          {renderedItems}
        </div>
        <div className={style.stopsBtm}>{numberOfDotOfStop === 0 ? `Non stop` : `${numberOfDotOfStop} stop via ${stopText}` }</div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-4 col-12">
        <div className={style.destination}>
          <h6>{`${arrTime.hours}h${arrTime.minutes}m`} { numberofdays > 0 && '+'+numberofdays+' days'}</h6>
          <p>
            <strong>({toLocation.iataCode})</strong> {toLocationText} {convertToLocalDate(arrDate)}
          </p>
        </div>
      </div>
      <div className="col-12">
        <div className={style.operatedBy}>
          <p>{airlineListText}</p>
        </div>
      </div>
    </div>
  );
}
