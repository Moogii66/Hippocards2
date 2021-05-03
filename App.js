import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterLeague';
import LeagueInfoScreen from './screens/LeagueInfoScreen';
import LeaderBoardScreen from './screens/LeaderBoardScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'LeagueinfoScreen'}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="RegisterLeague" component={RegisterScreen} />
        <Stack.Screen name="LeagueInfo" component={LeagueInfoScreen} />
        <Stack.Screen name="LeaderBoard" component={LeaderBoardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
