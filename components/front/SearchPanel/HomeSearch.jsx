import React from "react";

import style from "@/sections/front/HomeFlightSearch/index.module.scss";
import FlightType from "@/components/front/FlightType/FlightType";
import HomeSingleCitySearchFields from "./HomeSingleCitySearchFields";
import { useSelector } from "react-redux";
import HomeMultiCitySearchFields from "./HomeMultiCitySearchFields";


export default function HomeSearch({
  isInner,
  disablebtn,
  findFlightGoToSearch,
   
}) {
  const flightType = useSelector((state) => state["searchField"].flightType);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className={!isInner && style.bookFlight}>
            {!isInner && <h4>Book Your Flight</h4>}
            <div className="row g-3">
              <div className="col-12">
                <div className={style.radio}>
                  <FlightType
                    className={''}   
                  ></FlightType>
                </div>
              </div>
            </div>
            { (flightType==='RETURN' || flightType ==='ONEWAY') && <HomeSingleCitySearchFields isInner={false} disablebtn={disablebtn} findFlightGoToSearch={findFlightGoToSearch} />  }
            { (flightType==='MULTI_CITY') && <HomeMultiCitySearchFields/> }
          </div>
        </div>
      </div>
    </div>
  );
}
