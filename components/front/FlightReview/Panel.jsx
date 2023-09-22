import React from "react";
import FlightSelection from "@/sections/front/FlightSelection";
import TravelInfo from "@/sections/front/TravelInfo";
import Payment from "@/sections/front/Payment";
import StepSection from "./StepSection";



export default function Panel({ activeStep,setActiveStep, dataOffers }) {
    const {offersWithAirlineDetails,  airlineDetails,airportDetails} = dataOffers.response;
    const {
      totalPrice,
      currency,
      cabinClass,
      baggage,
      baggageQty,
      itineraries,
      offer
    
    } = dataOffers.response.offersWithAirlineDetails[0];

    const {travelerPricings}  = offer;

    // console.log("======================= hello ===========================");
    // console.log(travelerPricings);
    
  return (
    <>
      <StepSection activeStep={activeStep} setActiveStep={(value)=>setActiveStep(value) } />
      {activeStep === 1 && <FlightSelection dt={{
         totalPrice,
         currency,
         cabinClass,
         baggage,
         baggageQty,
         itineraries,
         travelerPricings
        }}  />}
      {activeStep === 2 && <TravelInfo dt={{
         totalPrice,
         currency,
         cabinClass,
         baggage,
         baggageQty,
         itineraries
      }} />}
      {activeStep === 3 && <Payment dt={{
        departureNumberofStop,
        returnNumberofStop,
        totalPrice,
        currency,
        cabinClass,
        baggage,
        baggageQty,
        itineraries
      }} />}
    </>
  );
}
