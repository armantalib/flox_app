import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants/colors";
import { moderateScale } from "react-native-size-matters";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    paddingHorizontal: moderateScale(20),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  container: {
    width: '100%',
    minHeight: 100,
    backgroundColor: 'rgba(0,0,0,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10
},
artwork: {
    width: 200,
    height: 200,
    marginBottom: 20,
},
title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
},
artist: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
    marginBottom: 20,
},
progressBar: {
    width: '100%',
    height: 40,
    marginBottom: 10,
},
timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
},
time: {
    color: '#fff',
},
controls: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -15,
},
controlButton: {
    fontSize: 18,
    color: '#1DB954',
    padding: 20,
},
});

export default styles;
