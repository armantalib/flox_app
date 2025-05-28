import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants/colors";
import { FONTS } from "../../../constants/fonts";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  wrapper: {
    padding: 20,
  },
  blurContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  //
  categoryButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    backgroundColor: COLORS.white,
    marginRight: 10,
    elevation: 3, // For shadow on Android
    shadowColor: "#fff0",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 5,
  },
  selectedCategoryButton: {
    backgroundColor: COLORS.primary, // Dark background for selected item
  },
  categoryText: {
    fontSize: 15,
    color: COLORS.primary,
    fontFamily: FONTS.Samsungsharpsans_Bold,
  },
  selectedCategoryText: {
    color: COLORS.white,
  },
  //
  card: {
    flex: 1,
    maxWidth: "100%", // Ensures two items fit in a row
    borderRadius: 20,
    backgroundColor: COLORS.white,
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: 320,
    borderRadius: 0,
    objectFit: "cover",
  },
  badgeContainer: {
    position: "absolute",
    bottom: 22,
    right: 15,
    backgroundColor: COLORS.blue,
    paddingVertical: 7,
    paddingHorizontal: 14,
    borderRadius: 152,
    zIndex: 1,
  },
  badgeText: {
    color: COLORS.white,
    fontSize: scale(13),
    fontFamily: FONTS.Samsungsharpsans_Bold,
  },
  dateText: {
    color: COLORS.white,
    fontSize: scale(15),
    fontFamily: FONTS.Samsungsharpsans_Bold,
  },
  posNew: {
    position: "absolute",
    bottom: 5,
    left: 15,
    zIndex: 1,
  },
  content: {},
  duration: {
    fontSize: scale(19),
    color: COLORS.white,
    fontFamily: FONTS.Samsungsharpsans_Medium,
    marginBottom: verticalScale(5),
  },
  title: {
    fontSize: scale(24),
    fontFamily: FONTS.Samsungsharpsans_Bold,
    color: COLORS.white,
    marginBottom: verticalScale(8),
    width:'70%'
  },
  description: {
    fontSize: scale(13),
    fontFamily: FONTS.Samsungsharpsans_Medium,
    color: COLORS.primary,
    paddingBottom: verticalScale(3),
  },
  dotsSTyle: {
    position: "absolute",
    paddingHorizontal: moderateScale(10),
    top: 20,
    right: 10,
    zIndex: 1,
    height: 30,
    justifyContent: "center",
  },
  descriptionContainer: {
    padding: moderateScale(15),
  },
  // author
  authorContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: moderateScale(10),
    paddingHorizontal: moderateScale(15),
    backgroundColor: "#F6F6F6",
    gap: 15,
  },
  authorImageContainer: {
    width: 63,
    height: 63,
    borderRadius: 100,
    overflow: "hidden",
  },
  authorImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  authorName: {
    fontSize: scale(15),
    fontFamily: FONTS.Samsungsharpsans_Bold,
    color: COLORS.primary,
    marginBottom: verticalScale(2),
    marginTop: 2,
  },
  authorRole: {
    fontSize: scale(13),
    fontFamily: FONTS.Samsungsharpsans_Medium,
    color: COLORS.primary,
  },
  authorButton: {
    marginLeft: "auto",
  },
  islandImage: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    objectFit: "cover",
    marginVertical: verticalScale(15),
  },
  buttonText: {
    fontSize: scale(13),
    fontFamily: FONTS.Samsungsharpsans_Medium,
    color: COLORS.primary,
  },
});

export default styles;
