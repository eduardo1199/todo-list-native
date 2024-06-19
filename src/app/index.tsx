import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign'
/* import { Logo } from '../assets/logo.png'; */

export default function App() {
  const [task, setTask] = useState('')

  return (
    <View style={styles.container}>
      <Image alt='logo'></Image>

      <View style={styles.main}>
        <View style={styles.form}>
          <TextInput 
            value={task}
            placeholder="Adicione uma nova tarefa"
            onChangeText={setTask}
            placeholderTextColor="#555555"
            style={styles.input}
          />

          <TouchableOpacity style={styles.button}>
            <AntDesign name="pluscircleo" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View>
          <View>

          </View>
        </View>

        <View>
          
        </View>
      </View>
    </View>
  );
}
