import { View, Text, TouchableOpacity, Platform, Alert } from 'react-native'
import React from 'react';
import ImagePicker from 'react-native-image-crop-picker';
// import { androidCameraPermission } from '../permissons';


const MarkAttendence = () => {

const onSelectImage = async () =>{
//  const permissonStatus = await androidCameraPermission();
//  if(permissonStatus || Platform.OS == 'ios')
//  {
//     Alert.alert(
//         "profile picture",
//         "choose an option",
//         [
//             {text:"Camera", onPress: onCamera},
//             {text:"Gallery", onPress:onGallery},
//             {text:"Cancel", onPress:()=>{}}
//         ]
//     )
//  }
ImagePicker.openCamera({
    width: 300,
    height: 400,
    cropping: true,
  }).then(image => {
    console.log(image);
  });
    
    ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true
      }).then(image => {
        console.log(image);
      });

}

// const onCamera= ()=>{
// Alert.alert("in camera")
// }

// const onGallery=()=>{
// Alert.alert("in galery")
// }

  return (
    <View style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
      <Text>MarkAttendence</Text>
      <TouchableOpacity activeOpacity={0.8} onPress={onSelectImage} style={{backgroundColor:"aqua",height:"20%",width:"40%",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:10}}>
        <Text>Upload Image</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MarkAttendence;