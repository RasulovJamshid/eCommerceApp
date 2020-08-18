import React from 'react';
import {Button,TextInput} from "react-native-paper";
import {StyleSheet  ,Text} from "react-native";
import colors from "../../src/configs/colors";
import {connect} from "react-redux";
import { Formik } from 'formik';
import  * as yup  from 'yup';



const styles=StyleSheet.create({
    input:{margin:5,backgroundColor:"#fff"},
    login:{backgroundColor:"#0488ff",margin:15,paddingVertical:5},
})          

//shape of input values
 const loginValidationSchema = yup.object().shape({
    name: yup
      .string()
      .required('Please, provide your username!'),
    
    password: yup
      .string()
      .min(4,)
      .max(10, 'Password should not excced 10 chars.')
      .required(),
  });

  const registerValidationSchema = yup.object().shape({
    name: yup
      .string()
      .required('Please, provide your username!'),
    email: yup
      .string()
      .email()
      .required(),
    password: yup
      .string()
      .min(4,)
      .max(10, 'Password should not excced 10 chars.')
      .required(),
  });

export const LoginForm= (props) => (
                  
    <Formik
    validationSchema={loginValidationSchema}
    initialValues={{ 
      name: '',
      password: '' 
    }}
    onSubmit={props.authenticate}
   >
    {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
      <React.Fragment>
        <TextInput
          value={values.name}
          style={styles.input}
          onChangeText={handleChange('name')}
          onBlur={() => setFieldTouched('name')}
          underlineColor={colors.primary} 
          label="username"
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
          label="password"
        />
        {touched.password && errors.password &&
          <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.password}</Text>
        }
        <Button
          title='Submit'
          disabled={!isValid}
          onPress={handleSubmit}
          style={styles.login}
          color="#fff"
        >Login</Button>
      </React.Fragment>
    )}
  </Formik>                                   
                 
);

export const RegisterForm= (props) => (
                  
    <Formik
    
    validationSchema={registerValidationSchema}
    initialValues={{ 
      name: '',
      email:'',
      password: '' 
    }}
    onSubmit={props.authenticate}
   >
    {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
      <React.Fragment >
        <TextInput
          value={values.name}
          style={styles.input}
          onChangeText={handleChange('name')}
          onBlur={() => setFieldTouched('name')}
          underlineColor={colors.primary} 
          label="username"
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
              label="E-mail"
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
          label="password"
        />
        {touched.password && errors.password &&
          <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.password}</Text>
        }
        <Button
          title='Submit'
          disabled={!isValid}
          onPress={handleSubmit}
          style={styles.login}
          color="#fff"
        >Register</Button>
      </React.Fragment>
    )}
  </Formik>                                   
                 
);