import React from 'react'
import {Text,View,Image ,FlatList,StyleSheet, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import houses from '../housedata/house'
const {width} = Dimensions.get('screen')



const Flathouse = ({navigation}) => {



const Item = ({house})=>(

    <Pressable key={house.id} onPress={()=>navigation.navigate('detail', house)}>
    
    <View style={styles.card}>
    <Image source={house.img} style={styles.img}/>
    <View style={styles.text_card}>
    <Text style={{fontSize:18}}>
    {house.title}
    </Text>
    <Text style={{fontSize:15, color:'#A93226'}}>
    {house.price}
    </Text>
    </View>

    <Text style={{color:'#B3B6B7', marginTop:15}}>{house.location}</Text>
    <View style={{flexDirection:'row', marginTop:10}}>
    <View style={styles.facility}>
    <Icon name="bed" size={24} color="#A6ACAF"/>
    <Text style={{paddingLeft:5}}>{house.bed}</Text>
    </View>

    <View style={styles.facility}>
    <Icon name="bath" size={24} color="#A6ACAF"/>
    <Text style={{paddingLeft:5}}>{house.bath}</Text>
    </View>

    <View style={styles.facility}>
    <Icon name="couch" size={24} color="#A6ACAF"/>
    <Text style={{paddingLeft:5}}>{house.couch}</Text>
    </View>

 
    </View>

    
    </View>
    
    </Pressable>
 
)


    const renderItem =({item})=>(

        <Item house={item}/>
    )



    
    return (
        <View>
            <FlatList
            contentContainerStyle={{paddingHorizontal:20, paddingVertical:30}}
            renderItem={renderItem}
            data={houses}
            showsHorizontalScrollIndicator={false}
       
            />
        </View>
    )
}

export default Flathouse


const styles = StyleSheet.create({

    card:{
      height:280,
      backgroundColor:'#F2F3F4',
      width : width -40,
      marginRight:20,
      padding:10,
     marginVertical:10,
      borderRadius:20
    },

    img:{

       height:150,
       width:'100%',
       borderRadius:5

    },
    text_card:{

        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:18
    },
    facility:{
paddingHorizontal:5,
flexDirection:'row',
alignItems:'center',

    },
})
