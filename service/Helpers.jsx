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
  export function isValidDate  (dateString)  {
    const date = new Date(dateString);
    return !isNaN(date);
  };

  export function getCurrencySymbol(currencyCode){
    const currencyData = [
        { code: "USD", symbol: "$" },
        { code: "EUR", symbol: "€" },
        { code: "JPY", symbol: "¥" },
        { code: "GBP", symbol: "£" },
        { code: "AUD", symbol: "$" },
        // Add more currencies as needed

      ];
      const currency = currencyData.find(item => item.code === currencyCode);
      if (currency) {
          return currency.symbol;
      } else {
          return currencyCode;
      }
  }
  export function convertToLocalDate(date){
    if(date === '' || date === null){  return ''; }
    const inputDate = new Date(date); // Replace this with your input date
    // Convert date to "MMM DD" format
    const formattedDate = inputDate.toLocaleString('en-US', {
    month: 'short', // Abbreviated month name (e.g., Jan)
    day: '2-digit'  // Day of the month with leading zero (e.g., 01)
    });
    return formattedDate;

  }
  export function removeDuplicateData(originalArray){

    const uniqueObjects = originalArray.filter((obj, index, arr) =>
    arr.findIndex(item => item.iataCode === obj.iataCode) === index
  );

  return uniqueObjects;

}
export function getWeekDayNameFromDate(value){
  if(value === '' || value === null){  return ''; }
   
    const date = new Date(value); // Use the desired date in YYYY-MM-DD format

     
    const weekdayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    
    const weekdayIndex = date.getDay();

    
    const weekdayName = weekdayNames[weekdayIndex];

    return weekdayName;

 
}
  
