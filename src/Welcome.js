import { StyleSheet, Text, TouchableOpacity, View ,Image} from 'react-native'
import React from 'react'

const Welcome = ({navigation}) => {
  return (
    <View className="flex-1 justify-center items-center" style={{flex:1, backgroundColor:"#2F539B"}} > 
    <View className="space-y-4 items-center justify-center">
        <Text className="text-6xl font-bold text-white">Quizzard!</Text>
        <View className="space-y-20">
        <Image className="rounded-md" style={{height:250,width:250,marginTop:60}} source={require('../Quiz-comic-pop-art-style-illustration-on-transparent-background-PNG.png')} />
        <View >
        <TouchableOpacity onPress={()=>navigation.navigate("Quiz")} className="h-12 bg-yellow-500 border-2 rounded-2xl items-center justify-center border-yellow ">
            <Text className="font-bold text-2xl text-black">Start the quiz!</Text>
        </TouchableOpacity>
        </View>
        
        </View>
        
    </View>
        
           
       
    
  </View>
  )
}

export default Welcome

const styles = StyleSheet.create({})