import React from 'react'
import {View,Text,Image} from 'react-native'

import { openDatabase } from 'react-native-sqlite-storage';


var db = openDatabase('cldb','1.0','Comment List',-1)

export default class CommentList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            
            title: '',
            comment: '',
          
        }
    }
    
    
    componentDidMount(){

        
        db.transaction(function(tx){
            tx.executeSql('CREATE TABLE IF NOT EXISTS comment_table(comment_id INTEGER PRIMARY KEY AUTOINCREMENT,comment_title TEXT, comment_text TEXT)')
        })

        this.saveData()
        this.showData()

    }

    saveData(){

        var title = 'example'
        var comment = 'example'

        db.transaction(function(tx){
            tx.executeSql('INSERT INTO comment_table (comment_title,comment_text) VALUES(?,?)',[title,comment])
        })

    };

    showData(){
            
        let result = new Promise((resolve,reject) => {
            
            db.transaction(function(tx){
            tx.executeSql('SELECT * FROM comment_table',[],(tx,resultado) => {
                resolve(resultado)
                
                
            })
        },null)})

        result.then((resultado) => {
            rows = resultado.rows
            text = rows.item(0).comment_title
            console.log(rows)
            this.setState({title: text})
        });        
                
        

       
        
    }

    render(){

        

        return(

            <View>
                <Text>{this.state.title}</Text>
            </View>
        



    )}






}