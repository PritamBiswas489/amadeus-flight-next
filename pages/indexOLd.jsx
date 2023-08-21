import Image from "next/image";
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}
import style from "./index.module.scss";
import Layout from "@/components/front/include/Layout";
import HomeFlightSearch from "@/sections/front/HomeFlightSearch";

import Loader from "@/components/front/include/Loader";

// import dynamic from "next/dynamic";
import React, { useState } from "react";
import DatePicker from "react-date-picker";

import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

import bg from "@/assets/front/images/home-banner.jpg";
import slOne from "@/assets/front/images/destination/1.jpg";
import slTwo from "@/assets/front/images/destination/2.jpg";
import slThree from "@/assets/front/images/destination/3.jpg";
import slFour from "@/assets/front/images/destination/4.jpg";
import bigName from "@/assets/front/images/big-name.svg";
import worry from "@/assets/front/images/worry.svg";
import flexibility from "@/assets/front/images/flexibility.svg";
import trusted from "@/assets/front/images/trusted.svg";
import populerFlight_1 from "@/assets/front/images/populer-flight/1.jpg";
import rTrip from "@/assets/front/images/r-trip.svg";
import plain_2 from "@/assets/front/images/plain-2.svg";
import adult from "@/assets/front/images/adult.svg";
import economy from "@/assets/front/images/economy.svg";
import map from "@/assets/front/images/map.svg";
// import search from "@/assets/front/images/search-icon.svg";
import searchWhite from "@/assets/front/images/search-white.svg";
import mapImg from "@/assets/front/images/map.png";
import envelope from "@/assets/front/images/envelope.svg";

