import React from 'react';
import OneWayItem from '../OneWayItem/OneWayItem';
import { useSelector } from 'react-redux';
 


export default function ListPanel() {
  console.log("============ ListPanel ===============");
  // Destructuring data from Redux state
 
  const { filterOffers:offers } = useSelector((state) => state['filterOrders']);
  // Filter the flight offers if filterOffersIds is not empty
  // const filteredFlightOffers = filterOffersIds.length > 0
  //   ? offers.filter(flightOffer => filterOffersIds.includes(flightOffer.id))
  //   : offers;

  return (
    <>
      {offers.map((flightOffer, flightOfferIndex) => (
        // Use a key to uniquely identify each list item
        <OneWayItem key={flightOffer.id} flightOffer={flightOffer} />
      ))}
    </>
  );
}
