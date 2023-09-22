import React from 'react';
import LeftSearchPanel from "@/components/front/SearchPage/LeftSearchPanel";
import GraphPanel from "@/components/front/SearchPage/GraphPanel";
import Sorting from "@/components/front/SearchPage/Sorting";
import ListPanel from "@/components/front/SearchPage/ListPanel";
import style from "@/pages/flight/search/index.module.scss";

 
 

export default function SearchPanel({}) { 
  console.log("============ SearchPanel ===============");
 
 
  return (
    <section className={style.filterList}>
    <div className="container">
        <div className="row">
            <LeftSearchPanel />
            <div className={style.rightList}>
               <GraphPanel/>
               <Sorting/>
              <ListPanel/>
            </div>
        </div>
    </div>
</section>
  )
}
