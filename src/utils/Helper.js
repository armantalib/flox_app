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


