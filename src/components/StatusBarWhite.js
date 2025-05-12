import { useIsFocused } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';

const StatusBarWhite = () => {
  const isFocused = useIsFocused();
  return (
    <React.Fragment>
      {isFocused && (
        <StatusBar
          barStyle="dark-content" // Change this to "dark-content" for dark icons
          translucent={true}
          backgroundColor="transparent"
        />
      )}
    </React.Fragment>
  );
};

export default StatusBarWhite;