import React, { useEffect } from "react";
import style from "@/pages/flight/search/index.module.scss";
import Image from "next/image";
import { useHttpClient } from "@/hooks/http-hook";

import passenger from "@/assets/front/images/passenger.svg";
import bag3 from "@/assets/front/images/bag-3.svg";
import trolley from "@/assets/front/images/trolley.svg";
import handBag from "@/assets/front/images/hand-bag.svg";
import check from "@/assets/front/images/check.svg";

import Link from "next/link";

import fxt from "@/assets/front/images/fxt.svg";
import Itinerary from "./Itinerary";
import { useSelector } from "react-redux";
import { getCurrencySymbol } from "@/service/Helpers";
import { useSnackbar } from "notistack";
import { useRouter } from 'next/router';

export default function OneWayItem({ flightOffer }) {
  const {
    totalPrice,
    currency,
    cabinClass,
    baggage,
    baggageQty,
    itineraries,
    offer,
  } = flightOffer;

  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  const { filterOffersIds } = useSelector((state) => state.filterOrders);
  let hiddenClass = "";
  if (filterOffersIds.length > 0 && !filterOffersIds.includes(flightOffer.id)) {
    hiddenClass = "visually-hidden";
  }
  /**
   * processing booking here
   */
  const {
    isLoading: flightOfferLoading,
    error: flightOfferError,
    sendRequest: saveOfferDataProcess,
    clearError,
  } = useHttpClient();
  const processBooking = async (e) => {
    e.preventDefault();
    const offers = [];
    offers.push(offer);
    const responseData = await saveOfferDataProcess(
      `${process.env.NEXT_PUBLIC_APP_HOST_API}flight/save-offer`,
      "POST",
      JSON.stringify({ offers }),
      {
        "Content-Type": "application/json",
      }
    );
    if(responseData.response && responseData.response.itineraryId){
        const destinationRoute = '/flight/reviewDetails';
        const finalRoute = `${destinationRoute}?itineraryId=${responseData.response.itineraryId}`;
        router.push(finalRoute);
    }else{
      enqueueSnackbar('Unable to book this offer.',{variant:'error'});
    }
  };
 
  return (
    <div className={`d-flex flex-wrap ${hiddenClass} ${style.listBox}`}>
      <div className={style.listBoxLeft}>
        {itineraries.map((itineraryData, itineraryIndex) => {
          return (
            <Itinerary
              key={itineraryIndex}
              cabinClass={cabinClass}
              data={itineraryData}
              index={itineraryIndex}
            />
          );
        })}
        <div className={style.selfTransfer}>
          <p>
            <Image
              alt=""
              src={passenger}
              placeholder="passenger"
              width={14}
              height={13}
            />
            Self-transfer <Link href={"#"}>Read More</Link>
          </p>
        </div>
      </div>
      <div className={style.listBoxRight}>
        <div className={style.listBoxRightInner}>
          <div className={style.listBoxRightInnerTop}>
            <ul className="d-flex justify-content-end">
              <li>
                <Image
                  alt=""
                  src={handBag}
                  placeholder="passenger"
                  width={17}
                  height={16}
                />
              </li>
              <li>
                <Image
                  alt=""
                  src={trolley}
                  placeholder="passenger"
                  width={12}
                  height={20}
                />
              </li>
              <li>
                <Image
                  alt=""
                  src={bag3}
                  placeholder="passenger"
                  width={14}
                  height={20}
                />
              </li>
            </ul>

            {baggage > 0 && <p>Baggage Included: 1 x {baggage}kg</p>}
            {baggageQty > 0 && <p>Baggage qty: {baggageQty}</p>}
          </div>
          <div className={style.bookBox}>
            <div className="row g-2">
              <div className={`col-6 ${style.bookBoxLeft}`}>
                <p>
                  <Image
                    alt=""
                    src={check}
                    placeholder="passenger"
                    width={20}
                    height={20}
                  />{" "}
                  Standard Ticket
                </p>
              </div>
              <div className={`col-6 ${style.bookBoxRight}`}>
                <h4>
                  {getCurrencySymbol(currency)}
                  {totalPrice}
                </h4>
                <Link onClick={processBooking} href={""}>
                  Book
                </Link>
              </div>
            </div>
          </div>
          <div className={style.bookBox}>
            <div className="row h-2">
              <div className={`col-6 ${style.bookBoxLeft}`}>
                <p>
                  <Image
                    alt=""
                    src={fxt}
                    placeholder="passenger"
                    width={20}
                    height={20}
                  />{" "}
                  Flexible Ticket
                </p>
              </div>
              <div className={`col-6 ${style.bookBoxRight}`}>
                <h4>
                  {getCurrencySymbol(currency)}
                  {totalPrice}
                </h4>
                <Link onClick={processBooking} href={"#"}>
                  Book
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
