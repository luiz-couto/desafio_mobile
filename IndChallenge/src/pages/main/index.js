import React from 'react'
import {View, Text, ImageBackground, TouchableOpacity, Image} from 'react-native'
import { Toast } from 'native-base';
import styles from './styles'
import { ScrollView } from 'react-native-gesture-handler';

import ReleaseList from './releaseList/index'


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

                <ReleaseList />


            );
        }


    }

    async fetchData() {  //here its just verified the connection, the data manipulation its inside ReleaseList Component
       
        try {
            let response = await fetch(
                "https://api.github.com/repos/balderdashy/sails/releases",
            );
            this.setState({haveData: true})
            
          } catch (error) {
            this.setState({haveData: false})
            console.log("Without connection")
            Toast.show({
                text: 'No connection to the internet!',
                buttonText: 'OK',
                textStyle: styles.toast_text,
                duration: 4000,
              })
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
                    <TouchableOpacity onPress={() => {this.fetchData().done()}} style={styles.request_touchable}>
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