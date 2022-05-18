import {View, Text} from 'react-native';
import React, {useState} from 'react';
import styles from './UpperBar.style';

const UpperBar = ({task}) => {
  
  return (
    <View style={styles.upperBar}>
      <Text style={styles.textStyle}>Yapılacaklar</Text>
      <Text style={styles.toDoCount}>{task.length}</Text>
    </View>
  );
};

export default UpperBar;
