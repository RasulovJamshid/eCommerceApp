import React,{useState} from 'react';
import { Text, View,Switch ,Dimensions,Alert,StyleSheet,ScrollView} from 'react-native';
import { Button } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsHeader from "./childComponets/Header.js";
import colors from "../src/configs/colors.js";

const WIDTH = Dimensions.get('window').width-100;

function SwitchPart(props){
const [enabled,setEnabled]=useState(false);
  return(
          <View style={styles.container}>
              <View>
              <Text style={styles.title}>{props.title}</Text>
              </View>
              <View style={styles.contained}>
              <Text style={styles.content}>{props.content}</Text>
              <Switch
                  style={styles.switch}
                  trackColor={{ false: "#D3D3D3", true: "#D3D3D3" }}
                  thumbColor={enabled ? colors.primary : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={()=>setEnabled(!enabled)}
                  value={enabled}
                />
              </View>
          </View>
  )
}

function Settings() {
    return (
      <ScrollView style={{ flex: 1, margin:15,}}>
        <Text style={{fontSize:20,fontWeight:"700"}}>Your App Settings!</Text>
        <SwitchPart title="Notifications" content="Recive notifications on latest offers and store updates"/>
        <SwitchPart title="Popups" content="Disable all popups and adverts from third partyy vendors"/>
        <SwitchPart title="Order History" content="Keep your order history on the app unless manually removed"/>
        <Button  color="#fff" onPress={()=>Alert.alert("Updated")}  style={styles.button} >Update Settings</Button>
      </ScrollView>
    );
  }

const SettigsStack=createStackNavigator();

function SettingsScreen() {
  return (
    <SettigsStack.Navigator
      screenOptions={{
        cardStyle:{
          backgroundColor: '#fff',
        }
      }}
    >
      <SettigsStack.Screen
        name="Home"
        component={Settings}
        options={{header:SettingsHeader }}
      />
    </SettigsStack.Navigator>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    flexDirection:"column",
    marginVertical:20,
    margin:10

  },
  title:{
    fontSize:20,
    fontWeight:"700",
    margin:5
  },
  contained:{
    flex:1,
    flexDirection:"row",
    margin:5,
    width:WIDTH
  },
  content:{
    fontSize:18,
    fontWeight:"600",
    alignSelf:"flex-start",
    padding:0
  },
  switch:{
    alignSelf:"flex-start",
    flexGrow:1,
    marginHorizontal:5
  },
  button:{
    borderRadius:20,
    backgroundColor:colors.primary,
  }
})

  
export default SettingsScreen;