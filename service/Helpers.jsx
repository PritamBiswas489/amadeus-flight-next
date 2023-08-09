import React from 'react'

export function formatDateWithLeadingZero(date) {
    if(date === null){ return ''; }
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-based
    const year = date.getFullYear();
  
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
  
    return `${formattedMonth}/${formattedDay}/${year}`;
  }
  export function apiDateFormat(date){
    if(date === null){ return ''; }
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-based
    const year = date.getFullYear();
  
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
  

    return `${year}-${formattedMonth}-${formattedDay}`;

  }
  export function objectToQueryString(obj) {
    const queryParams = [];
  
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        queryParams.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
      }
    }
  
    return queryParams.join('&');
  }
  
