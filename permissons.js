import { PermissionsAndroid,Platform } from "react-native";

export const androidCameraPermission =() => new Promise(async (resolve,reject)=>{

    try{
        if(Platform.OS === "android" && Platform.Version > 22){
            const granted = await PermissionsAndroid.requestMultiple({
                PermissionsAndroid.PERMISSIONS.CAMERA,
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_SRORAGE,
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            });
            console.log(granted,"granted response");

            if(
                granted['android.permission.CAMERA'] !== 'granted' ||
                granted['android.permission.WRITE_EXTERNAL_STORAGE'] !== "granted" ||
                granted['android.permission.READ_EXTERNAL_STORAGE'] !== "granted" )
                
                {
                  showError("Don't have required permission.please allow permission")
                  return resolve(false);
                } 
                return resolve(true)
        }
        return resolve(true)
    }
    catch(error){
        return resolve(false);
    }

});