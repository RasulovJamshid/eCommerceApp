import * as React from 'react';
import {View,ScrollView,SafeAreaView,FlatList,StyleSheet,StatusBar ,Text,Image,Dimensions} from "react-native";
import { Appbar,Button } from 'react-native-paper';
import Card from "../childComponets/Card";
import Carousel from "../childComponets/Carousel.js";
// import colors from "../../src/configs/colors.js";


const DATA = [
    {
      id: 'bd7acbead-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'hand',
    },
    {
      id: '3ac68afc-c60d5-48d3-a4f8-fbd91aa97f63',
      title: 'foot',
    },
    {
      id: '58694a0f-3dad1-471f-bd96-145571e29d72',
      title: 'foot',
    },
    {
        id: 'bd7acbea-c1bs1-46c2-aed5-3ad53abb28ba',
        title: 'hand',
      },
      {
        id: '3ac68afc-c60d5-48d3-a4f8-fbd91aa97f63',
        title: 'hand',
      },
      {
        id: '58694a0f-3da1-471f-bd9d6-145571e29d72',
        title: 'foot',
      },
      {
        id: 'bd7acbea-c1b1-46c2-daed5-3ad53abb28ba',
        title: 'hand',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd9s1aa97f63',
        title: 'foot',
      },
      {
        id: '58694a0f-3da1-471f-bd96-1455s71e29d72',
        title: 'foot',
      },
      {
          id: 'bd7acbea-c1b1-46c2-aded5-3ad53abb28ba',
          title: 'hand',
        },
        {
          id: '3ac68afc-c605-48d3-a4df8-fbd91aa97f63',
          title: 'hand',
        },
        {
          id: '58694a0f-3da1-471f-bd96-1455d71e29d72',
          title: 'foot',
        },
  ];


  
const Main = ({navigation}) => {
  
  return (
   <SafeAreaView >
        <FlatList
        refreshing={false}
        onRefresh={()=>console.log("refresh")}
        initialNumToRender={5}
        ListHeaderComponent={<Carousel navigation={navigation}/>}
        numColumns={2}
        data={DATA}
        renderItem={(item)=><Card title={item.title} navigation={navigation}/>}
        keyExtractor={item => item.id}
        />
    </SafeAreaView>
    
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
    slide: {
      marginVertical: 15,
      overflow: 'visible', // for custom animations
      borderRadius:20
  },
  });


export default Main;


