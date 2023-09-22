import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import useGeolocation from "@/hooks/useGeolocation";
import useFetch from "@/hooks/useFetch";
import useGlobalCookies from "@/hooks/useGlobalCookies";
import { useSnackbar } from "notistack";
import {
  apiDateFormat,
  
  formatDateWithLeadingZero,
   
  isEmptyObject
} from "@/service/Helpers";
import HomeSearch from "@/components/front/SearchPanel/HomeSearch";
import InnerSearch from "@/components/front/SearchPanel/InnerSearch";
import { useSelector, useDispatch } from "react-redux";
import { searchFieldActions } from "@/store/redux/search-field-slice";

const HomeFlightSearch = ({
  isInner,
  execute,
  exceuteSearch,
  querySearchField = {},
  disablebtn,
}) => {
  //console.log("============ HomeFlightSearch ===============");
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

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
  const adultValue = useSelector((state) => state["searchField"].adultValue);
  const childrenValue = useSelector(
    (state) => state["searchField"].childrenValue
  );
  const infantValue = useSelector((state) => state["searchField"].infantValue);
  const departureDate = useSelector(
    (state) => state["searchField"].departureDate
  );
  const returnDate = useSelector((state) => state["searchField"].returnDate);
  const classValue = useSelector((state) => state["searchField"].classValue);
  const flightType = useSelector((state) => state["searchField"].flightType);
  const nonStop = useSelector((state) => state["searchField"].nonStop);
  const fromAirportData = useSelector(
    (state) => state["searchField"].fromAirportData
  );
  const setfromAirportData = (fromAirportData) =>
    dispatch(searchFieldActions.setfromAirportData({ fromAirportData }));
  const toAirportData = useSelector(
    (state) => state["searchField"].toAirportData
  );
  const settoAirportData = (toAirportData) =>
    dispatch(searchFieldActions.settoAirportData({ toAirportData }));
  const country = useSelector((state) => state["searchField"].country);
  const setDefaultCountry = (country) =>
    dispatch(searchFieldActions.setDefaultCountry({ country }));
  const city = useSelector((state) => state["searchField"].city);
  const setDefaultCity = (city) =>
    dispatch(searchFieldActions.setDefaultCity({ city }));

  const countryTo = useSelector((state) => state["searchField"].countryTo);
  const setDefaultToCountry = (countryTo) =>
    dispatch(searchFieldActions.setDefaultToCountry({ countryTo }));

  const cityTo = useSelector((state) => state["searchField"].cityTo);
  const setDefaultToCity = (cityTo) =>
    dispatch(searchFieldActions.setDefaultToCity({ cityTo }));

  
  const setDefaultFromAirportList = (defaultFromAirportList) =>
    dispatch(
      searchFieldActions.setDefaultFromAirportList({ defaultFromAirportList })
    );

  
  const setDefaultToAirportList = (defaultToAirportList) =>
    dispatch(
      searchFieldActions.setDefaultToAirportList({ defaultToAirportList })
    );

  const { cookies, setGlobalCookie, removeGlobalCookie } = useGlobalCookies();


  useEffect(()=>{
        if(isEmptyObject(fromAirportData)){
                //console.log({fromAirportData});
                if (currentRoute !== "/flight/search") {
                    if(cookies.cityFrom ){
                        setDefaultCity(cookies.cityFrom);
                    }else{
                        setDefaultCity(defaultFromValue);
                    }
                }

        }
    
    
    
    
    if(isEmptyObject(toAirportData)){
            if (currentRoute !== "/flight/search") {
                if(cookies.cityTo){
                    setDefaultToCity(cookies.cityTo);
                }else{
                setDefaultToCity(defaultToValue);
                }
            } 
    }

  },[currentRoute])

  function findFlightGoToSearch() {
   
    if (fromAirportData.iataCode === "") {
      enqueueSnackbar("Select departure airport", { variant: "error" });
    } else if (toAirportData.iataCode === "") {
      enqueueSnackbar("Select arrival airport", { variant: "error" });
    } else if (departureDate === "" || departureDate === null) {
      enqueueSnackbar("Select departure date", { variant: "error" });
    } else if (
      flightType === "RETURN" &&
      (returnDate === "" || returnDate === null)
    ) {
      enqueueSnackbar("Select return date", { variant: "error" });
    } else {
      let itinerary = `${fromAirportData.iataCode}-${
        toAirportData.iataCode
      }-${(departureDate)}`;
      if (flightType === "RETURN") {
        itinerary += `-${(returnDate)}`;
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
      const paxType = `A-${parseInt(adultValue)}_C-${parseInt(
        childrenValue
      )}_I-${parseInt(infantValue)}`;
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


    


    if (
      typeof querySearchField.departureDate !== "undefined" &&
      querySearchField.departureDate !== "" &&
      querySearchField.departureDate !== null
    ) {
      dispatch(
        searchFieldActions.setDepartureDate({
          departureDate: formatDateWithLeadingZero(new Date(querySearchField.departureDate)),
        })
      );
    }
    if (
      typeof querySearchField.tripType !== "undefined" &&
      querySearchField.tripType === "RETURN"
    ) {
      if (
        typeof querySearchField.arrivalDate !== "undefined" &&
        querySearchField.arrivalDate !== "" &&
        querySearchField.arrivalDate !== null
      ) {
        dispatch(
          searchFieldActions.setReturnDate({
            returnDate: formatDateWithLeadingZero(new Date(querySearchField.arrivalDate)),
          })
        );
      }
    }
    if (typeof querySearchField.tripType !== "undefined") {
      dispatch(
        searchFieldActions.setflightType({
          flightType: querySearchField.tripType,
        })
      );
    }
    if (typeof querySearchField.cabinClass !== "undefined") {
      dispatch(
        searchFieldActions.setClassValue({
          classValue: querySearchField.cabinClass,
        })
      );
      
    }
    if (typeof querySearchField.adult !== "undefined") {
      dispatch(
        searchFieldActions.setAdultValue({ adultValue: querySearchField.adult })
      );
    }
    if (typeof querySearchField.child !== "undefined") {
      dispatch(
        searchFieldActions.setChildrenValue({
          childrenValue: querySearchField.child,
        })
      );
    }
    if (typeof querySearchField.infant !== "undefined") {
      dispatch(
        searchFieldActions.setInfantValue({
          infantValue: querySearchField.infant,
        })
      );
    }
    if (typeof querySearchField.nonstopflight !== "undefined") {
      dispatch(
        searchFieldActions.setNonStop({
          nonStop: querySearchField.nonstopflight,
        })
      );
    }
    if (typeof querySearchField.fromAirportObject !== "undefined") {
      dispatch(searchFieldActions.setfromAirportData({ fromAirportData : querySearchField.fromAirportObject }));
      dispatch(searchFieldActions.setDefaultCity({ city : querySearchField?.fromAirportObject?.iataCode }));

    }
    if (typeof querySearchField.toAirportObject !== "undefined") {
      dispatch(searchFieldActions.settoAirportData({ toAirportData : querySearchField.toAirportObject }));  
      dispatch(searchFieldActions.setDefaultToCity({ cityTo : querySearchField?.toAirportObject?.iataCode }));
    }








    let apiQueryObject = {};
    if (
      typeof querySearchField.departureDate !== "undefined" &&
      querySearchField.departureDate !== "" &&
      querySearchField.departureDate !== null
    ) {
      apiQueryObject.departureDate = apiDateFormat(
        new Date(querySearchField.departureDate)
      );
    }
    if (
      typeof querySearchField.tripType !== "undefined" &&
      querySearchField.tripType === "RETURN"
    ) {
      if (
        typeof querySearchField.arrivalDate !== "undefined" &&
        querySearchField.arrivalDate !== "" &&
        querySearchField.arrivalDate !== null
      ) {
        apiQueryObject.returnDate = apiDateFormat(
          new Date(querySearchField.arrivalDate)
        );
      }
    }
    
    if (typeof querySearchField.cabinClass !== "undefined") {
      apiQueryObject.travelClass = querySearchField.cabinClass;
    }

    if (typeof querySearchField.adult !== "undefined") {
      apiQueryObject.adults = querySearchField.adult;
    }
    if (typeof querySearchField.child !== "undefined") {
      apiQueryObject.children = querySearchField.child;
    }
    if (typeof querySearchField.infant !== "undefined") {
      apiQueryObject.infants = querySearchField.infant;
    }
    if (typeof querySearchField.nonstopflight !== "undefined") {
      apiQueryObject.nonStop = querySearchField.nonstopflight;
    }
    if (typeof querySearchField.fromAirportObject !== "undefined") {
      apiQueryObject.originLocationCode =
        querySearchField?.fromAirportObject?.iataCode;
    }
    if (typeof querySearchField.toAirportObject !== "undefined") {
      apiQueryObject.destinationLocationCode =
        querySearchField?.toAirportObject?.iataCode;
    }
    if (parseInt(execute) === 1) {
      if (typeof exceuteSearch === "function") {
        exceuteSearch(apiQueryObject);
      }
    }
  }, [querySearchField]);

  const { geoLoading, geoError, geoLocationData } = useGeolocation(
    cookies.cityFrom || currentRoute !== "/"
      ? { trigger: false }
      : { trigger: true }
  );

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
      cityFetch(
        `${process.env.NEXT_PUBLIC_APP_HOST_API}flight/airport/city/search?keyword=${city}`,
        { method: "GET" }
      );
    }
  }, [city]);

  const { data: responseToCityData, fetchData: cityToFetch } = useFetch();

  useEffect(() => {
    if (cityTo != "") {
      cityToFetch(
        `${process.env.NEXT_PUBLIC_APP_HOST_API}flight/airport/city/search?keyword=${cityTo}`,
        { method: "GET" }
      );
    }
  }, [cityTo]);

  useEffect(() => {
    if (responseCityData) {
      if (responseCityData.response) {
        setDefaultFromAirportList(responseCityData);

        if (
          typeof responseCityData.response !== "undefined" &&
          typeof responseCityData.response[0] !== "undefined"
        ) {
          setfromAirportData(responseCityData.response[0]);
        }
      }
    }
  }, [responseCityData]);

  useEffect(() => {
    if (responseToCityData) {
      if (responseToCityData.response) {
        //console.log({ responseToCityData });
        setDefaultToAirportList(responseToCityData);
        if (
          typeof responseToCityData.response !== "undefined" &&
          typeof responseToCityData.response[0] !== "undefined"
        ) {
          settoAirportData(responseToCityData.response[0]);
        }
      }
    }
  }, [responseToCityData]);

  return (
    <>
      {!isInner && (
        <HomeSearch
          isInner={isInner}
          disablebtn={disablebtn}
          findFlightGoToSearch={findFlightGoToSearch}
        />
      )}

      {isInner && (
        <InnerSearch
          isInner={isInner}
          disablebtn={disablebtn}
          findFlightGoToSearch={findFlightGoToSearch}
        />
      )}
    </>
  );
};

export default HomeFlightSearch;
