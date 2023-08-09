import React from "react";
import style from "./index.module.scss";
import Image from "next/image";
import loader from "@/assets/front/images/loader.gif";

const Loader = () => {
    return (
        <>
            <div className={`d-flex align-items-center justify-content-center ${style.loader}`}>
                <div className="container">
                    <Image
                        alt=""
                        src={loader}
                        placeholder="logo"
                        // width={0}
                        // height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                    />
                </div>
            </div>
        </>
    );
};

export default Loader;
