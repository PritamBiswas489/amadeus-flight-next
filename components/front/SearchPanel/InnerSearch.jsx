import React, { useState } from "react";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import style from "@/sections/front/InnerFlightSearch/index.module.scss"; 
import FlightType from "@/components/front/FlightType/FlightType";
import { useSelector } from "react-redux";
import InnerSingleCitySearchFieldsSearchFields from "./InnerSingleCitySearchFieldsSearchFields";
import HomeMultiCitySearchFields from "./HomeMultiCitySearchFields";
export default function InnerSearch({
  isInner,
  disablebtn,
  findFlightGoToSearch,
}) {
  //console.log("============ InnerSearch ===============");
  const flightType = useSelector((state) => state["searchField"].flightType);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={style.bookFlight}>
              <div className="row g-3">
                <div className="col-12">
                  <div className={style.radio}>
                    <FlightType className={"justify-content-end"}></FlightType>
                  </div>
                </div>
              </div>
              
              { (flightType==='RETURN' || flightType ==='ONEWAY') && <InnerSingleCitySearchFieldsSearchFields isInner={isInner} disablebtn={disablebtn} findFlightGoToSearch={findFlightGoToSearch} />  }
              { (flightType==='MULTI_CITY') && <HomeMultiCitySearchFields isInner={true} disablebtn={disablebtn} /> }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
