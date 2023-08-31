import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import useGeolocation from "@/hooks/useGeolocation";
import useFetch from "@/hooks/useFetch";
import useGlobalCookies from "@/hooks/useGlobalCookies";
import { useSnackbar } from "notistack";
import { apiDateFormat, objectToQueryString, formatDateWithLeadingZero, isValidDate } from "@/service/Helpers";
import HomeSearch from "@/components/front/SearchPanel/HomeSearch";
import InnerSearch from "@/components/front/SearchPanel/InnerSearch";

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

    
   

    return (
        <>
        {!isInner &&   <HomeSearch
        isInner={isInner}
        flightType={flightType}
        setflightType={(value) => setflightType(value)}
        defaultFromAirportList={defaultFromAirportList}
        setfromAirportData={(data)=>setfromAirportData(data)}
        setFromAircodeShow={(value)=>setFromAircodeShow(value)} 
        setDefaultFromAirportList={(value)=>setDefaultFromAirportList(value)}
        fromAirportData={fromAirportData}
        fromAircodeShow={fromAircodeShow}
        defaultToAirportList={defaultToAirportList} 
        settoAirportData={(value)=>settoAirportData(value)}
        settoAircodeShow={(value)=>settoAircodeShow(value)}
        setDefaultToAirportList={(value)=>setDefaultToAirportList(value)}
        toAirportData={toAirportData} 
        toAircodeShow={toAircodeShow}
        depatureDate={depatureDate}
        setDepatureDate={(value) => setDepatureDate(value)}
        returnDate={returnDate} 
        setReturnDate={(value) => setReturnDate(value)}
        setAdultValue={setAdultValue}
        setChildrenValue={setChildrenValue}
        setInfantValue={setInfantValue}
        adultValue={adultValue}
        childrenValue={childrenValue}
        infantValue={infantValue}
        classValue={classValue} 
        setClassValue={(value) => setClassValue(value)}
        disablebtn={disablebtn}
        findFlightGoToSearch={findFlightGoToSearch}
        nonStop={nonStop}
        setNonStop={() => setNonStop((prev) => !prev)}
                            
        />   }
      
      {isInner && <InnerSearch
      
      
      isInner={isInner}
        flightType={flightType}
        setflightType={(value) => setflightType(value)}
        defaultFromAirportList={defaultFromAirportList}
        setfromAirportData={(data)=>setfromAirportData(data)}
        setFromAircodeShow={(value)=>setFromAircodeShow(value)} 
        setDefaultFromAirportList={(value)=>setDefaultFromAirportList(value)}
        fromAirportData={fromAirportData}
        fromAircodeShow={fromAircodeShow}
        defaultToAirportList={defaultToAirportList} 
        settoAirportData={(value)=>settoAirportData(value)}
        settoAircodeShow={(value)=>settoAircodeShow(value)}
        setDefaultToAirportList={(value)=>setDefaultToAirportList(value)}
        toAirportData={toAirportData} 
        toAircodeShow={toAircodeShow}
        depatureDate={depatureDate}
        setDepatureDate={(value) => setDepatureDate(value)}
        returnDate={returnDate} 
        setReturnDate={(value) => setReturnDate(value)}
        setAdultValue={setAdultValue}
        setChildrenValue={setChildrenValue}
        setInfantValue={setInfantValue}
        adultValue={adultValue}
        childrenValue={childrenValue}
        infantValue={infantValue}
        classValue={classValue} 
        setClassValue={(value) => setClassValue(value)}
        disablebtn={disablebtn}
        findFlightGoToSearch={findFlightGoToSearch}
        nonStop={nonStop}
        setNonStop={() => setNonStop((prev) => !prev)}
      
      
      
      /> }
        </>
    );
};

export default HomeFlightSearch;
