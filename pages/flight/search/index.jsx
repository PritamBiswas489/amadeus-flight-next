import React, { useCallback, useEffect, useState, useMemo } from "react";
import Layout from "@/components/front/include/Layout";
import { useHttpClient } from "@/hooks/http-hook";
import SearchPanel from "@/components/front/SearchPage/SearchPanel";
import SearchField from "@/components/front/SearchPage/SearchField";
import { isValidDate } from "@/service/Helpers";
import ResultLoader from "@/components/front/ResultLoader/ResultLoader";
import ErrorMessage from "@/components/front/ErrorMessage/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { offerDataActions } from "@/store/redux/offer-data-slice";
import { filterOrdersAction } from "@/store/redux/filter-orders-slice";
import { graphDataActions } from "@/store/redux/graph-data-slice";
import { parse } from "cookie";
import useLocalStorage from "@/hooks/useLocalStorage";

/**
 * Searching start from here
 */
const RoundTrip = ({ querySearchField }) => {
  //console.log("============ RoundTrip ===============");
  const flightOffers = useSelector((state) => state["offerData"].offers);
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  // console.log({querySearchField});

  const {
    isLoading: flightOfferLoading,
    error: flightOfferError,
    sendRequest: flightOfferFetch,
    clearError,
  } = useHttpClient();

  const {
    isLoading: graphFlightOfferLoading,
    error: graphFlightOfferError,
    sendRequest: graphFlightOfferFetch,
    clearError: graphClearError,
  } = useHttpClient();

  useEffect(() => {
    if (flightOffers.length > 0) {
      let timer = "";
      const fetchFlights = async () => {
        try {
          const queryString = new URLSearchParams(searchValue).toString();
          const responseData = await graphFlightOfferFetch(
            `${process.env.NEXT_PUBLIC_APP_HOST_API}flight/rest/graph/listing/offer/search?${queryString}`
          );
          if (responseData?.graphDates) {
            dispatch(
              graphDataActions.setOffers({
                offers: responseData.graphDates,
              })
            );
            dispatch(
              graphDataActions.setCurrencyCode({
                currencyCode: responseData.currencyCode,
              })
            );
            dispatch(
              graphDataActions.setMinTotalPrice({
                minTotalPrice: responseData.minTotalPrice,
              })
            );
            dispatch(
              graphDataActions.setMaxTotalPrice({
                maxTotalPrice: responseData.maxTotalPrice,
              })
            );

            
          }
        } catch (err) {}
      };
      if (searchValue !== "") {
        timer = setTimeout(() => {
          fetchFlights();
        }, 50);
      }
      return () => clearTimeout(timer);
    }
  }, [flightOffers]);
  useEffect(() => {
    if (flightOfferError) {
      setLoading(false);
    }
  }, [flightOfferError]);

  useEffect(() => {
    let timer = "";
    const fetchFlights = async () => {
      setLoading(true);
      try {
        const queryString = new URLSearchParams(searchValue).toString();
        const responseData = await flightOfferFetch(
          `${process.env.NEXT_PUBLIC_APP_HOST_API}flight/rest/offer/search?${queryString}`
        );
        setLoading(false);
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
    if (searchValue !== "") {
      timer = setTimeout(() => {
        fetchFlights();
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [searchValue, flightOfferFetch]);

  const executeSearchProcess = useCallback((searchData) => {
    setSearchValue(searchData);
  }, []);

  const memoizedChildValue = useMemo(
    () => ({ triggerFunction: executeSearchProcess }),
    [executeSearchProcess]
  );

  return (
    <>
      <Layout>
        <SearchField
          disablebtn={loading}
          querySearchField={querySearchField}
          {...memoizedChildValue}
        ></SearchField>
        {loading && <ResultLoader />}
        {flightOfferError && <ErrorMessage error={flightOfferError} />}
        {flightOffers.length > 0 && !flightOfferError && !loading && (
          <SearchPanel />
        )}
      </Layout>
    </>
  );
};

export async function getServerSideProps(context) {
  const { query } = context;
  let departureAirport = "";
  let arrivalAirport = "";
  let departureDate = "";
  let arrivalDate = "";
  let tripType = "ONEWAY";
  let cabinClass = "ECONOMY";
  let adult = 1;
  let child = 0;
  let infant = 0;
  let nonstopflight = false;

  const { req } = context;

  // Get the cookies from the request headers
  const cookies = parse(req.headers.cookie || "");

  // Access a specific cookie by name
  const fromAirportCodeCookie = cookies.fromAirportCode;
  const toAirportCodeCookie = cookies.toAirportCode;

  console.log(fromAirportCodeCookie);
  console.log(toAirportCodeCookie);

  let fromAirportObject = {};
  let toAirportObject = {};

  if (query?.itinerary) {
    const splitIti = query.itinerary.split("-");
    departureAirport = splitIti?.[0] && splitIti[0];
    arrivalAirport = splitIti?.[1] && splitIti[1];
    if (splitIti?.[2]) {
      departureDate = splitIti[2];
    }
    if (splitIti?.[3] && query?.tripType) {
      if (isValidDate(splitIti[3]) && query.tripType === "R") {
        arrivalDate = splitIti[3];
      }
    }
  }
  if (departureAirport != "") {
    if (fromAirportCodeCookie !== departureAirport) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_APP_HOST_API}flight/airport/city/search?keyword=${departureAirport}`,
        { method: "GET" }
      );
      const data = await response.json();
      if (data?.response?.[0]) {
        fromAirportObject = data.response[0];
      }
    }
  }
  if (arrivalAirport != "") {
    if (toAirportCodeCookie !== arrivalAirport) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_APP_HOST_API}flight/airport/city/search?keyword=${arrivalAirport}`,
        { method: "GET" }
      );
      const data = await response.json();
      if (data?.response?.[0]) {
        toAirportObject = data.response[0];
      }
    }
  }
  if (query?.tripType) {
    if (query.tripType === "R") {
      tripType = "RETURN";
    } else if (query.tripType === "M") {
      tripType = "MULTI_CITY";
    }
  }
  if (query?.cabinClass) {
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
  if (query?.paxType) {
    const splitPax = query.paxType.split("_");
    adult = splitPax?.[0] ? parseInt(splitPax[0].replace("A-", "")) : 1;
    child = splitPax?.[1] ? parseInt(splitPax[1].replace("C-", "")) : 0;
    infant = splitPax?.[2] ? parseInt(splitPax[2].replace("I-", "")) : 0;
  }
  if (query?.ns) {
    if (parseInt(query.ns) === 1) {
      nonstopflight = true;
    }
  }
  //  console.log(fromAirportObject);
  //  console.log(toAirportObject);
  return {
    props: {
      querySearchField: {
        fromAirportObject,
        toAirportObject,
        departureDate,
        arrivalDate,
        tripType,
        cabinClass,
        adult,
        child,
        infant,
        nonstopflight,
      },
    },
  };
}

export default RoundTrip;
