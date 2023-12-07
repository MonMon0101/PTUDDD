import React, {useState, useEffect}from 'react';
import {View, StyleSheet, Text, FlatList, ActivityIndicator} from 'react-native';
import { fetchContacts } from '../utility/api';
import ContactListItem from '../components/ContactListItem';
import { fetchContactsLoading,fetchContactsSuccess, fetchContactsError } from './Store';
import { useDispatch, useSelector } from 'react-redux';
const keyExtractor = ({ phone }) => phone;

const Contacts = ({navigation}) => {
    const {contacts,loading,error} = useSelector((state) => state);
    const dispatch = useDispatch();
    // const [contacts, setContacts] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(false);

    //load du lieu
    useEffect(()=>{
        dispatch(fetchContactsLoading());
        fetchContacts().then(
            contacts=>{
                dispatch(fetchContactsSuccess(contacts));
                // setContacts(contacts);
                // setLoading(false);
                // setError(false);
            }
        ).catch(e =>{
            dispatch(fetchContactsError());
            // console.log(e);
            // setLoading(false);
            // setError(true);
        })
    },[])
    //sort
    const contactsSorted = contacts.sort((a,b)=> a.name.localeCompare(b.name));
    const renderContacts = ({item}) =>{
        const {name,avatar,phone}= item;
        return <ContactListItem
                name={name}
                avatar={avatar}
                phone={phone}
                onPress = {()=> navigation.navigate("Profile",{ contact: item })}
            />;
    };
    //render
    return (
       <View style={styles.container}>
        {loading && <ActivityIndicator size="large" color="blue" />}
        {error && <Text>Err...</Text>}
        {!loading && !error && (
            <FlatList
            data={contactsSorted}
            keyExtractor={keyExtractor}
            renderItem={renderContacts}
            />
        )}
       </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        justifyContent: 'center',
        flex:1,
        padding: 10,
        marginTop: 30,
    }
})

export default Contacts;