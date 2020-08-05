import * as React from 'react';
import { Text, View,ScrollView,StyleSheet } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import AccountHeader from "./childComponets/Header.js";
import { Avatar,List } from "react-native-paper";

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

function Account() {
    return (
      <ScrollView style={{flex:1}}>
      <View style={styles.avatarContainer}>
        <Avatar.Text size={75} style={{backgroundColor:"#ff00ae"}} label="JD" /> 
        <View style={{margin:15}}>
          <Text style={styles.avatarTitle}>Jameson Donn</Text>
          <Text style={styles.avatarSubtitle}>jamesondonn@gmail.com</Text>
        </View>
      </View>
        <View style={{flexGrow:1}}>
           {list.map(i=>(
             <List.Item
             style={{margin:5}}
             onPress={()=>console.log("sa")}
             title={i.title}
             left={props =>  <List.Icon style={styles.icon} color="#ff00ae" {...props} icon={i.icon} />}
             right={props => <List.Icon {...props} icon="chevron-right" />}
            />
            ))}
       </View>
      </ScrollView>
    );
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
        name="Home"
        component={Account}
        options={{header:AccountHeader }}
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
  
export default AccountScreen;