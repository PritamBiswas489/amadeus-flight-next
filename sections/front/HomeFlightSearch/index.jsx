import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import plain from "@/assets/front/images/plain.svg";
import searchIcon from "@/assets/front/images/search-icon.svg";
import rtIcon from "@/assets/front/images/rtIcon.svg";
import oneWayIcon from "@/assets/front/images/oneway.svg";

import style from "./index.module.scss";
import AirlineCodeList from "@/components/front/AirlineCodeList/AirlineCodeList";
import PassengerTypeList from "@/components/front/PassengerTypeList/PassengerTypeList";
import ClassTypeList from "@/components/front/ClassTypeList/ClassTypeList";
import FlightType from "@/components/front/FlightType/FlightType";
import Departure from "@/components/front/DateSelector/Departure";
import Return from "@/components/front/DateSelector/Return";

import useGeolocation from "@/hooks/useGeolocation";
import useFetch from "@/hooks/useFetch";
import useGlobalCookies from "@/hooks/useGlobalCookies";
import { useSnackbar } from "notistack";
import { apiDateFormat, objectToQueryString, formatDateWithLeadingZero, isValidDate } from "@/service/Helpers";

const HomeFlightSearch = ({ isInner, execute, exceuteSearch, querySearchField = {}, disablebtn }) => {
    const { enqueueSnackbar } = useSnackbar();
    const router = useRouter();
    const currentRoute = router.pathname;
    let defaultFromValue = "";
    if (currentRoute !== "/flight/search") {
        defaultFromValue = "New york";
    }
    let defaultToValue = "";
    if (currentRoute !== "/flight/search") {
        defaultToValue = "London";
    }

    const [depatureDate, setDepatureDate] = useState(new Date());
    const [returnDate, setReturnDate] = useState(new Date());
    const [fromAircodeShow, setFromAircodeShow] = useState(false);
    const [toAircodeShow, settoAircodeShow] = useState(false);
    const [classValue, setClassValue] = useState("ECONOMY");

    const [adultValue, setAdultValue] = useState(1);
    const [childrenValue, setChildrenValue] = useState(0);
    const [infantValue, setInfantValue] = useState(0);

    const [flightType, setflightType] = useState("ONEWAY");
    const [nonStop, setNonStop] = useState(true);

    const { cookies, setGlobalCookie, removeGlobalCookie } = useGlobalCookies();

    const [fromAirportData, setfromAirportData] = useState({});
    const [toAirportData, settoAirportData] = useState({});

    const [country, setDefaultCountry] = useState("");
    const [city, setDefaultCity] = useState(cookies.cityFrom && currentRoute !== "/flight/search" ? cookies.cityFrom : defaultFromValue);

    const [countryTo, setDefaultToCountry] = useState("");
    const [cityTo, setDefaultToCity] = useState(cookies.cityTo && currentRoute !== "/flight/search" ? cookies.cityTo : defaultToValue);

    const [defaultFromAirportList, setDefaultFromAirportList] = useState([]);
    const [defaultToAirportList, setDefaultToAirportList] = useState([]);

    const fromAircodeRef = useRef(null);
    const toAircodeRef = useRef(null);
    const listFromAircodeRef = useRef(null);
    const listToAircodeRef = useRef(null);

    useEffect(() => {
        //enqueueSnackbar('Successfully logged in');
        //enqueueSnackbar('Successfully logged in', {variant:'error'} );
    });

    function findFlightGoToSearch() {
        if (fromAirportData.iataCode === "") {
            enqueueSnackbar("Select departure airport", { variant: "error" });
        } else if (toAirportData.iataCode === "") {
            enqueueSnackbar("Select arrival airport", { variant: "error" });
        } else if (depatureDate === "" || depatureDate === null) {
            enqueueSnackbar("Select departure date", { variant: "error" });
        } else if (flightType === "RETURN" && (returnDate === "" || returnDate === null)) {
            enqueueSnackbar("Select return date", { variant: "error" });
        } else {
            let itinerary = `${fromAirportData.iataCode}-${toAirportData.iataCode}-${formatDateWithLeadingZero(depatureDate)}`;
            if (flightType === "RETURN") {
                itinerary += `-${formatDateWithLeadingZero(returnDate)}`;
            }
            let tripType = "O";
            if (flightType === "RETURN") {
                tripType = "R";
            } else if (flightType === "MULTI_CITY") {
                tripType = "M";
            }
            let cabinClass = "";
            if (classValue === "ECONOMY") {
                cabinClass = "E";
            }
            if (classValue === "PREMIUM_ECONOMY") {
                cabinClass = "P";
            }
            if (classValue === "BUSINESS") {
                cabinClass = "B";
            }
            if (classValue === "FIRST") {
                cabinClass = "F";
            }
            const paxType = `A-${parseInt(adultValue)}_C-${parseInt(childrenValue)}_I-${parseInt(infantValue)}`;
            const ns = nonStop;
            const queryParameters = {
                itinerary,
                tripType,
                cabinClass,
                paxType,
                ns: nonStop == true ? 1 : 0,
            };

            const destinationRoute = "/flight/search";
            const queryString = new URLSearchParams(queryParameters).toString();
            const finalRoute = `${destinationRoute}?${queryString}`;
            router.push(finalRoute);
        }
    }

    useEffect(() => {
        let apiQueryObject = {};
        if (typeof querySearchField.departureDate !== "undefined" && querySearchField.departureDate !== "" && querySearchField.departureDate !== null) {
            setDepatureDate(new Date(querySearchField.departureDate));
            apiQueryObject.departureDate = apiDateFormat(new Date(querySearchField.departureDate));
        }
        if (typeof querySearchField.tripType !== "undefined" && querySearchField.tripType === "RETURN") {
            if (typeof querySearchField.arrivalDate !== "undefined" && querySearchField.arrivalDate !== "" && querySearchField.arrivalDate !== null) {
                setReturnDate(new Date(querySearchField.arrivalDate));
                apiQueryObject.returnDate = apiDateFormat(new Date(querySearchField.arrivalDate));
            }
        }
        if (typeof querySearchField.tripType !== "undefined") {
            setflightType(querySearchField.tripType);
        }
        if (typeof querySearchField.cabinClass !== "undefined") {
            setClassValue(querySearchField.cabinClass);
            apiQueryObject.travelClass = querySearchField.cabinClass;
        }

        if (typeof querySearchField.adult !== "undefined") {
            setAdultValue(querySearchField.adult);
            apiQueryObject.adults = querySearchField.adult;
        }
        if (typeof querySearchField.child !== "undefined") {
            setChildrenValue(querySearchField.child);
            apiQueryObject.children = querySearchField.child;
        }
        if (typeof querySearchField.infant !== "undefined") {
            setInfantValue(querySearchField.infant);
            apiQueryObject.infants = querySearchField.infant;
        }
        if (typeof querySearchField.nonstopflight !== "undefined") {
            setNonStop(querySearchField.nonstopflight);
            apiQueryObject.nonStop = querySearchField.nonstopflight;
        }
        if (typeof querySearchField.fromAirportObject !== "undefined") {
            setfromAirportData(querySearchField.fromAirportObject);
            apiQueryObject.originLocationCode = querySearchField?.fromAirportObject?.iataCode;
        }
        if (typeof querySearchField.toAirportObject !== "undefined") {
            settoAirportData(querySearchField.toAirportObject);
            apiQueryObject.destinationLocationCode = querySearchField?.toAirportObject?.iataCode;
        }
        if (parseInt(execute) === 1) {
            if (typeof exceuteSearch === "function") {
                exceuteSearch(apiQueryObject);
            }
        }
    }, [querySearchField]);

    const { geoLoading, geoError, geoLocationData } = useGeolocation(cookies.cityFrom || currentRoute !== "/" ? { trigger: false } : { trigger: true });

    useEffect(() => {
        if (typeof geoLocationData.latitude !== "undefined") {
            const apiKey = "AIzaSyCBeYhfznD1X2nWYFXFpH6B4eJ9hGrr9_g";
            const lat = geoLocationData.latitude; // Example latitude
            const lng = geoLocationData.longitude; // Example longitude
            const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`;
            fetch(apiUrl)
                .then((response) => response.json())
                .then((data) => {
                    if (data.status === "OK") {
                        const results = data.results;
                        if (results.length > 0) {
                            const addressComponents = results[0].address_components;
                            let country = "";
                            let city = "";
                            for (const component of addressComponents) {
                                if (component.types.includes("country")) {
                                    country = component.long_name;
                                }
                                if (component.types.includes("locality")) {
                                    city = component.long_name;
                                }
                            }
                            setDefaultCountry(country);
                            setDefaultCity(city);
                            if (city != "") {
                                setGlobalCookie("cityFrom", city, { maxAge: 360000 });
                            }
                        } else {
                            console.log("No results found.");
                        }
                    } else {
                        console.log("Geocoding API request failed.");
                    }
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        }
    }, [geoLocationData]);

    const { data: responseCityData, fetchData: cityFetch } = useFetch();

    useEffect(() => {
        if (city != "") {
            cityFetch(`${process.env.NEXT_PUBLIC_APP_HOST_API}flight/airport/city/search?keyword=${city}`, { method: "GET" });
        }
    }, [city]);

    const { data: responseToCityData, fetchData: cityToFetch } = useFetch();

    useEffect(() => {
        if (cityTo != "") {
            cityToFetch(`${process.env.NEXT_PUBLIC_APP_HOST_API}flight/airport/city/search?keyword=${cityTo}`, { method: "GET" });
        }
    }, [cityTo]);

    useEffect(() => {
        if (responseCityData) {
            if (responseCityData.response) {
                setDefaultFromAirportList(responseCityData);

                if (typeof responseCityData.response !== "undefined" && typeof responseCityData.response[0] !== "undefined") {
                    setfromAirportData(responseCityData.response[0]);
                }
            }
        }
    }, [responseCityData]);

    useEffect(() => {
        if (responseToCityData) {
            if (responseToCityData.response) {
                setDefaultToAirportList(responseToCityData);
                if (typeof responseToCityData.response !== "undefined" && typeof responseToCityData.response[0] !== "undefined") {
                    settoAirportData(responseToCityData.response[0]);
                }
            }
        }
    }, [responseToCityData]);

    //from aircode
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
    //to aircode
    useEffect(() => {
        const handleClickOutsideSecond = (event) => {
            if (toAircodeRef.current && !toAircodeRef.current.contains(event.target) && listToAircodeRef.current && !listToAircodeRef.current.contains(event.target)) {
                settoAircodeShow(false);
            }
        };
        document.addEventListener("click", handleClickOutsideSecond);
        return () => {
            document.removeEventListener("click", handleClickOutsideSecond);
        };
    }, []);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className={!isInner && style.bookFlight}>
                            {!isInner && <h4>Book Your Flight</h4>}
                            <FlightType flightType={flightType} setType={(value) => setflightType(value)}></FlightType>
                            <div className="row">
                                <div className="col-8">
                                    <div className="row g-3">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
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
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className={style.inputArea}>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <label>{toAirportData.iataCode ? toAirportData.iataCode : "To"}</label>
                                                    <span>
                                                        <Image src={plain} width={16} height={14} alt="" />
                                                    </span>
                                                </div>
                                                <div className={style.inputBox}>
                                                    <input
                                                        onClick={() => {
                                                            settoAircodeShow(true);
                                                        }}
                                                        ref={toAircodeRef}
                                                        type="text"
                                                        placeholder={toAirportData.name ? `${toAirportData.name}, ${toAirportData.address.cityName}` : "Select To"}
                                                        className={style.formInput}
                                                        readOnly={true}
                                                    />
                                                    {toAircodeShow && (
                                                        <AirlineCodeList
                                                            hidePanel={() => settoAircodeShow(false)}
                                                            defaultAirportList={defaultToAirportList}
                                                            updateDefaultList={(value) => setDefaultToAirportList(value)}
                                                            setSelectAirportData={(data) => settoAirportData(data)}
                                                            placeholder="To"
                                                            ref={listToAircodeRef}
                                                        ></AirlineCodeList>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <Departure value={depatureDate} setValue={(value) => setDepatureDate(value)}></Departure>
                                        <Return depatureDate={depatureDate} flightType={flightType} value={returnDate} setValue={(value) => setReturnDate(value)} />

                                        <PassengerTypeList
                                            setPassAdult={setAdultValue}
                                            setPassChild={setChildrenValue}
                                            setPassInfant={setInfantValue}
                                            adultValue={adultValue}
                                            childrenValue={childrenValue}
                                            infantValue={infantValue}
                                        ></PassengerTypeList>
                                        <ClassTypeList classValue={classValue} setClass={(value) => setClassValue(value)}></ClassTypeList>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="mb-3">
                                        <button disabled={disablebtn} onClick={findFlightGoToSearch} className={!isInner ? style.findFlight : style.findFlightInner}>
                                            find your flight
                                        </button>
                                    </div>
                                    <div className="checkbox custom text-center mb-2">
                                        <label>
                                            <input type="checkbox" onChange={() => setNonStop((prev) => !prev)} defaultChecked={nonStop} checked={nonStop} /> Non Stop FlightOnly
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
