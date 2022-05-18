import React, {useState} from 'react';
import {View, StyleSheet, FlatList, TouchableHighlight} from 'react-native';
import UpperBar from './components/UpperBar';
import CreateTask from './components/CreateTask';
import Task from './components/Task/Task';

const App = () => {
  const [task, setTask] = useState([]);
  const [title, setTitle] = useState('');

  const deleteTask = (item) => {
    setTask(task.filter((i) => i !== item))
  }

  const renderTask = ({item}) => {
    return(
    <TouchableHighlight onLongPress={() => deleteTask(item)}>
      <Task task={item} />
    </TouchableHighlight>
    )
  };

  return (
    <View style={styles.container}>
      <UpperBar task={task} />
      <FlatList data={task} renderItem={renderTask} />
      <CreateTask
        task={task}
        setTask={setTask}
        title={title}
        setTitle={setTitle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#094246',
  },
});

export default App;
