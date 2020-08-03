import React, { Component } from 'react';
import {  StyleSheet,  Text,  View,  TouchableOpacity,  Image,  Alert,  ScrollView,  FlatList,   Dimensions} from 'react-native';
import ImageView from "react-native-image-viewing";
import Carousel,{Pagination} from 'react-native-snap-carousel';
import {  Button} from "react-native-paper";

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH*0.6);

const ENTRIES1 = [
  {
      title: 'Beautiful and dramatic Antelope Canyon',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: '../../android/app/img/nike.jpg'
  },
  {
      title: 'Earlier this morning, NYC',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: '../../android/app/img/hand.jpg'
  },
  {
      title: 'White Pocket Sunset',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
      illustration: '../../android/app/img/foot.jpg'
  }
];

const images = [
  {
    uri: "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4",
  },
  {
    uri: "https://images.unsplash.com/photo-1573273787173-0eb81a833b34",
  },
  {
    uri: "https://images.unsplash.com/photo-1569569970363-df7b6160d111",
  },
];

export default class ProductDetail extends Component {

  constructor(props){
    super(props);
    this.state={
        slider1ActiveSlide:0,
        visible:false,
    }
}

_renderItem = ({item, index}) => {
  return (
      <View style={styles.slide}>
          <Image style={styles.image} source={require('../../android/app/img/nike.jpg')}/>
      </View>
  );
}

  render() {
    return (
      <View>
        <View>
        <Button style={{position:"absolute",zIndex:1,right:10,top:10}}  icon="magnify-plus-cursor"  onPress={() => this.setState({visible:true})}>zoom</Button>

          <Carousel
            ref={(c) => { this._sliderRef = c; }}
            data={ENTRIES1}
            renderItem={this._renderItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            itemHeight={ITEM_HEIGHT}
            tappableDots={true}
            pagingEnabled={true}
            onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
          />
            <View style={{backgroundColor:"white",borderRadius:50,position:"absolute",bottom:20,left:SLIDER_WIDTH*0.33}}>
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
          </View>
          </View>
          <View style={{margin:5}}>
            <Text style={{fontSize:14,fontWeight:"600" ,textAlign:"center"}}>
            Lorem Ipsum is simply dummy text of the printing 
            and typesetting industry. Lorem Ipsum has been the
            </Text>
          </View>
        <ImageView
          images={images}
          imageIndex={0}
          visible={this.state.visible}
          onRequestClose={() => this.setState({visible:false})}
         />
         
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: { flexGrow: 0 },
  container: {
    flex: 0,
    paddingLeft: 10,
    marginBottom: 10
  },
  button: {
    marginRight: 10
  },
  
  textContainer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center"
 },
 
 
 item: {
  backgroundColor: '#f9c2ff',
  marginVertical: 8,
  marginHorizontal: 16,
},
title: {
  fontSize: 32,
},
slide: {
  overflow: 'visible', // for custom animations
 },

image:{
    height:ITEM_HEIGHT,
    width:ITEM_WIDTH,
    
},
paginationDot: {
    width: 10,
    height: 10,
    borderRadius:6,
    marginHorizontal: 2
}
  
});     