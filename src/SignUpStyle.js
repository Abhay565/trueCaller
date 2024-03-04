import { StyleSheet } from "react-native";

export const styles =StyleSheet.create({
    main:{
        flex :1
       },
    trust:{
        margin:20,
        marginBottom:5,
        height:"10%",
        backgroundColor:"#d0efff",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
      },
      text:{
        fontSize:14 ,
     },
     innerText:{
         color:"#4169e1",
         fontSize:16,
         fontWeight:"700"
     },
      container:{
        marginRight:20,
        marginLeft:20,
        marginTop:10,
      },
      title:{
        fontSize:16,
        color:"#808080"
      },
      input:{
        marginTop:4,
        borderWidth:1,
        borderColor:"black",
        borderRadius:8,
        height: 40,
      },
      innerContainer:{
       marginTop:"auto",
       marginRight:20,
       marginLeft:20,
      },
      button:{
        backgroundColor:"#00ab41",
        textAlign: 'center',
        color:"#fff",
        marginTop:"auto", 
        padding:10,
        borderRadius:6
    },
    test2:{
       fontSize:14,
       margin:6 
    }

   
})