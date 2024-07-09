import { View, Image, TextInput, TouchableOpacity, StatusBar, Text, FlatList } from 'react-native';
import { styles } from './styles';
import { useContext, useState } from 'react';
import EvilIcons from '@expo/vector-icons/EvilIcons'
import AntDesign from '@expo/vector-icons/AntDesign'
import { CheckBox } from '@rneui/themed';
import { TaskContext } from '@/context/taskContext';

export default function Home() {
  const { tasks, handleCreateTask, handleDeleteTask, handleChangeMarkedTask, amountTaskMarked } = useContext(TaskContext)

  const [taskText, setTaskText] = useState('')

  function onAddTask() {
    handleCreateTask(taskText)
    setTaskText('')
  }

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image alt='logo' source={require('../assets/logo.png')} />
      </View>

      <View style={styles.main}>
        <View style={styles.form}>
          <TextInput 
            value={taskText}
            placeholder="Adicione uma nova tarefa"
            onChangeText={setTaskText}
            placeholderTextColor="#555555"
            style={styles.input}
          />

          <TouchableOpacity style={styles.button} onPress={onAddTask}>
            <AntDesign name="pluscircleo" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.statusContainer}>
          <View style={styles.statusFeedback}>
            <Text style={styles.statusTextCreate}>Criadas</Text>
            <View style={styles.statusQuantity}>
              <Text style={styles.textStatusQuantity}>{tasks.length}</Text>
            </View>
          </View>
          <View style={styles.statusFeedback}>
            <Text style={styles.statusTextFinish}>Concluídas</Text>
            <View style={styles.statusQuantity}>
              <Text style={styles.textStatusQuantity}>{amountTaskMarked}</Text>
            </View>
          </View>
        </View>

        <View style={styles.containerTasks}>
          <FlatList 
            data={tasks}
            keyExtractor={task => task.id}
            showsVerticalScrollIndicator
            renderItem={({ item }) => {
              return (
                <View style={styles.taskContent}>       
                  <View style={styles.taskCheckBox}>
                    <CheckBox 
                      checked={item.checked}
                      title={item.text} 
                      checkedIcon="dot-circle-o"
                      uncheckedIcon="circle-o"
                      containerStyle={{
                        backgroundColor: 'transparent',
                      }}
                      textStyle={{
                        color: item.checked ? '#808080': 'white',
                        textDecorationLine: item.checked ? 'line-through': 'none',
                      }}
                      checkedColor='#8284FA'
                      onPress={() => handleChangeMarkedTask(!item.checked, item.id)}
                    />
                  </View>
    
                  <TouchableOpacity style={styles.removeTaskButton} onPress={() => handleDeleteTask(item.id)}>
                    <EvilIcons name="trash" size={24} color="white" />
                  </TouchableOpacity>
                </View>
              )
            }}
          />
        </View>
      </View>
    </View>
  );
}
