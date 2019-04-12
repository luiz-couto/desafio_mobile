import React from 'react'
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native'

import styles from './styles'

import Header from './header'


export default class Data extends React.Component{
    static navigationOptions = {
        header: null
    };

    

    render(){

        const{ navigation } = this.props;
        return(

        <View style={styles.container} >
            <Header navigation={navigation} />
        </View>

        );



    }

}