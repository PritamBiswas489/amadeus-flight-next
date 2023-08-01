import Layout from "@/components/admin/include/Layout";
import style from "./index.module.scss";
import Image from "next/image";
import React from "react";
import sms from "@/assets/front/images/plain-3.svg";
import arrowLongRight from "@/assets/front/images/arrow-long-right.svg";
import raiseClaim from "@/assets/front/images/raise-claim.svg";
import plain from "@/assets/front/images/plane.svg";
import plain4 from "@/assets/front/images/plain-4.svg";
import user from "@/assets/front/images/user.svg";
import Link from "next/link";

const MyTrip = () => {
    return (
        <>
            <Layout>
                <div className="dashboardRight">
                    <div className="dashboardRightInner">
                        <h4>
                            <Image alt="" src={sms} placeholder="sms" width={20} height={20} /> My Trip
                        </h4>
                    </div>
                    <div className={`${style.findBooking} ${style.whiteBox}`}>
                        <div className={style.itineraryNumber}>
                            <h4>Find Your Booking</h4>
                            <h6>Enter your itinerary number</h6>
                            <p>Your itinerary number was emailed to example@email.com</p>
                            <div className="row g-5">
                                <div className="col-lg-7 col-sm-7 col-md-7 col-12">
                                    <input type="text" placeholder="Itinerary number*" className={`form-control ${style.itineraryInput}`} />
                                </div>
                                <div className="col-lg-5 col-sm-5 col-md-5 col-12">
                                    <button className={`w-100 ${style.continueBtn}`}>Continue</button>
                                </div>
                            </div>
                            <div className={`pt-3 ${style.itineraryNumber}`}>
                                <Link href={"#"}>Forget your itinerary number?</Link>
                            </div>
                        </div>
                        <div className={style.differentAddress}>
                            <Link href={"#"}>
                                Find a booking you made using a different email address<span>Look up item you booked with another email or social media account</span>
                            </Link>
                        </div>

                        <div className="myTripTab">
                            <div className="w-100">
                                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link active"
                                            id="upcoming-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#upcoming"
                                            type="button"
                                            role="tab"
                                            aria-controls="upcoming"
                                            aria-selected="true"
                                        >
                                            upcoming
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="canceled-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#canceled"
                                            type="button"
                                            role="tab"
                                            aria-controls="canceled"
                                            aria-selected="false"
                                        >
                                            Canceled
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="completed-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#completed"
                                            type="button"
                                            role="tab"
                                            aria-controls="completed"
                                            aria-selected="false"
                                        >
                                            Completed
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="upcoming" role="tabpanel" aria-labelledby="upcoming-tab">
                                    <div className={style.tripTabBox}>
                                        <div className={`d-flex align-items-center justify-content-between ${style.tripTabBoxTop}`}>
                                            <div className={style.planeIcon}>
                                                <Image alt="" src={plain4} placeholder="plain" width={30} height={30} />
                                            </div>
                                            <div className={style.tripTabLeft}>
                                                <ul className={`d-flex align-items-center w-100 ${style.tripTabLeftTop}`}>
                                                    <li>New York</li>
                                                    <li>
                                                        <Image alt="" src={arrowLongRight} placeholder="arrowLongRight" width={16} height={10} />
                                                    </li>
                                                    <li>London</li>
                                                </ul>
                                                <ul className={`d-flex align-items-center w-100 ${style.tripTabLeftBtm}`}>
                                                    <li>Completed</li>
                                                    <li>
                                                        <span>One way Flight</span>
                                                    </li>
                                                    <li>Booking ID - NF255VP4MEWK58456</li>
                                                </ul>
                                            </div>
                                            <div className={style.tripTabRight}>
                                                <Link href={"#"} className={style.manageBooking}>
                                                    View & Manage Booking
                                                </Link>
                                            </div>
                                        </div>
                                        <div className={style.tripTabBoxBtm}>
                                            <div className="row align-items-center">
                                                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                                                    <ul>
                                                        <li>From</li>
                                                        <li className={style.dateTime}>10 Jul 23 6:55 PM</li>
                                                        <li>
                                                            <strong>(JKF)</strong> New York John F. Kennedy
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                                                    <ul>
                                                        <li>To</li>
                                                        <li className={style.dateTime}>10 Jul 23 6:55 PM</li>
                                                        <li>
                                                            <strong>(STN)</strong> London Stansted London
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                                                    <ul>
                                                        <li>
                                                            <Image alt="" src={plain} placeholder="plain" width={19} height={12} /> 6E 2193, 6E 6924
                                                        </li>
                                                        <li>
                                                            <Image alt="" src={user} placeholder="plain" width={19} height={12} /> Alexander + 1
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                                                    <Link href={"#"}>
                                                        <Image alt="" src={raiseClaim} placeholder="raiseClaim" width={19} height={12} /> Raise a claim
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.tripTabBox}>
                                        <div className={`d-flex align-items-center justify-content-between ${style.tripTabBoxTop}`}>
                                            <div className={style.planeIcon}>
                                                <Image alt="" src={plain4} placeholder="plain" width={30} height={30} />
                                            </div>
                                            <div className={style.tripTabLeft}>
                                                <ul className={`d-flex align-items-center w-100 ${style.tripTabLeftTop}`}>
                                                    <li>New York</li>
                                                    <li>
                                                        <Image alt="" src={arrowLongRight} placeholder="arrowLongRight" width={16} height={10} />
                                                    </li>
                                                    <li>London</li>
                                                </ul>
                                                <ul className={`d-flex align-items-center w-100 ${style.tripTabLeftBtm}`}>
                                                    <li>Completed</li>
                                                    <li>
                                                        <span>One way Flight</span>
                                                    </li>
                                                    <li>Booking ID - NF255VP4MEWK58456</li>
                                                </ul>
                                            </div>
                                            <div className={style.tripTabRight}>
                                                <Link href={"#"} className={style.manageBooking}>
                                                    View & Manage Booking
                                                </Link>
                                            </div>
                                        </div>
                                        <div className={style.tripTabBoxBtm}>
                                            <div className="row align-items-center">
                                                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                                                    <ul>
                                                        <li>From</li>
                                                        <li className={style.dateTime}>10 Jul 23 6:55 PM</li>
                                                        <li>
                                                            <strong>(JKF)</strong> New York John F. Kennedy
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                                                    <ul>
                                                        <li>To</li>
                                                        <li className={style.dateTime}>10 Jul 23 6:55 PM</li>
                                                        <li>
                                                            <strong>(STN)</strong> London Stansted London
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                                                    <ul>
                                                        <li>
                                                            <Image alt="" src={plain} placeholder="plain" width={19} height={12} /> 6E 2193, 6E 6924
                                                        </li>
                                                        <li>
                                                            <Image alt="" src={user} placeholder="plain" width={19} height={12} /> Alexander + 1
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                                                    <Link href={"#"}>
                                                        <Image alt="" src={raiseClaim} placeholder="raiseClaim" width={19} height={12} /> Raise a claim
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.tripTabBox}>
                                        <div className={`d-flex align-items-center justify-content-between ${style.tripTabBoxTop}`}>
                                            <div className={style.planeIcon}>
                                                <Image alt="" src={plain4} placeholder="plain" width={30} height={30} />
                                            </div>
                                            <div className={style.tripTabLeft}>
                                                <ul className={`d-flex align-items-center w-100 ${style.tripTabLeftTop}`}>
                                                    <li>New York</li>
                                                    <li>
                                                        <Image alt="" src={arrowLongRight} placeholder="arrowLongRight" width={16} height={10} />
                                                    </li>
                                                    <li>London</li>
                                                </ul>
                                                <ul className={`d-flex align-items-center w-100 ${style.tripTabLeftBtm}`}>
                                                    <li>Completed</li>
                                                    <li>
                                                        <span>One way Flight</span>
                                                    </li>
                                                    <li>Booking ID - NF255VP4MEWK58456</li>
                                                </ul>
                                            </div>
                                            <div className={style.tripTabRight}>
                                                <Link href={"#"} className={style.manageBooking}>
                                                    View & Manage Booking
                                                </Link>
                                            </div>
                                        </div>
                                        <div className={style.tripTabBoxBtm}>
                                            <div className="row align-items-center">
                                                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                                                    <ul>
                                                        <li>From</li>
                                                        <li className={style.dateTime}>10 Jul 23 6:55 PM</li>
                                                        <li>
                                                            <strong>(JKF)</strong> New York John F. Kennedy
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                                                    <ul>
                                                        <li>To</li>
                                                        <li className={style.dateTime}>10 Jul 23 6:55 PM</li>
                                                        <li>
                                                            <strong>(STN)</strong> London Stansted London
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                                                    <ul>
                                                        <li>
                                                            <Image alt="" src={plain} placeholder="plain" width={19} height={12} /> 6E 2193, 6E 6924
                                                        </li>
                                                        <li>
                                                            <Image alt="" src={user} placeholder="plain" width={19} height={12} /> Alexander + 1
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                                                    <Link href={"#"}>
                                                        <Image alt="" src={raiseClaim} placeholder="raiseClaim" width={19} height={12} /> Raise a claim
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="canceled" role="tabpanel" aria-labelledby="canceled-tab">
                                    2
                                </div>
                                <div className="tab-pane fade" id="completed" role="tabpanel" aria-labelledby="completed-tab">
                                    3
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default MyTrip;
