import { Dimensions, PixelRatio  } from "react-native";
import { scale,verticalScale,moderateScale } from "react-native-size-matters";
const { width, height } = Dimensions.get('window');

const rem = width / 414;

// Used via Metrics.baseMargin
const Metrics = {
  WIDTH: width,
  HEIGHT: height,
  rem,
};

export default Metrics;


export function remSize(value) {
  const rem = width / 414;
  return scale(value - 2);
}
export function font_size(value) {
  // return RFValue(value);
  return value
}
export function vertical_size(value) {
  return scale(value-1);
}
export function horizontal_size(value) {
  return scale(value);
}

export function heightStatusBarCu(value) {
  return global.statusBarHeight + 40 || 20
}

export function screenSize700(value) {
  return height<value?true:false;
}


// Define a base scale (depends on a standard screen width)
const scale2 = Dimensions.get('window').width / 375; // 375 is the default iPhone width

export const normalize = (size) => {
  const newSize = size * scale2;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};