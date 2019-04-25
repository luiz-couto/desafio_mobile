import React from 'react'
import {View,Image,Text,TouchableOpacity} from 'react-native'

import styles from './styles'

export default class Header extends React.Component{


    render(){
        
        const navigation = this.props.navigation
        
        return(

            <View style={styles.container}>
                 <View style={styles.menu_container}>
                    <TouchableOpacity onPress={() => {navigation.navigate('Comentários')}}>
                        <Image
                        
                            style={styles.menu_image}
                            source={require('./back_icon.png')}

                        />
                    </TouchableOpacity>
                </View>


                <View style={styles.title_container}>
                    <Text style={styles.title_text}>Adicionar Comentário</Text>
                </View>

            </View>
        
    )}



}