import React,{useEffect,useState} from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';

import {
  Container,
  Text,
  Button,
  Content,
} from 'native-base';

import NotFound from '../block.png';
import {useIsFocused} from "@react-navigation/native";



const UserNotFound = ({navigation,route}) => {
  const [random, setRandom] = useState('');
  const isFocused = useIsFocused();

  useEffect(
    () => {
      const {searchUser} = route.params;
      const userNot = searchUser;
      setRandom(userNot);
    },[isFocused]
  )
  // console.log(random);
  // console.log(route.params);
  return (
    <Container style={styles.container}>
      <Content contentContainerStyle={{justifyContent:'center',flex:1}}>
          <View>
              <Image
                source={NotFound} 
                style={{
                  width:180,
                  height:180,alignSelf:'center'
                }}
              />
          </View>
          <Text style={styles.heading}>
            User {random} not Found.
          </Text>
          <Button block onPress={()=>navigation.goBack()} style={styles.button}>
            <Text>Go Back</Text>
          </Button>
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
  heading:{
    fontSize:18,
    color:'#eee',
    textAlign:'center',
    marginVertical:12
  },
  button:{
    alignSelf:'center',
    padding:12,
    backgroundColor:'#36454f',
    width:'50%'
  }
});

export default UserNotFound;
