import React from "react";

export function formatDateWithLeadingZero(date) {
  if (date === null) {
    return "";
  }
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are zero-based
  const year = date.getFullYear();

  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;

  return `${formattedMonth}/${formattedDay}/${year}`;
}
export function apiDateFormat(date) {
  if (date === null) {
    return "";
  }
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
      queryParams.push(
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      );
    }
  }

  return queryParams.join("&");
}
export function isValidDate(dateString) {
  const date = new Date(dateString);
  return !isNaN(date);
}

export function getCurrencySymbol(currencyCode) {
  const currencyData = [
    { code: "USD", symbol: "$" },
    { code: "EUR", symbol: "€" },
    { code: "JPY", symbol: "¥" },
    { code: "GBP", symbol: "£" },
    { code: "AUD", symbol: "$" },
    // Add more currencies as needed
  ];
  const currency = currencyData.find((item) => item.code === currencyCode);
  if (currency) {
    return currency.symbol;
  } else {
    return currencyCode;
  }
}
export function convertToLocalDate(date) {
  if (date === "" || date === null) {
    return "";
  }
  const inputDate = new Date(date); // Replace this with your input date
  // Convert date to "MMM DD" format
  const formattedDate = inputDate.toLocaleString("en-US", {
    month: "short", // Abbreviated month name (e.g., Jan)
    day: "2-digit", // Day of the month with leading zero (e.g., 01)
  });
  return formattedDate;
}
export function removeDuplicateData(originalArray) {
  const uniqueObjects = originalArray.filter(
    (obj, index, arr) =>
      arr.findIndex((item) => item.iataCode === obj.iataCode) === index
  );

  return uniqueObjects;
}
export function getWeekDayNameFromDate(value) {
  if (value === "" || value === null) {
    return "";
  }

  const date = new Date(value); // Use the desired date in YYYY-MM-DD format

  const weekdayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const weekdayIndex = date.getDay();

  const weekdayName = weekdayNames[weekdayIndex];

  return weekdayName;
}

export function isEmptyObject(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false; // Object has at least one property
    }
  }
  return true; // Object is empty
}

export function shuffleArray(array) {
  const newArray = [...array]; // Create a copy of the original array
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray; // Return the shuffled copy
}

export function convertObjectToArray(myObject) {
  const myArray = [];
  for (const key in myObject) {
    if (myObject.hasOwnProperty(key)) {
      myArray.push({ key: key, title: myObject[key] });
    }
  }
  return myArray;
}
export function getHourMinute(timeDifference) {
  // Calculate hours and minutes from the time difference
  const hours = Math.floor(timeDifference / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  return { hours, minutes };
}
// Assuming this code is in a module named 'locationUtils.js'

export async function locationDetails(destinationCode) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_HOST_API}flight/airport/city/search?keyword=${destinationCode}`,
      { method: "GET" }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    if (data && Array.isArray(data.response) && data.response.length > 0) {
      return data.response[0];
    } else {
      return {};
    }
  } catch (error) {
    throw error; // Rethrow the error for consistent error handling
  }
}

export async function checkingLocation(locations, cookieLocations) {
  try {
    const promises = locations.map(async (locationArr, index) => {
      if (
        cookieLocations?.[index] &&
        locationArr["originLocationCode"] !==
          cookieLocations[index]["originLocationCode"]
      ) {
        locationArr["originLocationObject"] = await locationDetails(
          locationArr["originLocationCode"]
        );
      }

      if (
        cookieLocations?.[index] &&
        locationArr["destinationLocationCode"] !==
          cookieLocations[index]["destinationLocationCode"]
      ) {
        locationArr["destinationLocationObject"] = await locationDetails(
          locationArr["destinationLocationCode"]
        );
      }

      return locationArr;
    });

    const resolvedData = await Promise.all(promises);

    return resolvedData;
  } catch (error) {
    console.error("Error resolving Promises:", error);
    throw error; // Rethrow the error for consistent error handling
  }
}
export function dateToMonthDay(dateString) {
  const date = new Date(dateString);

  // Get the month and day components from the date
  const monthIndex = date.getMonth();
  const day = date.getDate();
  const twoDigitYear = date.getFullYear().toString().slice(-2); // Extract the last 

  // Create an array of month names
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Get the month name from the array
  const monthName = monthNames[monthIndex];

  // Create the formatted date string as "Month Day"
  const formattedDate = `${monthName} ${day},${twoDigitYear}`;

  return (formattedDate); 
}
