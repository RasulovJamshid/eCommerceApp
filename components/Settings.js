import React,{useState} from 'react';
import { Text, View,Switch ,Dimensions,Alert,StyleSheet,ScrollView} from 'react-native';
import { Button,Snackbar } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsHeader from "./childComponets/Header.js";
import colors from "../src/configs/colors.js";
import strings from "../src/configs/localization";

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
  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);
    return (
      <ScrollView style={{ flex: 1, margin:15,}}>
        <Text style={{fontSize:20,fontWeight:"700"}}>{strings.settings}!</Text>
        <SwitchPart title={strings.note} content={strings.notetitle}/>
        <SwitchPart title={strings.popup} content={strings.poptitle}/>
        <SwitchPart title={strings.orderH} content={strings.orderhtitle}/>
        <Button  color="#fff" onPress={()=>setVisible(true)}  style={styles.button} >{strings.updateSetting}</Button>
        <Snackbar
        wrapperStyle={{position:"absolute",top:0}}
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'ok',
          onPress: () => {
            console.log("snack");
          },
        }}>
        Settings updated.
      </Snackbar>
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