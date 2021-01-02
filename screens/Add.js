import React, {useState} from "react";
import {Text,StyleSheet, ScrollView} from "react-native";
import Snackbar from 'react-native-snackbar';

import {
  Container,
  Form,
  Item,
  Input,
  Button,
  H1
} from "native-base";


import AsyncStorage from '@react-native-community/async-storage';

import  shortid from "shortid";

const Add = ({navigation}) => {
  const [name,setName] = useState("");
  const [totalNoSeason,setTotalNoSeason ] = useState("");

  const addToList = async () =>{
    try {
      if (!name || !totalNoSeason) {
        return Snackbar.show({
          text: 'Please Add Both filed...',
          duration: Snackbar.LENGTH_SHORT,
        })
      }
      const seasonToAdd = {
        id: shortid.generate(),
        name: name,
        totalNoSeason: totalNoSeason,
        isWatched: false
      }
      //if u have value then append or if none add
  const storedValue = await AsyncStorage.getItem("@season_list")
  const prevList = await JSON.parse(storedValue)

  if (!prevList){
    const newList = [seasonToAdd]
    await AsyncStorage.setItem("@season_list", JSON.stringify(newList))
  }
  else {
    prevList.push(seasonToAdd)
    await AsyncStorage.setItem("@season_list", JSON.stringify(prevList))
  }
  navigation.navigate("Home")
    } catch (err) {
      console.log(err);
    }
  }

    return (
        <Container style={styles.container}>
          <ScrollView contentContainerStyle={{flexGrow:1}}>
            <H1 style={styles.heading}>Add to watch list</H1>
            <Form>
              <Item rounded style={styles.formItem}>
                <Input placeholder="Season Name" value={name} onChangeText={(text)=>setName(text)} style={{color:"#eee"}}/>
              </Item>
            </Form>
            <Form>
              <Item rounded style={styles.formItem}>
                <Input placeholder="Total number of seasons" value={totalNoSeason} onChangeText={(text)=>setTotalNoSeason(text)} style={{color:"#eee"}}/>
              </Item>
            </Form>
            <Button rounded block
            onPress ={addToList}
            >
              <Text style={{color:"#eee"}}>Add</Text>
            </Button>
          </ScrollView>
        </Container>
    )
}

export default Add;
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1b262c',
      flex: 1,
      justifyContent: 'flex-start',
    },
    heading: {
      textAlign: 'center',
      color: '#00b7c2',
      marginHorizontal: 5,
      marginTop: 50,
      marginBottom: 20,
    },
    formItem: {
      marginBottom: 20,
    },
  });
  