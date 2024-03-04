import { View, Text, Button,StyleSheet, TouchableHighlight, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react';
import { styles } from './LoginStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
// import Icon from "react-native-vector-icons";

const Login = (props) => {

  
    return (
    <SafeAreaView style={styles.main} >

        <Text style={styles.phoneText}>Enter your Mobile number</Text>
        <Text style={styles.phoneText2}>We will send OTP on this number</Text>
       
       <View style={styles.container} >
        <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/800px-Flag_of_India.svg.png"}} height={25} width={25}/>
        <Text style={styles.inputText}>+91</Text>
        <TextInput style={styles.input} placeholder='Enter Your Phone Number'></TextInput>
       </View>


       <View style={styles.trust}>
         <Text style={styles.text}>Trust by <Text style={styles.innerText}>10 lakh+</Text> businesses </Text>
        </View> 
       <TouchableHighlight onPress={()=> props.navigation.navigate("Setup your company account")}><Text style={styles.button}>Continue</Text></TouchableHighlight>
       
       <View style={styles.lowerContainer}>
        <Text >or Loign with <Text style={styles.true}>TrueCaller</Text></Text>
        <Text style={styles.text2}>By Continue, You agree to <Text style={styles.dark}>Terms & Conditions</Text> and <Text style={styles.dark}>Privacy Policy</Text></Text>
        </View>


    </SafeAreaView>
  )
}




export default Login;