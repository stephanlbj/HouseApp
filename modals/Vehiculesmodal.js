import React, {useState} from 'react'
 
import {Modal,Text,View,Image ,StyleSheet, Dimensions, Button, Pressable} from 'react-native'


const Vehiculesmodal = ({isopen, itemclicked}) => {

const [close, setclose]= useState(isopen)
 

console.log(isopen+"hhhhhh")
console.log(itemclicked+"fffff")


    return (
        <View>
        <Modal visible={close}
        animationType="slide"
        transparent={false}
       
        >
      
        </Modal>
           
        </View>
    )
}

export default Vehiculesmodal
