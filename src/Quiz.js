import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState} from 'react';


const Quiz = ({navigation}) => {
  const [index, setIndex] = useState(0);
  const[score,setScore] = useState(0)
 

  const quizQuestions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars",
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      correctAnswer: "Blue Whale",
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
      correctAnswer: "William Shakespeare",
    },
    {
      question: "What is the powerhouse of the cell?",
      options: ["Nucleus", "Mitochondria", "Endoplasmic Reticulum", "Golgi Apparatus"],
      correctAnswer: "Mitochondria",
    },
  ];
  const Increment=(option)=>{
    
  
    if (option===quizQuestions[index].correctAnswer){
      setScore(score+1)
     
    } 
    if(index!==quizQuestions.length-1){
      setIndex(index+1)
     

    } else {
      console.log('Navigating to ScoreScreen with Score:', score);

    
      setTimeout(() => {
       
        navigation.navigate('ScoreScreen', { score: option === quizQuestions[index].correctAnswer ? score + 1 : score });
      }, 1000);
      
    }
   
  }
 

  return (
    <View className=" my-4 space-y-5 items-center align-center " style={{ flex: 1 }}>
      <View style={{flexDirection:"column"}}>
        <Text style={{ color: "black", fontSize: 20, marginTop: 4 }}>
          Quiz Question: {`${index + 1}` + `/` + `${quizQuestions.length}`}
          
        </Text>
        <Text style={{ color: "black", fontSize: 30, marginTop: 4,textAlign:"center" ,marginTop:20 }}>Score: {score}</Text>
      </View>
      <View  >
        <View className="space-y-12 items-center" >
      <Text className="mx-4 text-black font-semibold text-2xl">
        {index+1}. {quizQuestions[index].question}</Text>
        {quizQuestions[index].options.map((option, optionIndex) => (
          <View >
         <TouchableOpacity
          onPress={()=>Increment(option)}>
          <Text style={{textAlign:"center"}} className="border-2 w-80 text-2xl text-black" key={optionIndex}>{option}</Text>
          </TouchableOpacity>
          
          </View>
        ))}
        </View>
        
      
      </View>
    </View>
  );
};


export default Quiz;

const styles = StyleSheet.create({});
