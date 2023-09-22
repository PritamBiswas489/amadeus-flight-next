import React, {useState} from "react";
import style from "@/pages/flight/search/index.module.scss";
import Image from "next/image";
import flexibleDate from "@/assets/front/images/flexible-date.jpg";

export default function GraphPanel() {
  //console.log("============ GraphPanel ===============");
  const [graph, showGraph] = useState(false);
   
  return (
    <>
    { graph && <div className="">
        <Image
          alt=""
          src={flexibleDate}
          placeholder="flexibleDate"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div> }
 
      
    </>
  );
}
