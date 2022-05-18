import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import styles from './CreateTask.style';

const CreateTask = ({task,setTask, title, setTitle}) => {

  const handleSetTask = () => {
    if(title === ''){
      return Alert.alert('Dikkat','Alan boş!')
    }
    setTask([...task,{title}]);
    setTitle('')
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Yapılacak..."
        placeholderTextColor={'darkgray'}
        style={styles.textInput}
        onChangeText={item => setTitle(item)}
        value={title}
      />
      <View style={styles.separator}></View>
      <TouchableOpacity 
      style={styles.saveButton}
        onPress={handleSetTask}> 
        <Text style={{color: 'white'}}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateTask;
