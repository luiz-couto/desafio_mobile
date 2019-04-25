import React from 'react'
import {View,Image,TextInput,Text,TouchableOpacity,Alert} from 'react-native'
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

        if(this.state.title.length == 0 || this.state.text.length == 0){
            if(this.state.title.length == 0){
                Alert.alert(
                    'TagName vazia',
                    'Você deve adicionar algum texto no campo de tagName.',
                    [
                      
                      {
                        text: 'Ok',
                        onPress: () => console.log('Ok Pressed'),
                        style: 'ok',
                      },
                      
                    ],
                    
                  );
            }else{
                Alert.alert(
                    'Comentário vazio',
                    'Não se esqueça de adicionar o comentário!',
                    [
                      
                      {
                        text: 'Ok',
                        onPress: () => console.log('Ok Pressed'),
                        style: 'ok',
                      },
                      
                    ],
                    
                  );

            }
        }else{

        db.transaction(function(tx){
            tx.executeSql('INSERT INTO comment_table (comment_title,comment_text) VALUES(?,?)',[title,comment])
        })

        
        this.props.navigation.navigate('Comentários',{atualizado: 1})
        }
    };

    updateData(itemID){

        id = this.getID(itemID)

        var title = this.state.title
        var comment = this.state.text

        if(this.state.title.length == 0 || this.state.text.length == 0){
            if(this.state.title.length == 0){
                Alert.alert(
                    'TagName vazia',
                    'Você deve adicionar algum texto no campo de tagName.',
                    [
                      
                      {
                        text: 'Ok',
                        onPress: () => console.log('Ok Pressed'),
                        style: 'ok',
                      },
                      
                    ],
                    
                  );
            }else{
                Alert.alert(
                    'Comentário vazio',
                    'Não se esqueça de adicionar o comentário!',
                    [
                      
                      {
                        text: 'Ok',
                        onPress: () => console.log('Ok Pressed'),
                        style: 'ok',
                      },
                      
                    ],
                    
                  );

            }
        }else{

        db.transaction(function(tx){
            tx.executeSql('UPDATE comment_table SET comment_title =(?),comment_text =(?) WHERE comment_id =(?)',[title,comment,id])
        })


        this.props.navigation.navigate('Comentários',{atualizado: 1})
        }

    }

    getID(i){

        let result = new Promise((resolve,reject) => {
            
            db.transaction(function(tx){
            tx.executeSql('SELECT * FROM comment_table',[],(tx,resultado) => {
                resolve(resultado)
                
                
            })
        },null)})

        result.then((resultado) => {

           id = resultado.rows.item(i).comment_id
           return id

        })


    }

    render(){
        
        


        const{ navigation } = this.props;
        
        
    
        if(navigation.getParam('add_or_edit',0) == 0){
        return(

            <View style={styles.container}>
                
                <Header navigation={navigation} />

            <View styles={styles.title_container}>

                <View style={styles.title_text_container}>
                    <Text style={styles.title_text}>TagName</Text>
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
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Comentários')}} style={styles.back_touchable}>
                            <View style={styles.back_button}>
                            <Text style={styles.back_text}>Cancelar</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity onPress={() => {this.saveData()}} style={styles.publish_touchable}>
                            <View style={styles.publish_button}>
                            <Text style={styles.publish_text}>Comentar</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>



            </View>


    )}

    else if(navigation.getParam('add_or_edit',0) == 1){

        const _text = navigation.getParam('text','')
        const _title = navigation.getParam('title','')
        const _key = navigation.getParam('key',0)

        this.state.text = _text
        this.state.title = _title

        

        return(
            <View style={styles.container}>
                    
                    <Header navigation={navigation} />

                <View styles={styles.title_container}>

                    <View style={styles.title_text_container}>
                        <Text style={styles.title_text}>Título</Text>
                    </View>
                
                    <TextInput
                        style={styles.input_title}
                        onChangeText={(title) => {this.setState({title}),navigation.setParams({title: title})}}
                        value={this.state.title}
                        underlineColorAndroid={'transparent'}
                        autoCorrect={false}
                        
                    />

                    <View style={styles.comment_text_container}>
                        <Text style={styles.comment_text}>Descrição</Text>
                    </View>
                
                    <TextInput
                        style={styles.input_comment}
                        onChangeText={(text) => {this.setState({text}),navigation.setParams({text: text})}}
                        value={this.state.text}
                        underlineColorAndroid={'transparent'}
                        multiline = {true}
                        autoCorrect={false}
                    />


                    <View style={styles.buttons_container}>
                        <View>
                            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Comentários')}} style={styles.back_touchable}>
                                <View style={styles.back_button}>
                                <Text style={styles.back_text}>Cancelar</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity onPress={() => {this.updateData(_key)}} style={styles.publish_touchable}>
                                <View style={styles.publish_button}>
                                <Text style={styles.publish_text}>Pronto!</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>



                </View>
        )

    }





    }


    
}