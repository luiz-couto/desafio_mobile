import React from 'react';
import {View, Text} from 'react-native'
import moment from 'moment'

import styles from './styles'

const Release = ({release}) => (

    <View style={styles.item_container}>
        <Text style={styles.tag_text}>Tag Name: {release.tag_name}</Text>
        <Text style={styles.create_text}>Created at: {moment(release.created_at).format("DD/MM/YYYY - HH:mm a")}</Text>
    </View>


);


export default Release;