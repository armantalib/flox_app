import React, { createContext, useState, useEffect, useContext } from "react";
import { Keyboard } from "react-native";

// Create the Context
const KeyboardContext = createContext();

// Create a Provider Component
export const KeyboardProvider = ({ children }) => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardVisible(true);
    });

    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardVisible(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <KeyboardContext.Provider value={{ isKeyboardVisible }}>
      {children}
    </KeyboardContext.Provider>
  );
};

// Custom Hook to use Keyboard Context
export const useKeyboard = () => {
  return useContext(KeyboardContext);
};
