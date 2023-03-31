import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";
import MainNavigator from './src/screens/MainNavigator';


function App() {
  return (
    <NavigationContainer>
      <MainNavigator />
      <StatusBar style="light" />
    </NavigationContainer>

  );
}

export default App;
