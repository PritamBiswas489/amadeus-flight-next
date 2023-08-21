import React from "react";
import style from "./index.module.scss";

import Layout from "@/components/front/include/Layout";
import Image from "next/image";

import Flight from "@/assets/front/images/cong.svg";
import congCheck from "@/assets/front/images/cong-check.svg";
import airAsia from "@/assets/front/images/air-asia2.svg";
import Link from "next/link";
const Conformation = () => {
    return (
        <>
            <Layout>
                <section className={style.conformation}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className={style.congBox}>
                                    <div className={`d-flex ${style.congBoxTop}`}>
                                        <div className={style.congBoxTopLeft}>
                                            <span>
                                                <Image alt="" src={Flight} placeholder="Flight" width={50} height={50} sizes="100vw" />
                                                <Image alt="" src={congCheck} placeholder="Flight" width={21} height={21} sizes="100vw" className={style.congCheckImg} />
                                            </span>
                                        </div>
                                        <div className={style.congBoxTopRight}>
                                            <h6>Dear Peter Gomes</h6>
                                            <h4>Congratulations! Your flight booking is on hold</h4>
                                            <ul className={style.referenceNumber}>
                                                <li>
                                                    Booking Reference Number - <span>005116G39684</span>
                                                </li>
                                                <li>
                                                    Thank you for booking your travel itinerary with
                                                    <Link href={"#"}>website.com</Link>
                                                </li>
                                            </ul>
                                            <ul className={style.status}>
                                                <li>
                                                    Booking status : <span>ON Hold</span>
                                                </li>
                                                <li>
                                                    Payment Due Date : <span>Sat 05 sep 2023</span>
                                                </li>
                                            </ul>
                                            <p>
                                                <Link href={"#"}>Click here</Link> to make the payment
                                            </p>
                                        </div>
                                    </div>
                                    <div className={style.congBoxBtm}>
                                        <h4>Flight Details</h4>
                                        <div className={`d-flex justify-content-between  ${style.congBoxBtmInner}`}>
                                            <div className={`d-flex align-items-center  ${style.congBoxBtmLeft}`}>
                                                <div className={style.congBoxImg}>
                                                    <span>
                                                        <Image alt="" src={airAsia} placeholder="Flight" width={60} height={60} sizes="100vw" />
                                                    </span>
                                                </div>
                                                <div className={`${style.congBoxText} ${style.congBoxDesc}`}>
                                                    <ul>
                                                        <li>Air Asia</li>
                                                        <li>AA-545</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className={style.congBoxDesc}>
                                                <ul>
                                                    <li>
                                                        New York John F. Kennedy <span>(JKF)</span>
                                                    </li>
                                                    <li>13th Jun 01:45</li>
                                                </ul>
                                            </div>
                                            <div className={style.congBoxDesc}>
                                                <ul>
                                                    <li>
                                                        London Stansted London <span>(STN)</span>
                                                    </li>
                                                    <li>14th Jun | 14:25</li>
                                                </ul>
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

export default Conformation;
