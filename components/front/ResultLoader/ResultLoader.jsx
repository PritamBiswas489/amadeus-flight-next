import React from 'react';
import style from "./index.module.scss";

export default function ResultLoader() {
  return (
    <div className={style.loaderPanel}>
      <div className={style.loader}></div>
  </div>
  )
}
