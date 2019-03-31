import React from 'react'
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native'


export default class Main extends React.Component{
    static navigationOptions = {
        header: null
    };

    render(){

        const{ navigation } = this.props;
        return(

        <View >
            <TouchableOpacity onPress={() => {this.props.navigation.openDrawer();}}>
                <Text>Open</Text>
            </TouchableOpacity>
        </View>

        );



    }

}