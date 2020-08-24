import  React ,{useState} from 'react';
import { Avatar, Card,Button, Appbar} from 'react-native-paper';
import {StyleSheet} from "react-native";
import strings from "../../src/configs/localization";
class RightContent extends  React.Component{
  constructor(props){
    super(props);
    this.state={
      like:false,
    }
  }
  render(){
    return (
      <Avatar.Icon onPress={()=>this.setState({like:!this.state.like})} {...this.props}  
        size={30} 
        style={styles.icon}  
        backgroundColor={this.state.like?"#fff":"#ff0000"} 
        color={this.state.like?"#ff0000":"#fff"} 
        icon="dots-vertical" 
        />
    )
  }
}

const randImage=()=>{
  let ran=Math.random();
  if (ran<=1&&ran>0.90) {
    return require('../../android/app/img/nike.jpg')
  } 
  else if(ran<=0.9&&ran>0.75){
    return require('../../android/app/img/gpu.jpg')
  }
  else if(ran<=0.75&&ran>0.5){
    return require('../../android/app/img/hand.jpg')
  }
  else if(ran<=0.5&&ran>0.25){
    return require('../../android/app/img/laptop.jpg')
  }
  else if(ran<=0.25&&ran>0.15){
    return require('../../android/app/img/foot.jpg')
  }
  else{
    return require('../../android/app/img/pant.jpg')
  }
}

const CardPr = (props) => (
  
  <Card onPress={()=>props.navigation.navigate("Product")} style={styles.card}  >
    <Card.Cover  source={randImage()} />
    <Card.Title subtitleNumberOfLines={2}  subtitleStyle={{paddingVertical:5}} style={styles.title} title={`${props.price} ${strings.currency}`} subtitle={props.subTitle} right={(props) => <RightContent {...props}/>} rightStyle={{padding:5}} />
  </Card>
);


const styles = StyleSheet.create({
  icon:{
        },
  title: {
    backgroundColor:`white`,
   
    color:"#fff",
    borderRadius:5,
  },
  card: {
    width:"48%",
    margin:"1%",
    color:"#fff"
  }, 
});

export default CardPr;