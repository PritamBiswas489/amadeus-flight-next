import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'

import { passengerDetailsActions } from "@/store/redux/passenger-details-slice";
import style from "@/sections/front/FlightSelection/index.module.scss";
import { IoCheckboxSharp } from "react-icons/io5";

export default function ContactInformation() {
  const dispatch = useDispatch();
  const passergerDetails = useSelector((state) => state["passergerdetails"]);
  //set conact email in redux
  function setContactEmail(event) {
    dispatch(
      passengerDetailsActions.setContact({
        contact: {
          ...passergerDetails.contact,
          emailAddress: event.target.value,
        },
      })
    );
  }  
  //set contact phone number in redux
  function setPhoneNumber(value, data, event, formattedValue) {
       dispatch(
        passengerDetailsActions.setContact({
          contact: {
            ...passergerDetails.contact,
            countryCallingCode:data.dialCode,
            number:value.slice(data.dialCode.length),
          },
        })
      );
  }
  return (
    <div className={style.whiteBdrBox}>
      <div className={style.ContactInformation}>
        <h6>Contact Information of all passangers</h6>
        <div className="row">
          <div className="col-lg-7 col-md-7 col-sm-7 col-12 d-flex flex-wrap align-items-center">
            <label htmlFor="E-mail" className={`col-auto ${style.boldLable}`}>
              E-mail
            </label>
            <input
              type="text"
              onInput={setContactEmail}
              placeholder="email@email.com"
              className="form-control col ms-3"
            />
          </div>
          <div className="col-lg-5 col-md-5 col-sm-5 col-12 d-flex flex-wrap align-items-center">
            <label htmlFor="E-mail" className={`col-auto ${style.boldLable}`}>
              Mobile Number
            </label>
            <div className="position-relative col ms-3">
              {/* <input
                type="number"
                name=""
                id=""
                placeholder="+91 | 0000 0000 00"
                className={`form-control ${style.inputNumber}`}
              /> */}
              <PhoneInput
                country={'us'}
                onChange={(value, data, event, formattedValue) => setPhoneNumber(
                  value, data, event, formattedValue

                )}
              />
              <small className={style.enterNumber}>
                Please enter your number
              </small>
            </div>
          </div>
        </div>
        <div className={style.exclusiveDeals}>
          <p>
            <IoCheckboxSharp />
            No, I don’t want to receive emails about cheap flights or other
            exclusive deals
          </p>
        </div>
      </div>
    </div>
  );
}
