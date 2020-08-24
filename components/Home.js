import * as React from 'react';
import { Text, View ,StatusBar} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack"
import Main from "./homeComponents/Main";
import Product from "./homeComponents/Product";
import Category from "./homeComponents/Category";
import SubCategory from "./homeComponents/SubCategory";
import Listing from "./homeComponents/Listing";
import { Appbar } from 'react-native-paper';
import strings from "../src/configs/localization";
import {connect} from "react-redux"

const HomeStack=createStackNavigator();

const mapMainDispatchToProps=(dispatch)=>({
  handleSearch:()=>dispatch({type:"OPEN_SEARCH"}),
});


let MainHeader=(props)=>{
  const _goBack = () => console.log('Went back');
  
  
    const _handleMore = () => console.log('Shown more');
  
      return(
        <View>
              <StatusBar backgroundColor="#fff" barStyle="dark-content" />
              <Appbar.Header style={{backgroundColor:"#fff",boxShadow:"none"}}>
              {/* <Appbar.Action  icon="menu" onPress={_handleMore} /> */}
              <Appbar.Content color="gray" onPress={props.handleSearch}  style={{borderWidth:1,borderColor:"lightgray",borderRadius:15,marginLeft:10}}  title={`${strings.search}...`}/>
              <Appbar.Action icon="magnify"  onPress={props.handleSearch} />
              <Appbar.Action icon="basket-outline" color="red" onPress={_handleMore} />
              </Appbar.Header>
          </View>
      )
  }

  MainHeader=connect(null,mapMainDispatchToProps)(MainHeader);




const ProductHeader=(props)=>{
    
      const _handleSearch = () => console.log('Searching');
    
    
        return(
            <View>
                <Appbar.Header style={{backgroundColor:"#fff",boxShadow:"none"}}>
                <Appbar.Action icon="arrow-left" onPress={()=>props.navigation.goBack()} />
                <Appbar.Content  title="Product"/>
                </Appbar.Header>
            </View>
        )
  }

const CategoryHeader=(props)=>{
      const _goBack = () => props.navigation.goBack();
      
        const _handleSearch = () => console.log('Searching');
      
        const _handleMore = () => console.log('Shown more');
      
          return(
              <View>
                  <Appbar.Header style={{backgroundColor:"#fff"}} >
                  <Appbar.Action icon="arrow-left" onPress={_goBack} />
                  <Appbar.Content title="categories"/>
                  <Appbar.Action icon="magnify" onPress={_handleSearch} />
                  {/* <Appbar.Action icon="tune"  onPress={_handleMore} /> */}
                  </Appbar.Header>
              </View>
          )
  }
    
function Home(props) {
    return (
      <HomeStack.Navigator screenOptions={{
            transitionSpec:{
            open:{
              animation: 'timing',
              config: {
                duration:10,
              },
            },
            close:{
              animation: 'timing',
              config: {
                duration:10,
              },
            },
          }}}  initialRouteName="Main">
        <HomeStack.Screen name="Main" component={Main}  options={{header:()=><MainHeader/>}}/>
        <HomeStack.Screen name="Category" component={Category} options={{header:CategoryHeader}}/>
        <HomeStack.Screen name="Product"  component={Product} options={{header:ProductHeader}}/>
        <HomeStack.Screen name="SubCategory"  component={SubCategory} options={{header:CategoryHeader}}/>
        <HomeStack.Screen name="Listing"  component={Listing} />
      </HomeStack.Navigator>
    );
  }
  
export default Home;