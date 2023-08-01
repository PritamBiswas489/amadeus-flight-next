import React from "react";
import style from "./index.module.scss";
import Layout from "@/components/front/include/Layout";

import support from "@/assets/front/images/support.jpg";
import cancelled from "@/assets/front/images/cancelled.svg";
import calender from "@/assets/front/images/calender-2.svg";
import refund from "@/assets/front/images/refund.svg";
import chat from "@/assets/front/images/chat-2.svg";
import plane from "@/assets/front/images/plane.svg";
import hotel from "@/assets/front/images/hotel.svg";
import deals from "@/assets/front/images/deals.svg";
import car from "@/assets/front/images/car.svg";
import ship from "@/assets/front/images/ship.svg";

import Link from "next/link";
import Image from "next/image";

const Support = () => {
    return (
        <>
            <Layout>
                <section className={style.supportBann} style={{ background: `url(${support.src})` }}>
                    <div className={style.supportSearchArea}>
                        <h2>What can we help you with today?</h2>
                        <div className={`d-flex align-items-center  ${style.supportSearch}`}>
                            <input type="text" placeholder="" className={style.supportSearchInput} />
                            <button className={style.supportSearchBtn}>Search</button>
                        </div>
                    </div>
                </section>
                <section className={style.virtualAgent}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="">
                                    <h2>Your Virtual Agent is here to help.</h2>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-3 col-md-6 col-6">
                                <Link href={"#"} className={style.virtualAgentBox}>
                                    <Image alt="" src={cancelled} placeholder="cancelled" width={62} height={62} /> Cancel your Trip
                                </Link>
                            </div>
                            <div className="col-lg-3 col-sm-3 col-md-6 col-6">
                                <Link href={"#"} className={style.virtualAgentBox}>
                                    <Image alt="" src={calender} placeholder="calender" width={62} height={62} /> Change your Trip
                                </Link>
                            </div>
                            <div className="col-lg-3 col-sm-3 col-md-6 col-6">
                                <Link href={"#"} className={style.virtualAgentBox}>
                                    <Image alt="" src={refund} placeholder="refund" width={62} height={62} /> Ask about refund
                                </Link>
                            </div>
                            <div className="col-lg-3 col-sm-3 col-md-6 col-6">
                                <Link href={"#"} className={style.virtualAgentBox}>
                                    <Image alt="" src={chat} placeholder="chat" width={62} height={62} /> Chat Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={style.categorySection}>
                    <div className="container">
                        <div className="row">
                            <div className={style.catMenu}>
                                <div className={style.catMenuInner}>
                                    <h4>Brows Help Topic</h4>
                                    <ul>
                                        <li>
                                            <Link href={"#"} className={style.active}>
                                                <Image alt="" src={plane} placeholder="plane" width={20} height={20} /> Flight
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"#"}>
                                                <Image alt="" src={hotel} placeholder="hotel" width={20} height={20} /> Hotel
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"#"}>
                                                <Image alt="" src={deals} placeholder="deals" width={20} height={20} /> Bundle Deals
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"#"}>
                                                <Image alt="" src={car} placeholder="car" width={20} height={20} /> cars
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"#"}>
                                                <Image alt="" src={ship} placeholder="ship" width={20} height={20} /> Cruise
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={style.catDesc}>
                                <div className={style.catDescInner}>
                                    <h4>Popular Topic</h4>
                                    <div className="accordion catDescInnerAccordion" id="accordionExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button
                                                    className="accordion-button"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseOne"
                                                    aria-expanded="true"
                                                    aria-controls="collapseOne"
                                                >
                                                    Refund time line policy and process
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className={`accordion-body ${style.accordionInner}`}>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                        Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.
                                                    </p>
                                                    <div className={style.topicHelpful}>
                                                        <h6>Was this topic helpful?</h6>
                                                        <ul className="d-flex">
                                                            <li>
                                                                <Link href={"#"}>yes</Link>
                                                            </li>
                                                            <li>
                                                                <Link href={"#"}>No</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseTwo"
                                                    aria-expanded="false"
                                                    aria-controls="collapseTwo"
                                                >
                                                    Use a Mitigate Coupon
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                <div className={`accordion-body ${style.accordionInner}`}>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                        Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.
                                                    </p>
                                                    <div className={style.topicHelpful}>
                                                        <h6>Was this topic helpful?</h6>
                                                        <ul className="d-flex">
                                                            <li>
                                                                <Link href={"#"}>yes</Link>
                                                            </li>
                                                            <li>
                                                                <Link href={"#"}>No</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingThree">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseThree"
                                                    aria-expanded="false"
                                                    aria-controls="collapseThree"
                                                >
                                                    Book a flight using an airline credit
                                                </button>
                                            </h2>
                                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                <div className={`accordion-body ${style.accordionInner}`}>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                        Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.
                                                    </p>
                                                    <div className={style.topicHelpful}>
                                                        <h6>Was this topic helpful?</h6>
                                                        <ul className="d-flex">
                                                            <li>
                                                                <Link href={"#"}>yes</Link>
                                                            </li>
                                                            <li>
                                                                <Link href={"#"}>No</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default Support;
