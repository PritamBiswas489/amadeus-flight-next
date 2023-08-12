import React from 'react';
import style from "@/pages/flight/search/index.module.scss";
import Image from "next/image";
import airAsia from "@/assets/front/images/air-asia.svg";
import passenger from "@/assets/front/images/passenger.svg";
import bag3 from "@/assets/front/images/bag-3.svg";
import trolley from "@/assets/front/images/trolley.svg";
import handBag from "@/assets/front/images/hand-bag.svg";
import check from "@/assets/front/images/check.svg";
import fxt from "@/assets/front/images/fxt.svg";
import addBanner from "@/assets/front/images/add-banner.jpg";
import Link from "next/link";
import { getCurrencySymbol, convertToLocalDate, removeDuplicateData } from '@/service/Helpers';

 
export default function OneWayItem({flightOffer}) {
  const { orginalTiming, currency, totalPrice, airport, baggage, cabinClass, airline } = flightOffer;
  //get first and last airport of the journey
  const firstAirportSlot = airport[0];
  const lastAirportSlot = airport[airport.length - 1];

  const airlineImageArray = removeDuplicateData(airline);

  let stopText = '';
  let numberOfDotOfStop = 0;
  if(airport.length === 1){
    stopText= 'Non stop';
  }
  if(airport.length > 1){
     for(let i = 0; i<airport.length -1; i++){
        let  cityName = airport[i]?.arrival?.location?.city;
        if(typeof cityName === 'undefined'){
            cityName = airport[i]?.arrival?.name;
        }
        stopText+= cityName+", ";

       numberOfDotOfStop++;
     }    
  }
  stopText = stopText.trim();
  if (stopText.endsWith(',')) {
    stopText = stopText.slice(0, -1);
  }

  const renderedItems = [];
  
  for (let i = 0; i < numberOfDotOfStop; i++) {
    renderedItems.push(<span></span>);
  }
   
  return (
    <div className={`d-flex flex-wrap ${style.listBox}`}>
                                    <div className={style.listBoxLeft}>
                                        <div className={`row ${style.listBoxLeftInner}`}>
                                            <span className={style.classType}>{cabinClass}</span>
                                            <div className="col-lg-5 col-md-5 col-sm-5 col-12">
                                                <div className={style.depurture}>
                                                    <span className={style.airlinesIcon}>
                                                      {airlineImageArray && airlineImageArray.map((imageArr)=>{
                                                        return (<><Image alt="" src={imageArr.image} placeholder="flexibleDate" width={16} height={16} />  <br></br></>);

                                                      })}
                                                        
                                                        
                                                    </span>
                                                    <h6>{`${orginalTiming?.depTime?.hours}h${orginalTiming?.depTime?.minutes}m`}</h6>
                                                    <p>
                                                        <strong>({firstAirportSlot?.departure?.iataCode})</strong>&nbsp;{firstAirportSlot?.departure?.name}  <strong>{convertToLocalDate(orginalTiming?.depDate)}</strong>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                                                <div className={style.stops}>
                                                    {renderedItems}
                                                </div>
                                               {numberOfDotOfStop > 0 ? <div className={style.stopsBtm}>{numberOfDotOfStop} stop via {stopText}</div> : <div className={style.stopsBtm}>{stopText}</div> } 
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                                                <div className={style.destination}>
                                                    <h6>{`${orginalTiming?.arrTime?.hours}h${orginalTiming?.arrTime?.minutes}m`}</h6>
                                                    <p>
                                                        <strong>({lastAirportSlot?.arrival?.iataCode})</strong>&nbsp;{lastAirportSlot?.arrival?.name} <strong>{convertToLocalDate(orginalTiming?.arrDate)}</strong>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className={style.operatedBy}>
                                                    {/* <p>Etihad Airways, operated by Air Asia</p> */}
                                                </div>
                                            </div>
                                        </div>
                                         
                                        <div className={style.selfTransfer}>
                                            <p>
                                                <Image alt="" src={passenger} placeholder="passenger" width={14} height={13} />
                                                Self-transfer <Link href={"#"}>Read More</Link>
                                            </p>
                                        </div>
                                    </div>
                                    <div className={style.listBoxRight}>
                                        <div className={style.listBoxRightInner}>
                                            <div className={style.listBoxRightInnerTop}>
                                                <ul className="d-flex justify-content-end">
                                                    <li>
                                                        <Image alt="" src={handBag} placeholder="passenger" width={17} height={16} />
                                                    </li>
                                                    <li>
                                                        <Image alt="" src={trolley} placeholder="passenger" width={12} height={20} />
                                                    </li>
                                                    <li>
                                                        <Image alt="" src={bag3} placeholder="passenger" width={14} height={20} />
                                                    </li>
                                                </ul>
                                                <p>Baggage Included: 1 x {baggage}kg</p>
                                            </div>
                                            <div className={style.bookBox}>
                                                <div className="row g-2">
                                                    <div className={`col-6 ${style.bookBoxLeft}`}>
                                                        <p>
                                                            <Image alt="" src={check} placeholder="passenger" width={20} height={20} /> Standard Ticket
                                                        </p>
                                                    </div>
                                                    <div className={`col-6 ${style.bookBoxRight}`}>
                                                        <h4>{getCurrencySymbol( currency)} { totalPrice}</h4>
                                                        <p>
                                                            {/* Price per Adult */}
                                                            {/* <span data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                                                                <Image alt="" src={information} placeholder="passenger" width={10} height={10} />
                                                            </span> */}
                                                        </p>
                                                        <Link href={"#"}>Book</Link>
                                                    </div>
                                                </div>
                                            </div>
                                             
                                        </div>
                                    </div>
                                </div>
  )
}
