import React, { useState } from "react";
import Image from "next/image";

import plain from "@/assets/front/images/plain.svg";
import searchIcon from "@/assets/front/images/search-icon.svg";

import DatePicker from "react-date-picker";

import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

import style from "@/sections/front/InnerFlightSearch/index.module.scss";

import PassengerTypeList from "@/components/front/PassengerTypeList/PassengerTypeList";
import ClassTypeList from "@/components/front/ClassTypeList/ClassTypeList";

import Departure from "@/components/front/DateSelector/Departure";
import Return from "@/components/front/DateSelector/Return";

import FromAirport from "@/components/front/FromAirport/FromAirport";
import ToAirport from "@/components/front/ToAirport/ToAirport";

import { useSelector, useDispatch } from "react-redux";
import { searchFieldActions } from "@/store/redux/search-field-slice";

export default function InnerSingleCitySearchFieldsSearchFields({
  isInner,
  disablebtn,
  findFlightGoToSearch,
}) {
  const dispatch = useDispatch();
  const nonStop = useSelector((state) => state["searchField"].nonStop);
  const setNonStop = (nonStop) =>
    dispatch(searchFieldActions.setNonStop({ nonStop }));
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="row g-3">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <FromAirport />
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <ToAirport />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
              <Departure></Departure>
            </div>

            <Return />

            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
              <PassengerTypeList></PassengerTypeList>
            </div>
            <ClassTypeList></ClassTypeList>
          </div>
        </div>
      </div>
      <div className="row justify-content-between align-items-center mt-4">
        <div className="col d-flex align-items-center">
          <div className="checkbox custom">
            <label>
              <input
                type="checkbox"
                onChange={() => setNonStop(!nonStop)}
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
              <Image src={searchIcon} width={18} height={18} alt="" />
            </button>
          </div>
        </div>
        <div className="col-auto">
          <div>
            <button
              disabled={disablebtn}
              onClick={findFlightGoToSearch}
              className={style.findFlight}
            >
              find your flight
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
