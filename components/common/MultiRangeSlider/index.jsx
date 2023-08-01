import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import style from "./index.module.scss";
import { useMemo } from "react";

const MultiRangeSlider = ({ min, max, onChange, direction }) => {
    console.log("max", max);
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const minValRef = useRef(min);
    const maxValRef = useRef(max);
    const range = useRef(null);

    // Convert to percentage
    const getPercent = useCallback((value) => Math.round(((value - min) / (max - min)) * 100), [min, max]);

    useMemo(() => {
        setMinVal(min);
        setMaxVal(max);
    }, [min, max]);

    // Set width of the range to decrease from the left side
    useEffect(() => {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(maxValRef.current);

        if (range.current) {
            if (!direction || direction === "ltr") {
                range.current.style.left = `${minPercent}%`;
            } else {
                range.current.style.right = `${minPercent}%`;
            }
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [minVal, getPercent,direction]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
        const minPercent = getPercent(minValRef.current);
        const maxPercent = getPercent(maxVal);

        if (range.current) {
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [maxVal, getPercent]);

    // Get min and max values when their state changes
    useEffect(() => {
        onChange({ min: minVal, max: maxVal });
    }, [minVal, maxVal, onChange]);

    return (
        <div className={`${style["slider-container"]}`}>
            <input
                type="range"
                min={min}
                max={max}
                value={minVal}
                onChange={(event) => {
                    const value = Math.min(Number(event.target.value), maxVal - 1);
                    setMinVal(value);
                    minValRef.current = value;
                }}
                className={`${style.thumb} ${style["thumb--left"]}`}
                style={{ zIndex: minVal > max - 100 && "5" }}
            />
            <input
                type="range"
                min={min}
                max={max}
                value={maxVal}
                onChange={(event) => {
                    const value = Math.max(Number(event.target.value), minVal + 1);
                    setMaxVal(value);
                    maxValRef.current = value;
                }}
                className={`${style.thumb} ${style["thumb--right"]}`}
            />

            <div className={`${style.slider}`}>
                <div className={`${style.slider__track}`} />
                <div ref={range} className={`${style.slider__range}`} />
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <div className={`${style["slider__left-value"]}`}> {minVal}</div>
                    {/* <div className="ms-2 me-2">
                        <i className="fas fa-minus"></i>
                    </div> */}
                    <div className={`${style["slider__right-value"]}`}> {maxVal}</div>
                </div>
            </div>
        </div>
    );
};

MultiRangeSlider.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default MultiRangeSlider;
