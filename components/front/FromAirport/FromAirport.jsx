import React,{useRef, useEffect} from 'react';
import style from "@/sections/front/HomeFlightSearch/index.module.scss";
import AirlineCodeList from "@/components/front/AirlineCodeList/AirlineCodeList";
import Image from "next/image";


import rtIcon from "@/assets/front/images/rtIcon.svg";
import oneWayIcon from "@/assets/front/images/oneway.svg";

import plain from "@/assets/front/images/plain.svg";

export default function FromAirport({
    setDefaultFromAirportList, 
    fromAirportData, 
    setFromAircodeShow,
    setfromAirportData,
    flightType,
    fromAircodeShow,
    defaultFromAirportList
}) {
    const fromAircodeRef = useRef(null);
    const listFromAircodeRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (fromAircodeRef.current && !fromAircodeRef.current.contains(event.target) && listFromAircodeRef.current && !listFromAircodeRef.current.contains(event.target)) {
                setFromAircodeShow(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);
  return (
    
                                            <div className={style.inputArea}>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <label>{fromAirportData.iataCode ? fromAirportData.iataCode : "From"}</label>
                                                    <span>
                                                        <Image src={plain} width={16} height={14} alt="" />
                                                    </span>
                                                    <span className={style.roundTripIcon}>
                                                        <Image src={flightType === "RETURN" ? rtIcon : oneWayIcon} width={36} height={36} alt="" />
                                                    </span>
                                                </div>
                                                <div className={style.inputBox}>
                                                    <input
                                                        onClick={() => {
                                                            setFromAircodeShow(true);
                                                        }}
                                                        type="text"
                                                        ref={fromAircodeRef}
                                                        placeholder={fromAirportData.name ? `${fromAirportData.name}, ${fromAirportData.address.cityName}` : "Select From"}
                                                        className={style.formInput}
                                                        readOnly={true}
                                                    />
                                                    {fromAircodeShow && (
                                                        <AirlineCodeList
                                                            hidePanel={() => setFromAircodeShow(false)}
                                                            updateDefaultList={(value) => setDefaultFromAirportList(value)}
                                                            defaultAirportList={defaultFromAirportList}
                                                            setSelectAirportData={(data) => setfromAirportData(data)}
                                                            placeholder="From"
                                                            ref={listFromAircodeRef}
                                                        ></AirlineCodeList>
                                                    )}
                                                </div>
                                            </div>
                                       
  )
}