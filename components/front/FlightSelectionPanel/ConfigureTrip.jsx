import React from 'react';
import style from "@/sections/front/FlightSelection/index.module.scss";
import tick from "@/assets/front/images/tick.svg";
import cross from "@/assets/front/images/cross.svg";
import tick2 from "@/assets/front/images/tick-2.svg";
import Image from "next/image";

export default function ConfigureTrip() {
  return (
    <div className={style.configureTrip}>
                                <h5>Configure Your trip</h5>
                                <div className={`${style.whiteBdrBox} ${style.configureTripInner}`}>
                                    <div className={style.pricingAreaTop}>
                                        <h6>Choose your own bundle </h6>
                                        <p>Save 20% with the offer, compared to a single product purchase</p>
                                    </div>
                                    <div className={style.pricingArea}>
                                        <div className="row g-0">
                                            <div className="col-3">
                                                <div className="accordion accordion-flush priceAcordion" id="accordionFlushExample">
                                                    <div className="accordion-item">
                                                        <h5 className="accordion-header" id="flush-headingOne">
                                                            <button
                                                                className="accordion-button collapsed"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#flush-collapseOne"
                                                                aria-expanded="false"
                                                                aria-controls="flush-collapseOne"
                                                            >
                                                                Premium Support
                                                            </button>
                                                        </h5>
                                                        <div
                                                            id="flush-collapseOne"
                                                            className="accordion-collapse collapse"
                                                            aria-labelledby="flush-headingOne"
                                                            data-bs-parent="#accordionFlushExample"
                                                        >
                                                            <div className="accordion-body">Placeholder content for this accordion.</div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item">
                                                        <h5 className="accordion-header" id="flush-headingTwo">
                                                            <button
                                                                className="accordion-button collapsed"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#flush-collapseTwo"
                                                                aria-expanded="false"
                                                                aria-controls="flush-collapseTwo"
                                                            >
                                                                Flight updates by SMS
                                                            </button>
                                                        </h5>
                                                        <div
                                                            id="flush-collapseTwo"
                                                            className="accordion-collapse collapse"
                                                            aria-labelledby="flush-headingTwo"
                                                            data-bs-parent="#accordionFlushExample"
                                                        >
                                                            <div className="accordion-body">Placeholder content for this accordion.</div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item">
                                                        <h5 className="accordion-header" id="flush-headingThree">
                                                            <button
                                                                className="accordion-button collapsed"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#flush-collapseThree"
                                                                aria-expanded="false"
                                                                aria-controls="flush-collapseThree"
                                                            >
                                                                Check in
                                                            </button>
                                                        </h5>
                                                        <div
                                                            id="flush-collapseThree"
                                                            className="accordion-collapse collapse"
                                                            aria-labelledby="flush-headingThree"
                                                            data-bs-parent="#accordionFlushExample"
                                                        >
                                                            <div className="accordion-body">Placeholder content for this accordion,</div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item">
                                                        <h5 className="accordion-header" id="flush-headingFour">
                                                            <button
                                                                className="accordion-button collapsed"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#flush-collapseFour"
                                                                aria-expanded="false"
                                                                aria-controls="flush-collapseFour"
                                                            >
                                                                Booking Number by SMS
                                                            </button>
                                                        </h5>
                                                        <div
                                                            id="flush-collapseFour"
                                                            className="accordion-collapse collapse"
                                                            aria-labelledby="flush-headingfour"
                                                            data-bs-parent="#accordionFlushExample"
                                                        >
                                                            <div className="accordion-body">Placeholder content for this accordion,</div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item">
                                                        <h5 className="accordion-header" id="flush-headingFive">
                                                            <button
                                                                className="accordion-button collapsed"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#flush-collapseFive"
                                                                aria-expanded="false"
                                                                aria-controls="flush-collapseFive"
                                                            >
                                                                Airhelp plus flight delay compensation
                                                            </button>
                                                        </h5>
                                                        <div
                                                            id="flush-collapseFive"
                                                            className="accordion-collapse collapse"
                                                            aria-labelledby="flush-headingFive"
                                                            data-bs-parent="#accordionFlushExample"
                                                        >
                                                            <div className="accordion-body">Placeholder content for this accordion,</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-9">
                                                <div className="row g-0">
                                                    <div className="col-4">
                                                        <div className={style.priceInner}>
                                                            <h5>
                                                                Standard<span></span>
                                                            </h5>
                                                            <ul>
                                                                <li>
                                                                    <Image alt="" src={tick} placeholder="tick" width={25} height={25} />
                                                                </li>
                                                                <li>
                                                                    <Image alt="" src={cross} placeholder="tick" width={25} height={25} />
                                                                </li>
                                                                <li>
                                                                    <Image alt="" src={cross} placeholder="tick" width={25} height={25} />
                                                                </li>
                                                                <li>
                                                                    <Image alt="" src={cross} placeholder="tick" width={25} height={25} />
                                                                </li>
                                                                <li>
                                                                    <Image alt="" src={cross} placeholder="tick" width={25} height={25} />
                                                                </li>
                                                            </ul>
                                                            <div className={style.priceInnerAmmount}>
                                                                <p>
                                                                    <del>US$16.39</del>
                                                                </p>
                                                                <h6>US$14.00 </h6>
                                                                <p>Price per person</p>
                                                            </div>
                                                            <div className={style.priceRadio}>
                                                                <div className="form-radio">
                                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="rd-1" />
                                                                    <label className="form-check-label" htmlFor="rd-1">
                                                                        Standard
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className={`${style.priceInner} ${style.premium}`}>
                                                            <h5>
                                                                Premium<span></span>
                                                            </h5>
                                                            <ul>
                                                                <li>
                                                                    <Image alt="" src={tick} placeholder="tick" width={25} height={25} />
                                                                </li>
                                                                <li>
                                                                    <Image alt="" src={cross} placeholder="tick" width={25} height={25} />
                                                                </li>
                                                                <li>
                                                                    <Image alt="" src={cross} placeholder="tick" width={25} height={25} />
                                                                </li>
                                                                <li>
                                                                    <Image alt="" src={cross} placeholder="tick" width={25} height={25} />
                                                                </li>
                                                                <li>
                                                                    <Image alt="" src={cross} placeholder="tick" width={25} height={25} />
                                                                </li>
                                                            </ul>
                                                            <div className={style.priceInnerAmmount}>
                                                                <p>
                                                                    <del>US$16.39</del>
                                                                </p>
                                                                <h6>US$14.00 </h6>
                                                                <p>Price per person</p>
                                                            </div>
                                                            <div className={style.priceRadio}>
                                                                <div className="form-radio">
                                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="rd-2" />
                                                                    <label className="form-check-label" htmlFor="rd-2">
                                                                        Premium
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className={style.priceInner}>
                                                            <h5>
                                                                Premium+<span></span>
                                                            </h5>
                                                            <ul>
                                                                <li>
                                                                    <Image alt="" src={tick} placeholder="tick" width={25} height={25} />
                                                                </li>
                                                                <li>
                                                                    <Image alt="" src={cross} placeholder="tick" width={25} height={25} />
                                                                </li>
                                                                <li>
                                                                    <Image alt="" src={cross} placeholder="tick" width={25} height={25} />
                                                                </li>
                                                                <li>
                                                                    <Image alt="" src={cross} placeholder="tick" width={25} height={25} />
                                                                </li>
                                                                <li>
                                                                    <Image alt="" src={cross} placeholder="tick" width={25} height={25} />
                                                                </li>
                                                            </ul>
                                                            <div className={style.priceInnerAmmount}>
                                                                <p>
                                                                    <del>US$16.39</del>
                                                                </p>
                                                                <h6>US$14.00 </h6>
                                                                <p>Price per person</p>
                                                            </div>
                                                            <div className={style.priceRadio}>
                                                                <div className="form-radio">
                                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="rd-3" />
                                                                    <label className="form-check-label" htmlFor="rd-3">
                                                                        Premium+
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`d-flex justify-content-end ${style.willWithout}`}>
                                        <h6>
                                            I will go without
                                            <Image alt="" src={tick2} placeholder="tick2" width={20} height={20} />
                                        </h6>
                                    </div>
                                </div>
                            </div>
  )
}
