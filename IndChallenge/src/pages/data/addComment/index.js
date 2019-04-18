import React from 'react'
import {View,Image,TextInput,Text,TouchableOpacity} from 'react-native'
import { NavigationActions, StackActions, DrawerActions } from 'react-navigation'

import Header from './header'
import styles from './styles';

import { openDatabase } from 'react-native-sqlite-storage';


var db = openDatabase('cldb','1.0','Comment List',-1)


export default class AddComment extends React.Component{


    constructor(props){
        super(props);
        this.state = {
            
            title: '',
            text: '',
            
          
        }
    }

    componentDidMount(){

        
        db.transaction(function(tx){
            tx.executeSql('CREATE TABLE IF NOT EXISTS comment_table(comment_id INTEGER PRIMARY KEY AUTOINCREMENT,comment_title TEXT, comment_text TEXT)')
        })

    }

    saveData(){

        var title = this.state.title
        var comment = this.state.text

        db.transaction(function(tx){
            tx.executeSql('INSERT INTO comment_table (comment_title,comment_text) VALUES(?,?)',[title,comment])
        })

        
        this.props.navigation.navigate('Data',{atualizado: 1})
    };

    render(){
        
        


        const{ navigation } = this.props;

        return(

            <View style={styles.container}>
                
                <Header navigation={navigation} />

            <View styles={styles.title_container}>

                <View style={styles.title_text_container}>
                    <Text style={styles.title_text}>Título</Text>
                </View>
               
                <TextInput
                    style={styles.input_title}
                    onChangeText={(title) => this.setState({title})}
                    value={this.state.title}
                    placeholder={'Escreva aqui o título'}
                    placeholderTextColor={'rgba(255,255,255,0.2)'}
                    underlineColorAndroid={'transparent'}
                    autoCorrect={false}
                    
                />

                <View style={styles.comment_text_container}>
                    <Text style={styles.comment_text}>Descrição</Text>
                </View>
               
                <TextInput
                    style={styles.input_comment}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                    underlineColorAndroid={'transparent'}
                    multiline = {true}
                    autoCorrect={false}
                />


                <View style={styles.buttons_container}>
                    <View>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Data')}} style={styles.back_touchable}>
                            <View style={styles.back_button}>
                            <Text style={styles.back_text}>Cancelar</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity onPress={() => {this.saveData()}} style={styles.publish_touchable}>
                            <View style={styles.publish_button}>
                            <Text style={styles.publish_text}>Pronto!</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>



            </View>


    )}



    
}