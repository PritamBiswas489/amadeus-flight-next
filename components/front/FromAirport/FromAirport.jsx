import React,{useRef, useEffect} from 'react';
import style from "@/sections/front/HomeFlightSearch/index.module.scss";
import AirlineCodeList from "@/components/front/AirlineCodeList/AirlineCodeList";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { searchFieldActions } from "@/store/redux/search-field-slice";



import rtIcon from "@/assets/front/images/rtIcon.svg";
import oneWayIcon from "@/assets/front/images/oneway.svg";

import plain from "@/assets/front/images/plain.svg";

export default function FromAirport({
     
}) {
    const dispatch = useDispatch();
    const fromAirportData = useSelector((state)=>state['searchField'].fromAirportData);
    const flightType = useSelector((state)=>state['searchField'].flightType);
    const fromAircodeShow = useSelector((state)=>state['searchField'].fromAircodeShow);
    const defaultFromAirportList = useSelector((state)=>state['searchField'].defaultFromAirportList);
    const setDefaultFromAirportList = (defaultFromAirportList)=> dispatch(searchFieldActions.setDefaultFromAirportList({defaultFromAirportList}));
    const setFromAircodeShow = (fromAircodeShow)=> dispatch(searchFieldActions.setFromAircodeShow({fromAircodeShow}));
    const setfromAirportData = (fromAirportData)=> dispatch(searchFieldActions.setfromAirportData({fromAirportData}));
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
    }, [setFromAircodeShow]);
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
