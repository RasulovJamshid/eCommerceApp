import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  StatusBar

} from "react-native";
import { Searchbar } from 'react-native-paper';
import { connect } from "react-redux";
import strings from "../../src/configs/localization"



class SearchModal extends React.Component {
    constructor(props){
        super(props);
        this.state={
            modalVisible:true,
            searchQuery:'',
            sugesstions:["Home Decor","Smartphone","Sugesstions","TV","PS5","Xiaomi","Apple"]
        }
    }
  render(){
      return (
    <View style={styles.centeredView}>
    
      <Modal
        animationType="none"
        transparent={false}
        visible={this.props.isOpen}
        onRequestClose={
          this.props.handleClose
        }
      >
        <Searchbar
         autoFocus={true}
         placeholder={strings.search}
         onChangeText={(query)=>this.setState({searchQuery:query})}
         value={this.state.searchQuery}
            />  
        <View style={{flexDirection:"row",margin:5,flexWrap:"wrap"}}>
            {this.state.sugesstions.map((i,index)=>(
        <Text key={index} style={{backgroundColor:"lightgray",borderRadius:5,padding:3,margin:5}}>{i}</Text>

            ))}
        </View>
         
        
      </Modal>

      </View>
    );
    }
};



const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

const mapDispatchToProps=(dispatch)=>({
    handleClose:()=>dispatch({type:"CLOSE_SEARCH"}),
  });
  const mapStateToProps=(state)=>({
    isOpen:state.mainSearch,
  })
export default connect(mapStateToProps,mapDispatchToProps)(SearchModal);
