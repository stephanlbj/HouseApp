import React from 'react'
import { View , Text, StyleSheet } from 'react-native'

const Others = () => {


    const services = [

        {
            name:'Borrow Money',id:'1'
        },
        {
            name:'Find your best school',id:'2'
        }
    ]
    return (
        <View style={StyleSheet.container}>
        <View  style={{justifyContent:'center',alignItems:'center', marginTop:40, paddingVertical:30 }}>
        <Text style={{fontSize:20}}>Mema offer services such as:</Text>
        </View>
          
{services.map((item)=>(

    <View style={{justifyContent:'center',alignItems:'center' , marginTop:5, backgroundColor:'#F2F3F4', marginHorizontal:15,
borderRadius:10, marginVertical:20 }} key={item.id}>
    <Text
    style={{padding:20,
    fontSize:20,
marginTop:20}}>{item.id}) {item.name}</Text>
    </View>
  
    ))}
      </View>
    )
}

export default Others

const styles = StyleSheet.create({

    container:{
        flex:1,
        marginTop:40,
marginVertical:40,

    }
})