import React from "react";
import {View,Text,SafeAreaView,FlatList,TextInput, Button,StyleSheet} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { Appbar } from 'react-native-paper';
import Card from "../childComponets/Card";
import Drawer from 'react-native-drawer'
import SearchModalCompatiable from "../childComponets/SearchModal";
import { connect } from "react-redux";

const DATA = [
  {
    id: 'bd7acbead-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'hand',
    subTitle:"Bizdan sotib oling, biz ajoyib xizmatlar ko'rsatamiz",
    price:"$59"
  },
  {
    id: '3ac68afc-c60d5-48d3-a4f8-fbd91aa97f63',
    title: 'foot',
    subTitle:"Kiyim-kechak, futbolkalar, har xil o'lchamdagi narsalar ",
    price:"$61"

  },
  {
    id: '58694a0f-3dad1-471f-bd96-145571e29d72',
    title: 'foot',
    subTitle:"Futbolkalar, har xil o'lchamdagi narsalar ",
    price:"$14"

  },
  {
      id: 'bd7acbea-c1bs1-46c2-aed5-3ad53abb28ba',
      title: 'hand',
      subTitle:"Bizdan sotib oling, biz ajoyib xizmatlar ko'rsatamiz",
      price:"$32"

    },
    {
      id: '3ac68afc-c60d5-48d3-a4f8-fbd91aa97f63',
      title: 'hand',
      subTitle:"Kiyim-kechak, futbolkalar, har xil o'lchamdagi narsalar",
      price:"$45"

    },
    {
      id: '58694a0f-3da1-471f-bd9d6-145571e29d72',
      title: 'foot',
      subTitle:"Bizdan sotib oling, biz ajoyib xizmatlar ko'rsatamiz",
      price:"$59"

    },
    {
      id: 'bd7acbea-c1b1-46c2-daed5-3ad53abb28ba',
      title: 'hand',
      subTitle:"Bizdan sotib oling, biz ajoyib xizmatlar ko'rsatamiz",
      price:"$80"

    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd9s1aa97f63',
      title: 'foot',
      subTitle:"Bizdan sotib oling, biz ajoyib xizmatlar ko'rsatamiz",
      price:"$100"

    },
    {
      id: '58694a0f-3da1-471f-bd96-1455s71e29d72',
      title: 'foot',
      subTitle:"Kiyim-kechak, futbolkalar, har xil o'lchamdagi narsalar",
      price:"$59"

    },
    {
        id: 'bd7acbea-c1b1-46c2-aded5-3ad53abb28ba',
        title: 'hand',
        subTitle:"Kiyim-kechak, futbolkalar, har xil o'lchamdagi narsalar",
        price:"$99"

      },
      {
        id: '3ac68afc-c605-48d3-a4df8-fbd91aa97f63',
        title: 'hand',
        subTitle:"Futbolkalar, har xil o'lchamdagi narsalar",
        price:"$73"

      },
      {
        id: '58694a0f-3da1-471f-bd96-1455d71e29d72',
        title: 'foot',
        subTitle:"Futbolkalar",
        price:"$45"

      },
];

class DrawerContent extends React.Component{
  constructor(props){
    super(props);
    this.state={
      bestseller:false,
      min:0,
      max:0
    }
  }
  render(){
    return(
      <View style={dContentStyle.container}>
        <View style={dContentStyle.header}>
        <Text style={dContentStyle.filters}>Filters</Text>
        <Button title="apply" color="red" onPress={()=>console.log("apply")}  />
        </View>
          <View style={dContentStyle.priceCont}>
            <Text style={dContentStyle.price}>Price</Text>
            <TextInput
            scrollEnabled={false}
                placeholder="min"
                keyboardType="number-pad"
                style={dContentStyle.priceInput}
                onChangeText={text => this.setState({min:text})}
                value={2000}
              />
              <Text>-</Text>
            <TextInput
                placeholder="max"
                keyboardType="number-pad"
                style={dContentStyle.priceInput}
                onChangeText={text => this.setState({max:text})}
                value={2000}
              />
          </View>

          <View style={dContentStyle.bestsellerCont}>
              <Text style={dContentStyle.bestseller}>Bestseller</Text>
              <CheckBox
              value={this.state.bestseller}
              key="bestseller"
              tintColors={{true:"red",false:"lightgray"}}
              onValueChange={()=>this.setState({bestseller:!this.state.bestseller})}
             />
          </View>
      </View>
    )
  }
}




class Listing extends React.Component{
    constructor(props){
      super(props);
      this.state={
        isSearchOpen:false
      }
    }
    setHeader(){
      this.props.navigation.setOptions({
        title:this.props.route.params.type,
        header:()=>(
              <View>
                  <Appbar.Header style={{backgroundColor:"#fff"}} >
                  <Appbar.Action icon="arrow-left" onPress={()=>this.props.navigation.goBack()} />
                  <Appbar.Content title={this.props.route.params.type}/>
                  <Appbar.Action icon="magnify" onPress={this.props.openSearch} />
                  <Appbar.Action icon="tune" color="red"  onPress={this.openControlPanel} />
                  </Appbar.Header>
              </View>
        ),
     })
    }
    closeControlPanel = () => {
      this._drawer.close()
    };
    openControlPanel = () => {
      this._drawer.open()
    };
    componentDidMount(){
      this.setHeader();
    }
  render(){
    return (
      <Drawer
        panThreshold={0.1}
        styles={{drawer:{backgroundColor:"#fafafa"},main:{backfaceVisibility:"hidden"}}}
        negotiatePan={true}
        acceptPan
        panOpenMask={0.1}
        captureGestures
        type="overlay"
        side="right"
        tapToClose={true}
        openDrawerOffset={0.3} // 20% gap on the right side of drawer
        panCloseMask={0.2}
        closedDrawerOffset={-1}
        ref={(ref) => this._drawer = ref}
        content={<DrawerContent/>}
      >
    <SearchModalCompatiable isOpen={this.state.isSearchOpen}/>
     <SafeAreaView >
          <FlatList
          numColumns={2}
          data={DATA}
          renderItem={(item)=><Card price={item.item.price} subTitle={item.item.subTitle} navigation={this.props.navigation}/>}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
      </Drawer>
      
    );}
  };
  
  const dContentStyle=StyleSheet.create({
    bestseller:{flexGrow:1,margin:10,fontSize:16,color:"red"},
    bestsellerCont:{flexDirection:"row",margin:5,marginVertical:15,alignItems:"center",justifyContent:"space-between"},
    priceInput:{width:70,marginHorizontal:10, height: 40, borderBottomColor: 'gray', borderBottomWidth: 1 },
    container:{flexDirection:"column",alignItems:"center",justifyContent:"center"},
    header:{flexDirection:"row",alignItems:"center",margin:10},
    filters:{margin:10,fontSize:18,padding:5,flex:1},
    priceCont:{flexDirection:"row",margin:5,alignItems:"center"},
    price:{flexGrow:1,margin:10,fontSize:16,color:"red"}
  
  })

const mapDispatchToProps=(dispatch)=>({
  openSearch:()=>dispatch({type:"OPEN_SEARCH"})
})


  export default connect(null,mapDispatchToProps)(Listing);