import {View, Text} from 'react-native';
import React from 'react';
import styles from './Task.style'

const Task = ({task}) => {
  

  return (    
    <View style={styles.container}>
       <View style={styles.taskBorder}>
        <Text>{task.title}</Text>
      </View>
    </View>
  );
};

export default Task;
