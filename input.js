import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import Expo from 'expo';
import AppNavigator from './AppNavigator';
//const {manifest} = Expo.Constants;
//const api = manifest.packagerOpts.dev ? manifest.debuggerHost
const url = "http://192.168.1.23:8000/api/Login/2";




class Input extends Component {



  getEvents(){
      return fetch(url)
         .then(response => response.json());

   }

   state = {
      email: '',
      password: ''
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   login = (email, pass) => {
      alert('email: ' + email + ' password: ' + pass)
   }

handleAddPress = () => {
      
}

   
   render() {
      return (
         <View>
            <View style={styles.text}>
               <Text>Login : </Text>
            </View>
            <View style = {styles.container}>
               <View style={styles.login}>
                  <TextInput style = {styles.input}
                     //underlineColorAndroid = "transparent"
                     placeholder = "Email"
                     placeholderTextColor = "#9a73ef"
                     autoCapitalize = "none"
                     onChangeText = {this.handleEmail}/>
               </View>
               <View style={styles.password}>
                  <TextInput style = {styles.input}
                    // underlineColorAndroid = "transparent"
                     placeholder = "Password"
                     placeholderTextColor = "#9a73ef"
                     autoCapitalize = "none"
                     secureTextEntry={true}
                     onChangeText = {this.handlePassword}/>
                  </View>
               <View>
                  <TouchableOpacity
                     style = {styles.submitButton}
                     onPress = {
                        //() => this.login(this.state.email, this.state.password)
                        //() => this.getEvents().then((responseJson) => {alert(responseJson.res)})
                        () => {
                          this.props.navigation.navigate('Accueil');
                        }
                     }>
                     <Text style = {styles.submitButtonText}> Submit </Text>
                  </TouchableOpacity>
               </View>
            </View>
         </View>
      );
   }
}
export default Input;

const styles = StyleSheet.create({
   container: {
      //paddingTop: 23,
      //padding:23,
      textAlign: 'center',
      display:'flex',
      justifyContent:'space-between',
   },
   input: {
      display:'flex',
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1,
      flexDirection:'column',


   },
   submitButton: {
      backgroundColor: '#00BFFF',
      justifyContent:'center',// for align content
      alignItems:'center',// for align content
      padding: 10,
      margin: 15,
      height: 40,
      borderRadius:5,
   },
   login : {
      display:'flex',
      flexDirection:'column',
   },
   password : {
   },
   submitButtonText:{
      color: 'white'
   },
   text: {
      fontSize: 90,
      marginTop:50
   }
});

