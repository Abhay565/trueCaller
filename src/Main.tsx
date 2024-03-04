import { View, Text } from 'react-native'
import React from 'react';
import  {NavigationContainer} from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './Profile';
import MarkAttendence from './MarkAttendence';
import Leaves from './Leaves';
import Posters from './Posters';
import Ionicons from "react-native-vector-icons/Ionicons";

const markAttendence = "mark-attendence";
const leaves = "leaves";
const posters = "posters";
const profile = "profile";


const Tab = createBottomTabNavigator();

const Main = () => {
  return (

    <Tab.Navigator
     initialRouteName={markAttendence}
     screenOptions={ ({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;
        let rn = route.name;
        if(rn === markAttendence){
          iconName = focused ? 'mark-attendence' : "mark-attendence-outline"
        }
        else if(rn === profile ){
          iconName = focused ? 'profile' : "profile-outline"
        }
        else if(rn === posters ){
          iconName = focused ? 'posters' : "posters-outline"
        }
        else if(rn === leaves ){
          iconName = focused ? 'leaves' : "leaves-outline"
        }

        return <Ionicons name={iconName} size={size} color={color} />
      }
     })}
      >
      <Tab.Screen name={markAttendence} component={MarkAttendence} options={{headerShown: false}} />
      <Tab.Screen name={leaves} component={Leaves}  options={{headerShown: false}} />
      <Tab.Screen name={posters} component={Posters} options={{headerShown: false}} /> 
      <Tab.Screen name={profile} component={Profile} options={{headerShown: false}} />
    </Tab.Navigator>
  )
}

export default Main;