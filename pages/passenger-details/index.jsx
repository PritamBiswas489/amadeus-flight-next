import React, { useState } from "react";
import Layout from "@/components/front/include/Layout";
import dynamic from "next/dynamic";

const Stepper = dynamic(() => import("react-form-stepper").then((res) => res.Stepper), {
    ssr: false,
});
const Step = dynamic(() => import("react-form-stepper").then((res) => res.Step), {
    ssr: false,
});
// import { Stepper } from "react-form-stepper";
import FlightSelection from "@/sections/front/FlightSelection";
import TravelInfo from "@/sections/front/TravelInfo";
import Payment from "@/sections/front/Payment";

const PassengerDetails = () => {
    const [activeStep, setActiveStep] = useState(1);
    return (
        <>
            <Layout>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <Stepper activeStep={activeStep}>
                                    <Step
                                        label="Flight selection"
                                        onClick={() => {
                                            setActiveStep(1);
                                        }}
                                    />
                                    <Step
                                        label="Travel Information"
                                        onClick={() => {
                                            setActiveStep(2);
                                        }}
                                    />
                                    <Step
                                        label="Payment"
                                        onClick={() => {
                                            setActiveStep(3);
                                        }}
                                    />
                                </Stepper>
                            </div>
                        </div>
                    </div>
                </section>

                {/* {activeStep === 1 && <FlightSelection dt={{}} />}
                {activeStep === 2 && <TravelInfo dt={{}} />}
                {activeStep === 3 && <Payment dt={{}} />} */}
            </Layout>
        </>
    );
};

export default PassengerDetails;
