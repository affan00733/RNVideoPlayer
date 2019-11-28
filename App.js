import {createStackNavigator,createAppContainer} from 'react-navigation'
import  Main from './src/main'

import Video from './src/videoPlayer'

import React ,{Component} from 'react';

import { Image,View,Text } from 'react-native';
const St=createStackNavigator({
    Main : { screen : Main},
    Video : {
        screen : Video
    }
});

const  Ap = createAppContainer(St);

export default class App extends Component{
    render(){
        return(
            <Ap/>
        )
    }
}
