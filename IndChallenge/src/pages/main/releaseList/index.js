import React from 'react'
import {View, Text} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

import styles from './styles'

import Release from './release/index'



const URL = "https://api.github.com/repos/balderdashy/sails/releases"


export default class ReleaseList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          
            isLoaded: false, 
            listArray:{},       
          
        }
     
      }

      componentDidMount() {
        this.fetchData().done();
      }
    
      async fetchData() {
       
        const response = await fetch(URL);
        const json = await response.json();
        
        this.state.listArray = json.slice(0,10)
       
        this.setState({isLoaded: true});
       
       
      }

      render(){

        if(this.state.isLoaded == false){

            return (
                <View style={styles.loading_container}>
                    <Text style={styles.loading}>Carregando.....</Text>
                </View>
            )
        }else{
        
        
        return(


            <ScrollView style={styles.scroll}>

                <View>
                {this.state.listArray.map(release => 
                    <Release key={release.id} release={release} />
                    )}
                </View>

            </ScrollView>

        

        )
    
        }
    
    }







}