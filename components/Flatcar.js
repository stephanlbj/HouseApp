import React from 'react'
import {Text,View,Image ,FlatList,StyleSheet, Dimensions, Pressable} from 'react-native'
import car from '../cardata/cars'

const Flatcar = ({navigation}) => {

    const Car = ({caritem}) =>(

        <View style={{paddingHorizontal:5, backgroundColor:'#F2F3F4', marginVertical:10,paddingVertical:15, borderRadius:20}}>
        <Pressable key={caritem.id} onPress={()=>console.log(caritem.id)}>
        <Image source={caritem.img} style={styles.carstyle}/>

        <View style={styles.cardetails}>
        <Text style={{fontSize:17}}>{caritem.title}</Text>
        <Text style={{fontSize:17,  color:'#A93226'}}>price: {caritem.price}</Text>
        </View>
       
        </Pressable>
     
        </View>
    )
   const renderItem = ({item}) =>(

    <Car caritem={item}/>
   )
    return (
        <View style={{paddingHorizontal:10, paddingVertical:20}}>
            <FlatList
            data={car}
            renderItem={renderItem}
            
            />
        </View>
    )
}

export default Flatcar
const styles = StyleSheet.create({

    carstyle:{

        height:170,
        width:'100%',
        borderRadius:5,

    },

    cardetails:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:15,
        paddingHorizontal:12
    }
})