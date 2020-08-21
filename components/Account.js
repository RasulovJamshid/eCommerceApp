import * as React from 'react';
import { Text, View,ScrollView,StyleSheet } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";
import { Avatar,List } from "react-native-paper";
import colors from "../src/configs/colors.js";
import {  AccessToken,GraphRequest,GraphRequestManager } from 'react-native-fbsdk';

const list=[
  {icon:"pen",title:"Edit Profile"},
  {icon:"map-marker",title:"Shipping adress"},
  {icon:"heart-outline",title:"Wishlist"},
  {icon:"clock-time-eight-outline",title:"Order History"},
  {icon:"trackpad",title:"Track Order"},
  {icon:"cards",title:"Cards"},
  {icon:"bell-alert-outline",title:"Notification"},
  {icon:"logout",title:"LogOut"},
]




class Account extends React.Component{
  constructor(props){
    super(props);
    this.state={
      userInfo:{
        name:"Jamshid",
        first_name:"JR"
      },
    }
  }

  getInfoFromToken = token => {
    const PROFILE_REQUEST_PARAMS = {
      fields: {
        string: 'id, name,  first_name, last_name'    },
    };
    const profileRequest = new GraphRequest(
      '/me',
      {token, parameters: PROFILE_REQUEST_PARAMS},
      (error, result) => {
        if (error) {
          console.log('login info has error: ' + error);
          
        } else {
          this.setState({userInfo: result});
          console.log('result:', result);
          this.props.navigation.setOptions({
          title:`Hello, ${this.state.userInfo.first_name}!`,
        })
        }
      },
    );
    new GraphRequestManager().addRequest(profileRequest).start();
    
  };

  componentDidMount(){
      if(this.props.isFaceBook){
        AccessToken.getCurrentAccessToken().then(data => {
          const accessToken = data.accessToken.toString();
          this.getInfoFromToken(accessToken);
        }
       );
    }else{
      this.props.navigation.setOptions({
        title:'Hello, ...!',
      })
    }
  }

  render(){
    return(
      <ScrollView style={{flex:1}}>
        
      <View style={styles.avatarContainer}>
        <Avatar.Text size={75} style={{backgroundColor:colors.primary}} label="JR" /> 
        <View style={{margin:15}}>
          <Text style={styles.avatarTitle}>{this.state.userInfo.name}</Text>
          <Text style={styles.avatarSubtitle}>{this.state.userInfo.first_name}</Text>
        </View>
      </View>
        <View style={{flexGrow:1}}>
           {list.map((i,index)=>(
             <List.Item
             key={index}
             style={{margin:5}}
             onPress={()=>console.log("sa")}
             title={i.title}
             left={props =>  <List.Icon style={styles.icon} color={colors.primary} {...props} icon={i.icon} />}
             right={props => <List.Icon {...props} icon="chevron-right" />}
            />
            ))}
       </View>
      </ScrollView>
    )
  }

}

const SettigsStack=createStackNavigator();

function AccountScreen() {
  return (
    <SettigsStack.Navigator
      screenOptions={{
        cardStyle:{backgroundColor:"#fff"}
      }}
    >
      <SettigsStack.Screen
        name="Account"
        component={Account}
        // options={{headerShown:false }}
      />
    </SettigsStack.Navigator>
  );
}


const styles=StyleSheet.create({
  icon:{
    backgroundColor:"red"
  },
  avatarContainer:{
    flex: 1,
    flexDirection:"row", 
    justifyContent: 'flex-start',
    margin:10
  },
  avatarTitle:{
    fontSize:20,
    fontWeight:"700"
  },
  avatarSubtitle:{
    fontSize:14
  }
})
 
const mapStateToProps=(state)=>({
  isFaceBook:state.isFaceBook,
})

export default connect(mapStateToProps)(AccountScreen);