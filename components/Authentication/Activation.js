import React from "react";
import {View,Text} from "react-native";
import {Button} from "react-native-paper";
import Axios from "axios";



class Activation extends React.Component{
    constructor(props){
        super(props);
        this.state={
            activated:false,
            notUrl:false,
            // userInfo:{}
        }
        // this.getUserInfo();
    }

    // getUserInfo=async () => {
    //     try {
    //       const jsonValue = await AsyncStorage.getItem('userInfo')
    //       if (jsonValue != null ) {
    //         this.setState({userInfo:JSON.parse(jsonValue)});
    //         }
    //     } catch(e) {
    //         console.log(e)
    //     }
    //   } 

    // login(){
    //     Axios.post("https://api.expressmarket.uz/auth/token/login/",{
    //         username:this.state.userInfo.username,
    //         password:this.state.password
    //     })
    // }

    componentDidMount(){
        
        if(!!this.props.route.params){
            Axios.post("https://api.expressmarket.uz/auth/users/activation/",{
                uid:this.props.route.params.uid,
                token:this.props.route.params.token
            }).then((res)=>{
                this.setState({activated:true});
                this.props.navigation.navigate("Login");
            }).catch((e)=>{
                this.setState({activated:false});
                this.props.navigation.navigate("Login");
            })
        }
        else{
            this.setState({notUrl:true});
        }
    }

    render(){
        return(this.state.fromUrl?
            (<View style={{flex:1,justifyContent:"center",alignItems:"center",margin:15}}>
                <Text style={{textAlign:"center",color:"#0488ff",fontSize:20}}>We sent activation email to you, Please activate your account</Text>
            </View>):
            (<View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <Button color="#fff" loading={true} style={{borderRadius:10,fontSize:20,backgroundColor:"#0488ff"}}>Activation</Button>
             </View>)
        )
    }
}
export default Activation;