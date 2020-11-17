import React,{useState,useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';

import {
  Container,
  Content,
  Text
} from "native-base";

import {useIsFocused} from "@react-navigation/native";

const User = ({navigation,route}) => {
  const [userDetails, setUserDetails] = useState(null);
  const isFocused = useIsFocused();
  // console.log(route.params);
  useEffect(
    () => {
      const {details} = route.params;
      const userPresent = details;
      setUserDetails(userPresent);
      // console.log(userDetails);
    },[isFocused]
  )

  // console.log(random.avatar_url);
  // console.log(JSON.stringify(random.avatar_url));

  return (
    <Container style={styles.container}>
        <Content contentContainerStyle={{justifyContent:'center',flex:1}}>
            <View>
              <Text>
                  {}
              </Text>
            </View>
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

export default User;