import Link from "next/link";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });
// import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Home() {
    const [valueThree, onChangeThree] = useState(new Date());
    const options = {
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 2000,
        animateOut: "fadeOut",
        loop: true,
        margin: 20,
        stagePadding: 20,
        nav: true,
        dots: false,
        navElement: "div",
        // navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i> "],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            800: {
                items: 3,
            },
            1300: {
                items: 4,
            },
        },
    };

    return (
        <>
<<<<<<< HEAD
            <Loader />
=======
            {/* <Loader /> */}
>>>>>>> c17d83ce38496b98113e10a37ee3b7a360c5c01c
            <Layout>
                <section className={style.homeBanner} style={{ backgroundImage: `url(${bg.src})` }}>
                    <HomeFlightSearch isInner={false} execute={0} exceuteSearch={''} />
                </section>
                <section className={`destinationsSection ${style.bgWhite} ${style.destinationsSection}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className={style.sectionTitle}>
                                    <h2>These top destinations are just click away</h2>
                                </div>
                                <div className={style.citiesDestination}>
                                    <div className="tabArea">
                                        <ul className="nav mb-3" id="pills-tab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <Link
                                                    href="#"
                                                    className="nav-link active"
                                                    id="pills-home-tab"
                                                    data-bs-toggle="pill"
                                                    data-bs-target="#pills-home"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="pills-home"
                                                    aria-selected="true"
                                                >
                                                    Top Cities
                                                </Link>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <Link
                                                    href="#"
                                                    className="nav-link"
                                                    id="pills-profile-tab"
                                                    data-bs-toggle="pill"
                                                    data-bs-target="#pills-profile"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="pills-profile"
                                                    aria-selected="false"
                                                >
                                                    Top Destination
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tab-content" id="pills-tabContent">
                                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                            <OwlCarousel className="owl-theme" {...options}>
                                                <div className="item">
                                                    <div className={style.citiesDestinationBox}>
                                                        <Link href="#">
                                                            <Image
                                                                alt=""
                                                                src={slOne}
                                                                placeholder="logo"
                                                                // width={0}
                                                                // height={0}
                                                                sizes="100vw"
                                                                style={{ width: "100%", height: "auto" }}
                                                            />
                                                            <div className={style.destinationName}>
                                                                <h5>Lorem Ipsum</h5>
                                                                <h6>From $10,540 </h6>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className={style.citiesDestinationBox}>
                                                        <Link href="#">
                                                            <Image
                                                                alt=""
                                                                src={slTwo}
                                                                placeholder="logo"
                                                                // width={0}
                                                                // height={0}
                                                                sizes="100vw"
                                                                style={{ width: "100%", height: "auto" }}
                                                            />
                                                            <div className={style.destinationName}>
                                                                <h5>Lorem Ipsum</h5>
                                                                <h6>From $10,540 </h6>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className={style.citiesDestinationBox}>
                                                        <Link href="#">
                                                            <Image
                                                                alt=""
                                                                src={slThree}
                                                                placeholder="logo"
                                                                // width={0}
                                                                // height={0}
                                                                sizes="100vw"
                                                                style={{ width: "100%", height: "auto" }}
                                                            />
                                                            <div className={style.destinationName}>
                                                                <h5>Lorem Ipsum</h5>
                                                                <h6>From $10,540 </h6>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className={style.citiesDestinationBox}>
                                                        <Link href="#">
                                                            <Image
                                                                alt=""
                                                                src={slFour}
                                                                placeholder="logo"
                                                                // width={0}
                                                                // height={0}
                                                                sizes="100vw"
                                                                style={{ width: "100%", height: "auto" }}
                                                            />
                                                            <div className={style.destinationName}>
                                                                <h5>Lorem Ipsum</h5>
                                                                <h6>From $10,540 </h6>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className={style.citiesDestinationBox}>
                                                        <Link href="#">
                                                            <Image
                                                                alt=""
                                                                src={slThree}
                                                                placeholder="logo"
                                                                // width={0}
                                                                // height={0}
                                                                sizes="100vw"
                                                                style={{ width: "100%", height: "auto" }}
                                                            />
                                                            <div className={style.destinationName}>
                                                                <h5>Lorem Ipsum</h5>
                                                                <h6>From $10,540 </h6>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </OwlCarousel>
                                        </div>
                                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                            <OwlCarousel className="owl-theme" {...options}>
                                                <div className="item">
                                                    <div className={style.citiesDestinationBox}>
                                                        <Link href="#">
                                                            <Image
                                                                alt=""
                                                                src={slTwo}
                                                                placeholder="logo"
                                                                // width={0}
                                                                // height={0}
                                                                sizes="100vw"
                                                                style={{ width: "100%", height: "auto" }}
                                                            />
                                                            <div className={style.destinationName}>
                                                                <h5>Lorem Ipsum</h5>
                                                                <h6>From $10,540 </h6>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className={style.citiesDestinationBox}>
                                                        <Link href="#">
                                                            <Image
                                                                alt=""
                                                                src={slFour}
                                                                placeholder="logo"
                                                                // width={0}
                                                                // height={0}
                                                                sizes="100vw"
                                                                style={{ width: "100%", height: "auto" }}
                                                            />
                                                            <div className={style.destinationName}>
                                                                <h5>Lorem Ipsum</h5>
                                                                <h6>From $10,540 </h6>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className={style.citiesDestinationBox}>
                                                        <Link href="#">
                                                            <Image
                                                                alt=""
                                                                src={slThree}
                                                                placeholder="logo"
                                                                // width={0}
                                                                // height={0}
                                                                sizes="100vw"
                                                                style={{ width: "100%", height: "auto" }}
                                                            />
                                                            <div className={style.destinationName}>
                                                                <h5>Lorem Ipsum</h5>
                                                                <h6>From $10,540 </h6>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className={style.citiesDestinationBox}>
                                                        <Link href="#">
                                                            <Image
                                                                alt=""
                                                                src={slTwo}
                                                                placeholder="logo"
                                                                // width={0}
                                                                // height={0}
                                                                sizes="100vw"
                                                                style={{ width: "100%", height: "auto" }}
                                                            />
                                                            <div className={style.destinationName}>
                                                                <h5>Lorem Ipsum</h5>
                                                                <h6>From $10,540 </h6>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className={style.citiesDestinationBox}>
                                                        <Link href="#">
                                                            <Image
                                                                alt=""
                                                                src={slOne}
                                                                placeholder="logo"
                                                                // width={0}
                                                                // height={0}
                                                                sizes="100vw"
                                                                style={{ width: "100%", height: "auto" }}
                                                            />
                                                            <div className={style.destinationName}>
                                                                <h5>Lorem Ipsum</h5>
                                                                <h6>From $10,540 </h6>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </OwlCarousel>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={style.travelersChoose}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className={style.sectionTitle}>
                                    <h2>Why travelers choose mitigate flight</h2>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                                <div className={style.travelersChooseBox}>
                                    <span>
                                        <Image alt="" src={bigName} placeholder="logo" width={0} height={0} sizes="100vw" />
                                    </span>
                                    <h4>Big Names, great Deal</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                                <div className={style.travelersChooseBox}>
                                    <span>
                                        <Image alt="" src={worry} placeholder="logo" width={0} height={0} sizes="100vw" />
                                    </span>
                                    <h4>Search Without worry</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                                <div className={style.travelersChooseBox}>
                                    <span>
                                        <Image alt="" src={flexibility} placeholder="logo" width={0} height={0} sizes="100vw" />
                                    </span>
                                    <h4>book with flexibility</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                                <div className={style.travelersChooseBox}>
                                    <span>
                                        <Image alt="" src={trusted} placeholder="logo" width={0} height={0} sizes="100vw" />
                                    </span>
                                    <h4>Trusted and free</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={style.PopularFlights}>
                    <div className="container">
                        <div className="row g-3">
                            <div className="col-12">
                                <div className={style.sectionTitle}>
                                    <h2>Popular flights near you</h2>
                                    <p>Find Deals on domestic and international flights</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                <Link href={"#"} className={`d-flex align-items-center ${style.PopularFlightsBox}`}>
                                    <div className={style.pfbLeft}>
                                        <span>
                                            <Image alt="" src={populerFlight_1} placeholder="logo" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                        </span>
                                    </div>
                                    <div className={style.pfbRight}>
                                        <h5>
                                            <span>London</span>{" "}
                                            <span>
                                                <Image alt="" src={rTrip} placeholder="logo" width={25} height={14} sizes="100vw" />
                                            </span>{" "}
                                            <span>Lisbon</span>
                                        </h5>
                                        <p>
                                            <span>23rd may</span> - <span>29th may</span> round trip
                                        </p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                <Link href={"#"} className={`d-flex align-items-center ${style.PopularFlightsBox}`}>
                                    <div className={style.pfbLeft}>
                                        <span>
                                            <Image alt="" src={populerFlight_1} placeholder="logo" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                        </span>
                                    </div>
                                    <div className={style.pfbRight}>
                                        <h5>
                                            <span>London</span>{" "}
                                            <span>
                                                <Image alt="" src={rTrip} placeholder="logo" width={25} height={14} sizes="100vw" />
                                            </span>{" "}
                                            <span>Lisbon</span>
                                        </h5>
                                        <p>
                                            <span>23rd may</span> - <span>29th may</span> round trip
                                        </p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                <Link href={"#"} className={`d-flex align-items-center ${style.PopularFlightsBox}`}>
                                    <div className={style.pfbLeft}>
                                        <span>
                                            <Image alt="" src={populerFlight_1} placeholder="logo" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                        </span>
                                    </div>
                                    <div className={style.pfbRight}>
                                        <h5>
                                            <span>London</span>{" "}
                                            <span>
                                                <Image alt="" src={rTrip} placeholder="logo" width={25} height={14} sizes="100vw" />
                                            </span>{" "}
                                            <span>Lisbon</span>
                                        </h5>
                                        <p>
                                            <span>23rd may</span> - <span>29th may</span> round trip
                                        </p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                <Link href={"#"} className={`d-flex align-items-center ${style.PopularFlightsBox}`}>
                                    <div className={style.pfbLeft}>
                                        <span>
                                            <Image alt="" src={populerFlight_1} placeholder="logo" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                        </span>
                                    </div>
                                    <div className={style.pfbRight}>
                                        <h5>
                                            <span>London</span>{" "}
                                            <span>
                                                <Image alt="" src={rTrip} placeholder="logo" width={25} height={14} sizes="100vw" />
                                            </span>{" "}
                                            <span>Lisbon</span>
                                        </h5>
                                        <p>
                                            <span>23rd may</span> - <span>29th may</span> round trip
                                        </p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                <Link href={"#"} className={`d-flex align-items-center ${style.PopularFlightsBox}`}>
                                    <div className={style.pfbLeft}>
                                        <span>
                                            <Image alt="" src={populerFlight_1} placeholder="logo" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                        </span>
                                    </div>
                                    <div className={style.pfbRight}>
                                        <h5>
                                            <span>London</span>{" "}
                                            <span>
                                                <Image alt="" src={rTrip} placeholder="logo" width={25} height={14} sizes="100vw" />
                                            </span>{" "}
                                            <span>Lisbon</span>
                                        </h5>
                                        <p>
                                            <span>23rd may</span> - <span>29th may</span> round trip
                                        </p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                <Link href={"#"} className={`d-flex align-items-center ${style.PopularFlightsBox}`}>
                                    <div className={style.pfbLeft}>
                                        <span>
                                            <Image alt="" src={populerFlight_1} placeholder="logo" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                        </span>
                                    </div>
                                    <div className={style.pfbRight}>
                                        <h5>
                                            <span>London</span>{" "}
                                            <span>
                                                <Image alt="" src={rTrip} placeholder="logo" width={25} height={14} sizes="100vw" />
                                            </span>{" "}
                                            <span>Lisbon</span>
                                        </h5>
                                        <p>
                                            <span>23rd may</span> - <span>29th may</span> round trip
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={style.mapSection}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className={style.mapSectionWrap}>
                                    <div className={`d-flex flex-wrap justify-content-between align-items-center ${style.mapTop}`}>
                                        <div className={style.mapTopLeft}>
                                            <ul className="d-flex flex-wrap">
                                                <li>
                                                    <span>
                                                        <Image alt="" src={plain_2} placeholder="" width={16} height={16} />
                                                    </span>
                                                    <select>
                                                        <option value="">One way</option>
                                                        <option value="">Round Trip</option>
                                                    </select>
                                                </li>
                                                <li>
                                                    <span>
                                                        <Image alt="" src={adult} placeholder="" width={16} height={16} />
                                                    </span>
                                                    <select>
                                                        <option value="">1 Adult</option>
                                                        <option value="">2 Adult</option>
                                                        <option value="">3 Adult</option>
                                                    </select>
                                                </li>
                                                <li>
                                                    <span>
                                                        <Image alt="" src={economy} placeholder="logo" width={16} height={16} />
                                                    </span>
                                                    <select>
                                                        <option value="">Economy</option>
                                                        <option value="">Business</option>
                                                    </select>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={style.mapTopRight}>
                                            <p>
                                                Looking for Travel Ideas?{" "}
                                                <Link href="#">
                                                    Explore Map <Image alt="" src={map} placeholder="" width={20} height={20} />
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                    <div className={style.mapMid}>
                                        <div className="row g-3">
                                            <div className="col">
                                                <div className={style.mapMidInput}>
                                                    <label>From</label>
                                                    <input type="text" placeholder="New York" className={style["input-2"]} />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className={style.mapMidInput}>
                                                    <label>Departure</label>
                                                    <DatePicker onChange={onChangeThree} value={valueThree} />
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <button type="button" className={style.srcBtn}>
                                                    <Image alt="" src={searchWhite} placeholder="" width={24} height={25} sizes="100vw" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.mapImg}>
                                        <Image alt="" src={mapImg} placeholder="logo" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={style.newsLatter}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-auto col-md-auto col-sm-12">
                                <Image alt="" src={envelope} placeholder="" width={147} height={98} sizes="100vw" />
                            </div>
                            <div className="col-lg-auto col-md-auto col-sm-12">
                                <div className={style.newsLatterDesk}>
                                    <h5>Sign up for exclusive email for coupons</h5>
                                    <p>Exclusive access to coupons, special offers and promotion</p>
                                </div>
                            </div>
                            <div className="col-lg col-md col-sm-12">
                                <input type="text" placeholder="example@example.com" className={style["input-3"]} />
                            </div>
                            <div className="col-lg-auto col-md-auto col-sm-12">
                                <button type="button" className={style.sendDeal}>
                                    Send me deal
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}
