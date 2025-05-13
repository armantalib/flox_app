import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
        console.log("Async Error", e);
    }
}

export const getItem = async (key) => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(key).then(data => {
            resolve(JSON.parse(data))
        }).catch((error) => {
            reject(error)
        })
    })
}

export const deleteValue = async (key) => {
      await AsyncStorage.removeItem(key);
}

export const clearAllData = async () => {
   await AsyncStorage.getAllKeys()
    .then(keys => AsyncStorage.multiRemove(keys))
    .then(() => console.log("Clear all storage value"));
}

