import React,{useState} from 'react'
import { Dimensions ,Button, Text,ScrollView,TouchableOpacity ,TextInput , View , Image, StatusBar, SafeAreaView, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Listop from '../components/Listop'
import Category from '../components/Category'
import Vehiculesmodal from '../modals/Vehiculesmodal'
import listarr from '../housedata/listcategory'
import Modal from 'react-native-modal'



const {width} = Dimensions.get('screen')


const Main = ({navigation}) => {

    const [itemclicked, setitemclicked] = useState()
    const [isopen, setisopen] = useState(false)

    const Listcateg = () =>{

        return (
            <ScrollView horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <View style={styles.list}>
           
            
            {listarr.map((item, index)=>(
            
               <TouchableOpacity  key={index}  onPress={()=>{
           
                  setitemclicked(index)
                   setisopen(true)
               }}>
               
             
               <View style={{ paddingHorizontal:3, marginLeft: 5 ,paddingVertical:20}}>
               <View style={styles.card}>
               
               <Image source={item.img} style={styles.cardimage}/>
               <Text style={{fontSize:18, fontWeight:'600', textAlign:'center',marginTop:10}}>{item.title}</Text>
               </View>
               
               </View>
               
               
               
              
               </TouchableOpacity>
             
            
            
            ))}
            
              </View>
             
            </ScrollView>
           
            
             
             
               )
    }
  
  
    return (

        <SafeAreaView style={{flex:1, backgroundColor:'white' }}>
        <StatusBar translucent={false} 
        backgroundColor="white"
        barStyle="dark-content"/>


   

<ScrollView keyboardShouldPersistTaps={false}>

<View style={styles.header_view}>
        
      

<Image
style={styles.hesder_img}
source={require('../assets/home/mema1.jpg')}
/>
</View>
<View style={{paddingHorizontal:20 , paddingVertical:40 ,flexDirection:'row', justifyContent:'space-between',}}>

<View style={styles.search_input}>
<Icon name="magnify" size={25}/>
<TextInput placeholder="Search address, city , location"/>
</View>


 

</View>
<Listcateg/>

<Category navigation={navigation}/>
 


<Modal isVisible={isopen}
animationType="fade"
hardwareAccelerated={true} 
transparent={true}
 
 >


 <View style={{justifyContent:'center',alignItems:'center', flex:1}}>
 
 <View style={styles.modalwarning}>
 
 <Image 
 source={require('../assets/home/mema1.jpg')}
 style={styles.image_style}
 
 />
 <Text style={{justifyContent:'center', alignItems:'center'}}>hhhhhh!</Text>
 <Button title="Close me" onPress={()=>{
     setisopen(false)
 
     console.log(itemclicked)
 
 }}/>
 </View>
</View>


</Modal>




</ScrollView>



        </SafeAreaView>
      
    )
}

export default Main


const styles = StyleSheet.create({

header_view:{
 marginTop:40,
paddingVertical:10,
justifyContent:'center',
alignItems:'center',
 
},
hesder_img:{
height:100,
width:100,
paddingHorizontal:10,

resizeMode:'center'
},
search_input:{

    flexDirection:'row',
    paddingVertical:20,
    paddingHorizontal:20,
     alignItems:'center',
    backgroundColor:'#F2F3F4',
    borderRadius:10,
    flex:1,
  
    height:70

},

sort_icon:{
    backgroundColor:'black', 
   height:70,
   width:70,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
marginLeft:10

},

list:{
  
    justifyContent:'space-between',
    marginTop:20,
    paddingHorizontal:5,
    paddingVertical:20,
    flexDirection:'row',
    overflow:'visible'

}, 
card:{

    height:210,
    width:width/ 2-30,
    backgroundColor:'#F2F3F4',
    elevation:15,
    borderRadius:20,
    alignItems:'center',
    paddingHorizontal:10,
    paddingTop:10

},
cardimage:{

    height:140,
    width:'100%',
    borderRadius:10,
    resizeMode:'center'
}
,
modalwarning:{

    width:300,
    height:500,
    backgroundColor:'#FDFEFE',
    alignItems:'center',
    borderRadius:5
},
    
image_style:{
height:250,
width:'100%',
borderRadius:10,
resizeMode:'center'

},
})