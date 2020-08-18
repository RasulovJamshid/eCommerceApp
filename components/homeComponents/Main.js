import * as React from 'react';
import {View,ScrollView,SafeAreaView,FlatList,StyleSheet,StatusBar ,Text,Image,Dimensions,ActivityIndicator} from "react-native";
import Carousel from "../childComponets/Carousel.js";
import CardPr from '../childComponets/Card';
// import colors from "../../src/configs/colors.js";
import SearchModal from "../childComponets/SearchModal";

const DATA = [
    {
      id: 'bd7acbead-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'hand',
      subTitle:"awesome services",
      price:"$59"
    },
    {
      id: '3ac68afc-c60d5-48d3-a4f8-fbd91aa97f63',
      title: 'foot',
      subTitle:"Snickers, Clothes, T-shirts, wide range of sizes ",
      price:"$61"

    },
    {
      id: '58694a0f-3dad1-471f-bd96-145571e29d72',
      title: 'foot',
      subTitle:"Snickers, Clothes, T-shirts, wide range of sizes ",
      price:"$14"

    },
    {
        id: 'bd7acbea-c1bs1-46c2-aed5-3ad53abb28ba',
        title: 'hand',
        subTitle:"Buy from us, we are providing awesome services",
        price:"$32"

      },
      {
        id: '3ac68afc-c60d5-48d3-a4f8-fbd91aa97f63',
        title: 'hand',
        subTitle:"Snickers, Clothes, T-shirts, wide range of sizes .Snickers, Clothes",
        price:"$45"

      },
      {
        id: '58694a0f-3da1-471f-bd9d6-145571e29d72',
        title: 'foot',
        subTitle:"Buy from us, we are providing awesome services",
        price:"$59"

      },
      {
        id: 'bd7acbea-c1b1-46c2-daed5-3ad53abb28ba',
        title: 'hand',
        subTitle:"Buy from us, we are providing awesome services",
        price:"$80"

      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd9s1aa97f63',
        title: 'foot',
        subTitle:"Buy from us, we are providing awesome services",
        price:"$100"

      },
      {
        id: '58694a0f-3da1-471f-bd96-1455s71e29d72',
        title: 'foot',
        subTitle:"Buy from us, we are providing awesome services",
        price:"$59"

      },
      {
          id: 'bd7acbea-c1b1-46c2-aded5-3ad53abb28ba',
          title: 'hand',
          subTitle:"Buy from us, we are providing awesome services",
          price:"$99"

        },
        {
          id: '3ac68afc-c605-48d3-a4df8-fbd91aa97f63',
          title: 'hand',
          subTitle:"Snickers, Clothes, T-shirts, wide range of sizes .Snickers, Clothes",
          price:"$73"

        },
        {
          id: '58694a0f-3da1-471f-bd96-1455d71e29d72',
          title: 'foot',
          subTitle:"Buy from us,",
          price:"$45"

        },
  ];


  
class Main extends React.Component {
  constructor(props){
    super(props);
    this.state={
      loading:true,
    }
  }
  componentDidMount(){
    setTimeout(()=>this.setState({loading:false}),2000);
  }
  render(){
      return (
        this.state.loading?(<View style={{flex: 1,justifyContent: "center"}}><ActivityIndicator animating size="large" color="red" /></View>):
      (<SafeAreaView >
            <SearchModal  />
            <FlatList
            refreshing={false}
            onRefresh={()=>console.log("refresh")}
            initialNumToRender={5}
            ListHeaderComponent={<Carousel navigation={this.props.navigation}/>}
            numColumns={2}
            data={DATA}
            renderItem={(item)=><CardPr  price={item.item.price} subTitle={item.item.subTitle}  navigation={this.props.navigation}/>}
            keyExtractor={item => item.id}
            />
        </SafeAreaView>)
        
      );
    }
};



export default Main;


