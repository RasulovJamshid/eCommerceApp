import * as React from 'react';
import { Text, View ,StatusBar} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack"
import Main from "./homeComponents/Main";
import Product from "./homeComponents/Product";
import Category from "./homeComponents/Category";
import { Appbar } from 'react-native-paper';
import colors from "../src/configs/colors";
const HomeStack=createStackNavigator();

const MainHeader=()=>{
  const _goBack = () => console.log('Went back');
  
    const _handleSearch = () => console.log('Searching');
  
    const _handleMore = () => console.log('Shown more');
  
      return(
          <View>
              <StatusBar backgroundColor="#fff" barStyle="dark-content" />
              <Appbar.Header style={{backgroundColor:"#fff",boxShadow:"none"}}>
              <Appbar.Action icon="menu" onPress={_handleSearch} />
              <Appbar.Content color={colors.primary} title="AvAlis"/>
              <Appbar.Action icon="magnify" onPress={_handleSearch} />
              <Appbar.Action icon="basket"  onPress={_handleMore} />
              </Appbar.Header>
          </View>
      )
  }

const ProductHeader=()=>{
    
      const _handleSearch = () => console.log('Searching');
    
    
        return(
            <View>
                <Appbar.Header style={{backgroundColor:"#fff",boxShadow:"none"}}>
                <Appbar.Action icon="menu" onPress={_handleSearch} />
                <Appbar.Content  title="Classic"/>
                </Appbar.Header>
            </View>
        )
  }

const CategoryHeader=()=>{
      const _goBack = () => console.log('Went back');
      
        const _handleSearch = () => console.log('Searching');
      
        const _handleMore = () => console.log('Shown more');
      
          return(
              <View>
                  <Appbar.Header style={{backgroundColor:"#fff"}} >
                  <Appbar.Action icon="menu" onPress={_handleSearch} />
                  <Appbar.Content title="AvAlis"/>
                  <Appbar.Action icon="magnify" onPress={_handleSearch} />
                  <Appbar.Action icon="basket"  onPress={_handleMore} />
                  </Appbar.Header>
              </View>
          )
  }
    
function Home() {
    return (
      <HomeStack.Navigator  initialRouteName="Main">
        <HomeStack.Screen name="Main" component={Main} options={{header:MainHeader}}/>
        <HomeStack.Screen name="Category" component={Category} options={{header:CategoryHeader}}/>
        <HomeStack.Screen name="Product"  component={Product} options={{header:ProductHeader}}/>
      </HomeStack.Navigator>
    );
  }
  
export default Home;