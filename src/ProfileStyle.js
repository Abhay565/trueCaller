import { StyleSheet } from "react-native";

export const styles =StyleSheet.create({
    conatiner:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white"
    },
    img:{
        height:100,
        width:100,
        borderRadius:50,
    },
    text:{
        margin:6,
        fontWeight:"600"
    },
    main:{
    margin:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    },

    card:{
        width:"29%",
        padding: 10,
        marginVertical: 10,
        borderWidth: 1,
        backgroundColor:"white",
        borderColor: '#ccc',
        alignItems: 'center',

    },
    small:{
        height:70,
        width:70,
        borderRadius:35
    }
}) 