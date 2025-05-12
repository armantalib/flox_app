import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mapStyle: {
    width: '100%',
    height: Dimensions.get('window').height * 0.2,
    objectFit: 'contain',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});

export {styles};
