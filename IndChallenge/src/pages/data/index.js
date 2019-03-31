import React from 'react'
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native'


export default class Data extends React.Component{
    static navigationOptions = {
        header: null
    };

    render(){

        const{ navigation } = this.props;
        return(

        <View >
            <TouchableOpacity onPress={() => {this.props.navigation.openDrawer();}}>
                <Text style={{fontFamily:'Manjari-Thin'}}>Data!</Text>
            </TouchableOpacity>
        </View>

        );



    }

}