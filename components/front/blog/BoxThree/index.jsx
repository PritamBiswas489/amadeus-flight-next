import React from "react";
import style from "./index.module.scss";
import Link from "next/link";
import Image from "next/image";

import sloganIcon from "@/assets/front/images/slogan-icon.jpg";

const BoxThree = () => {
    return (
        <>
            <Link href={"#"} className={style.boxThree}>
                <div className={style.boxThreeTop}>
                    <h6>Lorem Ipsum</h6>
                    <h5>sdd</h5>
                    <p>
                       sdsdsd
                    </p>
                </div>
                <div className={style.boxThreeBtm}>
                    <Image alt="" src={sloganIcon} placeholder="sloganIcon" width={30} height={30} /> Lorem Ipsum
                </div>
            </Link>
        </>
    );
};

export default BoxThree;
