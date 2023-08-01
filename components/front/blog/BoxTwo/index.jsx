import React from "react";
import style from "./index.module.scss";
import Link from "next/link";

import blog2 from "@/assets/front/images/blog-2.jpg";
import sloganIcon from "@/assets/front/images/slogan-icon.jpg";
import Image from "next/image";

const BoxTwo = () => {
    return (
        <>
            <Link href={"#"} className={style.boxTwo}>
                <Image alt="" src={blog2} placeholder="box2" width={0} height={0} sizes="100vw" style={{ width: "100%" }} />
                <div className={`d-flex flex-wrap align-content-between  ${style.boxTwoInner}`}>
                    <div className={style.boxTwoInnerTop}>
                        <h6>Lorem Ipsum</h6>
                        <h5>Lorem Ipsum is simply dummy text of</h5>
                    </div>
                    <div className={style.boxTwoInnerBtm}>
                        <Image alt="" src={sloganIcon} placeholder="sloganIcon" width={30} height={30} /> Lorem Ipsum
                    </div>
                </div>
            </Link>
        </>
    );
};

export default BoxTwo;
