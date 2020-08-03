import  React ,{useState} from 'react';
import { Avatar, Card,Button, Appbar} from 'react-native-paper';
import {StyleSheet} from "react-native";

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
        icon="heart" 
        />
    )
  }
}

const randImage=()=>{
  let ran=Math.random();
  if (ran<=1&&ran>0.75) {
    return require('../../android/app/img/nike.jpg')
  } 
  else if(ran<=0.75&&ran>0.5){
    return require('../../android/app/img/hand.jpg')
  }
  else if(ran<=0.5&&ran>0.25){
    return require('../../android/app/img/foot.jpg')
  }
  else{
    return require('../../android/app/img/pant.jpg')
  }
}

const CardPr = (props) => (
  
  <Card onPress={()=>props.navigation.navigate("Product")} style={styles.card}  >
    <Card.Cover  source={randImage()} />
    <Card.Title style={styles.title} title="$97" subtitle="Card Subtitle" right={(props) => <RightContent {...props}/>} rightStyle={{padding:5}} />
  </Card>
);


const styles = StyleSheet.create({
  icon:{
    position:"absolute",
    bottom:25,
    right:15,
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