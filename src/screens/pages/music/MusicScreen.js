import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import styles from "./Styles";
import { IMAGES, SVG_IMAGES } from "../../../constants/images";
import { useDispatch, useSelector } from "react-redux";
import { normalize } from "../../../utils/Metrics";
import stylesG from "../../../assets/css/stylesG";
import Icons from "../../../utils/Icons";
import TrackPlayer, { Capability, State, useProgress, Event } from 'react-native-track-player';
import Slider from '@react-native-community/slider';
import { COLORS } from "../../../constants/colors";
const MusicScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { musicDetail } = useSelector((state) => state?.hub);
  const progress = useProgress();
  const dispatch = useDispatch();

  const [isAudioPlay, setIsAudioPlay] = useState(true)


  useEffect(() => {
    addTrack();
    return () => {
      onPressClose()
    }
  }, [])


  


  const addTrack = async () => {
    await TrackPlayer.reset();

    // Add a track to the player
    await TrackPlayer.add({
      id: '1',
      url: musicDetail?.audio, // Online or local file
      title: 'Sample Track',
      artist: 'Unknown Artist',
      artwork: 'https://example.com/track.jpg',
    });

    await TrackPlayer.play();

    // dispatch(setIsAudioPlay(true));
  };

  const togglePlayback = async () => {
    try {
      const state = await TrackPlayer.getState();
      if (state === State.Playing) {
        await TrackPlayer.pause();
        setIsAudioPlay(false)
      } else {
        await TrackPlayer.play();
        setIsAudioPlay(true)
      }
    } catch (error) {
      // showToast("Please select surah or ayat in learn quran selection")
    }
  };


  const onPressClose = async () => {
    // dispatch(setIsAudioSet(false))
    const state = await TrackPlayer.getState();
    if (state === State.Playing) {
      await TrackPlayer.pause();
      setIsAudioPlay(false)
    }
  }



  return (
    <View
      source={{ uri: musicDetail?.image }}
      style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
    // style={[
    //   styles.safeArea,
    //   {
    //     paddingTop: insets.top,
    //   },
    // ]}
    >
      <Image
        source={{ uri: musicDetail?.image }}
        style={{ width: '100%', height: '100%', position: 'absolute' }}
      />
      <View style={{ width: '100%', height: '100%', position: 'absolute', backgroundColor: 'rgba(0,0,0,0.3)' }}></View>
      <View style={[styles.header, { position: 'absolute', top: normalize(60), width: '100%' }]}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <SVG_IMAGES.MusicBack_SVG />
        </TouchableOpacity>
        <TouchableOpacity style={styles.backButton}>
          <SVG_IMAGES.MusicLike_SVG />
        </TouchableOpacity>
      </View>

      <Text style={[stylesG.fontBold, { color: '#FFF', fontSize: normalize(24), textAlign: 'center' }]} numberOfLines={2}>{musicDetail?.title}</Text>

      <TouchableOpacity
        onPress={() => {
          togglePlayback()
        }}
        style={{ marginTop: normalize(50) }}>
        {isAudioPlay ?
          <Icons
            name={'pause'}
            family={'Fontisto'}
            size={70}
            color={'#FFFFFF'}
          />
          :
          <Icons
            name={'play'}
            family={'Fontisto'}
            size={70}
            color={'#FFFFFF'}
          />
        }
      </TouchableOpacity>
      <Text style={[stylesG.fontBold, { color: '#FFF', fontSize: normalize(16), textAlign: 'center', marginTop: normalize(50), width: '80%', alignSelf: 'center' }]} numberOfLines={2}>{musicDetail?.desc}</Text>
      <View style={{ width: '80%', alignSelf: 'center', marginTop: normalize(50) }}>
        <Slider
          style={styles.progressBar}
          minimumValue={0}
          maximumValue={progress.duration}
          value={progress.position}
          onSlidingComplete={async value => {
            await TrackPlayer.seekTo(value);
          }}
          minimumTrackTintColor={COLORS.lemon}
          maximumTrackTintColor={COLORS.border}
          thumbTintColor={COLORS.primary}
        />

        {/* Time Display */}
        <View style={styles.timeContainer}>
          <Text style={styles.time}>{new Date(progress.position * 1000).toISOString().substr(14, 5)}</Text>
          <Text style={styles.time}>
            {new Date((progress.duration - progress.position) * 1000).toISOString().substr(14, 5)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default MusicScreen;
