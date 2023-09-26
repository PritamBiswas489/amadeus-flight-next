import React, { useState } from "react";
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

export default function GraphPanel() {
    //console.log("============ GraphPanel ===============");
    const [graph, showGraph] = useState(true);

    const options = {
        autoplay: false,
        autoplayTimeout: 5000,
        smartSpeed: 2000,
        // animateOut: "fadeOut",
        loop: true,
        margin: 20,
        items: 1,
        // stagePadding: 20,
        nav: true,
        dots: false,
        navElement: "div",

        // responsive: {
        //     0: {
        //         items: 1,
        //     },
        //     600: {
        //         items: 2,
        //     },
        //     800: {
        //         items: 3,
        //     },
        //     1300: {
        //         items: 4,
        //     },
        // },
    };

    return (
        <>
            {/* {graph && (
                <div className="">
                    <Image alt="" src={flexibleDate} placeholder="flexibleDate" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                </div>
            )} */}
            <div className="mapSlider">
                <OwlCarousel className="owl-theme" {...options}>
                    <div className="item">
                        <div className={`d-flex align-items-end ${style.graphBox}`}>
                            <div className={style.graphBoxCell}>
                                <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                                    <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                                        <span style={{ height: "40%" }}></span>
                                    </div>
                                </div>
                                <div className={style.monthPrice}>
                                    May 1<span>$60,420</span>
                                </div>
                            </div>
                            <div className={`${style.graphBoxCell} ${style.active}`}>
                                <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                                    <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                                        <span style={{ height: "60%" }}></span>
                                    </div>
                                </div>
                                <div className={style.monthPrice}>
                                    May 1<span>$60,420</span>
                                </div>
                            </div>
                            <div className={`${style.graphBoxCell} ${style.active}`}>
                                <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                                    <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                                        <span style={{ height: "80%" }}></span>
                                    </div>
                                </div>
                                <div className={style.monthPrice}>
                                    May 1<span>$60,420</span>
                                </div>
                            </div>
                            <div className={`${style.graphBoxCell} ${style.active}`}>
                                <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                                    <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                                        <span style={{ height: "80%" }}></span>
                                    </div>
                                </div>
                                <div className={style.monthPrice}>
                                    May 1<span>$60,420</span>
                                </div>
                            </div>
                            <div className={style.graphBoxCell}>
                                <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                                    <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                                        <span style={{ height: "20%" }}></span>
                                    </div>
                                </div>
                                <div className={style.monthPrice}>
                                    May 1<span>$60,420</span>
                                </div>
                            </div>
                            <div className={style.graphBoxCell}>
                                <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                                    <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                                        <span style={{ height: "45%" }}></span>
                                    </div>
                                </div>
                                <div className={style.monthPrice}>
                                    May 1<span>$60,420</span>
                                </div>
                            </div>
                            <div className={style.graphBoxCell}>
                                <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                                    <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                                        <span style={{ height: "40%" }}></span>
                                    </div>
                                </div>
                                <div className={style.monthPrice}>
                                    May 1<span>$60,420</span>
                                </div>
                            </div>
                            <div className={`${style.graphBoxCell} ${style.active}`}>
                                <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                                    <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                                        <span style={{ height: "60%" }}></span>
                                    </div>
                                </div>
                                <div className={style.monthPrice}>
                                    May 1<span>$60,420</span>
                                </div>
                            </div>
                            <div className={`${style.graphBoxCell} ${style.active}`}>
                                <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                                    <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                                        <span style={{ height: "80%" }}></span>
                                    </div>
                                </div>
                                <div className={style.monthPrice}>
                                    May 1<span>$60,420</span>
                                </div>
                            </div>
                            <div className={`${style.graphBoxCell} ${style.active}`}>
                                <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                                    <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                                        <span style={{ height: "80%" }}></span>
                                    </div>
                                </div>
                                <div className={style.monthPrice}>
                                    May 1<span>$60,420</span>
                                </div>
                            </div>
                            <div className={style.graphBoxCell}>
                                <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                                    <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                                        <span style={{ height: "20%" }}></span>
                                    </div>
                                </div>
                                <div className={style.monthPrice}>
                                    May 1<span>$60,420</span>
                                </div>
                            </div>
                            <div className={style.graphBoxCell}>
                                <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                                    <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                                        <span style={{ height: "45%" }}></span>
                                    </div>
                                </div>
                                <div className={style.monthPrice}>
                                    May 1<span>$60,420</span>
                                </div>
                            </div>
                            <div className={`${style.graphBoxCell} ${style.active}`}>
                                <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                                    <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                                        <span style={{ height: "60%" }}></span>
                                    </div>
                                </div>
                                <div className={style.monthPrice}>
                                    May 1<span>$60,420</span>
                                </div>
                            </div>
                            <div className={`${style.graphBoxCell} ${style.active}`}>
                                <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                                    <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                                        <span style={{ height: "80%" }}></span>
                                    </div>
                                </div>
                                <div className={style.monthPrice}>
                                    May 1<span>$60,420</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className={`d-flex align-items-end ${style.graphBox}`}>
                            <div className={style.graphBoxCell}>
                                <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                                    <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                                        <span style={{ height: "40%" }}></span>
                                    </div>
                                </div>
                                <div className={style.monthPrice}>
                                    May 1<span>$60,420</span>
                                </div>
                            </div>
                            <div className={`${style.graphBoxCell} ${style.active}`}>
                                <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                                    <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                                        <span style={{ height: "60%" }}></span>
                                    </div>
                                </div>
                                <div className={style.monthPrice}>
                                    May 1<span>$60,420</span>
                                </div>
                            </div>
                            <div className={`${style.graphBoxCell} ${style.active}`}>
                                <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                                    <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                                        <span style={{ height: "80%" }}></span>
                                    </div>
                                </div>
                                <div className={style.monthPrice}>
                                    May 1<span>$60,420</span>
                                </div>
                            </div>
                            <div className={`${style.graphBoxCell} ${style.active}`}>
                                <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                                    <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                                        <span style={{ height: "80%" }}></span>
                                    </div>
                                </div>
                                <div className={style.monthPrice}>
                                    May 1<span>$60,420</span>
                                </div>
                            </div>
                            <div className={style.graphBoxCell}>
                                <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                                    <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                                        <span style={{ height: "20%" }}></span>
                                    </div>
                                </div>
                                <div className={style.monthPrice}>
                                    May 1<span>$60,420</span>
                                </div>
                            </div>
                            <div className={style.graphBoxCell}>
                                <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                                    <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                                        <span style={{ height: "45%" }}></span>
                                    </div>
                                </div>
                                <div className={style.monthPrice}>
                                    May 1<span>$60,420</span>
                                </div>
                            </div>
                            <div className={style.graphBoxCell}>
                                <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                                    <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                                        <span style={{ height: "40%" }}></span>
                                    </div>
                                </div>
                                <div className={style.monthPrice}>
                                    May 1<span>$60,420</span>
                                </div>
                            </div>
                            <div className={`${style.graphBoxCell} ${style.active}`}>
                                <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                                    <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                                        <span style={{ height: "60%" }}></span>
                                    </div>
                                </div>
                                <div className={style.monthPrice}>
                                    May 1<span>$60,420</span>
                                </div>
                            </div>
                            <div className={`${style.graphBoxCell} ${style.active}`}>
                                <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                                    <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                                        <span style={{ height: "80%" }}></span>
                                    </div>
                                </div>
                                <div className={style.monthPrice}>
                                    May 1<span>$60,420</span>
                                </div>
                            </div>
                            <div className={`${style.graphBoxCell} ${style.active}`}>
                                <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                                    <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                                        <span style={{ height: "80%" }}></span>
                                    </div>
                                </div>
                                <div className={style.monthPrice}>
                                    May 1<span>$60,420</span>
                                </div>
                            </div>
                            <div className={style.graphBoxCell}>
                                <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                                    <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                                        <span style={{ height: "20%" }}></span>
                                    </div>
                                </div>
                                <div className={style.monthPrice}>
                                    May 1<span>$60,420</span>
                                </div>
                            </div>
                            <div className={style.graphBoxCell}>
                                <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                                    <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                                        <span style={{ height: "45%" }}></span>
                                    </div>
                                </div>
                                <div className={style.monthPrice}>
                                    May 1<span>$60,420</span>
                                </div>
                            </div>
                            <div className={`${style.graphBoxCell} ${style.active}`}>
                                <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                                    <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                                        <span style={{ height: "60%" }}></span>
                                    </div>
                                </div>
                                <div className={style.monthPrice}>
                                    May 1<span>$60,420</span>
                                </div>
                            </div>
                            <div className={`${style.graphBoxCell} ${style.active}`}>
                                <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                                    <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                                        <span style={{ height: "80%" }}></span>
                                    </div>
                                </div>
                                <div className={style.monthPrice}>
                                    May 1<span>$60,420</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className={`d-flex align-items-end ${style.graphBox}`}>
                            <div className={style.graphBoxCell}>
                                <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                                    <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                                        <span style={{ height: "40%" }}></span>
                                    </div>
                                </div>
                                <div className={style.monthPrice}>
                                    May 1<span>$60,420</span>
                                </div>
                            </div>
                            <div className={`${style.graphBoxCell} ${style.active}`}>
                                <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                                    <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                                        <span style={{ height: "60%" }}></span>
                                    </div>
                                </div>
                                <div className={style.monthPrice}>
                                    May 1<span>$60,420</span>
                                </div>
                            </div>
                            <div className={`${style.graphBoxCell} ${style.active}`}>
                                <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                                    <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                                        <span style={{ height: "80%" }}></span>
                                    </div>
                                </div>
                                <div className={style.monthPrice}>
                                    May 1<span>$60,420</span>
                                </div>
                            </div>
                            <div className={`${style.graphBoxCell} ${style.active}`}>
                                <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                                    <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                                        <span style={{ height: "80%" }}></span>
                                    </div>
                                </div>
                                <div className={style.monthPrice}>
                                    May 1<span>$60,420</span>
                                </div>
                            </div>
                            <div className={style.graphBoxCell}>
                                <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                                    <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                                        <span style={{ height: "20%" }}></span>
                                    </div>
                                </div>
                                <div className={style.monthPrice}>
                                    May 1<span>$60,420</span>
                                </div>
                            </div>
                            <div className={style.graphBoxCell}>
                                <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                                    <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                                        <span style={{ height: "45%" }}></span>
                                    </div>
                                </div>
                                <div className={style.monthPrice}>
                                    May 1<span>$60,420</span>
                                </div>
                            </div>
                            <div className={style.graphBoxCell}>
                                <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                                    <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                                        <span style={{ height: "40%" }}></span>
                                    </div>
                                </div>
                                <div className={style.monthPrice}>
                                    May 1<span>$60,420</span>
                                </div>
                            </div>
                            <div className={`${style.graphBoxCell} ${style.active}`}>
                                <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                                    <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                                        <span style={{ height: "60%" }}></span>
                                    </div>
                                </div>
                                <div className={style.monthPrice}>
                                    May 1<span>$60,420</span>
                                </div>
                            </div>
                            <div className={`${style.graphBoxCell} ${style.active}`}>
                                <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                                    <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                                        <span style={{ height: "80%" }}></span>
                                    </div>
                                </div>
                                <div className={style.monthPrice}>
                                    May 1<span>$60,420</span>
                                </div>
                            </div>
                            <div className={`${style.graphBoxCell} ${style.active}`}>
                                <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                                    <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                                        <span style={{ height: "80%" }}></span>
                                    </div>
                                </div>
                                <div className={style.monthPrice}>
                                    May 1<span>$60,420</span>
                                </div>
                            </div>
                            <div className={style.graphBoxCell}>
                                <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                                    <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                                        <span style={{ height: "20%" }}></span>
                                    </div>
                                </div>
                                <div className={style.monthPrice}>
                                    May 1<span>$60,420</span>
                                </div>
                            </div>
                            <div className={style.graphBoxCell}>
                                <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                                    <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                                        <span style={{ height: "45%" }}></span>
                                    </div>
                                </div>
                                <div className={style.monthPrice}>
                                    May 1<span>$60,420</span>
                                </div>
                            </div>
                            <div className={`${style.graphBoxCell} ${style.active}`}>
                                <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                                    <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                                        <span style={{ height: "60%" }}></span>
                                    </div>
                                </div>
                                <div className={style.monthPrice}>
                                    May 1<span>$60,420</span>
                                </div>
                            </div>
                            <div className={`${style.graphBoxCell} ${style.active}`}>
                                <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                                    <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                                        <span style={{ height: "80%" }}></span>
                                    </div>
                                </div>
                                <div className={style.monthPrice}>
                                    May 1<span>$60,420</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
            {/* <div className={`d-flex align-items-end ${style.graphBox}`}>
                <div className={style.graphBoxCell}>
                    <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                        <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                            <span style={{ height: "40%" }}></span>
                        </div>
                    </div>
                    <div className={style.monthPrice}>
                        May 1<span>$60,420</span>
                    </div>
                </div>
                <div className={`${style.graphBoxCell} ${style.active}`}>
                    <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                        <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                            <span style={{ height: "60%" }}></span>
                        </div>
                    </div>
                    <div className={style.monthPrice}>
                        May 1<span>$60,420</span>
                    </div>
                </div>
                <div className={`${style.graphBoxCell} ${style.active}`}>
                    <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                        <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                            <span style={{ height: "80%" }}></span>
                        </div>
                    </div>
                    <div className={style.monthPrice}>
                        May 1<span>$60,420</span>
                    </div>
                </div>
                <div className={`${style.graphBoxCell} ${style.active}`}>
                    <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                        <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                            <span style={{ height: "80%" }}></span>
                        </div>
                    </div>
                    <div className={style.monthPrice}>
                        May 1<span>$60,420</span>
                    </div>
                </div>
                <div className={style.graphBoxCell}>
                    <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                        <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                            <span style={{ height: "20%" }}></span>
                        </div>
                    </div>
                    <div className={style.monthPrice}>
                        May 1<span>$60,420</span>
                    </div>
                </div>
                <div className={style.graphBoxCell}>
                    <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                        <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                            <span style={{ height: "45%" }}></span>
                        </div>
                    </div>
                    <div className={style.monthPrice}>
                        May 1<span>$60,420</span>
                    </div>
                </div>
                <div className={style.graphBoxCell}>
                    <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                        <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                            <span style={{ height: "40%" }}></span>
                        </div>
                    </div>
                    <div className={style.monthPrice}>
                        May 1<span>$60,420</span>
                    </div>
                </div>
                <div className={`${style.graphBoxCell} ${style.active}`}>
                    <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                        <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                            <span style={{ height: "60%" }}></span>
                        </div>
                    </div>
                    <div className={style.monthPrice}>
                        May 1<span>$60,420</span>
                    </div>
                </div>
                <div className={`${style.graphBoxCell} ${style.active}`}>
                    <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                        <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                            <span style={{ height: "80%" }}></span>
                        </div>
                    </div>
                    <div className={style.monthPrice}>
                        May 1<span>$60,420</span>
                    </div>
                </div>
                <div className={`${style.graphBoxCell} ${style.active}`}>
                    <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                        <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                            <span style={{ height: "80%" }}></span>
                        </div>
                    </div>
                    <div className={style.monthPrice}>
                        May 1<span>$60,420</span>
                    </div>
                </div>
                <div className={style.graphBoxCell}>
                    <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                        <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                            <span style={{ height: "20%" }}></span>
                        </div>
                    </div>
                    <div className={style.monthPrice}>
                        May 1<span>$60,420</span>
                    </div>
                </div>
                <div className={style.graphBoxCell}>
                    <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                        <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                            <span style={{ height: "45%" }}></span>
                        </div>
                    </div>
                    <div className={style.monthPrice}>
                        May 1<span>$60,420</span>
                    </div>
                </div>
                <div className={`${style.graphBoxCell} ${style.active}`}>
                    <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                        <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                            <span style={{ height: "60%" }}></span>
                        </div>
                    </div>
                    <div className={style.monthPrice}>
                        May 1<span>$60,420</span>
                    </div>
                </div>
                <div className={`${style.graphBoxCell} ${style.active}`}>
                    <div className={`d-flex justify-content-center align-items-end ${style.bar}`}>
                        <div className={`d-flex justify-content-center align-items-end ${style.barWrap}`}>
                            <span style={{ height: "80%" }}></span>
                        </div>
                    </div>
                    <div className={style.monthPrice}>
                        May 1<span>$60,420</span>
                    </div>
                </div>
            </div> */}
        </>
    );
}
