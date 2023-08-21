import React from "react";
import FlightSelection from "@/sections/front/FlightSelection";
import TravelInfo from "@/sections/front/TravelInfo";
import Payment from "@/sections/front/Payment";
import StepSection from "./StepSection";



export default function Panel({ activeStep,setActiveStep, dataOffers }) {
    const {offersWithAirlineDetails,  airlineDetails,airportDetails} = dataOffers.response;
    const {orginalTiming,timings,airline,airport,totalPrice,currency} = dataOffers.response.offersWithAirlineDetails[0];
    
  return (
    <>
     
      <StepSection activeStep={activeStep} setActiveStep={(value)=>setActiveStep(value) } />
      {activeStep === 1 && <FlightSelection dt={{orginalTiming,timings,airline,airport,totalPrice,currency}}  />}
      {activeStep === 2 && <TravelInfo dt={{orginalTiming,timings,airline,airport,totalPrice,currency}} />}
      {activeStep === 3 && <Payment dt={{orginalTiming,timings,airline,airport,totalPrice,currency}} />}
    </>
  );
}
