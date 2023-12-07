import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Image } from 'react-native'; // Import Image
import ContactThumbnail from '../components/ContactListItem';
import colors from '../utility/colors';
import { fetchUserContacts } from '../utility/api';

const User = () => {
    const [user, setUser] = useState({}); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // Load data
    useEffect(() => {
        fetchUserContact()
            .then(
                user => { 
                    setUser(user);
                    setLoading(false);
                    setError(false);
                }
            )
            .catch(
                e => {
                    setLoading(false);
                    setError(true);
                }
            );
    }, []); 

    const {avatar, name, phone} = user;

    return (
        <View style={styles.container}>
            {loading && <ActivityIndicator size="large" />}
            {error && <Text>Error...</Text>}
            {!loading && !error && (
                <ContactThumbnail avatar={avatar} name={name} phone={phone} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.blue,
    },
});

export default User;
