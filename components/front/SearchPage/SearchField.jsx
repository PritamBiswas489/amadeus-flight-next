import React from 'react';
import style from "@/pages/flight/search/index.module.scss";
import HomeFlightSearch from "@/sections/front/HomeFlightSearch";

export default function SearchField({triggerFunction, querySearchField, disablebtn}) {
  //console.log("============ SearchField ===============");
  return (
    <section className={style.innerFlightSreSection}>
                    <HomeFlightSearch disablebtn={disablebtn}  isInner={true} querySearchField={querySearchField} execute={1} exceuteSearch={(data)=>triggerFunction(data)}/>
                </section>
  )
}
