import React from 'react'
import {View,Image,TextInput} from 'react-native'

import Header from './header'
import styles from './styles';


export default class AddComment extends React.Component{


    render(){
        
        const{ navigation } = this.props;

        return(

            <View style={styles.container}>
                <Header navigation={navigation} />
            </View>


    )}



    
}