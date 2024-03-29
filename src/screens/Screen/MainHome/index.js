import React,{useState,useRef} from 'react';
import Homeheader from '../../../components/Homeheader';
import {View,Text, StyleSheet, Image, TouchableOpacity,ScrollView,Modal} from 'react-native';
import Path from '../../../constants/Imagepath';
import ReadMore from '@fawazahmed/react-native-read-more';
import FbGrid from "react-native-fb-image-grid";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../utility';
import RBSheet from "react-native-raw-bottom-sheet";
const MainHome = () => {
  const [HomeData,setHomeData]=useState([{"id":1},{"id":2},{"id":3}])
  const [modalVisible, setModalVisible] = useState(false);
  const refRBSheet = useRef();
     const onPress = (url, index, event) => {
    }

  return (
      <View style={ styles.containerStyle}>
          <Homeheader  showNotification={false}/>
          <ScrollView>
            <View style={{marginBottom:hp('10%')}}>
            { HomeData.length>0 ? HomeData.map(()=>{
           return(
            
            <View >
         <View style={{marginTop:hp('3%'), flexDirection: 'row', alignItems:'center', justifyContent:'space-between'}}>
           <View style={{justifyContent:'center', alignItems:'center', flexDirection:'row', marginLeft:wp('2%')}}>
             <Image source={Path.Profile}></Image>
             <Text  style={{color:'#E9F0FA', marginLeft:'6%', fontWeight:'bold'}}>liamnorris</Text>
           </View>
           <View style={{justifyContent:'center', alignItems:'center', flexDirection:'row', marginRight:wp('2%')}}>
            <TouchableOpacity>
            <Text style={{color:'#E9F0FA', fontWeight:'bold',textDecorationLine:'underline'}}>FOLLOW</Text>
            </TouchableOpacity>
           <TouchableOpacity  onPress={() => refRBSheet.current.open()} style={{marginLeft:wp('2%')}}>
           <Image source={Path.menu}></Image>
           </TouchableOpacity>
           </View>
         </View>

         <View style={{margin:hp('2%'), flexDirection:'row', alignItems:'center'}}>
           <TouchableOpacity >
             <View style={styles.buttonStyle}>
               <Text style={{color:'#E9F0FA', padding:5, fontWeight:'600',fontSize:12}}>CURRENCY</Text>
             </View>
           </TouchableOpacity>

           <TouchableOpacity style={{margin:'3%'}}>
             <View style={styles.buttonStyle}>
               <Text style={{color:'#E9F0FA', padding:5, fontWeight:'600',fontSize:12}}>COINS</Text>
             </View>
           </TouchableOpacity>
         </View>

         <View style={{marginLeft:wp('4%')}}>
           <Text style={{color:'#E9F0FA', fontWeight:'700', fontSize:16,lineHeight:22}}>Old Coin Collection</Text>
           <Text style={{color:'#E9F0FA', fontWeight:'bold',fontSize:18,fontWeight:'300',lineHeight:22}}>$1000</Text>
         </View>
        <View style={{margin:wp('3%')}}>
          <Text style={{color:'#9CA6B6', fontWeight:'bold',fontSize:13,fontWeight:'400',lineHeight:20}}>Exceptions to the rule of face value b-eing higher than content value also content value also...more</Text>
        </View>
        <View style={{width:wp('95%')}}> 
          <Image source={Path.HomepageLanding}></Image>
        </View>
        <View style={{width:wp('95%'),flexDirection:'row',justifyContent:'space-evenly',margin:hp('1%')}}>
          <View>
          <Image source={Path.HomePage1} resizeMethod="resize">

          </Image>
          </View>
          <View>
          <Image source={Path.HomePage1} resizeMethod="resize">
            
          </Image>
          </View>
          <View>
          <Image source={Path.homePage3} resizeMethod="resize">
            
          </Image>
          </View>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',width:wp('95%'),margin:2}}>
          <View style={{flexDirection:'row',justifyContent:'space-evenly',width:wp('20%')}}>
            <TouchableOpacity>
            <Image source={Path.like}></Image>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image source={Path.Chat}></Image>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{color:'#9CA6B6', fontWeight:'bold',fontSize:12,fontWeight:'400',lineHeight:18}}>Bidding</Text>
          </View>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',width:wp('95%'),margin:2}}>
          <View style={{flexDirection:'row',justifyContent:'space-evenly',width:wp('40%')}}>
           <View>
              <Text style={{color:'#9CA6B6', fontWeight:'bold',fontSize:12,fontWeight:'400',lineHeight:18}}>324 Likes</Text>
           </View>
           <View>
              <Text style={{color:'#9CA6B6', fontWeight:'bold',fontSize:12,fontWeight:'400',lineHeight:18}}>96 Comments</Text>
           </View>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-evenly',width:wp('25%'),alignItems:'center'}}>
            <View>
              <TouchableOpacity>
              <Image source={Path.openFolder}></Image>
              </TouchableOpacity>
            </View>
            <View>
            <Text style={{color:'white', fontWeight:'bold',fontSize:14,fontWeight:'600',lineHeight:24}}>OPEN</Text>
            </View>
          </View>
        </View>
         </View>
          )}):null}
         </View>
         <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height="50"
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          container:{
            backgroundColor:'black'
          }
        }}
      >
        <View style={{backgroundColor:'black'}}>
          <View style={{flexDirection:'row',justifyContent:'space-between',width:wp('90%'),alignSelf:'center'}}>
          <Text style={{color:'#E9F0FA',fontSize:14,fontWeight:'400',lineHeight:22}}>Report Post</Text>
          <TouchableOpacity onPress={()=> setModalVisible(!modalVisible)}>
          <Image source={Path.backReverse}></Image>
          </TouchableOpacity>
          </View>
        </View>

      </RBSheet>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{alignSelf:'center',marginTop:hp('50%'),borderRadius:10}}>
          <View style={{flexDirection:'row',alignSelf:'center'}}>
            <View style={{width:wp('12%'),backgroundColor:'#30B754',alignItems:'center',borderTopLeftRadius:20,borderBottomLeftRadius:20}}>
              <Image source={Path.CheckImage} style={{marginTop:hp('3%')}}></Image>
            </View>
            <View style={{width:wp('70%'),padding:5,backgroundColor:'black',borderTopRightRadius:20,borderBottomEndRadius:20}}>
                <Text style={{color:'#9CA6B6',fontSize:12,fontWeight:'400',lineHeight:22}}>This post has been reported by you. We’ll verify and work on it. Thanks!</Text>
                <TouchableOpacity onPress={()=>setModalVisible(!modalVisible)}>
                  <Text style={{color:'white',fontWeight:'600',fontSize:13,lineHeight:19}}>UNDO</Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
         </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
containerStyle: {
  backgroundColor:'#00040E',
  height:hp('100%'),
  width:wp('100%')

}, 
buttonStyle:{
  borderWidth:.5,
  borderColor: '#E9F0FA',
  borderRadius:25, 
  // padding:5

},
 root: {
  // flex: 1,
  padding: 16,
},
textStyle: {
  fontSize: 14,
  color:'#E9F0FA',
 // padding: 5
},
})
export default MainHome;
