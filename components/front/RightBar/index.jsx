import React from "react";
import style from "./index.module.scss";
import Image from "next/image";

import handBag from "@/assets/front/images/hand-bag-2.svg";
import handBag3 from "@/assets/front/images/bag-3.svg";
import Link from "next/link";

import airAsia from "@/assets/front/images/air-asia.svg";
import alarm from "@/assets/front/images/alarm-clock.svg";

const RightBar = () => {
    return (
        <>
            <div className={style.yourOrder}>
                <h5>Your Order</h5>
                <div className={style.yourOrderBox}>
                    <div className={style.yourOrderInner}>
                        <span className={style.airAsia}>
                            <Image alt="" src={airAsia} placeholder="airAsia" width={20} height={20} />
                        </span>
                        <h6>Departure</h6>
                        <ul>
                            <li>Tue 13th Jun 2023</li>
                            <li>
                                <span>15:30 - 23:15</span> (9h 15min)
                            </li>
                            <li>DEL New Delhi - Auh Abu Dhabi</li>
                        </ul>
                    </div>
                    <div className={`mb-3 ${style.yourOrderInner}`}>
                        <span className={style.airAsia}>
                            <Image alt="" src={airAsia} placeholder="airAsia" width={20} height={20} />
                        </span>
                        <h6>Departure</h6>
                        <ul>
                            <li>Tue 13th Jun 2023</li>
                            <li>
                                <span>15:30 - 23:15</span> (9h 15min)
                            </li>
                            <li>DEL New Delhi - Auh Abu Dhabi</li>
                        </ul>
                    </div>
                </div>
                <div className={style.yourOrderBox}>
                    <div className={`${style.yourOrderInner} ${style.travelDetails}`}>
                        <h4>Travel Details</h4>
                        <h6>Bags</h6>
                        <div className={style.bagsBox}>
                            <h6>
                                <Image alt="" src={handBag} placeholder="handBag" width={10} height={10} /> Personal Item
                            </h6>
                            <p>Personal item included for all passengers</p>
                        </div>
                        <div className={style.bagsBox}>
                            <h6>
                                <Image alt="" src={handBag} placeholder="handBag" width={10} height={10} /> Personal Item
                            </h6>
                            <p>1x6 kg included for all passenger</p>
                        </div>
                        <div className={style.bagsBox}>
                            <h6>
                                <Image alt="" src={handBag3} placeholder="handBag" width={10} height={10} /> Personal Item
                            </h6>
                            <p>2x23 kg for each passenger</p>
                        </div>
                    </div>
                </div>
                <div className={`${style.yourOrderBox} ${style.yourOrderTable}`}>
                    <table class="table table-borderless">
                        <thead>
                            <tr>
                                <th scope="col">Peter Gomes, adult</th>
                                <th scope="col" className="text-end">
                                    US$544.98
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Price per adult</td>
                                <td className="text-end">US$544.98</td>
                            </tr>
                            <tr>
                                <td>Flexible Ticket</td>
                                <td className="text-end">US$83.13</td>
                            </tr>
                            <tr>
                                <td>
                                    <Link href={"#"}>Taxes, Airline fee and agent booking fee</Link>
                                </td>
                                <td className="text-end">US$133.34</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={`${style.yourOrderBox} ${style.yourOrderTable}`}>
                    <table class="table table-borderless">
                        <thead>
                            <tr>
                                <th scope="col" colSpan={2}>
                                    Total Amount
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Subtotal</td>
                                <td className="text-end">US$544.98</td>
                            </tr>
                            <tr>
                                <td>
                                    <Link href={"#"}>Payment Option</Link>
                                    <strong>Amount to pay</strong>
                                </td>
                                <td className="text-end">US$544.98</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
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
