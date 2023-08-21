import React, { useEffect, useState } from "react";
import Image from "next/image";
import style from "./index.module.scss";
import cartIcon from "@/assets/front/images/cart-icon.png";
import gpay from "@/assets/front/images/gpay.png";
import affirm from "@/assets/front/images/affirm.png";
import paypal from "@/assets/front/images/paypal.png";
import cvv from "@/assets/front/images/cvv.svg";
import priceTag from "@/assets/front/images/price-tag.svg";
import plus from "@/assets/front/images/plus.svg";
import shield from "@/assets/front/images/shield.svg";
import tick from "@/assets/front/images/tick-2.svg";

import RightBar from "@/components/front/RightBar";
import Link from "next/link";

const Payment = ({dt}) => {
    const [inactive, setActive] = useState("false");

    const ToggleClass = () => {
        setActive(!inactive);
    };
    return (
        <>
            <section className={style.payment}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-8 col-12">
                            <div className={`${style.whiteBdrBox} ${style.paymentBox}`}>
                                <div className={style.paymentBoxTop}>
                                    <h5>Choose your payment Method</h5>
                                </div>
                                <div className={style.paymentBoxBtm}>
                                    <div className={style.radioWrap}>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className={`form-check ${style.paymentRadio}`}>
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="rd-1" />
                                                <label className="form-check-label" htmlFor="rd-1" onClick={ToggleClass}>
                                                    Debit Card / Credit Card<small>No Fee</small>
                                                </label>
                                            </div>
                                            <div>
                                                <Image alt="" src={cartIcon} placeholder="cartIcon" width={183} height={26} />
                                            </div>
                                        </div>
                                        <div className={`toggleForm ${inactive ? "inActive" : "isActive"}`}>
                                            <form>
                                                <div className={`mb-3 position-relative  ${style.paymentForm}`}>
                                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                                        Card Number *
                                                    </label>
                                                    <input type="text" className="form-control" id="" placeholder="e.g. 1234567890" />
                                                </div>
                                                <div className={`mb-3 position-relative  ${style.paymentForm}`}>
                                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                                        Name on Card
                                                    </label>
                                                    <input type="text" className="form-control" id="" placeholder="Jason Hales Martin" />
                                                </div>
                                                <div className={`mb-3 position-relative  ${style.paymentForm}`}>
                                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                                        Expiry Date
                                                    </label>
                                                    <input type="text" className="form-control" id="" placeholder="DD | MM | YYYY" />
                                                </div>
                                                <div className={`mb-3 position-relative  ${style.paymentForm}`}>
                                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                                        CVV
                                                    </label>
                                                    <input type="text" className="form-control" id="" placeholder="Je.g. 123" />
                                                    <span>
                                                        <Image alt="" src={cvv} placeholder="cvv" width={27} height={18} />
                                                    </span>
                                                </div>
                                                <div className="mb-3 futureBooking">
                                                    <div className="checkbox custom-2">
                                                        <label>
                                                            <input type="checkbox" /> Save this card for my future booking.
                                                        </label>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    <div className={style.radioWrap}>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className={`form-check ${style.paymentRadio}`}>
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="rd-2" />
                                                <label className="form-check-label" htmlFor="rd-2">
                                                    Google Pay<small>No Fee</small>
                                                </label>
                                            </div>
                                            <div className="">
                                                <Image alt="" src={gpay} placeholder="gpay" width={51} height={20} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.radioWrap}>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className={`form-check ${style.paymentRadio}`}>
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="rd-3" />
                                                <label className="form-check-label" htmlFor="rd-3">
                                                    Affirm<small>No Fee</small>
                                                </label>
                                            </div>
                                            <div className="">
                                                <Image alt="" src={affirm} placeholder="affirm" width={51} height={20} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.radioWrap}>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className={`form-check ${style.paymentRadio}`}>
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="rd-3" />
                                                <label className="form-check-label" htmlFor="rd-3">
                                                    PayPal<small>No Fee</small>
                                                </label>
                                            </div>
                                            <div className="">
                                                <Image alt="" src={paypal} placeholder="paypal" width={76} height={20} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`${style.whiteBdrBox} ${style.discountVoucher}`}>
                                <div className={`d-flex justify-content-between align-items-center  ${style.discountVoucherTop}`}>
                                    <h5>
                                        <Image alt="" src={priceTag} placeholder="priceTag" width={18} height={19} /> Want to add discount voucher?
                                        <Link href={"#"}>Click here</Link>
                                    </h5>
                                    <Link href={"#"}>
                                        <Image alt="" src={plus} placeholder="plus" width={17} height={17} />
                                    </Link>
                                </div>
                                <div className={style.discountVoucherBtm}>
                                    <h6>Total Amount</h6>
                                    <ul className="d-flex justify-content-between ">
                                        <li>Subtotal</li>
                                        <li>US$544.98</li>
                                    </ul>
                                    <ul className="d-flex justify-content-between ">
                                        <li>
                                            <Link href={"#"}>Payment Option</Link>
                                        </li>
                                    </ul>
                                    <ul className="d-flex justify-content-between ">
                                        <li>
                                            <strong>Amount to pay</strong>
                                        </li>
                                        <li>
                                            <strong>US$544.98</strong>
                                        </li>
                                    </ul>
                                </div>
                                <div className={style.voucherBtmCheck}>
                                    <div className="checkbox custom-2">
                                        <label>
                                            <input type="checkbox" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                            magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </label>
                                    </div>
                                </div>
                                <div className={style.secureBooking}>
                                    <ul className="d-flex align-items-center justify-content-between">
                                        <li>
                                            <Image alt="" src={shield} placeholder="shield" width={30} height={30} /> <strong>100% Secure Booking</strong>
                                        </li>
                                        <li>
                                            <Image alt="" src={tick} placeholder="shield" width={20} height={20} /> 24/7 customer service
                                        </li>
                                        <li>
                                            <Image alt="" src={tick} placeholder="shield" width={20} height={20} /> 100% secure payment
                                        </li>
                                        <li>
                                            <Link href={"#"}>Pay</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-4 col-12">
                            <RightBar dt={dt} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Payment;
