import { View, Text, TextInput,TouchableHighlight } from 'react-native'
import React,{useEffect,useRef,useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './SignUpStyle';
import { Dropdown } from 'react-native-element-dropdown';

const SignUp = (props) => {

    const inpurRef = useRef();

    useEffect(()=>{
        setTimeout(()=>{
            inpurRef.current?.focus()
        },0)
    },[]);

    const items= [
        {id:1,value:"item1"},
        {id:2,value:"item2"},
        {id:3,value:"item3"},
        {id:4,value:"item4"},

    ]
  return (
    <SafeAreaView style={styles.main}>
        <View style={styles.trust}>
         <Text style={styles.text}>Trust by <Text style={styles.innerText}>10 lakh+</Text> businesses </Text>
        <Text style={styles.text}>Best attendence app</Text>
        </View>

        <View style={styles.container}>
            <Text style={styles.title}>Company Name</Text>
            <TextInput ref={inpurRef} style={styles.input} placeholder='ABC pvt ltd'></TextInput>
        </View>

        <View style={styles.container}>
            <Text style={styles.title}>Staff Count (Optional)</Text>
            <TextInput ref={inpurRef} style={styles.input} placeholder='eg. 15'></TextInput>
        </View>
        
        <View style={styles.container}>
            <Text style={styles.title}>Category (Optional)</Text>
            <Dropdown
        style={styles.input}
        data={items}
        search
        maxHeight={200}
        valueField="value"
        placeholder="Select item"
        searchPlaceholder="Search..."
      />
        </View>
        
        <View style={styles.container}>
            <Text style={styles.title}>Number of Branches (Optional)</Text>
            <TextInput ref={inpurRef} style={styles.input} placeholder='Add number of branches'></TextInput>
        </View>

      <View style={styles.innerContainer}>
        <Text style={styles.test2} >See free Whatshapp alert</Text>
      <TouchableHighlight onPress={()=> props.navigation.navigate("Dashboard")} ><Text style={styles.button}>Continue</Text></TouchableHighlight>
      </View>

    </SafeAreaView>
  )
}

export default SignUp;