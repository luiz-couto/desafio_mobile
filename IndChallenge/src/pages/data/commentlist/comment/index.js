import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image,Alert} from 'react-native';


import styles from './styles'


export default class Comment extends React.Component{
    
    
    returnTitle(){

        text = this.props.val.title
        spl = text.split(';.;',2)
        return spl[0]
    }
    
    returnComment(){

        text = this.props.val.title
        spl = text.split(';.;',2)
        return spl[1]

    }
    deleteComment(){

        Alert.alert(
            'Excluir',
            'Tem certeza que deseja apagar esse comentário?',
            [
              
              {
                text: 'Cancelar',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'Apagar', onPress: this.props.deleteMethod},
            ],
            
          );



    }
    
    render(){

        const navigation = this.props.navigation

        return(
                            
                <View key={this.props.keyval} style={styles.task}>
                    
                    <View style={styles.com_container}>
                           
                           <View style={styles.head_container}>
                                <View style={styles.title_con}>
                                    <Text style={styles.title}>{this.returnTitle()}</Text>
                                </View>

                                <View style={styles.btn_con}>
                                    <View style={styles.edit_con}>
                                        <TouchableOpacity onPress={()=>{navigation.navigate('AddComment',{add_or_edit: 1,key: this.props.keyval,title: this.returnTitle(), text: this.returnComment()})}} style={styles.taskDelete}>
                                
                                            <Image
                                
                                                style={styles.edit}
                                                source={require('./edit_icon.png')}

                                            />
                            
                                        </TouchableOpacity> 
                                    </View>
                                
                                    <View style={styles.delete_con}>
                                        <TouchableOpacity onPress={() => {this.deleteComment()}} style={styles.taskDelete}>
                                
                                            <Image
                                    
                                                style={styles.delete}
                                                source={require('./delete_icon.png')}

                                            />
                                
                                        </TouchableOpacity>
                                    </View>
                                </View>
                               
                            </View>


                            <View style={styles.text_con}>
                                <Text style={styles.comment}>{this.returnComment()}</Text>
                            </View>

                            <View style={styles.down_bor}>

                            </View>
                    </View>
                    
                    
                </View>
              
        );
    }
    
}