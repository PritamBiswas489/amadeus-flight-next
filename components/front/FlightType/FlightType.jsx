import React from 'react';



import style from "@/sections/front/HomeFlightSearch/index.module.scss";;

export default function FlightType({flightType,setType}) {
    
  return (
    <div className="row g-3">
                                <div className="col-12">
                                    <div className={style.radio}>
                                        <ul className="d-flex">
                                            <li className="form-check">
                                                <input onClick={()=>setType('RETURN')} className="form-check-input" type="radio" name="flexRadioDefault" id="rd-1" />
                                                <label className="form-check-label" htmlFor="rd-1">
                                                    Return
                                                </label>
                                            </li>
                                            <li className="form-check">
                                                <input onClick={()=>setType('ONEWAY')} className="form-check-input" type="radio" name="flexRadioDefault" id="rd-2" />
                                                <label className="form-check-label" htmlFor="rd-2">
                                                    One way
                                                </label>
                                            </li>
                                            <li className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="rd-3" />
                                                <label className="form-check-label" htmlFor="rd-3">
                                                    Multi City
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

  )
}