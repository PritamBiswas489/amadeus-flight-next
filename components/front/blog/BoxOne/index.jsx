import Image from "next/image";
import React from "react";

import style from "./index.module.scss";
import blog1 from "@/assets/front/images/blog-1.jpg";
import sloganIcon from "@/assets/front/images/slogan-icon.jpg";
import eye from "@/assets/front/images/eye.svg";
import Link from "next/link";

const BoxOne = () => {
    return (
        <>
            <Link href={"#"} className={style.blogInner}>
                <div className="row align-items-center">
                    <div className="col-6">
                        <div className={style.blogOneImg}>
                            <Image alt="" src={blog1} placeholder="ti1" width={0} height={0} sizes="100vw" style={{ width: "100%" }} />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className={style.blogOneDetails}>
                            <h6>Lorem Ipsum</h6>
                            <h5>xcsdsdsd</h5>
                            <p>
                               dgfdf
                            </p>
                            <div className={style.blogOneDetailsBtm}>
                                <ul className="d-flex align-items-center ">
                                    <li>
                                        <Image alt="" src={sloganIcon} placeholder="sloganIcon" width={30} height={30} /> Lorem Ipsum
                                    </li>
                                    <li>
                                        <Image alt="" src={eye} placeholder="sloganIcon" width={13} height={13} /> 8 Viewers
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default BoxOne;
