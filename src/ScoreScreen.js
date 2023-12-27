// ScoreScreen.js
import React from 'react';
import { View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native';

const ScoreScreen = ({ route , navigation}) => {
    const score = route.params.score
  return (
    <View style={styles.container}>
     
     
      <Text style={styles.scoreText}>Your Score:{score}</Text>
     <TouchableOpacity onPress={()=>navigation.navigate("Welcome")} >
      <Text style={{borderColor:"yellow",borderWidth:2}} className="px-3 bg-yellow-500 rounded-xl py-3 font-bold text-2xl  text-black mt-8">Start Again</Text>
     </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default ScoreScreen;
