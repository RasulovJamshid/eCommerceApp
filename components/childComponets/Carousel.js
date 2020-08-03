import React from 'react';
import Carousel,{Pagination} from 'react-native-snap-carousel';
import {View,StyleSheet,Image,Dimensions,Text,ScrollView} from "react-native";
import { Button } from 'react-native-paper';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH *0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH*0.6);

const tagValues=[
    {title:"All"},
    {title:"Wedding"},
    {title:"Accessories"},
    {title:"Shirt"},
    {title:"Shoes"},
    {title:"Coat"}
];

//sample data
const ENTRIES1 = [
  {
      title: 'Beautiful and dramatic Antelope Canyon',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://i.imgur.com/UYiroysl.jpg'
  },
  {
      title: 'Earlier this morning, NYC',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
  },
  {
      title: 'White Pocket Sunset',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
      illustration: 'https://i.imgur.com/MABUbpDl.jpg'
  },
  {
      title: 'Acrocorinth, Greece',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://i.imgur.com/KZsmUi2l.jpg'
  },
  {
      title: 'The lone tree, majestic landscape of New Zealand',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/2nCt3Sbl.jpg'
  },
  {
      title: 'Middle Earth, Germany',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/lceHsT6l.jpg'
  }
];


export const TagSlider=()=>
    (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                {tagValues.map((
                    i=>(
                        <Button color="#000"  onPress={()=>console.log(i.title)} style={styles.tagSlider}>
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
          <View style={styles.slide}>
              <Image style={styles.image} source={{uri:item.illustration}}/>
              <Button style={styles.button} icon="chevron-right"  onPress={() => console.log('Pressed')}>See more </Button>
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
             <Text onPress={()=>this.props.navigation.navigate("Category")} style={styles.textAll}>See all</Text>
         </View>
        </View>
         );
  }
}

const styles = StyleSheet.create({
     textContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center"
     },
     tagSlider:{
        marginHorizontal:5,
        marginTop:6,
        backgroundColor:"#fff",
        borderRadius:20
     },
     textPr:{
        fontWeight:"700",
        color:"#9101F8",
        fontSize:20,
        flexGrow:1,
        margin:5
     },
     textAll:{
        fontWeight:"600",
        fontSize:16,
        color:"#ff0000",
        margin:5
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
