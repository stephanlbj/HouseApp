
import React, {useState} from 'react'
import {Text,View, StyleSheet} from 'react-native'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import Flatcar from '../components/Flatcar'
import Flathouse from '../components/Flathouse'
import Others from '../components/Others'


const Category = ({navigation}) => {

const [selectCat, setselectCat]=useState(0,)

    const Listcategory = [


        {
            cat:'House rental',id:'1'
        },
        {
            cat:'Car rental',id:'2'
        },
        {
            cat:'Other Services',id:'3'
        },
 
]
    return (
        <View>
        
        <View style={styles.listcategory}>
        {Listcategory.map((opt,index)=>(
            <Pressable onPress={()=>setselectCat(index)} key={index}>
            <Text style={[styles.cateTextsyle, index == selectCat && styles.active
            ]}>
            {opt.cat}</Text>
            </Pressable>
        ))
     
     }

 
     </View>
        

     <View>
     {selectCat === 0 ?  (<Flathouse navigation={navigation}/> ) : ( selectCat === 1 ? (<Flatcar navigation={navigation}/>) : (<Others/>) ) }
     
     </View>
        </View>
     
    )
}

export default Category

const styles = StyleSheet.create({


    listcategory:{
marginTop:40,
flexDirection:'row',
justifyContent:'space-between',
paddingHorizontal:30,
},
active:{
color:'black',
borderBottomWidth:1,
paddingBottom:5
},
cateTextsyle:{
    fontSize:16,
     fontWeight:'700',
 color:'grey',

},
})
