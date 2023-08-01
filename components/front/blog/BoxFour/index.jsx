import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "./index.module.scss";

import sloganIcon from "@/assets/front/images/slogan-icon.jpg";

const BoxFour = () => {
    return (
        <>
            <Link href={"#"} className={style.boxFour}>
                <div className={style.boxFourTop}>
                    <h6>Lorem Ipsum</h6>
                    <h5>Lorem Ipsum is simply dummy text of</h5>
                    <p>
                       ferfdf
                    </p>
                </div>
                <div className={style.boxFourBtm}>
                    <Image alt="" src={sloganIcon} placeholder="sloganIcon" width={30} height={30} /> Lorem Ipsum
                </div>
            </Link>
        </>
    );
};

export default BoxFour;
