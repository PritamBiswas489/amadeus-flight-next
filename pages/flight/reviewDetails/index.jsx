import React, { useState, useEffect } from "react";
import Layout from "@/components/front/include/Layout";
import Panel from "@/components/front/FlightReview/Panel";

import { useHttpClient } from "@/hooks/http-hook";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { passengerDetailsActions } from "@/store/redux/passenger-details-slice";


import ResultLoader from "@/components/front/ResultLoader/ResultLoader";
import ErrorMessage from "@/components/front/ErrorMessage/ErrorMessage";

const PassengerDetails = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [dataOffers, setDataOffers] = useState([]);
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();

  // console.log("=============== HELLO HELLO ========================");
  // console.log(useSelector((state)=>state['passergerdetails']));

  const router = useRouter();
  const { query } = router;

  const {
    isLoading: flightOfferLoading,
    error: flightOfferError,
    sendRequest: flightOfferFetch,
    clearError,
  } = useHttpClient();

  useEffect(() => {
    let timer = "";
    const fetcFlights = async (itineraryId) => {
      try {
        const responseData = await flightOfferFetch(
          `${process.env.NEXT_PUBLIC_APP_HOST_API}flight/offer/price?itineraryId=${itineraryId}`
        );

        setDataOffers(responseData);
      } catch (err) {}
    };
    if (typeof query.itineraryId !== "undefined") {
      dispatch(passengerDetailsActions.setItineraryId({itineraryId:query.itineraryId}));
      timer = setTimeout(() => {
        fetcFlights(query.itineraryId);
      }, 200);
    }
    return () => clearTimeout(timer);
  }, [query,dispatch,flightOfferFetch]);

  useEffect(() => {
    setLoader(flightOfferLoading);
  }, [flightOfferLoading]);

  return (
    <>
      <Layout>
        {loader && <ResultLoader />}
        {flightOfferError && <ErrorMessage error={flightOfferError} />}
        {dataOffers &&
          !flightOfferError &&
          !loader &&
          typeof dataOffers.response !== "undefined" && (
            <Panel
              dataOffers={dataOffers}
              activeStep={activeStep}
              setActiveStep={(value) => setActiveStep(value)}
            ></Panel>
          )}
      </Layout>
    </>
  );
};

export default PassengerDetails;
