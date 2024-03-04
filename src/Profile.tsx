import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './ProfileStyle';
import { Ionicons } from "react-native-vector-icons/Ionicons";

const Profile = () => {
  return (
    <ScrollView>
      <View style={styles.conatiner}>
        <Image source={{uri:"https://www.thejungleadventure.com/assets/images/logo/noimage.png"}} style={styles.img}/>
        <Text style={styles.text} >Abhay Bhadoriya</Text>
      </View>

  <View style={styles.main}>

   <TouchableOpacity style={styles.card}>
    <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8jc3cJXHUCJ7vrstXYhMSAlQzzrtJJyERmg&usqp=CAU"}} style={styles.small}/>
    <Text>Profile</Text>
   </TouchableOpacity>

   <TouchableOpacity style={styles.card}>
    <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8jc3cJXHUCJ7vrstXYhMSAlQzzrtJJyERmg&usqp=CAU"}} style={styles.small}/>
    <Text>View attendence</Text>
   </TouchableOpacity>

   <TouchableOpacity style={styles.card}>
    <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8jc3cJXHUCJ7vrstXYhMSAlQzzrtJJyERmg&usqp=CAU"}} style={styles.small}/>
    <Text>set alarm</Text>
   </TouchableOpacity>

   <TouchableOpacity style={styles.card}>
    <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8jc3cJXHUCJ7vrstXYhMSAlQzzrtJJyERmg&usqp=CAU"}} style={styles.small}/>
    <Text>Request Leave</Text>
   </TouchableOpacity>

   <TouchableOpacity style={styles.card}>
    <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8jc3cJXHUCJ7vrstXYhMSAlQzzrtJJyERmg&usqp=CAU"}} style={styles.small}/>
    <Text>Notes</Text>
   </TouchableOpacity>

   <TouchableOpacity style={styles.card}>
    <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8jc3cJXHUCJ7vrstXYhMSAlQzzrtJJyERmg&usqp=CAU"}} style={styles.small}/>
    <Text>Holidays List </Text>
   </TouchableOpacity>

   <TouchableOpacity style={styles.card}>
    <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8jc3cJXHUCJ7vrstXYhMSAlQzzrtJJyERmg&usqp=CAU"}} style={styles.small}/>
    <Text>Add Business</Text>
   </TouchableOpacity>
   

   <TouchableOpacity style={styles.card}>
    <Image source={{uri:"https://static.thenounproject.com/png/187803-200.png"}} style={styles.small}/>
    <Text>My Document</Text>
   </TouchableOpacity>

   <TouchableOpacity style={styles.card}>
    <Image source={{uri:"https://static.thenounproject.com/png/187803-200.png"}} style={styles.small}/>
    <Text>Attendence Reminder</Text>
   </TouchableOpacity>

   <TouchableOpacity style={styles.card}>
    <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8jc3cJXHUCJ7vrstXYhMSAlQzzrtJJyERmg&usqp=CAU"}} style={styles.small}/>
    <Text>Profile</Text>
   </TouchableOpacity>

   <TouchableOpacity style={styles.card}>
    <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8jc3cJXHUCJ7vrstXYhMSAlQzzrtJJyERmg&usqp=CAU"}} style={styles.small}/>
    <Text>Profile</Text>
   </TouchableOpacity>
   
   <TouchableOpacity style={styles.card}>
    <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8jc3cJXHUCJ7vrstXYhMSAlQzzrtJJyERmg&usqp=CAU"}} style={styles.small}/>
    <Text>Profile</Text>
   </TouchableOpacity>

  </View>


    </ScrollView>
  )
}

export default Profile;