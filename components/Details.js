import React , {useState}from 'react'
import {View, SafeAreaView, ImageBackground ,ScrollView, Text,StyleSheet, FlatList ,StatusBar, TouchableOpacity, Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
 


const Details = ({navigation, route}) => {


      // <View style={styles.vtour}>
    // <Text style={{color:'white', fontSize:16}}>Virtual tour</Text>
    // </View>

    const Card = ({room}) =>(

        <View style={styles.card}>

            <Image source={room} style={{width:120,height:120 , marginRight:10, borderRadius:10}}/>
         </View>

   )
const renderItem = ({item})=>(

    <Card room={item}/>

)

  


    const details = route.params

    return (
        <SafeAreaView style={{flex:1 }}>
        <StatusBar translucent={false} 
        backgroundColor="white"
        barStyle="dark-content"/>

        <ScrollView>
        <View style={styles.backimage}>
        <ImageBackground
        style={styles.img}
        source={details.img}
        >
        <View style={styles.header}>
        <View style={{height:50,width:50,backgroundColor:'white',
    borderRadius:5, alignItems:'center', justifyContent:'center'}}>
        <Icon name="heart" size={30} color="#E74C3C"/>
        </View>
        </View>
        
        </ImageBackground>
    
  


    </View>
  

    <View style={styles.vtour}>
    <Text style={{fontSize:18, color:'black'}}>{details.title}</Text>
    <View style={styles.rate}>
    <Icon name="star" size={20} color="#FDFEFE"/>
    <Text>3.5</Text>
    </View>
    </View>

    <View  style={styles.description}>
    <Text style={{fontSize:15, color:'black'}}>{details.description}</Text>
    </View>
  
    <View style={{flexDirection:'row', marginTop:10 ,paddingHorizontal:20, paddingVertical:20}}>
    <View style={styles.facility}>
    <Icon name="bed" size={24} color="#A6ACAF"/>
    <Text style={{paddingLeft:5}}>{details.bed}</Text>
    </View>

    <View style={styles.facility}>
    <Icon name="bath" size={24} color="#A6ACAF"/>
    <Text style={{paddingLeft:5}}>{details.bath}</Text>
    </View>

    <View style={styles.facility}>
    <Icon name="couch" size={24} color="#A6ACAF"/>
    <Text style={{paddingLeft:5}}>{details.couch}</Text>
    </View>

 
    </View>

   <View style={{paddingHorizontal:22,paddingVertical:20}}>
  

   <FlatList
   data={details.pieces}
   renderItem={renderItem}
   horizontal
   showsHorizontalScrollIndicator={false}
   
   />
   </View>

   <View style={styles.btn}>
   <Text style={{paddingLeft:5, fontSize:17, color:'#A93226'}}>Price:{details.price}</Text>
   
   </View>
 
   <View style={styles.btn_container}>
   <TouchableOpacity style={styles.btn1} 
   onPress={()=>navigation.navigate('Main')}>
   <Text style={{color:'white'}}>
  {details.action} now
    </Text>
   
   </TouchableOpacity>
   </View>
        </ScrollView>
     
        </SafeAreaView>
      
    )
}

export default Details


const styles = StyleSheet.create({


backimage:{

marginHorizontal:20,
elevation:20,
marginTop:20,
alignItems:'center',
height:350,

},

img:{
height:'100%',
width:'100%',
borderRadius:20,
overflow:'hidden' 
},

header:{

    paddingVertical:20,
    paddingHorizontal:20,
    flexDirection:'row',
    justifyContent:'flex-end'
},
vtour:{

    
  flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:25,
    paddingVertical:20,
marginTop:10,
alignItems:'center'
  
},
rate:{

    width:50,
    height:50,
    borderRadius:10,
    backgroundColor:'#1F618D',
    alignItems:'center',
    justifyContent:'center'
},

description:{

    paddingHorizontal:25,
    paddingVertical:20,
},
facility:{
    paddingHorizontal:5,
    flexDirection:'row',
    alignItems:'center',
    
        },

        card:{

            paddingVertical:20,
            paddingHorizontal:5
        },
        btn:{

           flexDirection:'row',
           paddingHorizontal:20,
           paddingVertical:20 ,
           justifyContent:'space-between'
        },

        btn_container:{
    
     
            alignItems:'center',
            paddingHorizontal:10,
            paddingVertical:20,
            flex:1,
            justifyContent:'flex-end',
            marginBottom:70
           },
           btn1:{
        
            height:50,
            width:180,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#5cafd4',
            borderRadius:10
            
           }

})