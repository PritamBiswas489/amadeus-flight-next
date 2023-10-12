import React from "react";
import style from "@/sections/front/FlightSelection/index.module.scss";
import { AiFillInfoCircle } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa";

import handBag from "@/assets/front/images/hand-bag-2.svg";
import handBag3 from "@/assets/front/images/bag-3.svg";
import handBag4 from "@/assets/front/images/bag-4.svg";

import Image from "next/image";

import Link from "next/link";

export default function PassengerInformation({tpData}) {

  // console.log("========================= HELLO =======================================");
  // console.log(tpData);

  const {travelerId,travelerType} = tpData;


  return (
    <div className={style.whiteBdrBox}>
      <div className={style.PassengerAdult}>
        <h6>
          Passenger {travelerId}, {travelerType}<small>*Field required</small>
        </h6>
        <div className={style.formNotification}>
          <p>
            <span>
              <AiFillInfoCircle />
            </span>
            Please enter your first name, middle names and last name exactly as
            they appear on your passport/ID to avoid issue at the airport. If
            there is a middle name, please enter it in the name field.
          </p>
        </div>
        <div className={style.gender}>
          <ul className="d-flex genderRadio">
            <li className="">
              <strong>Gender</strong>
            </li>
            <li className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="rd-2"
              />
              <label className="form-check-label" htmlFor="rd-2">
                Male
              </label>
            </li>
            <li className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="rd-3"
              />
              <label className="form-check-label" htmlFor="rd-3">
                Female
              </label>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className={`mb-3 ${style.genderForm}`}>
              <label htmlFor="" className="form-label">
                First Name
              </label>
              <input
                type="email"
                className="form-control"
                id=""
                placeholder="e.g. Peter Gomes"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className={`mb-3 ${style.genderForm}`}>
              <label htmlFor="" className="form-label">
                Last Name
              </label>
              <input
                type="email"
                className="form-control"
                id=""
                placeholder="e.g. Brown"
              />
            </div>
            
          </div>

          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className={`mb-3 ${style.genderForm}`}>
              <label htmlFor="" className="form-label">
                Date of birth
              </label>
              <input
                type="email"
                className="form-control"
                id=""
                placeholder="e.g. Brown"
              />
            </div>
            
          </div>
          <div className="col-12 text-center mb-3 mt-2">
            <Link href={"#"} className={style.frequentFlyer}>
              Add Frequent flyer Program <FaAngleDown />
            </Link>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className={`mb-3 ${style.genderForm}`}>
              <label htmlFor="" className="form-label">
                Card Type
              </label>
              <select className="form-label form-select">
                <option value="">Agena Airlines</option>
              </select>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className={`mb-3 ${style.genderForm}`}>
              <label htmlFor="" className="form-label">
                Frequent flyer number
              </label>
              <input
                type="email"
                className="form-control"
                id=""
                placeholder="e.g. Brown"
              />
            </div>
          </div>
        </div>
        <div className={style.baggage}>
          <h5>Select Baggage</h5>
          <div className={style.baggageInner}>
            <h6>Personal Item</h6>
            <p>A bag that must fit under the seat in front of you.</p>
            <ul className="d-flex align-items-center">
              <li>
                <Image
                  alt=""
                  src={handBag}
                  placeholder="handBag"
                  width={42}
                  height={38}
                />
              </li>
              <li>
                <span>Included</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={style.baggage}>
          <h5>Hand Baggage</h5>
          <div className={style.baggageInner}>
            <h6>Personal Item</h6>
            <p>A bag that must fit under the seat in front of you.</p>
            <ul className="d-flex align-items-center">
              <li>
                <Image
                  alt=""
                  src={handBag4}
                  placeholder="logo"
                  width={42}
                  height={38}
                />
              </li>
              <li>
                <span>Included</span>
              </li>
              <li>1 X 6 kg</li>
            </ul>
          </div>
        </div>

        <div className={style.baggage}>
          <h5>Hand Baggage</h5>
          <div className={style.baggageInner}>
            <h6>Personal Item</h6>
            <p>A bag that must fit under the seat in front of you.</p>
            <ul className="d-flex align-items-center">
              <li>
                <Image
                  alt=""
                  src={handBag3}
                  placeholder="handBag4"
                  width={42}
                  height={38}
                />
              </li>
              <li>
                <span>Included</span>
              </li>
              <li>1 X 6 kg</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
