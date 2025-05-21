import React, { useState, useEffect, useRef } from 'react';
import { TouchableOpacity, StyleSheet, Animated, Text, Dimensions, ScrollView, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { COLORS } from '../constants/colors';
import TextComponent from './TextComponent';
import { FONTS } from '../constants/fonts';
import { commonStyle } from '../constants/style';
import { custom_data } from '../constants';
import { useSelector } from 'react-redux';
import { normalize } from '../utils/Metrics';

const HomeSymptomSliderComp = (props) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [tendonData, setTendonData] = useState(custom_data.tendon_data);
  const [neuropathyData, setNeuropathyData] = useState(custom_data.neuropathy_data);
  const [CentralData, setCentralData] = useState(custom_data.central_nerve_data);
  const [AutonomicData, setAutonomicData] = useState(custom_data.autonomic_nerve);
  const [GastrointestinalData, setGastrointestinalData] = useState(custom_data.gastrointestinal_data);
  const [MitochondrialData, setMitochondrialData] = useState(custom_data.mitochondrial_data);
  const [VisionData, setVisionData] = useState(custom_data.vision_data);
  const [SkinData, setSkinData] = useState(custom_data.skin_data);
  const [CardiovascularData, setCardiovascularData] = useState(custom_data.cardiovascular_data);
  const [HearingData, setHearingData] = useState(custom_data.hearing_data);
  const [HormonalData, setHormonalData] = useState(custom_data.hormonal_data);
  const [state, setState] = useState({ tendon_issue_resolved: [], neuropathy_nerve_resolved: [], central_nerve_resolved: [], autonomic_nerve_resolved: [], gastrointestinal_resolved: [], mitochondrial_resolved: [], vision_resolved: [], skin_hair_resolved: [], cardio_resolved: [], hearing_resolved: [], hormonal_resolved: [], })
  const { stepsData } = useSelector((state) => state?.steps);


  useEffect(() => {
    if (stepsData) {
      setState(stepsData)
    }
  }, [])


  const toggleTendon = (key, value) => {
    return
    setState((prevState) => {
      const currentArray = prevState[key] || [];
      const exists = currentArray.includes(value);
      return {
        ...prevState,
        [key]: exists
          ? currentArray.filter((item) => item !== value)
          : [...currentArray, value],
      };
    });
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <TextComponent
        color={COLORS.primary}
        fontSize={23}
        title={"Symptoms I’m\ncurrently experiencing"}
        marginBottom={15}
        fontFamily={FONTS.Samsungsharpsans_Bold}
      />
      {/* Scrollable Tags Container */}
      <View
        style={[
          {
            height: Dimensions.get("screen").height * 0.34,
            flexDirection: "row",
            overflow: "hidden",
          },
        ]}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={16}
        >
          <TextComponent
            color={COLORS.primary}
            fontSize={14}
            title="Tendon & Musculoskeletal Issues"
            fontFamily={FONTS.Samsungsharpsans_Bold}
            marginBottom={7}
          />
          <View
            style={[
              commonStyle.row,
              {
                marginBottom: 10,
              },
            ]}
          >
            {tendonData.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={[
                  commonStyle.tag,
                  {
                    alignSelf: "flex-start",
                    paddingHorizontal: 15,
                    paddingVertical: 10,
                    margin: 5,
                  },
                  state.tendon_issue_resolved.includes(item.name)
                    ? commonStyle.selectedTag
                    : commonStyle.unselectedTag,
                ]}
                onPress={() => toggleTendon('tendon_issue_resolved', item.name)}
              >
                <Text
                  style={[
                    commonStyle.tagText,
                    { flexWrap: "wrap", textAlign: "center" },
                    state.tendon_issue_resolved.includes(item.name) &&
                    commonStyle.selectedText,
                  ]}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>


          {/* Neuropathy (Nerve Damage) */}

          <TextComponent
            color={COLORS.primary}
            fontSize={14}
            title="Neuropathy (Nerve Damage)"
            fontFamily={FONTS.Samsungsharpsans_Bold}
            marginBottom={7}
          />
          <View
            style={[
              commonStyle.row,
              {
                marginBottom: 10,
              },
            ]}
          >
            {neuropathyData.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={[
                  commonStyle.tag,
                  {
                    alignSelf: "flex-start",
                    paddingHorizontal: 15,
                    paddingVertical: 10,
                    margin: 5,
                  },
                  state.neuropathy_nerve_resolved.includes(item.name)
                    ? commonStyle.selectedTag
                    : commonStyle.unselectedTag,
                ]}
                onPress={() => toggleTendon('neuropathy_nerve_resolved', item.name)}
              >
                <Text
                  style={[
                    commonStyle.tagText,
                    { flexWrap: "wrap", textAlign: "center" },
                    state.neuropathy_nerve_resolved.includes(item.name) &&
                    commonStyle.selectedText,
                  ]}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>


          {/* Central Nervous System (CNS) Symptoms */}

          <TextComponent
            color={COLORS.primary}
            fontSize={14}
            title="Central Nervous System (CNS) Symptoms"
            fontFamily={FONTS.Samsungsharpsans_Bold}
            marginBottom={7}
          />
          <View
            style={[
              commonStyle.row,
              {
                marginBottom: 10,
              },
            ]}
          >
            {CentralData.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={[
                  commonStyle.tag,
                  {
                    alignSelf: "flex-start",
                    paddingHorizontal: 15,
                    paddingVertical: 10,
                    margin: 5,
                  },
                  state.central_nerve_resolved.includes(item.name)
                    ? commonStyle.selectedTag
                    : commonStyle.unselectedTag,
                ]}
                onPress={() => toggleTendon('central_nerve_resolved', item.name)}
              >
                <Text
                  style={[
                    commonStyle.tagText,
                    { flexWrap: "wrap", textAlign: "center" },
                    state.central_nerve_resolved.includes(item.name) &&
                    commonStyle.selectedText,
                  ]}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>



          {/*  Autonomic Nervous System Dysfunction (Dysautonomia, POTS-like Symptoms) */}

          <TextComponent
            color={COLORS.primary}
            fontSize={14}
            title="Autonomic Nervous System Dysfunction (Dysautonomia, POTS-like Symptoms)"
            fontFamily={FONTS.Samsungsharpsans_Bold}
            marginBottom={7}
          />
          <View
            style={[
              commonStyle.row,
              {
                marginBottom: 10,
              },
            ]}
          >
            {AutonomicData.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={[
                  commonStyle.tag,
                  {
                    alignSelf: "flex-start",
                    paddingHorizontal: 15,
                    paddingVertical: 10,
                    margin: 5,
                  },
                  state.autonomic_nerve_resolved.includes(item.name)
                    ? commonStyle.selectedTag
                    : commonStyle.unselectedTag,
                ]}
                onPress={() => toggleTendon('autonomic_nerve_resolved', item.name)}
              >
                <Text
                  style={[
                    commonStyle.tagText,
                    { flexWrap: "wrap", textAlign: "center" },
                    state.autonomic_nerve_resolved.includes(item.name) &&
                    commonStyle.selectedText,
                  ]}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>


          {/*  Gastrointestinal Issues */}

          <TextComponent
            color={COLORS.primary}
            fontSize={14}
            title="Gastrointestinal Issues"
            fontFamily={FONTS.Samsungsharpsans_Bold}
            marginBottom={7}
          />
          <View
            style={[
              commonStyle.row,
              {
                marginBottom: 10,
              },
            ]}
          >
            {GastrointestinalData.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={[
                  commonStyle.tag,
                  {
                    alignSelf: "flex-start",
                    paddingHorizontal: 15,
                    paddingVertical: 10,
                    margin: 5,
                  },
                  state.gastrointestinal_resolved.includes(item.name)
                    ? commonStyle.selectedTag
                    : commonStyle.unselectedTag,
                ]}
                onPress={() => toggleTendon('gastrointestinal_resolved', item.name)}
              >
                <Text
                  style={[
                    commonStyle.tagText,
                    { flexWrap: "wrap", textAlign: "center" },
                    state.gastrointestinal_resolved.includes(item.name) &&
                    commonStyle.selectedText,
                  ]}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>


          {/*  Mitochondrial Dysfunction & Fatigue */}

          <TextComponent
            color={COLORS.primary}
            fontSize={14}
            title="Mitochondrial Dysfunction & Fatigue"
            fontFamily={FONTS.Samsungsharpsans_Bold}
            marginBottom={7}
          />
          <View
            style={[
              commonStyle.row,
              {
                marginBottom: 10,
              },
            ]}
          >
            {MitochondrialData.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={[
                  commonStyle.tag,
                  {
                    alignSelf: "flex-start",
                    paddingHorizontal: 15,
                    paddingVertical: 10,
                    margin: 5,
                  },
                  state.mitochondrial_resolved.includes(item.name)
                    ? commonStyle.selectedTag
                    : commonStyle.unselectedTag,
                ]}
                onPress={() => toggleTendon('mitochondrial_resolved', item.name)}
              >
                <Text
                  style={[
                    commonStyle.tagText,
                    { flexWrap: "wrap", textAlign: "center" },
                    state.mitochondrial_resolved.includes(item.name) &&
                    commonStyle.selectedText,
                  ]}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>


          {/* Vision & Eye Issues */}

          <TextComponent
            color={COLORS.primary}
            fontSize={14}
            title="Vision & Eye Issues"
            fontFamily={FONTS.Samsungsharpsans_Bold}
            marginBottom={7}
          />
          <View
            style={[
              commonStyle.row,
              {
                marginBottom: 10,
              },
            ]}
          >
            {VisionData.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={[
                  commonStyle.tag,
                  {
                    alignSelf: "flex-start",
                    paddingHorizontal: 15,
                    paddingVertical: 10,
                    margin: 5,
                  },
                  state.vision_resolved.includes(item.name)
                    ? commonStyle.selectedTag
                    : commonStyle.unselectedTag,
                ]}
                onPress={() => toggleTendon('vision_resolved', item.name)}
              >
                <Text
                  style={[
                    commonStyle.tagText,
                    { flexWrap: "wrap", textAlign: "center" },
                    state.vision_resolved.includes(item.name) &&
                    commonStyle.selectedText,
                  ]}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>


          {/* Skin & Hair Changes*/}

          <TextComponent
            color={COLORS.primary}
            fontSize={14}
            title="Skin & Hair Changes"
            fontFamily={FONTS.Samsungsharpsans_Bold}
            marginBottom={7}
          />
          <View
            style={[
              commonStyle.row,
              {
                marginBottom: 10,
              },
            ]}
          >
            {SkinData.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={[
                  commonStyle.tag,
                  {
                    alignSelf: "flex-start",
                    paddingHorizontal: 15,
                    paddingVertical: 10,
                    margin: 5,
                  },
                  state.skin_hair_resolved.includes(item.name)
                    ? commonStyle.selectedTag
                    : commonStyle.unselectedTag,
                ]}
                onPress={() => toggleTendon('skin_hair_resolved', item.name)}
              >
                <Text
                  style={[
                    commonStyle.tagText,
                    { flexWrap: "wrap", textAlign: "center" },
                    state.skin_hair_resolved.includes(item.name) &&
                    commonStyle.selectedText,
                  ]}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>


          {/*   Cardiovascular Symptoms   */}

          <TextComponent
            color={COLORS.primary}
            fontSize={14}
            title="Cardiovascular Symptoms"
            fontFamily={FONTS.Samsungsharpsans_Bold}
            marginBottom={7}
          />
          <View
            style={[
              commonStyle.row,
              {
                marginBottom: 10,
              },
            ]}
          >
            {CardiovascularData.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={[
                  commonStyle.tag,
                  {
                    alignSelf: "flex-start",
                    paddingHorizontal: 15,
                    paddingVertical: 10,
                    margin: 5,
                  },
                  state.cardio_resolved.includes(item.name)
                    ? commonStyle.selectedTag
                    : commonStyle.unselectedTag,
                ]}
                onPress={() => toggleTendon('cardio_resolved', item.name)}
              >
                <Text
                  style={[
                    commonStyle.tagText,
                    { flexWrap: "wrap", textAlign: "center" },
                    state.cardio_resolved.includes(item.name) &&
                    commonStyle.selectedText,
                  ]}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>


          {/*   Hearing & Tinnitus Issues   */}

          <TextComponent
            color={COLORS.primary}
            fontSize={14}
            title="Hearing & Tinnitus Issues"
            fontFamily={FONTS.Samsungsharpsans_Bold}
            marginBottom={7}
          />
          <View
            style={[
              commonStyle.row,
              {
                marginBottom: 10,
              },
            ]}
          >
            {HearingData.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={[
                  commonStyle.tag,
                  {
                    alignSelf: "flex-start",
                    paddingHorizontal: 15,
                    paddingVertical: 10,
                    margin: 5,
                  },
                  state.hearing_resolved.includes(item.name)
                    ? commonStyle.selectedTag
                    : commonStyle.unselectedTag,
                ]}
                onPress={() => toggleTendon('hearing_resolved', item.name)}
              >
                <Text
                  style={[
                    commonStyle.tagText,
                    { flexWrap: "wrap", textAlign: "center" },
                    state.hearing_resolved.includes(item.name) &&
                    commonStyle.selectedText,
                  ]}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/*   Hormonal & Metabolic Changes   */}

          <TextComponent
            color={COLORS.primary}
            fontSize={14}
            title="Hormonal & Metabolic Changes"
            fontFamily={FONTS.Samsungsharpsans_Bold}
            marginBottom={7}
          />
          <View
            style={[
              commonStyle.row,
              {
                marginBottom: 10,
              },
            ]}
          >
            {HormonalData.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={[
                  commonStyle.tag,
                  {
                    alignSelf: "flex-start",
                    paddingHorizontal: 15,
                    paddingVertical: 10,
                    margin: 5,
                  },
                  state.hormonal_resolved.includes(item.name)
                    ? commonStyle.selectedTag
                    : commonStyle.unselectedTag,
                ]}
                onPress={() => toggleTendon('hormonal_resolved', item.name)}
              >
                <Text
                  style={[
                    commonStyle.tagText,
                    { flexWrap: "wrap", textAlign: "center" },
                    state.hormonal_resolved.includes(item.name) &&
                    commonStyle.selectedText,
                  ]}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>


        </ScrollView>

        {/* Custom Scroll Indicator */}
        <View
          style={{
            width: 4,
            height: "100%",
            backgroundColor: "#EAEAEA",
            marginLeft: 10,
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <Animated.View
            style={{
              width: 4,
              height: normalize(30),
              backgroundColor: COLORS.primary,
              borderRadius: 2,
              transform: [
                {
                  translateY: scrollY.interpolate({
                    inputRange: [0, normalize(1600)], // Adjust based on content height
                    outputRange: [0, normalize(250)], // Adjust based on container height
                    extrapolate: "clamp",
                  }),
                },
              ],
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeSymptomSliderComp;

const styles = StyleSheet.create({
  backBtn: {
    paddingLeft: moderateScale(15),
    position: 'absolute',
    zIndex: 2,
  },
});
