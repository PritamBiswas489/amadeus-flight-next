import React from 'react';
import searchIcon from "@/assets/front/images/search-icon.svg";
import style from "@/sections/front/HomeFlightSearch/index.module.scss";
import Image from "next/image";

import PassengerTypeList from "@/components/front/PassengerTypeList/PassengerTypeList";
import ClassTypeList from "@/components/front/ClassTypeList/ClassTypeList";
import Departure from "@/components/front/DateSelector/Departure";
import Return from "@/components/front/DateSelector/Return";

import FromAirport from "@/components/front/FromAirport/FromAirport";
import ToAirport from "@/components/front/ToAirport/ToAirport";
import { useSelector, useDispatch } from "react-redux";
import { searchFieldActions } from "@/store/redux/search-field-slice";

export default function HomeSingleCitySearchFields({isInner,disablebtn,findFlightGoToSearch}) {
    const dispatch = useDispatch();
    const nonStop = useSelector((state)=>state['searchField'].nonStop);
    const setNonStop = (nonStop)=> dispatch(searchFieldActions.setNonStop({nonStop}));
  
  return (
    <div className="row">
    <div className="col-8">
      <div className="row g-3">
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <FromAirport/>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <ToAirport/>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6 col-6">
          <Departure
            
          ></Departure>
        </div>
        
          <Return
            
          />
        

        <div className="col-lg-3 col-md-3 col-sm-6 col-6">
          <PassengerTypeList
          ></PassengerTypeList>
        </div>
        <ClassTypeList
           
        ></ClassTypeList>
      </div>
    </div>
    <div className="col-4">
      <div className="mb-3">
        <button
          disabled={disablebtn}
          onClick={findFlightGoToSearch}
          className={
            !isInner ? style.findFlight : style.findFlightInner
          }
        >
          find your flight
        </button>
      </div>
      <div className="checkbox custom text-center mb-2">
        <label>
          <input
            type="checkbox"
            onChange={()=>setNonStop(!nonStop)}
            // defaultChecked={nonStop}
            checked={nonStop}
          />{" "}
          Non Stop FlightOnly
        </label>
      </div>
      <div className={style.bannSearch}>
        <input
          type="text"
          placeholder="Search prefer airlines "
          className={style["input-1"]}
        />
        <button type="button" className={style["srcButton"]}>
          <Image src={searchIcon} width={24} height={24} alt="" />
        </button>
      </div>
    </div>
  </div>
  )
}
