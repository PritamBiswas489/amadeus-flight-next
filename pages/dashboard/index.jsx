// import Layout from "@/components/front/include/Layout";
import Layout from "@/components/admin/include/Layout";
import style from "./index.module.scss";
import React from "react";
import Link from "next/link";

import profile from "@/assets/front/images/profile.jpg";
import discount from "@/assets/front/images/discount.svg";
import traveler from "@/assets/front/images/traveler.svg";
import coffee from "@/assets/front/images/coffee.svg";
import unlock from "@/assets/front/images/unlock.svg";
import discount2 from "@/assets/front/images/discount-2.svg";
import chart from "@/assets/front/images/chart.png";

import Image from "next/image";

const Dashboard = () => {
    return (
        <>
            <Layout>
                <div className={style.dashboardRight}>
                    <div className={style.dashboardRightInner}>
                        <h4>
                            <Image alt="" src={traveler} placeholder="traveler" width={20} height={20} /> Each user have a rank and depend on rank give a discount and advantages
                        </h4>
                        <div className={`${style.geniusLevel} ${style.whiteBox}`}>
                            <h5>You’re at Genius Level 1</h5>
                            <p>Complete 5 stays before 20 February 2025 to unlock Genius level 1</p>
                            <div className={style.geniusLevelStep}>
                                <div className={style.progress} style={{ width: `20%`, background: `#24A9E1` }}></div>
                                <div className={`${style.circle} ${style.active}`}>
                                    <span>Level 1</span>
                                </div>
                                <div className={style.circle}></div>
                                <div className={style.circle}></div>
                                <div className={style.circle}></div>
                                <div className={style.circle}></div>
                                <div className={`${style.circle} ${style.active}`}>
                                    <span>Level 2</span>
                                </div>
                            </div>
                        </div>
                        <div className={`${style.bookTravel} ${style.whiteBox}`}>
                            <h5>Book your next travel for less</h5>
                            <p>
                                Enjoy <strong>free lifetime access</strong> to genius level 1 discounts at <strong>participating property</strong> worldwide.
                            </p>
                            <div className={style.geniusDiscountArea}>
                                <div className="row g-3">
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className={style.geniusDiscount}>
                                            <div className={`d-flex align-items-center ${style.geniusDiscountTop}`}>
                                                <div className={style.geniusDiscountTopLeft}>
                                                    <span>
                                                        <Image alt="" src={discount} placeholder="discount" width={52} height={52} />
                                                    </span>
                                                </div>
                                                <div className={style.geniusDiscountTopRight}>
                                                    <h6>Genius Discount</h6>
                                                    <p>
                                                        Enjoy discounted stays at over 390,000 <strong>participating properties</strong> worldwide.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className={style.geniusLabel}>
                                                <div className="row g-3">
                                                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                                        <div className={`${style.geniusLabelBox} ${style.blueBg}`}>
                                                            <span>
                                                                <Image alt="" src={unlock} placeholder="unlock" width={11} height={11} /> Level 1
                                                            </span>
                                                            <h6>10% Discounts</h6>
                                                            <p>Applied to the price before taxes & charges</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                                        <div className={`${style.geniusLabelBox} ${style.greenBg}`}>
                                                            <span>
                                                                <Image alt="" src={unlock} placeholder="unlock" width={11} height={11} /> Level 1
                                                            </span>
                                                            <h6>10% Discounts</h6>
                                                            <p>Applied to the price before taxes & charges</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                                        <div className={`${style.geniusLabelBox} ${style.redBg}`}>
                                                            <span>
                                                                <Image alt="" src={unlock} placeholder="unlock" width={11} height={11} /> Level 1
                                                            </span>
                                                            <h6>10% Discounts</h6>
                                                            <p>Applied to the price before taxes & charges</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="row g-3">
                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                <div className={`d-flex ${style.facilities}`}>
                                                    <div className={style.facilitiesIcon}>
                                                        <Image alt="" src={coffee} placeholder="coffee" width={50} height={50} />
                                                        <span>Label 2</span>
                                                    </div>
                                                    <div className={style.facilitiesDesc}>
                                                        <h6>Free Breakfasts</h6>
                                                        <p>Waking up is easy with complimentary breakfast, available on select stays</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                <div className={`d-flex ${style.facilities}`}>
                                                    <div className={style.facilitiesIcon}>
                                                        <Image alt="" src={coffee} placeholder="coffee" width={50} height={50} />
                                                        <span>Label 2</span>
                                                    </div>
                                                    <div className={style.facilitiesDesc}>
                                                        <h6>Free Breakfasts</h6>
                                                        <p>Waking up is easy with complimentary breakfast, available on select stays</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                <div className={`d-flex ${style.facilities}`}>
                                                    <div className={style.facilitiesIcon}>
                                                        <Image alt="" src={coffee} placeholder="coffee" width={50} height={50} />
                                                        <span>Label 2</span>
                                                    </div>
                                                    <div className={style.facilitiesDesc}>
                                                        <h6>Free Breakfasts</h6>
                                                        <p>Waking up is easy with complimentary breakfast, available on select stays</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                <div className={`d-flex ${style.facilities}`}>
                                                    <div className={style.facilitiesIcon}>
                                                        <Image alt="" src={coffee} placeholder="coffee" width={50} height={50} />
                                                        <span>Label 2</span>
                                                    </div>
                                                    <div className={style.facilitiesDesc}>
                                                        <h6>Free Breakfasts</h6>
                                                        <p>Waking up is easy with complimentary breakfast, available on select stays</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${style.discoverLevels} ${style.whiteBox}`}>
                            <h4>Discover new levels of travel rewards</h4>
                            <p>
                                Each stay counts towards your progress in the programmed. Once unlocked, your discounts and travel rewards are yours to keep forever. Where will you
                                go next?
                            </p>
                            <div className={style.discoverLevelWrap}>
                                <div className="row g-3">
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                        <div className={style.discoverLevelBox}>
                                            <h5>Genius Level 1</h5>
                                            <div className={style.discoverLevelBoxInner}>
                                                <p>Unlock instant discounts at participating properties worldwide upon signing in.</p>
                                                <h6>
                                                    <Image alt="" src={discount2} placeholder="discount2" width={20} height={20} /> 10% Discount
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                        <div className={style.discoverLevelBox}>
                                            <h5>Genius Level 1</h5>
                                            <div className={style.discoverLevelBoxInner}>
                                                <p>Unlock instant discounts at participating properties worldwide upon signing in.</p>
                                                <h6>
                                                    <Image alt="" src={discount2} placeholder="discount2" width={20} height={20} /> 10% Discount
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                        <div className={style.discoverLevelBox}>
                                            <h5>Genius Level 1</h5>
                                            <div className={style.discoverLevelBoxInner}>
                                                <p>Unlock instant discounts at participating properties worldwide upon signing in.</p>
                                                <h6>
                                                    <Image alt="" src={discount2} placeholder="discount2" width={20} height={20} /> 10% Discount
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${style.infoGraph} ${style.whiteBox}`}>
                            <Image alt="" src={chart} placeholder="chart" sizes="100vw" style={{ maxWidth: "100%", height: "auto" }} />
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Dashboard;
