import React from 'react'
import {View, Text, ImageBackground, TouchableOpacity, Image} from 'react-native'
import styles from './styles'
import { ScrollView } from 'react-native-gesture-handler';

export default class Main extends React.Component{
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);
        this.state = {
          
            haveData: false,         
          
        }
     
      }

    renderList(){

        if(this.state.haveData == false){
            return( 
            <View>
                <Image
                    
                    style={styles.uni_image}
                    source={require('./uni_image.png')}

                />
            </View>
            );
        }else{
            return(

                <Text>A lista vai aperecer aqui</Text>


            );
        }


    }

    render(){

        const{ navigation } = this.props;
        return(
        <View>
            <View style={styles.container}>
                <View style={styles.menu_container}>
                    <TouchableOpacity onPress={() => {this.props.navigation.openDrawer();}}>
                    <Image
                        
                        style={styles.menu_icon}
                        source={require('./menu_icon.png')}

                    />
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => {this.setState({haveData: true})}} style={styles.request_touchable}>
                        <View style={styles.request_button}>
                        <Text style={styles.request_text}>Requisitar dados</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
           
           <ScrollView>
                {this.renderList()} 
           </ScrollView>
        </View>
        
        );



    }

}