import React from 'react';
import {View, Text} from 'react-native'

const Release = ({release}) => (

    <View>
        <Text>Tag Name: {release.tag_name}</Text>
        <Text>Created at: {release.created_at}</Text>
    </View>


);

export default Release;