import { useSelector, useDispatch } from "react-redux";
import { filterOrdersAction } from "@/store/redux/filter-orders-slice";
import { useEffect, useMemo, useState } from "react";

export default function useFilterIdSet() {
  console.log("============ useFilterIdSet ===============");
  const dispatch = useDispatch();
  const airlines = useSelector((state) => state["filterField"].airlines);
  const airports = useSelector((state) => state["filterField"].airports);
  const onwardStops = useSelector((state) => state["filterField"].onwardStops);
  const applyFilterSelector = useSelector((state) => state["applyfilterField"].applyFilter);


  // console.log(onwardStops);

  const maxPrice = useSelector((state) =>
    parseFloat(state["filterField"].maxPrice)
  );
  const minPrice = useSelector((state) =>
    parseFloat(state["filterField"].minPrice)
  );

  const maxPriceFirst = useSelector((state) =>
    parseFloat(state["offerData"].maxPrice)
  );
  const minPriceLast = useSelector((state) =>
    parseFloat(state["offerData"].minPrice)
  );

  const maxDeparttureDuration = useSelector(
    (state) => state["filterField"].maxDeparttureDuration
  );
  const minDeparttureDuration = useSelector(
    (state) => state["filterField"].minDeparttureDuration
  );
  // console.log(maxDeparttureDuration,minDeparttureDuration);

  // const maxDeparttureDurationFirst = useSelector((state) =>
  //   parseFloat(state["offerData"].maxDeparttureDuration)
  // );
  // const minDeparttureDurationFirst = useSelector((state) =>
  //   parseFloat(state["offerData"].minDeparttureDuration)
  // );

  //console.log(maxDeparttureDuration, minDeparttureDuration);

  const departureTimimgs = useSelector(
    (state) => state["filterField"].departureTimimgs
  );

  const [isOnwardStopFilter, setIsOnwardStopFilter] = useState(false);
  const [isDepartureTimingFilter, setIsDepartureTimingFilter] = useState(false);

  const [isPriceFilter, setIsPriceFilter] = useState(false);
  const [isOnwardDuration, setIsOnwardDuration] = useState(true);

  const [isPreferredAirline, setIsPreferredAirline] = useState(false);
  const [isPreferredAiport, setIsPreferredAiport] = useState(false);

 

  const offers = useSelector((state) => state["offerData"].offers);

  

  useEffect(() => {
    if (airlines.length > 0) {
      setIsPreferredAirline(true);
    } else {
      setIsPreferredAirline(false);
    }
  }, [airlines]);

  useEffect(() => {
    if (airports.length > 0) {
      setIsPreferredAiport(true);
    } else {
      setIsPreferredAiport(false);
    }
  }, [airports]);

  useEffect(() => {
    if (onwardStops.length > 0) {
      setIsOnwardStopFilter(true);
    } else {
      setIsOnwardStopFilter(false);
    }
  }, [onwardStops]);

  useEffect(() => {
    if (departureTimimgs.length > 0) {
      setIsDepartureTimingFilter(true);
    } else {
      setIsDepartureTimingFilter(false);
    }
  }, [departureTimimgs]);

  useEffect(() => {
    //console.log({minPriceLast, minPrice, maxPriceFirst, maxPrice});
    if (minPrice > minPriceLast || maxPrice < maxPriceFirst) {
      setIsPriceFilter(true);
    } else {
      setIsPriceFilter(false);
    }
  }, [maxPrice, minPrice, maxPriceFirst, minPriceLast]);

  useEffect(() => {
    if (applyFilterSelector) {
      if (
        isOnwardStopFilter === false &&
        isDepartureTimingFilter === false &&
        isPriceFilter === false &&
        isOnwardDuration === false &&
        isPreferredAirline === false &&
        isPreferredAiport === false
      ) {
        // console.log("============ useFilterIdSet two ===============");

        dispatch(
          filterOrdersAction.setFilterOffers({
            filterOffers: offers,
          })
        );
      } else {
        // console.log("============ useFilterIdSet three ===============");
        const filteredData = offers.filter((item) => {
          //airport checking
          let airportMatches = true;
          if (airports.length > 0) {
            console.log("Filter airports");
            airportMatches = item.airports.some((airport) =>
              airports.includes(airport)
            );
          }
          //airline checking
          let airlineMatches = true;
          if (airlines.length > 0) {
            console.log("Filter airlines");
            airlineMatches = item.airlines.some((airline) =>
              airlines.includes(airline)
            );
          }
          //price checking
          const totalPrice = parseFloat(item.totalPrice);
          let priceInRange = true;
          if (isPriceFilter === true && minPrice > 0 && maxPrice > 0) {
            console.log("Filter totalPrice");
            priceInRange = totalPrice >= minPrice && maxPrice >= totalPrice;
          }

          let onwardFilter = true;

          if (isOnwardDuration && maxDeparttureDuration.length > 0) {
            console.log("Filter isOnwardDuration");
            for (let key = 0; key < maxDeparttureDuration.length; key++) {
              const maxDur = maxDeparttureDuration[key];
              const minDur = minDeparttureDuration[key];

              if (
                !(
                  item.departureDuration[key] >= minDur &&
                  maxDur >= item.departureDuration[key]
                )
              ) {
                onwardFilter = false;
                break; // Exit the loop early because one false condition is enough to set onwardFilter to false
              }
            }
          }

          let departureTimingFilter = true;

          if (departureTimimgs.length > 0) {
            console.log("Filter departureTimimgs");
            // console.log(
            //   "==================== departureTiming filter ==================="
            // );

            departureTimingFilter = departureTimimgs.every(
              (departureTimimg, key) => {
                if (typeof departureTimimg !== "undefined") {
                  return departureTimimg.includes(
                    item.departureTimingslot[key]
                  );
                }
                return true; // If departureTimimg is undefined, consider it as a match
              }
            );
          }

          //onward number Stops filter
          let onwardStopsFilter = true;

          if (onwardStops.length > 0) {
            console.log("Filter onwardStops");
            // console.log(
            //   "==================== onwardStops filter ==================="
            // );
            //console.log(onwardStops);

            onwardStopsFilter = onwardStops.every((onwardStop, key) => {
              if (typeof onwardStop !== "undefined") {
                return onwardStop.includes(item.departureNumberofStop[key]);
              }
              return true; // If onwardStop is undefined, consider it as a match
            });
          }

          return (
            airlineMatches &&
            priceInRange &&
            airportMatches &&
            onwardFilter &&
            departureTimingFilter &&
            onwardStopsFilter
          );
        });

        dispatch(
          filterOrdersAction.setFilterOffers({
            filterOffers: filteredData,
          })
        );
      }
    }
  }, [
    applyFilterSelector,
    isOnwardStopFilter,
    isDepartureTimingFilter,
    isPriceFilter,
    isOnwardDuration,
    isPreferredAirline,
    isPreferredAiport,
    airports,
    airlines,
    minPrice,
    maxPrice,
    minDeparttureDuration,
    maxDeparttureDuration,
    departureTimimgs,
    onwardStops,
  ]);
}
