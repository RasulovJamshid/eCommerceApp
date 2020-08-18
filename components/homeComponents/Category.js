import React from "react";
import {View,Text,SafeAreaView,FlatList,ScrollView,StyleSheet} from "react-native";
import { List } from "react-native-paper";
import colors from "../../src/configs/colors"
const list=[
  {icon:"face-woman",title:"Ayollar kiyimi",id:"women"},
  {icon:"human-greeting",title:"Erkaklar kiyimi",id:"man"},
  {icon:"heart-outline",title:"Telefon va Aksessuarlar",id:"mobile"},
  {icon:"clock-time-eight-outline",title:"Kompyuter va periferiya qurilmalari",id:"pc"},
  {icon:"trackpad",title:"Elektr jihozlar",id:"electric"},
  {icon:"cards",title:"Yuveleriya va Soatlar",id:"jewelery"},
  {icon:"bell-alert-outline",title:"Uy jihozlari(mebel)",id:"home"},
  {icon:"logout",title:"Sumka va oyoq kiyimlar",id:"bag"},
  {icon:"pen",title:"O’yinchoqlar ",id:"toy"},
  {icon:"map-marker",title:"O’quv qurollari",id:"stool"},
  {icon:"heart-outline",title:"Qurilish mahsulotlari",id:"build"},
  {icon:"clock-time-eight-outline",title:"Oziq-ovqat mahsulotlari",id:"food"},
  {icon:"trackpad",title:"Dori-darmon vositalari va medtexnika",id:"medicine"},
  {icon:"cards",title:"Xo’jalik mahsulotlari",id:"backyard"},
  {icon:"bell-alert-outline",title:"Avtomobil ehtiyot qismlari",id:"spare"},
  {icon:"logout",title:"Materiallar",id:"material"},
  {icon:"bell-alert-outline",title:"Sarpo (sarpo sandiqlari, sarpo ko’rpa to’shaklar)",id:"additional"},
  {icon:"logout",title:"Idish tovoqlar",id:"dish"},
]

const listSub=[
  {icon:"cards",title:"Xo’jalik mahsulotlari"},
  {icon:"bell-alert-outline",title:"Avtomobil ehtiyot qismlari"},
  {icon:"logout",title:"Materiallar"},
  {icon:"bell-alert-outline",title:"Sarpo (sarpo sandiqlari, sarpo ko’rpa to’shaklar)"},
  {icon:"logout",title:"Idish tovoqlar"},
];



const styles=StyleSheet.create({
  icon:{
    backgroundColor:"red"
  },
  
})

export default Category = ({navigation}) => {
    return (
     <SafeAreaView >
       <ScrollView>
       <List.Item
             style={{margin:10,backgroundColor:"#fff",borderLeftColor:"red",borderLeftWidth:4}}
             onPress={()=>navigation.navigate("Listing",{type:"Barchasi"})}
             title="Barchasi"
             titleStyle={{color:"red"}}
             right={props => <List.Icon {...props} icon="chevron-right" />}
            />
         {list.map((i,index)=>(
             <List.Item
             key={index}
             style={{margin:10,backgroundColor:"#fff",borderLeftColor:"lightblue",borderLeftWidth:4}}
             onPress={()=>navigation.navigate("SubCategory",{...i})}
             title={i.title}
             left={props =>  <List.Icon style={styles.icon} color={colors.primary} {...props} icon={i.icon} />}
             right={props => <List.Icon {...props} icon="chevron-right" />}
            />
            ))}
      </ScrollView>
      </SafeAreaView>
      
    );
  };
  