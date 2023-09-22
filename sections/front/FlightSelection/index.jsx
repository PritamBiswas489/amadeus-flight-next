import React from "react";
import style from "./index.module.scss";
import Image from "next/image";

import RightBar from "@/components/front/RightBar";




 
import ContactInformation from "@/components/front/FlightSelectionPanel/ContactInformation";
import PassengerInformation from "@/components/front/FlightSelectionPanel/PassengerInformation";
import ConfigureTrip from "@/components/front/FlightSelectionPanel/ConfigureTrip";
import DetailSubmitPanel from "@/components/front/FlightSelectionPanel/DetailSubmitPanel";

const FlightSelection = ({dt}) => {
    const {travelerPricings} = dt;
    return (
        <>
            <div className={style.stepDtlsSection}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-8 col-12">
                            <ContactInformation/>
                           {travelerPricings && travelerPricings.map((tpData,tpIndex)=>{
                                   return <PassengerInformation tpData={tpData} key={tpIndex}/>
                           })}
                           
                            <ConfigureTrip/>
                            <DetailSubmitPanel/>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-4 col-12">
                            <RightBar dt={dt} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FlightSelection;
