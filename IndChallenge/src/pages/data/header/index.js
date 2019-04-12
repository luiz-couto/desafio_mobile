import React from 'react'
import {View,Text,Image,TouchableOpacity} from 'react-native'
import styles from './styles'






export default class Header extends React.Component{

    render(){

        const navigation = this.props.navigation

        return(
            <View style={styles.container}>
                
                <View>
                    <TouchableOpacity onPress={() => {navigation.openDrawer()}}>
                        <Text style={{fontFamily:'Manjari-Thin'}}>Data!</Text>
                    </TouchableOpacity>
                </View>
              
              
                <View>
                    <Text style={{fontFamily:'Manjari-Thin'}}>Comentários</Text>
                </View>
                
                
                <View>
                    <TouchableOpacity onPress={() => {}}>
                        <Text style={{fontFamily:'Manjari-Thin'}}>AddComment!</Text>
                    </TouchableOpacity>
                </View>
            </View>


    )}



}