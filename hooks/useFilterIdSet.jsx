import { useSelector, useDispatch } from "react-redux";
import { filterOrdersAction } from "@/store/redux/filter-orders-slice";
import { useEffect, useMemo, useState } from "react";

export default function useFilterIdSet() {
  console.log("============ useFilterIdSet ===============");
  const dispatch = useDispatch();
  const airlines = useSelector((state) => state["filterField"].airlines);
  const airports = useSelector((state) => state["filterField"].airports);
  const onwardStops = useSelector((state) => state["filterField"].onwardStops);
  const returnStops = useSelector((state) => state["filterField"].returnStops);

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

  const maxDeparttureDuration = useSelector((state) =>
    parseFloat(state["filterField"].maxDeparttureDuration)
  );
  const minDeparttureDuration = useSelector((state) =>
    parseFloat(state["filterField"].minDeparttureDuration)
  );

  const maxDeparttureDurationFirst = useSelector((state) =>
    parseFloat(state["offerData"].maxDeparttureDuration)
  );
  const minDeparttureDurationFirst = useSelector((state) =>
    parseFloat(state["offerData"].minDeparttureDuration)
  );

  const maxReturnDuration = useSelector((state) =>
    parseFloat(state["filterField"].maxReturnDuration)
  );
  const minReturnDuration = useSelector((state) =>
    parseFloat(state["filterField"].minReturnDuration)
  );

  const maxReturnDurationFirst = useSelector((state) =>
    parseFloat(state["offerData"].maxReturnDuration)
  );
  const minReturnDurationFirst = useSelector((state) =>
    parseFloat(state["offerData"].minReturnDuration)
  );

  //console.log({maxDeparttureDuration,minDeparttureDuration});

  const departureTimimgs = useSelector(
    (state) => state["filterField"].departureTimimgs
  );
  const returnTimimgs = useSelector(
    (state) => state["filterField"].returnTimimgs
  );

  const [isOnwardStopFilter, setIsOnwardStopFilter] = useState(false);
  const [isReturnStopFilter, setIsReturnStopFilter] = useState(false);
  const [isDepartureTimingFilter, setIsDepartureTimingFilter] = useState(false);
  const [isReturnTimingFilter, setIsReturnTimingFilter] = useState(false);
  const [isPriceFilter, setIsPriceFilter] = useState(false);
  const [isOnwardDuration, setIsOnwardDuration] = useState(false);
  const [isReturnDuration, setIsReturnDuration] = useState(false);
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
    if (returnStops.length > 0) {
      setIsReturnStopFilter(true);
    } else {
      setIsReturnStopFilter(false);
    }
  }, [returnStops]);

  useEffect(() => {
    if (departureTimimgs.length > 0) {
      setIsDepartureTimingFilter(true);
    } else {
      setIsDepartureTimingFilter(false);
    }
  }, [departureTimimgs]);

  useEffect(() => {
    if (returnTimimgs.length > 0) {
      setIsReturnTimingFilter(true);
    } else {
      setIsReturnTimingFilter(false);
    }
  }, [returnTimimgs]);

  useEffect(() => {
    //console.log({minPriceLast, minPrice, maxPriceFirst, maxPrice});
    if (minPrice > minPriceLast || maxPrice < maxPriceFirst) {
      setIsPriceFilter(true);
    } else {
      setIsPriceFilter(false);
    }
  }, [maxPrice, minPrice, maxPriceFirst, minPriceLast]);

  useEffect(() => {
    if (
      minDeparttureDuration > minDeparttureDurationFirst ||
      maxDeparttureDuration < maxDeparttureDurationFirst
    ) {
      setIsOnwardDuration(true);
    } else {
      setIsOnwardDuration(false);
    }
  }, [
    maxDeparttureDuration,
    maxDeparttureDurationFirst,
    minDeparttureDuration,
    minDeparttureDurationFirst,
  ]);

  useEffect(() => {
    if (
      minReturnDuration > minReturnDurationFirst ||
      maxReturnDuration < maxReturnDurationFirst
    ) {
      setIsReturnDuration(true);
    } else {
      setIsReturnDuration(false);
    }
  }, [
    maxReturnDurationFirst,
    maxReturnDuration,
    minReturnDuration,
    minReturnDurationFirst,
  ]);
  useEffect(() => {
    
    if (
      isOnwardStopFilter === false &&
      isReturnStopFilter === false &&
      isDepartureTimingFilter === false &&
      isReturnTimingFilter === false &&
      isPriceFilter === false &&
      isOnwardDuration === false &&
      isReturnDuration === false &&
      isPreferredAirline === false &&
      isPreferredAiport === false
    ) {
      console.log("============ useFilterIdSet two ===============");
      console.log({
      isOnwardStopFilter,
      isReturnStopFilter,
      isDepartureTimingFilter,
      isReturnTimingFilter,
      isPriceFilter,
      isOnwardDuration,
      isReturnDuration,
      isPreferredAirline,
      isPreferredAiport,
    });
      dispatch(
        filterOrdersAction.setFilterOffers({
          filterOffers: offers,
        })
      );
    } else {
      console.log("============ useFilterIdSet three ===============");
      const filteredData = offers.filter((item) => {
        //airport checking
        let airportMatches = true;
        if (airports.length > 0) {
          airportMatches = item.airports.some((airport) =>
            airports.includes(airport)
          );
        }
        //airline checking
        let airlineMatches = true;
        if (airlines.length > 0) {
          airlineMatches = item.airlines.some((airline) =>
            airlines.includes(airline)
          );
        }
        //price checking
        const totalPrice = parseFloat(item.totalPrice);
        let priceInRange = true;
        if (isPriceFilter === true) {
          priceInRange = totalPrice >= minPrice && maxPrice >= totalPrice;
        }
        //onward filter
        let onwardFilter = true;
        if (isOnwardDuration === true) {
          onwardFilter =
            item.departureDuration >= minDeparttureDuration &&
            maxDeparttureDuration >= item.departureDuration;
        }
        let returnDurationfilter = true;
        if (isReturnDuration === true) {
          returnDurationfilter =
            item.returnDuration >= minReturnDuration &&
            maxReturnDuration >= item.returnDuration;
        }
        //departure timings filter
        let departureTimingFilter = true;
        if (departureTimimgs.length > 0) {
          departureTimingFilter = departureTimimgs.includes(
            item.departureTimingslot
          );
        }

        //return timings filter
        let returnTimingFilter = true;
        if (returnTimimgs.length > 0) {
          returnTimingFilter = returnTimimgs.includes(item.returnTimingslot);
        }
        //onward number Stops filter
        let onwardStopsFilter = true;
        if (onwardStops.length > 0) {
            onwardStopsFilter = onwardStops.includes(item.departureNumberofStop);
        }

        //return number Stops filter
        let returnStopsFilter = true;
        if (returnStops.length > 0) {
            returnStopsFilter = returnStops.includes(item.returnNumberofStop);
        }
        return (
          airlineMatches &&
          priceInRange &&
          airportMatches &&
          onwardFilter &&
          returnDurationfilter &&
          departureTimingFilter &&
          returnTimingFilter && 
          onwardStopsFilter && 
          returnStopsFilter
        );
      });
      

      dispatch(
        filterOrdersAction.setFilterOffers({
          filterOffers: filteredData,
        })
      );
    }
  }, [
    isOnwardStopFilter,
    isReturnStopFilter,
    isDepartureTimingFilter,
    isReturnTimingFilter,
    isPriceFilter,
    isOnwardDuration,
    isReturnDuration,
    isPreferredAirline,
    isPreferredAiport,
    airports,
    airlines,
    minPrice,
    maxPrice,
    minDeparttureDuration,
    maxDeparttureDuration,
    minReturnDuration,
    maxReturnDuration,
    departureTimimgs,
    returnTimimgs,
    onwardStops,
    returnStops,
  ]);

 
}
