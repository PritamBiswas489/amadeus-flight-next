import React from "react";
import searchIcon from "@/assets/front/images/search-icon.svg";
import style from "@/sections/front/HomeFlightSearch/index.module.scss";
import Image from "next/image";

import PassengerTypeList from "@/components/front/PassengerTypeList/PassengerTypeList";
import ClassTypeList from "@/components/front/ClassTypeList/ClassTypeList";
import FlightType from "@/components/front/FlightType/FlightType";
import Departure from "@/components/front/DateSelector/Departure";
import Return from "@/components/front/DateSelector/Return";

import FromAirport from "@/components/front/FromAirport/FromAirport";
import ToAirport from "@/components/front/ToAirport/ToAirport";

export default function HomeSearch({
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
                    fromAircodeShow={fromAircodeShow}
                    flightType={flightType}
                    setType={(value) => setflightType(value)}
                  ></FlightType>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-8">
                <div className="row g-3">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
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

                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
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
                  <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <Departure
                      value={depatureDate}
                      setValue={(value) => setDepatureDate(value)}
                    ></Departure>
                  </div>
                  <div
                    style={
                      flightType !== "RETURN"
                        ? { backgroundColor: "#f0f0f0" }
                        : {}
                    }
                    className="col-lg-3 col-md-3 col-sm-6 col-6"
                  >
                    <Return
                      depatureDate={depatureDate}
                      flightType={flightType}
                      value={returnDate}
                      setValue={(value) => setReturnDate(value)}
                    />
                  </div>

                  <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <PassengerTypeList
                      setPassAdult={setAdultValue}
                      setPassChild={setChildrenValue}
                      setPassInfant={setInfantValue}
                      adultValue={adultValue}
                      childrenValue={childrenValue}
                      infantValue={infantValue}
                    ></PassengerTypeList>
                  </div>
                  <ClassTypeList
                    classValue={classValue}
                    setClass={(value) => setClassValue(value)}
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
                    <Image src={searchIcon} width={24} height={24} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
