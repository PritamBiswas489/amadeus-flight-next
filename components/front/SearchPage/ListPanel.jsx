import React from 'react';

import OneWayItem from '../OneWayItem/OneWayItem';

export default function ListPanel({flightOffers}) {
    console.log("============================= hello ===============================//");
    //console.log(flightOffers);
  return (
    <>
                              {flightOffers.map((flightOffer,flightOfferIndex)=>{
                                     return <OneWayItem key={flightOfferIndex} flightOffer={flightOffer} />
                              })}
                              
                                
                                 
                                




                                
                                {/* <div className={style.inrAddBann}>
                                    <Image alt="" src={addBanner} placeholder="add-banner" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                </div> */}
                                {/* <div className={style.moreResult}>
                                    <Link href={"#"}>Show More Result</Link>
                                </div> */}
    </>
   
  )
}
