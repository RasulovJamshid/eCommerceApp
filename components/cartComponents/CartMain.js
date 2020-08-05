import * as React from 'react';
import { Text, ScrollView } from 'react-native';
import OrderCart from "../childComponets/OrderCart.js";
import { View } from 'native-base';

export default function Cart() {
    return (
      <ScrollView >
      <OrderCart title="One dress" type="Women"/>
      <OrderCart title="Two dress" type="Man"/>
      <View style={{margin:8}}>
        <Text style={{fontSize:23,fontWeight:"700",margin:15}}>Totals</Text>

        <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginVertical:10}}>
          <Text style={{fontSize:16}}>Sub Total</Text>
          <View  style={{flexGrow:1,borderBottomColor: 'gray',borderBottomWidth: 2,margin:5}}/> 
          <Text style={{fontSize:18,fontWeight:"700"}}>$39</Text>
        </View>

        <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginVertical:10}}>
          <Text style={{fontSize:16}}>Shipping</Text>
          
            <View  style={{flexGrow:1,borderBottomColor: 'gray',borderBottomWidth: 2,margin:5}}/>      
            
          <Text style={{fontSize:18,fontWeight:"700"}}>$0</Text>
        </View>
      </View>
      
      </ScrollView>
    );
  }