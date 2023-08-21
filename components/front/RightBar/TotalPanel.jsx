import React from "react";
import style from "./index.module.scss";
import Link from "next/link";
import { getCurrencySymbol } from "@/service/Helpers";

export default function TotalPanel({totalPrice,currency}) {
  return (
    <>
      {/* <div className={`${style.yourOrderBox} ${style.yourOrderTable}`}>
        <table className="table table-borderless">
          <thead>
            <tr>
              <th scope="col">Peter Gomes, adult</th>
              <th scope="col" className="text-end">
                US$544.98
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Price per adult</td>
              <td className="text-end">US$544.98</td>
            </tr>
            <tr>
              <td>Flexible Ticket</td>
              <td className="text-end">US$83.13</td>
            </tr>
            <tr>
              <td>
                <Link href={"javascript:void(0);"}>Taxes, Airline fee and agent booking fee</Link>
              </td>
              <td className="text-end">US$133.34</td>
            </tr>
          </tbody>
        </table>
      </div> */}
      <div className={`${style.yourOrderBox} ${style.yourOrderTable}`}>
        <table className="table table-borderless">
          <thead>
            <tr>
              <th scope="col" colSpan={2}>
                Total Amount
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Subtotal</td>
              <td className="text-end">{currency}{getCurrencySymbol(currency)}{totalPrice}</td>
            </tr>
            <tr>
              <td>
                <Link href={"javascript:void(0);"}>Payment Option</Link>
                <strong>Amount to pay</strong>
              </td>
              <td className="text-end">{currency}{getCurrencySymbol(currency)}{totalPrice}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
