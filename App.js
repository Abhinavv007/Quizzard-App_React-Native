
import Welcome from './src/Welcome';

import Quiz from './src/Quiz';
import * as React from 'react';

import ScoreScreen from './src/ScoreScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown:false}}/>
        <Stack.Screen name="Quiz" component={Quiz} options={{headerShown:false}}/>
      
        <Stack.Screen name="ScoreScreen" component={ScoreScreen} options={{headerShown:false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;