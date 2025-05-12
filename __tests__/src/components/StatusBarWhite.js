import {useIsFocused} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';

const StatusBarWhite = () => {
  const isFocused = useIsFocused();
  return (
    <React.Fragment>
      {isFocused && (
        <StatusBar
          barStyle={'light-content'}
          translucent={true}
          backgroundColor="transparent"
        />
      )}
    </React.Fragment>
  );
};

export default StatusBarWhite;
