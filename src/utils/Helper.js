import axios from 'axios';
import { useState, useEffect } from 'react';
import { Keyboard, Platform, PermissionsAndroid } from 'react-native';

export const useKeyboardVisible = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return isKeyboardVisible;
};



export function messageSendPush(message, messagesData) {
  const newMessage = { ...message }
  console.log("M", messagesData);
  if (messagesData.length > 0 && messagesData[0]?.day === 'Today') {
    newMessage.day = "Today";
    newMessage.show = false
  } else {
    newMessage.day = "Today";
    newMessage.show = true
  }
  const arr = [newMessage, ...messagesData,]
  return arr;
}

function _formatDate(timestamp) {
  const now = new Date();
  const date = new Date(timestamp);

  if (now - date < 604800000) {
    if (now.toDateString() === date.toDateString()) {
      return "Today";
    } else {
      return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
    }
  } else {
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }
}

export function processArray(arr) {
  const groupedData = {};

  arr.forEach(item => {
    const day = _formatDate(item.createdAt);
    if (!groupedData[day]) {
      groupedData[day] = [item];
    } else {
      groupedData[day].push(item);
    }
  });

  Object.keys(groupedData).forEach(day => {
    const items = groupedData[day];
    const lastIndex = items.length - 1;

    items.forEach((item, index) => {
      item.day = day;
      item.show = index === lastIndex;
    });
  });

  const result = arr.map(item => ({ ...item }));
  return result;
}

export async function getCountryAndCity(lat, lng) {
 return await axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`)
    .then(response => { 
      return response.data 
    })
    .catch(error => { console.log(error) })

}

export function getInitials(name) {
  if(!name)return
  return name
    .split(" ") // Split name by spaces
    .map(word => word[0].toUpperCase()) // Get first letter of each word in uppercase
    .join(""); // Join initials together
}



export function searchFunctions(query, array) {
  return array.filter(user => user.name.toLowerCase().includes(query.toLowerCase()));
}

export function searchFunctionCommunity(query, array,tempArray) {
  if(!query){
    return tempArray
  }
  return array.filter(user => user.user?.username.toLowerCase().includes(query.toLowerCase()));
}

export function searchByDate(targetMonth, data) {

  // Convert ISO date to "YYYY-MM"
  const toYearMonth = isoString => new Date(isoString).toISOString().slice(0, 7);

  // Filter items where date starts with the targetMonth (e.g. "2025-05")
  const results = data.filter(item => toYearMonth(item.date) === targetMonth);

  return results;
}

export function searchByDate2(targetDate, data) {

  // Helper to extract just the date part in `YYYY-MM-DD` format
  const toDateOnly = isoString => new Date(isoString).toISOString().split("T")[0];
  
  const results = data.filter(item => toDateOnly(item.date) === targetDate);
  
  return results;
}


export function getAverageYearPercentage(targetYear, data) {
  const getYear = isoString => new Date(isoString).getFullYear();
  const monthlySums = Array(12).fill(0);

  data.forEach(item => {
    const date = new Date(item.date);
    if (isNaN(date)) return; // skip invalid dates

    const year = date.getUTCFullYear(); // use getUTCFullYear for consistent parsing
    const month = date.getUTCMonth();  // use getUTCMonth (0–11)

    if (year === targetYear) {
      monthlySums[month] += item.percentage;
    }
  });

  const total = monthlySums.reduce((sum, val) => sum + val, 0);
  const average = parseFloat((total / 12).toFixed(2)); // always divide by 12

  return {
    monthlySums,
    averageYearPercentage: average
  };
}


export function getYearlyPercentages(data, startYear, endYear) {
  const yearsCount = endYear - startYear + 1;
  const yearlySums = new Array(yearsCount).fill(0);
  const yearlyCounts = new Array(yearsCount).fill(0);

  data.forEach(item => {
    const dateObj = new Date(item.date);
    if (isNaN(dateObj.getTime())) return;

    const year = dateObj.getUTCFullYear();
    if (year >= startYear && year <= endYear) {
      const index = year - startYear;
      const percentage = parseFloat(item.percentage);
      if (!isNaN(percentage)) {
        yearlySums[index] += percentage;
        yearlyCounts[index] += 1;
      }
    }
  });

  const yearlyPercentages = yearlySums.map((sum, index) => {
    const count = yearlyCounts[index];
    return count > 0 ? parseFloat((sum / count).toFixed(2)) : 0;
  });

  const totalSum = yearlyPercentages.reduce((sum, val) => sum + val, 0);
  const validYearCount = yearlyPercentages.filter(val => val > 0).length;
  const averagePercentage = validYearCount > 0
    ? parseFloat((totalSum / validYearCount).toFixed(2))
    : 0;

  return {
    yearlyPercentages,
    averagePercentage
  };
}


export function getYearlyStepTotals(targetYear, data) {
  const monthlySteps = Array(12).fill(0); // Index 0 = Jan, ..., 11 = Dec

  data.forEach(item => {
    const date = new Date(item.date);
    if (isNaN(date)) return; // Skip invalid dates

    const year = date.getUTCFullYear();
    const month = date.getUTCMonth();

    if (year === targetYear && typeof item.steps === 'number') {
      monthlySteps[month] += item.steps;
    }
  });

  const totalSteps = monthlySteps.reduce((sum, steps) => sum + steps, 0);

  return {
    monthlySteps,
    totalSteps
  };
}


export function getYearlyStepCounts(data, startYear, endYear) {
  const yearsCount = endYear - startYear + 1;
  const yearlyStepSums = new Array(yearsCount).fill(0);

  data.forEach(item => {
    const dateObj = new Date(item.date);
    if (isNaN(dateObj.getTime())) return;

    const year = dateObj.getUTCFullYear();
    if (year >= startYear && year <= endYear) {
      const index = year - startYear;
      const steps = parseInt(item.steps, 10);
      if (!isNaN(steps)) {
        yearlyStepSums[index] += steps;
      }
    }
  });

  const totalSteps = yearlyStepSums.reduce((sum, val) => sum + val, 0);

  return {
    yearlySteps: yearlyStepSums,
    average: totalSteps // total steps across all years
  };
}


export function countAgeGroups(ages) {
  const ageGroups = {};
  
  // Define the ranges
  for (let start = 0; start <= 60; start += 5) {
    const end = start + 4;
    const label = `${start}-${end}`;
    ageGroups[label] = 0;
  }

  // Special group for 65+
  ageGroups["65+"] = 0;

  // Count ages into the correct group
  for (const age of ages) {
    if (age > 65) {
      ageGroups["65+"]++;
    } else {
      const groupStart = Math.floor(age / 5) * 5;
      const groupEnd = groupStart + 4;
      const label = `${groupStart}-${groupEnd}`;
      if (ageGroups[label] !== undefined) {
        ageGroups[label]++;
      }
    }
  }

  return ageGroups;
}

export function getGreeting() {
  const now = new Date();
  const hour = now.getHours();

  if (hour >= 5 && hour < 12) {
    return "Good Morning";
  } else if (hour >= 12 && hour < 17) {
    return "Good Afternoon";
  } else if (hour >= 17 && hour < 21) {
    return "Good Evening";
  } else {
    return "Good Night";
  }
}



