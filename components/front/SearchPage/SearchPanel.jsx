import React from 'react';
import LeftSearchPanel from "@/components/front/SearchPage/LeftSearchPanel";
import GraphPanel from "@/components/front/SearchPage/GraphPanel";
import ListPanel from "@/components/front/SearchPage/ListPanel";
import style from "@/pages/flight/search/index.module.scss";

export default function SearchPanel({count,dataOffers}) {
    const {offersWithAirlineDetails,  airlineDetails,airportDetails} = dataOffers.response;
    //console.log("================== Hello ==========================================");
    //console.log(offersWithAirlineDetails);
  return (
    <section className={style.filterList}>
    <div className="container">
        <div className="row">
            <LeftSearchPanel count={count}/>
            <div className={style.rightList}>
               <GraphPanel/>
              <ListPanel flightOffers={offersWithAirlineDetails}/>
            </div>
        </div>
    </div>
</section>
  )
}
