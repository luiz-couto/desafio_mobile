import React from 'react'
import {View,Text,Image,ScrollView} from 'react-native'

import { openDatabase } from 'react-native-sqlite-storage';

import Comment from './comment'
import styles from './styles';


var db = openDatabase('cldb','1.0','Comment List',-1)

export default class CommentList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            
            title: '',
            comment: '',
            commentArray: [],
          
        }
    }
    
    
    componentDidMount(){

        
        db.transaction(function(tx){
            tx.executeSql('CREATE TABLE IF NOT EXISTS comment_table(comment_id INTEGER PRIMARY KEY AUTOINCREMENT,comment_title TEXT, comment_text TEXT)')
        })

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
            len = resultado.rows.length
            text = rows.item(len-1).comment_title
            
            for(i=0;i<len;i++){

                title = rows.item(i).comment_title
                text = rows.item(i).comment_text

                this.state.commentArray.push({

                    'title': title + ';.;' + text
                    
                });


                this.setState({commentArray: this.state.commentArray})
            }
            
            
            
            console.log(this.state.commentArray)
            //this.setState({title: text})
            //this.setState({commentArray: rows})
        });        
                
        

       
        
    }

    

    render(){

        //this.showData()

        let comments = this.state.commentArray.map((val,key) => {
            return <Comment key={key} keyval={key} val={val} />
                    //deleteMethod={ ()=> this.deleteTask(key) } 
          });
        

        return(

            <View>
                <ScrollView style={styles.scroll}>

                    {comments}

                </ScrollView>
            </View>
        



    )}






}