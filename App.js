import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import UserSearch from './Screens/UserSearch';
import User from './Screens/User';
import UserNotFound from './Screens/UserNotFound';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar  backgroundColor="#0d0c0a" />
      <NavigationContainer>
          <Stack.Navigator initialRouteName="UserSearch">
              <Stack.Screen
                name="UserSearch"
                component={UserSearch}
                options={{
                  headerStyle:{
                    backgroundColor:"#0d0c0a"
                  },
                  title: 'Search User',
                  headerTintColor: '#ffffff',
                  headerTitleAlign:'center'
                }}
              >
              </Stack.Screen>
              <Stack.Screen
                name="User"
                component={User}
                options={{
                  headerStyle:{
                    backgroundColor:"#0d0c0a"
                  },
                  title: 'User',
                  headerTintColor: '#ffffff',
                  headerTitleAlign:'center'
                }}
              >
              </Stack.Screen>
              <Stack.Screen
                name="UserNotFound"
                component={UserNotFound}
                options={{
                  headerStyle:{
                    backgroundColor:"#0d0c0a"
                  },
                  title: 'User Not Found',
                  headerTintColor: '#ffffff',
                  headerTitleAlign:'center'
                }}
              >
              </Stack.Screen>
          </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
