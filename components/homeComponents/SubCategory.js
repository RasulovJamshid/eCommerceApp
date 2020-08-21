import React from "react";
import {View,Text,SafeAreaView,FlatList,ScrollView,StyleSheet} from "react-native";
import { List } from "react-native-paper";
import categories from "../../src/configs/categories"

	const women=[
  "Bluzka va ko’ylak",
  "Shimlar",
	"Ustki kiyimlar" ,
	"Djinsi kurtka",
	"Terili kurtka",
	"Palto",
	"Parki",
	"Plash va trench",
	"Puxli va qishki kurtkalar",
	"Djemfer va kardiganlar",
  "Jinsi" 	,
  "Ayollar pijjamasi",
  "Jiletlar",
  "Kombinizonlar",
  "Shortikli kombinizonlar" ,
  "Kostyumlar",
	"Ichki kiyimlar" ,
	"Ko’ylaklar"]
  
  // const man=[]

const listSub=[
  {icon:"cards",title:"Bluzka va ko’ylak"},
  {icon:"bell-alert-outline",title:"Avtomobil ehtiyot qismlari"},
  {icon:"logout",title:"Materiallar"},
  {icon:"bell-alert-outline",title:"Sarpo (sarpo sandiqlari, sarpo ko’rpa to’shaklar)"},
  {icon:"logout",title:"Idish tovoqlar"},
];



const styles=StyleSheet.create({
  icon:{
    backgroundColor:"red"
  },
  mainItem:{margin:10,backgroundColor:"#fff",borderLeftColor:"red",borderLeftWidth:4},
  item:{margin:10,backgroundColor:"#fff",borderLeftColor:"lightblue",borderLeftWidth:4},
  
  
})



export default Category = ({route,navigation}) => {
    return (
     <SafeAreaView >
       <ScrollView>
       <List.Item
             style={styles.mainItem}
             onPress={()=>navigation.navigate("Listing",{type:route.params.title})}
             title={route.params.title}
             titleStyle={{color:"red"}}
             right={props => <List.Icon {...props} icon="chevron-right" />}
            />
         {categories[route.params.id].map((i,index)=>(
             <List.Item
             key={index}
             style={styles.item}
             onPress={()=>navigation.navigate("Listing",{type:i})}
             title={i}
             right={props => <List.Icon {...props} icon="chevron-right" />}
            />
            ))}
      </ScrollView>
      </SafeAreaView>
      
    );
  };
  