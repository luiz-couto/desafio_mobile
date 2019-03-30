import React from 'react'
import {View, Text, ImageBackground} from 'react-native'


export default class Main extends React.Component{
    static navigationOptions = {
        header: null
    };

    render(){

        const{ navigation } = this.props;
        return(

            <Text>Olá</Text>

        );



    }

}