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
import FlightType from "@/components/front/FlightType/FlightType";
import Departure from "@/components/front/DateSelector/Departure";
import Return from "@/components/front/DateSelector/Return";

import FromAirport from "@/components/front/FromAirport/FromAirport";
import ToAirport from "@/components/front/ToAirport/ToAirport";

export default function InnerSearch({
  isInner,
  flightType,
  setflightType,
  defaultFromAirportList,
  setfromAirportData,
  setFromAircodeShow,
  setDefaultFromAirportList,
  fromAirportData,
  fromAircodeShow,
  defaultToAirportList,
  settoAirportData,
  settoAircodeShow,
  setDefaultToAirportList,
  toAirportData,
  toAircodeShow,
  depatureDate,
  setDepatureDate,
  returnDate,
  setReturnDate,
  setAdultValue,
  setChildrenValue,
  setInfantValue,
  adultValue,
  childrenValue,
  infantValue,
  classValue,
  setClassValue,
  disablebtn,
  findFlightGoToSearch,
  nonStop,
  setNonStop,
}) {
  const [value, onChange] = useState(new Date());
  const [valueTwo, onChangeTwo] = useState(new Date());
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={style.bookFlight}>
              <div className="row g-3">
                <div className="col-12">
                  <div className={style.radio}>
                    <FlightType
                      className={'justify-content-end'}
                      fromAircodeShow={fromAircodeShow}
                      flightType={flightType}
                      setType={(value) => setflightType(value)}
                    ></FlightType>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                  <FromAirport
                    defaultFromAirportList={defaultFromAirportList}
                    flightType={flightType}
                    setfromAirportData={(data) => setfromAirportData(data)}
                    setFromAircodeShow={(value) => setFromAircodeShow(value)}
                    setDefaultFromAirportList={(value) =>
                      setDefaultFromAirportList(value)
                    }
                    fromAirportData={fromAirportData}
                    fromAircodeShow={fromAircodeShow}
                  />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                  <ToAirport
                    defaultToAirportList={defaultToAirportList}
                    flightType={flightType}
                    settoAirportData={(value) => settoAirportData(value)}
                    settoAircodeShow={(value) => settoAircodeShow(value)}
                    setDefaultToAirportList={(value) =>
                      setDefaultToAirportList(value)
                    }
                    toAirportData={toAirportData}
                    toAircodeShow={toAircodeShow}
                  />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-4 col-4">
                  <Departure
                    value={depatureDate}
                    setValue={(value) => setDepatureDate(value)}
                  ></Departure>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-4 col-4">
                  <Return
                    depatureDate={depatureDate}
                    flightType={flightType}
                    value={returnDate}
                    setValue={(value) => setReturnDate(value)}
                  />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-4 col-4">
                  <PassengerTypeList
                    setPassAdult={setAdultValue}
                    setPassChild={setChildrenValue}
                    setPassInfant={setInfantValue}
                    adultValue={adultValue}
                    childrenValue={childrenValue}
                    infantValue={infantValue}
                  ></PassengerTypeList>
                </div>
              </div>
              <div className="row justify-content-between align-items-center mt-4">
                <div className="col d-flex align-items-center">
                  <div className="checkbox custom">
                    <label>
                      <input
                        type="checkbox"
                        onChange={setNonStop}
                        defaultChecked={nonStop}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
