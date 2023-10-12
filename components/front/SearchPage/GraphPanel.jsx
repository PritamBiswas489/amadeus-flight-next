import React, { useEffect, useState } from "react";
import style from "./graphPannel.module.scss";
// import style from "@/pages/flight/search/index.module.scss";
import Image from "next/image";
import flexibleDate from "@/assets/front/images/flexible-date.jpg";

if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });
// import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useSelector } from "react-redux";
import { getCurrencySymbol, dateToMonthDay } from "@/service/Helpers";

export default function GraphPanel() {
  //console.log("============ GraphPanel ===============");
  const [graph, showGraph] = useState(false);
  const graphOffers = useSelector((state) => state["graphData"].offers);
  const currency = useSelector((state) => state["graphData"].currencyCode);
  const minTotalPrice = useSelector((state) => (state["graphData"].minTotalPrice));
  const maxTotalPrice = useSelector((state) => (state["graphData"].maxTotalPrice));


  

  useEffect(() => {
    if (graphOffers.length > 0) {
      showGraph(true);
    }
  }, [graphOffers]);

  const options = {
    autoplay: false,
    autoplayTimeout: 5000,
    smartSpeed: 2000,
    // animateOut: "fadeOut",
    loop: true,
    margin: 2,
    items: 10,
    // stagePadding: 20,
    nav: true,
    dots: false,
    navElement: "div",
  };

  return (
    <>
      {graph && (
        
        <div className="mapSlider">
          <OwlCarousel className="owl-theme" {...options}>
            {graphOffers.map((mapData,mapIndex) => {
               let percentage = 20; 
               if(mapData?.totalPrice){
                percentage = ((parseFloat(maxTotalPrice) - parseFloat(mapData.totalPrice)) / parseFloat(maxTotalPrice)) * 100;
                  
                return (
                  <div className="item" key={mapIndex}>
                    <div className={`${style.graphBoxCell} ${minTotalPrice === mapData?.totalPrice && style.active}`} >
                      <div
                        className={`d-flex justify-content-center align-items-end ${style.bar}`}
                      >
                        <div
                          className={`d-flex justify-content-center align-items-end ${style.barWrap}`}
                        >
                          <span style={{ height: `${100-percentage}%` }}></span>
                        </div>
                      </div>
                      <div className={style.monthPrice}>
                        {dateToMonthDay(mapData?.dep_date?.[0])}<span>{getCurrencySymbol(currency)}{mapData?.totalPrice}</span>
                      </div>
                    </div>
                  </div>
                );
                
               }
              
            })}
          </OwlCarousel>
          <style>
        {`
          .owl-carousel {
            height: 140px; /* Set your desired height here */
          }
           
        `}
      </style>
        </div>
      )}
    </>
  );
}
