import  React ,{useState} from 'react';
import { Avatar, Card,Button, Appbar} from 'react-native-paper';
import {StyleSheet,Text,View} from "react-native";
import strings from "../../src/configs/localization";
class RightContent extends  React.Component{
  constructor(props){
    super(props);
    
  }
  render(){
    return (
      <View style={{flexDirection:"row",alignItems:"center"}}>
       <Avatar.Icon  {...this.props}  
        size={15} 
        style={styles.icon}  
        backgroundColor="#fff"
        color="gray" 
        icon="eye" 
        />
      <Text>47</Text>
      </View>
    )
  }
}

const randImage=()=>{
  let ran=Math.random();
  if (ran<=1&&ran>0.90) {
    return require('../../android/app/img/nike.jpg')
  } 
  else if(ran<=0.9&&ran>0.75){
    return require('../../src/assets/notfound.png')
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