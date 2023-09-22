import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import style from "@/sections/front/FlightSelection/index.module.scss";
import Link from "next/link";
import tick2 from "@/assets/front/images/tick-2.svg";

export default function DetailSubmitPanel() {
  const passergerDetails = useSelector((state)=>state['passergerdetails']);
  function checkPassengerDetailsReducer(){
      // //console.log("================ passenger details redux details ======================================"); 
       console.log(passergerDetails);
  }
  return (
    <div className="protectData">
      <h6>
        By booking you confirm that the names on the booking match those on the
        passports of those travelling
      </h6>
      <h5>We protect your personal data</h5>
      <ul className="d-flex justify-content-center">
        <li>
          <Image
            alt=""
            src={tick2}
            placeholder="tick2"
            width={20}
            height={20}
          />{" "}
          24/7 customer service
        </li>
        <li>
          <Image
            alt=""
            src={tick2}
            placeholder="tick2"
            width={20}
            height={20}
          />{" "}
          100% secure payment
        </li>
      </ul>
      <Link href={"javascript:void(0);"}  onClick={checkPassengerDetailsReducer}>Continue</Link>
      <p dangerouslySetInnerHTML={{__html:` Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.`}}>
       
      </p>
    </div>
  );
}
