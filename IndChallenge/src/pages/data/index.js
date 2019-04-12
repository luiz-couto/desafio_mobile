import React from 'react'
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native'

import Header from './header'


export default class Data extends React.Component{
    static navigationOptions = {
        header: null
    };

    

    render(){

        const{ navigation } = this.props;
        return(

        <View >
            <Header navigation={navigation} />
        </View>

        );



    }

}