
import { launchImageLibrary,launchCamera } from 'react-native-image-picker';
import { Platform } from 'react-native'
import { dataGetFileUpload } from './myAxios';
// import { RESULTS, request, PERMISSIONS } from 'react-native-permissions';

export const ImageOpenGallery = async () => {
    try {
        // if (Platform.OS === 'android') {
        //     const response = await request(
        //         Platform.select({
        //             android: PERMISSIONS.ANDROID.CAMERA,
        //             ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
        //         })
        //     );
        //     if (response !== RESULTS.GRANTED) throw new Error(`check photo library permissions`)
        // }
        const pickedFile = await launchImageLibrary({ mediaType: 'photo', selectionLimit: 1, })
        if (pickedFile?.assets && pickedFile?.assets?.length !== 0) {
            let uriImage = pickedFile.assets[0]
            return uriImage
           
        } else {
            throw new Error(`Image selection failed.`)
        }
    } catch (err) {
        // showToast(err.message)
    }
}

export const ImageCameraLaunch = async () => {
    try {
        // if (Platform.OS === 'android') {
        //     const response = await request(
        //         Platform.select({
        //             android: PERMISSIONS.ANDROID.CAMERA,
        //             ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
        //         })
        //     );
        //     if (response !== RESULTS.GRANTED) throw new Error(`check photo library permissions`)
        // }
        const pickedFile = await launchCamera()
        if (pickedFile?.assets && pickedFile?.assets?.length !== 0) {
            let uriImage = pickedFile.assets[0]
            return uriImage
           
        } else {
            throw new Error(`Image selection failed.`)
        }
    } catch (err) {
        // showToast(err.message)
    }
}



export const MultiImageOpenGallery = async () => {
    try {
        // if (Platform.OS === 'android') {
        //     const response = await request(
        //         Platform.select({
        //             android: PERMISSIONS.ANDROID.CAMERA,
        //             ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
        //         })
        //     );
        //     if (response !== RESULTS.GRANTED) throw new Error(`check photo library permissions`)
        // }
        const pickedFile = await launchImageLibrary({ mediaType: 'photo',selectionLimit:6 })
        if (pickedFile?.assets && pickedFile?.assets?.length !== 0) {
            return pickedFile
           
        } else {
            throw new Error(`Image selection failed.`)
        }
    } catch (err) {
        // showToast(err.message)
    }
}

export const uploadImageToServer = async (result) => {
    try {

        const imageName = result.uri.split('/');
        const imageData = {
            fileCopyUri: null,
            name: Platform.OS == 'ios' ? result.fileName : imageName[imageName.length - 1],
            size: result.fileSize,
            type: result.type,
            uri: result.uri,
        }
        const endPoint = 'image/upload'
        let body = new FormData();
        body.append('image', imageData);

        const response = await dataGetFileUpload(endPoint, body)
        let nameIs = response?.image;
        return nameIs
    } catch (err) {
       return err
    } finally {
      
    }
};