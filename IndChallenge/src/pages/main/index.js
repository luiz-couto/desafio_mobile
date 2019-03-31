import React from 'react'
import {View, Text, ImageBackground, TouchableOpacity, Image} from 'react-native'
import styles from './styles'

export default class Main extends React.Component{
    static navigationOptions = {
        header: null
    };

    render(){

        const{ navigation } = this.props;
        return(

        <View style={styles.menu_container}>
            <TouchableOpacity onPress={() => {this.props.navigation.openDrawer();}}>
            <Image
                
                style={styles.menu_icon}
                source={require('./menu_icon.png')}

            />
            </TouchableOpacity>
        </View>
        );



    }

}