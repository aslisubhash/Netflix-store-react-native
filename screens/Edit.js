import React, { useState, useEffect } from "react";

import {Fab, Spinner, Text, List, ListItem, Left, Form, Item, Input, Button, Icon, Body, Right, CheckBox,Title, H1, Subtitle, Container} from "native-base";
import {StyleSheet}  from "react-native";
import Snackbar from 'react-native-snackbar';
import AsyncStorage from "@react-native-community/async-storage";
import { ScrollView } from "react-native-gesture-handler";

const Edit = ({navigation, route}) => {
  const [name, setName] = useState("")
  const [totalNoSeason, setTotalNoSeason] = useState("")
  const [id, setId] = useState(null)

  const update = async () => {
    try {
      if (!name || !totalNoSeason) {
        return Snackbar.show({
          text: 'Please Add Both filed...',
          duration: Snackbar.LENGTH_SHORT,
        })}
        const seasontoUpdate = {
          id,
          name,
          totalNoSeason,
          isWatched: false
        }
        const storedValue = await AsyncStorage.getItem("@season_list")
        const list = await JSON.parse(storedValue)

        list.map((singleSeason)=>{
          if (singleSeason.id ==id) {
            singleSeason.name = name
            singleSeason.totalNoSeason = totalNoSeason
          }
          return singleSeason;
        })
        await AsyncStorage.setItem("@season_list", JSON.stringify(list))
        
        navigation.navigate("Home")
        
      
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(()=>{
    const {season} = route.params
    const{id, name, totalNoSeason} = season

    setId(id)
    setName(name)
    setTotalNoSeason(totalNoSeason)
  },[])

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
        onPress ={update}
        >
          <Text style={{color:"#eee"}}>Update</Text>
        </Button>
      </ScrollView>
    </Container>
)
}

export default Edit;

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
  