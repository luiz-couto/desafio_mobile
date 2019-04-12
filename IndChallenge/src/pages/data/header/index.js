import React from 'react'
import {View,Text,Image,TouchableOpacity} from 'react-native'
import styles from './styles'






export default class Header extends React.Component{

    render(){

        const navigation = this.props.navigation

        return(
            <View style={styles.container}>
                
                <View style={styles.menu_container}>
                    <TouchableOpacity onPress={() => {navigation.openDrawer()}}>
                        <Image
                        
                            style={styles.menu_image}
                            source={require('./menu_icon.png')}

                        />
                    </TouchableOpacity>
                </View>
              
              
                <View style={styles.title_container}>
                    <Text style={styles.title_text}>Comentários</Text>
                </View>
                
                
                <View style={styles.add_container}>
                    <TouchableOpacity onPress={() => {}}>
                        <Image
                            
                            style={styles.add_image}
                            source={require('./add_icon.png')}

                        />
                    </TouchableOpacity>
                </View>
            </View>


    )}



}