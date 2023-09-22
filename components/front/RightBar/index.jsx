import React from "react";
import style from "./index.module.scss";
import Image from "next/image";
import handBag from "@/assets/front/images/hand-bag-2.svg";

import alarm from "@/assets/front/images/alarm-clock.svg";
import BookingDetails from "./BookingDetails";
import TotalPanel from "./TotalPanel";

const RightBar = ({dt}) => {
    const {
        totalPrice,
        currency,
        cabinClass,
        baggage,
        baggageQty,
        itineraries,
    } = dt;
    
    return (
        <>
            <div className={style.yourOrder}>
                <h5>Your Order</h5>
                {itineraries.map((itinerary,itineraryIndex)=>{
                   return <BookingDetails key={itineraryIndex}
                   itinerary={itinerary}
                   />
                })}
                <div className={style.yourOrderBox}>
                    <div className={`${style.yourOrderInner} ${style.travelDetails}`}>
                        <h4>Travel Details</h4>
                        <h6>Bags</h6>
                        <div className={style.bagsBox}>
                            <h6>
                                <Image alt="" src={handBag} placeholder="handBag" width={10} height={10} /> Personal Item
                            </h6>
                            <p>1x6 kg included for all passenger</p>
                        </div>
                    </div>
                </div>
                <TotalPanel totalPrice={totalPrice} currency={currency}/>
                <div className={style.hurry}>
                    <h4>
                        <Image alt="" src={alarm} placeholder="handBag" width={16} height={16} /> Hurry! Only 1 seat at this price!
                    </h4>
                </div>
            </div>
        </>
    );
};

export default RightBar;
