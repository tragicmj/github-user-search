import React,{useState,useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Keyboard
} from 'react-native';

import {
  Container,
  Text,
  Input,
  Form,
  Item,
  Button,
  Content,
  H1
} from 'native-base';

import Logo from '../logo.jpg'

import Axios from 'axios';
import {useIsFocused} from "@react-navigation/native";

const UserSearch = ({navigation,route}) => {
  const [user,setUser] = useState(null);
  const [searchUser, setSearchUser] = useState("");

  const isFocused = useIsFocused();

  useEffect(
    () => {
     checkUser();
    },[searchUser]
  )

  const checkUser = () => {
    try {
      const {data} = Axios.get(`https://api.github.com/users/${searchUser}`);
      const details = data;
      setUser(details);
      // console.log(details);
      console.log(searchUser);
    } catch (error) {
        setUser(null);
        console.error('There has been a problem with your fetch operation');
        // ADD THIS THROW error
        //  throw error;
        // console.log(searchUser);
    }
  }

    const changeScreen = () => {
      if(!user){
        Keyboard.dismiss();
        console.log(user);
        navigation.push('UserNotFound',{searchUser});
      }
      else{
        Keyboard.dismiss();
        // console.error(user);
        navigation.push('User',{user});
       
      }
    }



  return (
    <Container style={styles.container}>
      <Content contentContainerStyle={{justifyContent:'center',flex:1}}>
        <View style={styles.imgWrapper}>
            <Image 
              source={Logo} 
              style={{alignSelf:'center',   width:100,
              height:100}}
            />
            <H1 style={styles.heading}>Search Github Username</H1>
        </View>
        <Form style={styles.formWrapper}>
            <Item last>
              <Input 
                  placeholder="Type Username here" 
                  value={searchUser}  
                  onChangeText={
                    (text) => setSearchUser(text)
                  }
                  placeholderTextColor='#fff' 
                  style={{fontSize:15,color:'#fff'}} 
                />
            </Item>
            <Button block onPress={changeScreen} style={styles.button}>
                <Text>Search</Text>
            </Button>
        </Form>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#110011',
    flex:1,
    flexDirection:'column',
    justifyContent:'center'
  },
  imgWrapper:{
    alignSelf:'center'
  },
  heading:{
    fontSize:18,
    color:'#eee',
    textAlign:'center'
  },
  formWrapper:{
    width:'90%',
    alignSelf:'center',
  },
  button:{
    marginVertical:20,
    backgroundColor:'#36454f'
  }
});

export default UserSearch;
