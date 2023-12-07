import React,{useState, useEffect} from "react";
import {StyleSheet, Text, View, FlatList, ActivityIndicator,} from 'react-native';
import { fetchContacts } from "../utility/api";
import ContactThumbnail from "../components/ContactThumbnail";

const keyExtractor = ({ phone })  => phone;
const Favorites = ({navigation}) => 

{
    //state
    const [ontacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    //Load du lieu
    useEffect(()=>{
        fetchContacts().then(
            contacts =>{
                setContacts(contacts);
                setLoading(false);
                setError(false);
            }
        )
        .catch(
            e=>{
                setLoading(false);
                setError(false);
            }
        )
    })
    const renderFavoriteThumbnail = ({item}) =>{
        const{avatar} = item;
        return (
            <ContactThumbnail
            avatar= {avatar}
            onPress = {()=> navigation.navigate('Profile', { contact: item})}
            />
        );
    };
    const Favorites = contact.filter(contact => contact.favotite);
    return(
        <View style = {StyleSheet.container}>
            {loading && <ActivityIndicator size="large"/>}
            {error && <Text> Error...</Text>}
            {!loading && !error && (<FlatList
                data ={Favorites}
                keyExtractor={keyExtractor}
                numColumns={3}
                contentContainerStyle={style.list}
                renderItem={renderFavoriteThumbnail}
                />
                )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        flex: 1,
    },
    list: {
        alignItems: 'center',
    },
});

export default Favorites; 