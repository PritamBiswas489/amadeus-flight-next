import React from 'react';
import dynamic from "next/dynamic";

const Stepper = dynamic(
    () => import("react-form-stepper").then((res) => res.Stepper),
    {
      ssr: false,
    }
  );
  const Step = dynamic(
    () => import("react-form-stepper").then((res) => res.Step),
    {
      ssr: false,
    }
  );

export default function StepSection({activeStep,setActiveStep}) {
  return (
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
  )
}
