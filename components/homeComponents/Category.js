import React from "react";
import {View,Text,SafeAreaView,FlatList} from "react-native";
import Card from "../childComponets/Card";
import {TagSlider} from "../childComponets/Carousel";

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

export default Category = ({navigation}) => {
  
    return (
     <SafeAreaView >
          <FlatList
          ListHeaderComponent={<TagSlider/>}
          numColumns={2}
          data={DATA}
          renderItem={(item)=><Card title={item.title} navigation={navigation}/>}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
      
    );
  };
  