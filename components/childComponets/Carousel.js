import React from 'react';
import Carousel,{Pagination} from 'react-native-snap-carousel';
import {View,StyleSheet,Image,Dimensions,Text,ScrollView} from "react-native";
import { Button } from 'react-native-paper';
import colors from "../../src/configs/colors.js";

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH *0.95);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH*0.4);

const tagValues=[
    {title:"Wedding"},
    {title:"Accessories"},
    {title:"Shirt"},
    {title:"Shoes"},
    {title:"Coat"}
];

//sample data
const ENTRIES1 = [
   {
      title: 'Earlier this morning, NYC',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://ae01.alicdn.com/kf/H83196a25ec5e4419adfcc489dab88e9b3.png'
  },
  {
      title: 'White Pocket Sunset',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
      illustration: 'https://ae01.alicdn.com/kf/H4bff5969144b4ffdbf2875a74d256a69n.png'
  },
  {
      title: 'Acrocorinth, Greece',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://ae01.alicdn.com/kf/HTB1GxN.X7T2gK0jSZFk5jcIQFXam.gif'
  },
  {
      title: 'The lone tree, majestic landscape of New Zealand',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://ae01.alicdn.com/kf/Hb07aa876e2154fe89da91ad129b4ef47D.png'
  },
  {
      title: 'Middle Earth, Germany',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://ae01.alicdn.com/kf/HTB1BAisaUvrK1RjSspc762zSXXay.png'
  }
];


export const TagSlider=()=>
    (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                          <Button color="red"  onPress={()=>console.log("ALL")} style={{...styles.tagSlider,borderColor:"red",borderWidth:2}}>
                             ALL
                         </Button>
                {tagValues.map((
                    (i,index)=>(
                        <Button key={index} color="#000"  onPress={()=>console.log(i.title)} style={{...styles.tagSlider,borderColor:"lightgray",borderWidth:2}}>
                             {i.title}
                         </Button>
                    )
                ))}
            </ScrollView>
    )


export default class MyCarousel extends React.Component {
    constructor(props){
        super(props);
        this.state={
            slider1ActiveSlide:0
        }
    }
 
  _renderItem = ({item, index}) => {
      return (
          <View key={index} style={styles.slide}>
              <Image style={styles.image} source={{uri:item.illustration}}/>
              {/* <Button color="#000" style={styles.button} icon="chevron-right"  onPress={() => console.log('Pressed')}>See more </Button> */}
          </View>
      );
  }

  render () {
      return (<View>
          <TagSlider/>
          <Carousel
            autoplayInterval={4000}
            ref={(c) => { this._sliderRef = c; }}
            data={ENTRIES1}
            renderItem={this._renderItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            itemHeight={ITEM_HEIGHT}
            loop={true}
            autoplay={true}
            tappableDots={true}
            pagingEnabled={true}
            inactiveSlideScale={0.75}
            inactiveSlideOpacity={0.5}
            onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
          />
          <Pagination
          dotsLength={ENTRIES1.length}
          activeDotIndex={this.state.slider1ActiveSlide}
          dotColor={'rgba(255, 100, 100, 0.92)'}
          dotStyle={styles.paginationDot}
          containerStyle={{paddingVertical:8}}
          inactiveDotColor="black"
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          carouselRef={this._sliderRef}
          tappableDots={!!this._sliderRef}
         />
         
         <View style={styles.textContainer}>
             <Text style={styles.textPr}>Products</Text>
             <Text onPress={()=>this.props.navigation.navigate("Category")} style={styles.textAll}>Categories</Text>
         </View>
        </View>
         );
  }
}

const styles = StyleSheet.create({
     textContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
     },
     tagSlider:{
        marginHorizontal:5,
        marginTop:6,
        backgroundColor:"#fff",
        borderRadius:20
     },
     textPr:{
        fontWeight:"700",
        color:colors.primary,
        fontSize:20,
        flexGrow:1,
        margin:5
     },
     textAll:{
        fontWeight:"600",
        fontSize:18,
        color:"#000",
        margin:10,
        backgroundColor:"#fff",
        borderRadius:5,
        padding:5
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
      marginVertical: 10,
      overflow: 'visible', // for custom animations
      borderRadius:20
     },
    button:{
        borderRadius:20,
        position:"absolute",
        bottom:50,
        left:10,
        backgroundColor:"#fff",
        color:"red"
    },
    image:{
        height:ITEM_HEIGHT,
        width:ITEM_WIDTH,
        borderRadius:10
    },
    paginationDot: {
        width: 10,
        height: 10,
        borderRadius:6,
        marginHorizontal: 2
    }
  });
