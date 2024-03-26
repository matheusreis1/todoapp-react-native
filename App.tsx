import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

interface Item {
  id: string;
  title: string; 
}

const MarginWrapper = ({children}: {children: React.ReactNode}) => (
  <View style={{ margin: 4 }}>
    {children}
  </View>
)

const withMargin = (components: React.ReactNode[]) => components.map((component, index) => 
  <MarginWrapper key={index}>{component}</MarginWrapper>
);

const Task = ({title, onButtonPress}: {title: string, onButtonPress: () => void}) => {
  const components = [
    <Text>{title}</Text>,
    <Button title='Done' onPress={onButtonPress} />,
    <Button title='Remove' onPress={onButtonPress} />
  ];

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {withMargin(components)}
    </View>
  );
}

export default function App() {
  const [currentTask, setCurrentTask] = useState('');
  const [tasks, setTasks] = useState<Item[]>([]);
  const handleOnButtonPress = ({title: titleToRemove}: Item) => {
    const newTasks = tasks.filter(({title}) => title !== titleToRemove);
    setTasks(newTasks);
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput 
          style={styles.input}
          placeholder="Enter a task" 
          value={currentTask}
          onChangeText={(text) => setCurrentTask(text)} />
        <Button 
          title='Add'
          disabled={!currentTask}
          onPress={() => {
            const newTask = {title: currentTask, id: currentTask};
            setTasks([...tasks, newTask])
            setCurrentTask('');
          }}
        />
      </View>

      <FlatList 
        data={tasks}
        renderItem={({item}) => <Task title={item.title} onButtonPress={() => handleOnButtonPress(item)}></Task>}
        keyExtractor={item => item.id}
      ></FlatList>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});
