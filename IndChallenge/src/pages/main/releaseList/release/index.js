import React from 'react';
import {View, Text} from 'react-native'

import styles from './styles'

const Release = ({release}) => (

    <View style={styles.item_container}>
        <Text style={styles.tag_text}>Tag Name: {release.tag_name}</Text>
        <Text style={styles.create_text}>Created at: {release.created_at}</Text>
    </View>


);


export default Release;