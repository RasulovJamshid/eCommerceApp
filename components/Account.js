import * as React from 'react';
import { Text, View,ScrollView,StyleSheet } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";
import { Avatar,List,Button } from "react-native-paper";
import colors from "../src/configs/colors.js";
import strings from "../src/configs/localization";
import { AccessToken,GraphRequest,GraphRequestManager } from 'react-native-fbsdk';
import AsyncStorage from "@react-native-community/async-storage";
import RNRestart from 'react-native-restart';

const list=[
  {icon:"pen",title:strings.editPr},
  {icon:"map-marker",title:strings.shippingAd},
  {icon:"heart-outline",title:strings.wishlist},
  {icon:"clock-time-eight-outline",title:strings.orderH},
  {icon:"trackpad",title:strings.track},
]




class Account extends React.Component{
  constructor(props){
    super(props);
    this.state={
      userInfo:{
        username:"...",
        name:"...",
        first_name:"JR",
        email:"sample"
      },
    }
  }

  removeData = async () => {
    try {
      await AsyncStorage.removeItem("authToken");
      RNRestart.Restart();
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
  getUserInfo=async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('userInfo')
      if (jsonValue != null ) {
        this.setState({userInfo:JSON.parse(jsonValue)});
        this.props.navigation.setOptions({
          title:`${strings.hello}, ${this.state.userInfo.username} !`,
        })
        }
    } catch(e) {
        console.log(e)
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
          title:`${strings.hello}, ${this.state.userInfo.first_name}!`,
        })
        }
      },
    );
    new GraphRequestManager().addRequest(profileRequest).start();
    
  };

  componentDidMount(){
    this.getUserInfo();
      if(this.props.isFaceBook){
        AccessToken.getCurrentAccessToken().then(data => {
          const accessToken = data.accessToken.toString();
          this.getInfoFromToken(accessToken);
        }
       );
    }
    // else{
    //   this.props.navigation.setOptions({
    //     title:`${strings.hello}, ...!`,
    //   })
    // }
  }

  render(){
    return(
      <ScrollView style={{flex:1}}>
        
      <View style={styles.avatarContainer}>
        <Avatar.Text size={75} style={{backgroundColor:colors.primary}} label="JR" /> 
        <View style={{margin:15}}>
          <Text style={styles.avatarTitle}>{this.state.userInfo.username}</Text>
          <Text style={styles.avatarSubtitle}>{this.state.userInfo.email}</Text>
        </View>
      </View>
        <View style={{flexGrow:1}}>
           {list.map((i,index)=>(
             <List.Item
             key={index}
             style={{margin:5}}
            //  onPress={()=>{this.storeLanguage("ru");RNRestart.Restart();}}
             onPress={()=>console.log("list")}
             title={i.title}
             left={props =>  <List.Icon style={styles.icon} color={colors.primary} {...props} icon={i.icon} />}
             right={props => <List.Icon {...props} icon="chevron-right" />}
            />
            ))}
       </View>
       <Button onPress={this.removeData} color="#fff" style={{margin:10,backgroundColor:colors.primary}}>{strings.logout}</Button>
      </ScrollView>
    )
  }

}

const mapDispatchToPropss=(dispatch)=>({
  setLanguage:value=>dispatch({type:"SETLANGUAGE",payload:value})
})

const SuperAccount=connect(null,mapDispatchToPropss)(Account);

const SettigsStack=createStackNavigator();

function AccountScreen(props) {
  return (
    <SettigsStack.Navigator
      screenOptions={{
        cardStyle:{backgroundColor:"#fff"}
      }}
    >
      <SettigsStack.Screen
        name="Account"
        component={SuperAccount}
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
  isFaceBook:state.isFaceBook
})
const mapDispatchToProps=(dispatch)=>({
  setLanguage:value=>dispatch({type:"SETLANGUAGE",payload:value})
})

export default connect(mapStateToProps,mapDispatchToProps)(AccountScreen);