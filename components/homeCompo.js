import React from 'react'
import {View, StatusBar, SafeAreaView, StyleSheet,Image  ,TouchableOpacity, Text } from 'react-native'

const HomeCompo = ({navigation}) => {

setTimeout(()=>{

navigation.navigate('Main')

},3000)


    return (
        <SafeAreaView style={styles.container}>
        <StatusBar translucent backgroundColor="rgba(0,0,0,0)"/>
        <Image 
        source={require('../assets/home/mema1.jpg')}
        style={styles.image_style}
        
        />
      

            

           
     
    
            
        
        </SafeAreaView>
     
      )
    }

    export  default HomeCompo;
    
    const styles = StyleSheet.create({
      container: {
        flex:1,backgroundColor:'white',
        alignItems: 'center',
        justifyContent: 'center',
      },
    
      image_style:{
    height:250,
    width:'100%',
  
   resizeMode:'center'
    
      },
      style_dot:{
    justifyContent:'center',
    alignItems:'center',
    height:20,
    flexDirection:'row'
    
      },
      indicators:{
    height:3,
    width:30,
    backgroundColor:'grey',
    borderRadius:5,
    marginHorizontal:5
    
      },
    
      indicators_active:{
        
        backgroundColor:'black',
       },
       header_home:{
    
        fontSize:20,
        fontWeight:'700',
    
       },
    
       text_style:{
        fontSize:16,
    color:'grey'
       },
    
       btn_container:{
    
     
        alignItems:'center',
        paddingHorizontal:10,
        flex:1,
        justifyContent:'flex-end',
        marginBottom:70
       },
       btn:{
    
        height:50,
        width:180,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#5cafd4',
        borderRadius:10
        
       }
     
    
    });
    