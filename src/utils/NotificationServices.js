import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
export async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        console.log('Authorization status:', authStatus); 
        getFcmToken()
    }
}

const getFcmToken = async () => {
    let fcmToken = await AsyncStorage.getItem('fcmToken')
    console.log(fcmToken, "the old Token");
    if (!fcmToken) {
        try {
            const fcmToken = await messaging().getToken();
            if (fcmToken) {
                console.log(fcmToken, "the new fcm token");
                await AsyncStorage.setItem('fcmToken', fcmToken);
            }
        } catch (error) {
            console.log(error, "Error in fcm token");
        }

    }
}

export const notificationListener = async () => {
    // messaging().onNotificationOpenedApp(remoteMessage => {
    //     console.log('Notification caused app to open from background state:', remoteMessage);
    // });

    // forground message

    // messaging().onMessage(async remoteMessage =>{
    //     console.log("received in forground",remoteMessage);
    // }) 

    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
        console.log("Remote",remoteMessage);
        // showLocalNotification({title: remoteMessage.data.title, body: remoteMessage.data.body}, remoteMessage.messageId);
        return Promise.resolve();
      });

    // Check whether an initial notification is available when app from quit
    // messaging()
    //     .getInitialNotification()
    //     .then(remoteMessage => {
    //         if (remoteMessage) {
    //             console.log( 'Notification caused app to open from quit state:',remoteMessage ); 

    //         }
    //     });

        

        // PushNotification.configure({
        //     onRegister: function (token) {
        //         console.log("TOKEN:===========", token);
        //       },
        //       onNotification: function (notification) {
        //         console.log("NOTIFICATION:", notification);
            
        //       },
        //   })
    

}

