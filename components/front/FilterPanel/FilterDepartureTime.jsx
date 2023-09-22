import React from 'react';
import sun from "@/assets/front/images/sun.svg";
import sun2 from "@/assets/front/images/sun-2.svg";
import sun3 from "@/assets/front/images/sun-3.svg";
import mun from "@/assets/front/images/mun.svg";
import style from "@/pages/flight/search/index.module.scss";
import Image from "next/image";

export default function FilterDepartureTime() {
  return (
    <div className={style.departureTime}>
    <h6>Departure Time in New York</h6>
    <div className="row g-2">
        <div className="col-6">
            <div className={`d-flex  ${style.dtBox}`}>
                <div className={style.dtBoxLeft}>
                    <Image alt="" src={sun} placeholder="logo" width={21} height={14} />
                </div>
                <div className={style.dtBoxRight}>
                    <p>Early Morning</p>
                    <span>(12.00am - 04:59am)</span>
                </div>
            </div>
        </div>
        <div className="col-6">
            <div className={`d-flex  ${style.dtBox}`}>
                <div className={style.dtBoxLeft}>
                    <Image alt="" src={sun2} placeholder="logo" width={21} height={14} />
                </div>
                <div className={style.dtBoxRight}>
                    <p>Morning</p>
                    <span>((05.00am - 11:59am)</span>
                </div>
            </div>
        </div>
        <div className="col-6">
            <div className={`d-flex  ${style.dtBox}`}>
                <div className={style.dtBoxLeft}>
                    <Image alt="" src={sun3} placeholder="logo" width={21} height={14} />
                </div>
                <div className={style.dtBoxRight}>
                    <p>Morning</p>
                    <span>((05.00am - 11:59am)</span>
                </div>
            </div>
        </div>
        <div className="col-6">
            <div className={`d-flex  ${style.dtBox}`}>
                <div className={style.dtBoxLeft}>
                    <Image alt="" src={mun} placeholder="logo" width={21} height={14} />
                </div>
                <div className={style.dtBoxRight}>
                    <p>Morning</p>
                    <span>((05.00am - 11:59am)</span>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
