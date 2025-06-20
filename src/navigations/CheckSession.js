import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../storeTolkit/userSlice';
import { SCREENS } from '../constants/Screen';
import GradientBackground from '../components/GradientBackground';
import { ActivityIndicator, View } from 'react-native';
import { Loader } from '../components/General';
import { useNavigation } from '@react-navigation/native';
import { getItem } from '../utils/async_storage';

const CheckSession = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isSession, setIsSession] = useState(false)

  useEffect(() => {
    getDataFromSession();
  }, [])

  const getDataFromSession = async () => {
    const token = await getItem('token');
    const user_data = await getItem('user_data');
    setIsSession(true)
    if (token) {
      setIsSession(true)
      dispatch(setUser(user_data))

      navigation.navigate(SCREENS.TabRoutes, {
        screen: SCREENS.TabHome,
      });
    }else{
          navigation.navigate(SCREENS.AuthRoutes, {
        screen: SCREENS.ChooseLanguage,
      });
    }
  }

    return (<>
      <GradientBackground />
      <View style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size={'large'} color={'#000000'}/>
      </View>
    </>)
  }

  export default CheckSession