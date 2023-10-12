import React, { useState } from "react";
import style from "@/pages/flight/search/index.module.scss";

import FilterTicketType from "../FilterPanel/FilterTicketType";
import FilterStops from "../FilterPanel/FilterStops";
import FilterAccordianFreeAssistant from "../FilterPanel/FilterAccordianFreeAssistant";
import FilterAccordianTimeOfFlight from "../FilterPanel/FilterAccordianTimeOfFlight";

import FilterAccordianAirports from "../FilterPanel/FilterAccordianAirports";
import FilterAccordianAirline from "../FilterPanel/FilterAccordianAirline";

import FilterAccordianDuration from "../FilterPanel/FilterAccordianDuration";
import FilterAccordianFlightQuality from "../FilterPanel/FilterAccordianFlightQuality";
import FilterAccordianPrice from "../FilterPanel/FilterAccordianPrice";
import FilterLayoverCity from "../FilterPanel/FilterLayoverCity";
import FilterArrivalAirport from "../FilterPanel/FilterArrivalAirport";
import FilterDepartureTime from "../FilterPanel/FilterDepartureTime";
import FilterArrivalTime from "../FilterPanel/FilterArrivalTime";
import { useSelector } from "react-redux";
import FilterAccordianOnwardStops from "../FilterPanel/FilterAccordianOnwardStops";
import FilterAccordianReturnStops from "../FilterPanel/FilterAccordianReturnStops";
import useFilterIdSet from "@/hooks/useFilterIdSet";
import FilterAccordianDepartureTiming from "../FilterPanel/FilterAccordianDepartureTiming";
import FilterAccordianReturnTiming from "../FilterPanel/FilterAccordianReturnTiming";
import FilterAccordianDurationDeparture from "../FilterPanel/FilterAccordianDurationDeparture";
import FilterAccordianDurationReturn from "../FilterPanel/FilterAccordianDurationReturn";

export default function LeftSearchPanel() {
  console.log("============ LeftSearchPanel ===============");
  const flightOffers = useSelector((state) => state["offerData"].offers);
  const { locations, carriers } = useSelector(
    (state) => state["offerData"].dictionaries
  );
  const nonStop = useSelector((state) => state["searchField"].nonStop);
  const setFilter = useFilterIdSet();

  const [enableFilter, setEnableFilter] = useState({
    enableFilterTicketType: false,
    enableFilterStops: false,
    enableFilterAccordianFreeAssistant: false,
    enableFilterAccordianTimeOfFlight: false,
    enableFilterAccordianAirports: true,
    enableFilterAccordianAirline: true,
    enableFilterAccordianDuration: false,
    enableFilterAccordianFlightQuality: false,
    enableFilterAccordianPrice: true,
    enableFilterLayoverCity: false,
    enableFilterArrivalAirport: false,
    enableFilterDepartureTime: false,
    enableFilterArrivalTime: false,
    enableFilterAccordianOnwardStops: true,
    enableFFilterAccordianReturnStops: true,
    enableFilterAccordianDepartureTiming: true,
    enableFilterAccordianReturnTiming: true,
    enableFilterAccordianDurationDeparture: true,
    enableFilterAccordianDurationReturn: true,
  });

  return (
    <div className={style.leftFilter}>
      <div className={style.leftFilterInner}>
        {enableFilter.enableFilterTicketType && <FilterTicketType />}
        {enableFilter.enableFilterStops && <FilterStops />}

        <div className={`leftFilterInnerBox`}>
          <div className="accordion" id="accordionPanelsStayOpenExample">
            {flightOffers[0]["itineraries"].map(
              (itineriesData, itineriesindex) => {
                return (
                  enableFilter.enableFilterAccordianOnwardStops &&
                  !nonStop && (
                    <FilterAccordianOnwardStops
                      key={itineriesindex}
                      itineriesindex={itineriesindex}
                      itineriesData={itineriesData}
                    />
                  )
                );
              }
            )}

            {/* {enableFilter.enableFFilterAccordianReturnStops && !nonStop && flightType ==='RETURN' && <FilterAccordianReturnStops/> } */}

            {flightOffers[0]["itineraries"].map(
              (itineriesData, itineriesindex) => {
                return (
                  enableFilter.enableFilterAccordianDepartureTiming && (
                    <FilterAccordianDepartureTiming
                      key={itineriesindex}
                      itineriesindex={itineriesindex}
                      itineriesData={itineriesData}
                    />
                  )
                );
              }
            )}

            {/* {enableFilter.enableFilterAccordianReturnTiming && flightType ==='RETURN' && <FilterAccordianReturnTiming/>} */}

            {enableFilter.enableFilterAccordianPrice && (
              <FilterAccordianPrice />
            )}

            {flightOffers[0]["itineraries"].map(
              (itineriesData, itineriesindex) => {
                //if(itineriesindex === 0){
                  return (
                    enableFilter.enableFilterAccordianDurationDeparture && (
                      <FilterAccordianDurationDeparture
                        key={itineriesindex}
                        itineriesindex={itineriesindex}
                        itineriesData={itineriesData}
                      />
                    )
                  );

               // }
                
              }
            )}

            

            {/* {enableFilter.enableFilterAccordianDurationReturn &&
              flightType === "RETURN" && <FilterAccordianDurationReturn />} */}
            {enableFilter.enableFilterAccordianTimeOfFlight && (
              <FilterAccordianTimeOfFlight />
            )}
            {enableFilter.enableFilterAccordianAirline && (
              <FilterAccordianAirline carriers={carriers} />
            )}
            {enableFilter.enableFilterAccordianAirports && (
              <FilterAccordianAirports locations={locations} />
            )}

            {enableFilter.enableFilterAccordianFreeAssistant && (
              <FilterAccordianFreeAssistant />
            )}
            {enableFilter.enableFilterAccordianDuration && (
              <FilterAccordianDuration />
            )}
            {enableFilter.enableFilterAccordianFlightQuality && (
              <FilterAccordianFlightQuality />
            )}
          </div>
        </div>
        {/* <div className={style.radioInnerWrap}>
                                    {enableFilter.enableFilterLayoverCity && <FilterLayoverCity/>}  
                                    {enableFilter.enableFilterArrivalAirport && <FilterArrivalAirport/>}  
                                       
                                    </div>
                                    {enableFilter.enableFilterDepartureTime && <FilterDepartureTime/>} 
                                    {enableFilter.enableFilterArrivalTime && <FilterArrivalTime/>}   */}
      </div>
    </div>
  );
}
