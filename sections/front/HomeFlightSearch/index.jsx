import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { FaAngleDown } from "react-icons/fa";
import Link from "next/link";

import plain from "@/assets/front/images/plain.svg";
import searchIcon from "@/assets/front/images/search-icon.svg";
import rtIcon from "@/assets/front/images/rtIcon.svg";

import style from "./index.module.scss";
import AirlineCodeList from "@/components/front/AirlineCodeList/AirlineCodeList";
import PassengerTypeList from "@/components/front/PassengerTypeList/PassengerTypeList";
import ClassTypeList from "@/components/front/ClassTypeList/ClassTypeList";
import FlightType from "@/components/front/FlightType/FlightType";


const HomeFlightSearch = () => {
    const [value, onChange] = useState(new Date());
    const [valueTwo, onChangeTwo] = useState(new Date());
    const [fromAircodeShow,setFromAircodeShow]  = useState(false); 
    const [toAircodeShow,settoAircodeShow]  = useState(false); 
    const [classValue,setClassValue] = useState('ECONOMY');

    const [adultValue,setAdultValue] = useState(1);
    const [childrenValue,setChildrenValue] = useState(0);
    const [infantValue,setInfantValue] = useState(0);

    const [flightType, setflightType] = useState('RETURN');


    const fromAircodeRef = useRef(null);
    const toAircodeRef = useRef(null);
    const listFromAircodeRef = useRef(null);
    const listToAircodeRef = useRef(null);
    
    //from aircode 
    useEffect(() => {
                    const handleClickOutside = (event) => {
                         if ((fromAircodeRef.current 
                              && 
                              !fromAircodeRef.current.contains(event.target))  
                              &&
                              ( listFromAircodeRef.current &&
                               !listFromAircodeRef.current.contains(event.target))
                           ) {
                                setFromAircodeShow(false); 
                        }
                    };
                    document.addEventListener('click', handleClickOutside);
                    return () => {
                        document.removeEventListener('click', handleClickOutside);
                    };
      }, []);
      //to aircode
      useEffect(() => {
                const handleClickOutsideSecond = (event) => {
                    if ((toAircodeRef.current 
                        && 
                        !toAircodeRef.current.contains(event.target))
                        &&
                       ( listToAircodeRef.current &&
                        !listToAircodeRef.current.contains(event.target))
                       ) {
                        settoAircodeShow(false)
                    }  
                };
                document.addEventListener('click', handleClickOutsideSecond);
                return () => {
                        document.removeEventListener('click', handleClickOutsideSecond);
                };
      }, []);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className={style.bookFlight}>
                            <h4>Book Your Flight</h4>
                            <FlightType flightType={flightType} setType={(value)=>setflightType(value)}></FlightType>
                            <div className="row">
                                <div className="col-8">
                                    <div className="row g-3">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className={style.inputArea}>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <label>From</label>
                                                    <span>
                                                        <Image src={plain} width={16} height={14} alt="" />
                                                    </span>
                                                    <span className={style.roundTripIcon}>
                                                        <Image src={rtIcon} width={36} height={36} alt="" />
                                                    </span>
                                                </div>
                                                <div className={style.inputBox}>
                                                    <input onClick={()=>{
                                                        setFromAircodeShow(true);
                                                    }} type="text" ref={fromAircodeRef} placeholder="Select From" className={style.formInput} readOnly={true} />
                                                   {fromAircodeShow && <AirlineCodeList ref={listFromAircodeRef}></AirlineCodeList>}  
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className={style.inputArea}>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <label>To</label>
                                                    <span>
                                                        <Image src={plain} width={16} height={14} alt="" />
                                                    </span>
                                                </div>
                                                <div className={style.inputBox}>
                                                    <input onClick={()=>{
                                                        settoAircodeShow(true);
                                                    }} ref={toAircodeRef} type="text" placeholder="Select To" className={style.formInput} readOnly={true} />
                                                    {toAircodeShow && <AirlineCodeList ref={listToAircodeRef}></AirlineCodeList>}  
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                                            <div className={style.inputArea}>
                                                <div className="w-100">
                                                    <label>Departure</label>
                                                </div>
                                                <DatePicker onChange={onChange} value={value} />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                                            <div className={style.inputArea}>
                                                <div className="w-100">
                                                    <label>Return</label>
                                                </div>
                                                <DatePicker onChange={onChangeTwo} value={valueTwo} />
                                            </div>
                                        </div>
                                        <PassengerTypeList 
                                        setPassAdult={setAdultValue}
                                        setPassChild={setChildrenValue}
                                        setPassInfant={setInfantValue} 
                                        adultValue={adultValue} 
                                        childrenValue={childrenValue} 
                                        infantValue={infantValue}></PassengerTypeList>
                                         <ClassTypeList classValue={classValue} setClass={(value)=>setClassValue(value)}></ClassTypeList>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="mb-3">
                                        <button className={style.findFlight}>find your flight</button>
                                    </div>
                                    <div className="checkbox custom text-center mb-2">
                                        <label>
                                            <input type="checkbox" defaultChecked /> Non Stop FlightOnly
                                        </label>
                                    </div>
                                    <div className={style.bannSearch}>
                                        <input type="text" placeholder="Search prefer airlines " className={style["input-1"]} />
                                        <button type="button" className={style["srcButton"]}>
                                            <Image src={searchIcon} width={24} height={24} alt="" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeFlightSearch;
