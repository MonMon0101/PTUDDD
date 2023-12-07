import React from 'react';
import {View, StyleSheet, TouchableHighlight, Text, Image} from 'react-native';
import PropTypes from 'prop-types';
import color from '../utility/colors';


const ContactListItem = ({ name, avatar, phone, onPress}) => {
    return (
   
       <TouchableHighlight underlayColor={color.grey}

       styles={styles.container}
       onPress={onPress}>
        
        <View style={styles.contactInfo}>
            <Image source={{uri: avatar}} style={styles.avatar} />
  
        <View style={styles.details}>
            <Text style={styles.title}>
                {name}
            </Text>
            <Text style={styles.subtitle}>
                {phone}
            </Text>

        </View>
        </View>
       </TouchableHighlight>
    );
}


ContactListItem.prototypes ={
    name : PropTypes.string,
    avatar : PropTypes.string,
    phone : PropTypes.string,
    onPress : PropTypes.func
};

const styles = StyleSheet.create({
    container:{
        paddingLeft: 24,

    },
    contactInfo:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 16,
        paddingBottom:24,
        
        borderBottomColor: color.grey,
        borderBottomWidth: StyleSheet.hairlineWidth,

    },
    avatar:{
        borderRadius: 22,
        width: 45,
        height: 45,
        
    },
    details:{
        justifyContent: 'center',
        flex: 1,
        marginLeft: 20
    },
    title:{
        color: color.black,
        fontWeight: 'bold',
        fontSize: 16,
    },
    subtitle:{
        color: color.blue,
        fontSize: 14,
        marginTop: 4
    }
})

export default ContactListItem;