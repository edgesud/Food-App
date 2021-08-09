import * as React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator,TransitionPresets } from '@react-navigation/stack';
import Signinwelcomescreen from '../screen/authscreen/signinwelcomescreen';
import signinscreen from '../screen/authscreen/signinscreen';
import Homescreen from "../screen/authscreen/Homescreen"
const Auth = createStackNavigator();

export default function auth(){
    return(
        <Auth.Navigator>
              <Auth.Screen name="SigninWelcome" component={Signinwelcomescreen} options={{headerShown:false,...TransitionPresets.RevealFromBottomAndroid}} />
              <Auth.Screen name="Signin" component={signinscreen} options={{headerShown:false,...TransitionPresets.RevealFromBottomAndroid}} />
              <Auth.Screen name="Home" component={Homescreen} options={{headerShown:false,...TransitionPresets.RevealFromBottomAndroid}} />
              
        </Auth.Navigator>
    )
}