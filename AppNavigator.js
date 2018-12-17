import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Accueil from './Accueil';
//import Input from './Input';

export default class AuthNav extends React.Component{
	render(){
		return (
			<AuthNavigator />
			);
	}
}

const AuthNavigator = createStackNavigator(
   {
      Accueil: { screen: Accueil},
      //Input: {screen: Input},

   },{
      headerMode:'Accueil'
   });
