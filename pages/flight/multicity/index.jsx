import React, { useCallback, useEffect, useState, useMemo } from "react";
import Layout from "@/components/front/include/Layout";
import { useHttpClient } from "@/hooks/http-hook";
import SearchPanelMultiCity from "@/components/front/SearchPage/SearchPanelMultiCity";
import ResultLoader from "@/components/front/ResultLoader/ResultLoader";
import ErrorMessage from "@/components/front/ErrorMessage/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { offerDataActions } from "@/store/redux/offer-data-slice";
import { filterOrdersAction } from "@/store/redux/filter-orders-slice";
import { parse } from "cookie";
import { multicitySearchFieldActions } from "@/store/redux/multicity-search-field-slice";
import {
  apiDateFormat,
  checkingLocation,
  locationDetails,
} from "@/service/Helpers";
import HomeFlightSearch from "@/sections/front/HomeFlightSearch";
import style from "@/pages/flight/search/index.module.scss";
import useLocalStorage from "@/hooks/useLocalStorage";
 
const MultiCitySearch = ({ querySearchField }) => {
  const flightOffers = useSelector((state) => state["offerData"].offers);
  const dispatch = useDispatch();
  const [
    multicitySearchValue,
    setMulticitySearchValue,
    clearMulticitySearchValue,
  ] = useLocalStorage("multicitySearchValue", "");

 
  const {
    locations,
    m_departureDate,
    tripType,
    cabinClass,
    adult,
    child,
    infant,
    nonstopflight,
  } = querySearchField;


  useEffect(() => {
    if (multicitySearchValue) {
      const storage_d = JSON.parse(multicitySearchValue);
  
      if (locations.length > 0 && storage_d) {
        locations.forEach((locValue, locIndex) => {
          if (locValue.originLocationObject?.iataCode && storage_d?.m_fromAirportData?.[locIndex]) {
            storage_d.m_fromAirportData[locIndex] = locValue.originLocationObject;
          }
          if (locValue.destinationLocationObject?.iataCode && storage_d?.m_toAirportData?.[locIndex]) {
            storage_d.m_toAirportData[locIndex] = locValue.destinationLocationObject;
          }
        });
      }
  
      const d = storage_d?.m_fromAirportData || [];
      const d1 = storage_d?.m_toAirportData || [];
      const lengthToMatch = Math.min(d.length, d1.length);
  
      const d3 = d.slice(0, lengthToMatch);
      const d4 = d1.slice(0, lengthToMatch);
  
      
      const updates = {
        m_fromAirportData: d3,
        m_toAirportData: d4,
        numberOfField: d3.length === 0 ? 1 : d3.length,
        m_departureDate: storage_d?.m_departureDate,
        classValue: storage_d?.m_classValue,
        adultValue: storage_d?.m_adultValue,
        childrenValue: storage_d?.m_childrenValue,
        infantValue: storage_d?.m_infantValue,
        nonStop: storage_d?.m_nonStop,
      };
  
      // Define your action to update the state in one go
      const updateAction = multicitySearchFieldActions.setMulticitySearchData(updates);
      dispatch(updateAction);
    }
  }, [multicitySearchValue]);
  

  const multiCity = [];
  locations.forEach((value, index) => {
    const dDate = new Date(m_departureDate[index]);
    multiCity.push({ ...value, date: apiDateFormat(dDate) });
  });

  const {
    isLoading: flightOfferLoading,
    error: flightOfferError,
    sendRequest: flightOfferFetch,
    clearError,
  } = useHttpClient();

  useEffect(() => {
    const postData = {
      multiCity,
      tripType,
      adult,
      child,
      infant,
      cabinClass,
      nonStop: nonstopflight,
    };
    let timer = "";
    const fetchFlights = async () => {
      try {
        const responseData = await flightOfferFetch(
          `${process.env.NEXT_PUBLIC_APP_HOST_API}flight/rest/offer/search/multicity`,
          "POST",
          JSON.stringify(postData),
          {
            "Content-Type": "application/json",
          }
        );
        dispatch(
          offerDataActions.setOffers({
            offers: responseData.response.offersWithAirlineDetails,
          })
        );
        dispatch(
          filterOrdersAction.setFilterOffers({
            filterOffers: responseData.response.offersWithAirlineDetails,
          })
        );
        dispatch(
          offerDataActions.setDictionaries({
            dictionaries: responseData.response.dictionaries,
          })
        );

        dispatch(
          offerDataActions.setMaxPrice({
            maxPrice: Math.ceil(responseData.response.maxPrice),
          })
        );
        dispatch(
          offerDataActions.setMinPrice({
            minPrice: Math.floor(responseData.response.minPrice),
          })
        );

        dispatch(
          offerDataActions.setCheapestOffer({
            cheapestOffer: responseData.response.cheapestOffer,
          })
        );
        dispatch(
          offerDataActions.setBestOffer({
            bestOffer: responseData.response.bestOffer,
          })
        );
        dispatch(
          offerDataActions.setQuickestOffer({
            quickestOffer: responseData.response.quickestOffer,
          })
        );
        dispatch(
          offerDataActions.setItineraryDurationLimit({
            itineraryDurationLimit:
              responseData.response.itineraryDurationLimit,
          })
        );
      } catch (err) {}
    };
    timer = setTimeout(() => {
      fetchFlights();
    }, 1000);
    return () => clearTimeout(timer);
  }, [querySearchField]);

  return (
    <>
      <Layout>
        <section className={style.innerFlightSreSection}>
          {" "}
          <HomeFlightSearch
            querySearchField={querySearchField}
            isInner={true}
            execute={0}
            exceuteSearch={""}
          />
        </section>

        {flightOfferLoading && <ResultLoader />}
        {flightOfferError && <ErrorMessage error={flightOfferError} />}
        {flightOffers.length > 0 &&
          !flightOfferError &&
          !flightOfferLoading && <SearchPanelMultiCity />}
      </Layout>
    </>
  );
};
export async function getServerSideProps(context) {
  const { query } = context;
  const { req } = context;
  const cookies = parse(req.headers.cookie || "");
  const multiItineraryParam = cookies.multiItineraryParam;
  let m_departureDate = [];
  let locations = [];
  let tripType = "ONEWAY";
  let cabinClass = "ECONOMY";
  let adult = 1;
  let child = 0;
  let infant = 0;
  let nonstopflight = false;

  if (  query?.d  ) {
    const splitDate = query.d.split("|");
    if (splitDate.length > 0) {
      splitDate.forEach((dateString, index) => {
        const month1 = parseInt(dateString.substring(0, 2), 10);
        const day1 = parseInt(dateString.substring(2, 4), 10);
        const year = parseInt(dateString.substring(4), 10);
        const month = String(month1).padStart(2, "0");
        const day = String(day1).padStart(2, "0");
        m_departureDate.push(`${month}/${day}/${year}`);
      });
    }
  }

  let cookieLocations = [];

  const multiItineraryParamSplit = multiItineraryParam.split("|");
  if (multiItineraryParamSplit.length > 0) {
    multiItineraryParamSplit.forEach((m_locationString, index) => {
      const m_locationsplit = m_locationString.split("-");
      let m_originLocationCode = "";
      if (  m_locationsplit?.[0]  ) {
        m_originLocationCode = m_locationsplit[0];
      }
      let m_destinationLocationCode = "";
      if (  m_locationsplit?.[1]  ) {
        m_destinationLocationCode = m_locationsplit[1];
      }
      cookieLocations.push({
        originLocationCode: m_originLocationCode,
        destinationLocationCode: m_destinationLocationCode,
      });
    });
  }
  console.log(query.i);
  console.log(multiItineraryParam);

  if (  query?.i  ) {
    const splitLocation = query.i.split("|");
    if (splitLocation.length > 0) {
      splitLocation.forEach(async (locationString, index) => {
        const locationsplit = locationString.split("-");
        let originLocationCode = "";
        let originLocationObject = {};
        let destinationLocationObject = {};
        if (  locationsplit?.[0]  ) {
          originLocationCode = locationsplit[0];
        }
        let destinationLocationCode = "";
        if (  locationsplit?.[1]  ) {
          destinationLocationCode = locationsplit[1];
        }

        locations.push({
          originLocationCode,
          destinationLocationCode,
          originLocationObject,
          destinationLocationObject,
        });
      });
    }
  }
  if (locations.length > 0) {
    locations = await checkingLocation(locations, cookieLocations);
  }
  if (  query?.tripType  ) {
    if (query.tripType === "R") {
      tripType = "RETURN";
    } else if (query.tripType === "M") {
      tripType = "MULTI_CITY";
    }
  }
  if (  query?.cabinClass  ) {
    if (query.cabinClass === "P") {
      cabinClass = "PREMIUM_ECONOMY";
    }
    if (query.cabinClass === "B") {
      cabinClass = "BUSINESS";
    }
    if (query.cabinClass === "F") {
      cabinClass = "FIRST";
    }
  }
  if (  query?.paxType ) {
    const splitPax = query.paxType.split("_");
    adult =
        splitPax?.[0]  
        ? parseInt(splitPax[0].replace("A-", ""))
        : 1;
    child =
        splitPax?.[1]  
        ? parseInt(splitPax[1].replace("C-", ""))
        : 0;
    infant =
        splitPax?.[2] 
        ? parseInt(splitPax[2].replace("I-", ""))
        : 0;
  }
  if (  query?.ns  ) {
    if (parseInt(query.ns) === 1) {
      nonstopflight = true;
    }
  }

  console.log(locations);

  const querySearchField = {
    // fromAirportObject,
    // toAirportObject,
    locations,
    cookieLocations,
    m_departureDate,
    tripType,
    cabinClass,
    adult,
    child,
    infant,
    nonstopflight,
  };

  return {
    props: {
      querySearchField,
    },
  };
}
export default MultiCitySearch;
