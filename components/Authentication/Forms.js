import React ,{useState} from 'react';
import {Button,TextInput} from "react-native-paper";
import AsyncStorage from "@react-native-community/async-storage";
import {StyleSheet  ,Text} from "react-native";
import colors from "../../src/configs/colors";
import axios from "axios";
import {connect} from "react-redux";
import { Formik } from 'formik';
import  * as yup  from 'yup';
import RNRestart from 'react-native-restart';
import strings from "../../src/configs/localization";


const styles=StyleSheet.create({
    input:{margin:5,backgroundColor:"#fff"},
    login:{backgroundColor:"#0488ff",margin:15,paddingVertical:5},
})          

//shape of input values
 const loginValidationSchema = yup.object().shape({
    name: yup
      .string()
      .required(strings.usernTitle),
    
    password: yup
      .string()
      .required(strings.passwordReq),
  });

  const registerValidationSchema = yup.object().shape({
    name: yup
      .string()
      .required(strings.usernTitle),
    email: yup
      .string()
      .email()
      .required(strings.emailReq),
    password: yup
      .string()
      .min(4,)
      .max(10, strings.passwordExc)
      .required(strings.passwordReq),
  });

export const LoginForm= (props) => {
    
  const [loginSuccess,setSuccess]=useState(true);
  const [loginLoading,setLoading]=useState(false);

      storeToken = async (value) => {
          try {
            await AsyncStorage.setItem('authToken', value)
          } catch (e) {
            console.log(e);
          }
        }
      storeData = async (value) => {
          try {
            const jsonData=JSON.stringify(value);
            await AsyncStorage.setItem('userInfo', jsonData)
          } catch (e) {
            console.log(e);
          }
        }
      requestMe=(token)=>{
        axios.get("https://api.expressmarket.uz/auth/users/me/",{
          headers:{
            Authorization:`Token ${token}`,
          }}).then((res)=>{
            storeData(res.data);
            console.log(res.data);
          }).catch((e)=>{
            console.log(e);
          });
      }

      requestLogin=(value)=>{
          setLoading(true);
          axios.post("https://api.expressmarket.uz/auth/token/login/",{
            username:value.name,
            password:value.password
          }).then((res)=>{
              setLoading(false);
              props.accessToken(res.data.auth_token);
              props.authenticate();
              storeToken(res.data.auth_token);
              requestMe(res.data.auth_token)
              RNRestart.Restart();
          }).catch((e)=>{
              setLoading(false);
              setSuccess(false);
              console.log(e);
          })
      }

    return(
    <Formik
    validationSchema={loginValidationSchema}
    initialValues={{ 
      name: '',
      password: '' 
    }}
    // onSubmit={props.authenticate}
    onSubmit={(value)=>{
      requestLogin(value);
    }}
   >
    {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
      <React.Fragment>
        <TextInput
          value={values.name}
          style={styles.input}
          onChangeText={handleChange('name')}
          onBlur={() => setFieldTouched('name')}
          underlineColor={colors.primary} 
          label={strings.usern}
        />
        {touched.name && errors.name &&
          <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.name}</Text>
        }            
        
        <TextInput
          value={values.password}
          style={styles.input}
          onChangeText={handleChange('password')}
          onBlur={() => setFieldTouched('password')}
          secureTextEntry={true}
          underlineColor={colors.primary} 
          label={strings.password}
        />
        {touched.password && errors.password &&
          <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.password}</Text>
        }
        {!loginSuccess&&
          <Text style={{ fontSize: 12, color: '#FF0D10' }}>{strings.pleaseCheck}</Text>
        }
        <Button
          loading={loginLoading}
          disabled={!isValid}
          onPress={handleSubmit}
          style={styles.login}
          color="#fff"
        >{strings.login}</Button>
           
      </React.Fragment>
    )}
  </Formik>                                   
                 
)};



export const RegisterForm= (props) => {

  const [loginSuccess,setSuccess]=useState(true);
  const [loginLoading,setLoading]=useState(false);

  storeData = async (value) => {
    try {
      const jsonData=JSON.stringify(value);
      await AsyncStorage.setItem('userInfo', jsonData)
    } catch (e) {
      console.log(e);
    }
  }

  registerRequest=(value)=>{
    setLoading(true);
    axios.post("https://api.expressmarket.uz/auth/users/",{
      username:value.name,
      email:value.email,
      password:value.password,
      type:"customer"
          }).
          then((res)=>{
            setLoading(false);
            storeData(res.data);
            props.navigation.navigate("Activation");  // props.authenticate;
          }).
          catch((e)=>{
            setLoading(false);
            setSuccess(false);
            console.log(e);
          })
  }
  return(                
    <Formik
    
    validationSchema={registerValidationSchema}
    initialValues={{ 
      name: '',
      email:'',
      password: '' 
    }}
    onSubmit={(value)=>registerRequest(value)}
   >
    {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
      <React.Fragment >
        <TextInput
          value={values.name}
          style={styles.input}
          onChangeText={handleChange('name')}
          onBlur={() => setFieldTouched('name')}
          underlineColor={colors.primary} 
          label={strings.usern}
        />
        {touched.name && errors.name &&
          <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.name}</Text>
        }            
        <TextInput
              value={values.email}
              style={styles.input}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
              underlineColor={colors.primary} 
              label={strings.email}
            />
        {touched.email && errors.email &&
          <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.email}</Text>
        }
        <TextInput
          value={values.password}
          style={styles.input}
          onChangeText={handleChange('password')}
          onBlur={() => setFieldTouched('password')}
          secureTextEntry={true}
          underlineColor={colors.primary} 
          label={strings.password}
        />
        {touched.password && errors.password &&
          <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.password}</Text>
        }
        {!loginSuccess&&
          <Text style={{ fontSize: 12, color: '#FF0D10' }}>{strings.userSame}</Text>
        }
        <Button
          loading={loginLoading}
          disabled={!isValid}
          onPress={handleSubmit}
          style={styles.login}
          color="#fff"
        >{strings.register}</Button>
      </React.Fragment>
    )}
  </Formik>                                   
                 
)};